import { Component } from "projen/lib/component";
import { Jest, NodeProject } from "projen/lib/javascript";
import { Project } from "projen/lib/project";
import { TextFile } from "projen/lib/textfile";
import { configDefaults } from "vitest/config";

export enum Environment {
    /**
     * Run tests in Vercel's Edge Runtime VM.
     *
     * https://edge-runtime.vercel.app/packages/vm
     */
    EDGE_RUNTIME = "edge-runtime",

    /**
     * Run tests in `happy-dom` environment.
     *
     * https://github.com/capricorn86/happy-dom
     */
    HAPPY_DOM = "happy-dom",

    /**
     * Run tests in `jsdom` environment.
     *
     * https://github.com/jsdom/jsdom
     */
    JSDOM = "jsdom",

    /**
     * Run tests in a Node.js environment.
     */
    NODE = "node",
}

export enum Pool {
    /**
     * Run tests in `node:child_process` using [`fork()`](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)
     *
     * Test isolation (when enabled) is done by spawning a new child process for each test file.
     */
    FORKS = "forks",

    /**
     * Run tests in `node:worker_threads`.
     *
     * Test isolation (when enabled) is done by spawning a new thread for each test file.
     */
    THREADS = "threads",

    /**
     * Run tests in isolated `node:vm`.
     *
     * Test files are run parallel using `node:child_process` [`fork()`](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)
     *
     * This makes tests run faster, but VM module is unstable. Your tests might leak memory.
     */
    VMFORKS = "vmforks",

    /**
     * Run tests in isolated `node:vm`.
     * Test files are run parallel using `node:worker_threads`.
     *
     * This makes tests run faster, but VM module is unstable. Your tests might leak memory.
     */
    VMTHREADS = "vmthreads",
}

export enum CoverageProvider {
    ISTANBUL = "istanbul",
    V8 = "v8",
}

export enum CoverageReporter {
    CLOVER = "clover",
    HTML = "html",
    JSON = "json",
    LCOV = "lcov",
    TEXT = "text",
}

/**
 * Vitest Config. https://vitest.dev/config/
 */
export interface VitestConfigOptions {
    /**
     * A list of glob patterns that match your test files. https://vitest.dev/config/#include
     *
     * @default - Vitest's `configDefaults.include`
     */
    readonly include?: Array<string>;

    /**
     * A list of glob patterns that should be excluded from your test files.
     * https://vitest.dev/config/#exclude
     *
     * @default - Vitest's `configDefaults.exclude`
     */
    readonly exclude?: Array<string>;

    /**
     * The environment that will be used for testing. https://vitest.dev/config/#environment
     *
     * @default "node"
     */
    readonly environment?: Environment;

    /**
     * Run tests in an isolated environment. This option has no effect on vmThreads pool.
     *
     * Disabling this option might improve performance if your code doesn't rely on side effects.
     *
     * https://vitest.dev/config/#isolate
     *
     * @default true
     */
    readonly isolate?: boolean;

    /**
     * Pool used to run tests in. https://vitest.dev/config/#pool
     *
     * @default "forks"
     */
    readonly pool?: Pool;

    /**
     * Register apis globally. If you prefer to use the APIs globally like Jest, set to `true`.
     * https://vitest.dev/config/#globals
     *
     * @default false
     */
    readonly globals?: boolean;

    /**
     * Coverage provider type. https://vitest.dev/config/#coverage-provider
     *
     * @default "v8"
     */
    readonly coverageProvider?: CoverageProvider;

    /**
     * Coverage reporters. https://vitest.dev/config/#coverage-reporter
     *
     * @default '["text", "lcov"]'
     */
    readonly coverageReporters?: Array<CoverageReporter>;

    /**
     * Coverage output directory.
     *
     * @default "coverage"
     */
    readonly coverageDirectory?: string;
}

export interface VitestOptions {
    /**
     * Config file path.
     *
     * @default "vitest.config.ts"
     */
    readonly configFilePath?: string;

    /**
     * Initial config options.
     */
    readonly config?: VitestConfigOptions;

    /**
     * Vitest version.
     *
     * @default "^2"
     */
    readonly vitestVersion?: string;
}

export class Vitest extends Component {
    public static of(project: Project): Vitest | undefined {
        const isVitest = (c: Component): c is Vitest => c instanceof Vitest;
        return project.components.find(isVitest);
    }

    private readonly configFilePath: string;
    private readonly include: Set<string>;
    private readonly exclude: Set<string>;
    private readonly isolate: boolean;
    private readonly pool: Pool;
    private environment: string;
    private globals: boolean;
    private coverageProvider: string;
    private coverageReporters: Array<string>;
    private coverageDirectory: string;

    constructor(project: NodeProject, options: VitestOptions = {}) {
        super(project);

        for (const component of this.project.components) {
            if (component instanceof Jest) throw new Error("vitest cannot be used together with jest");
        }

        this.configFilePath = options.configFilePath ?? "vitest.config.ts";
        this.include = new Set(options.config?.include ?? [...configDefaults.include]);
        this.exclude = new Set(options.config?.exclude ?? [...configDefaults.exclude]);
        this.isolate = options.config?.isolate ?? true;
        this.pool = options.config?.pool ?? Pool.FORKS;
        this.environment = options.config?.environment ?? Environment.NODE;
        this.globals = options.config?.globals ?? false;
        this.coverageProvider = options.config?.coverageProvider ?? CoverageProvider.V8;
        this.coverageReporters = options.config?.coverageReporters ?? [CoverageReporter.TEXT, CoverageReporter.LCOV];
        this.coverageDirectory = options.config?.coverageDirectory ?? "coverage";

        project.addDevDeps(`vitest@${options.vitestVersion ?? "^2"}`);

        this.addTestCommand();
        this.synthesizeConfig();
    }

    public addInclude(pattern: string): void {
        this.include.add(pattern);
        this.synthesizeConfig();
    }

    public addExclude(pattern: string): void {
        this.exclude.add(pattern);
        this.synthesizeConfig();
    }

    public configureEnvironment(env: Environment): void {
        this.environment = env;
        this.synthesizeConfig();
    }

    public configureCoverageProvider(provider: CoverageProvider): void {
        this.coverageProvider = provider;
        this.synthesizeConfig();
    }

    public configureCoverageReporters(reporters: Array<CoverageReporter>): void {
        this.coverageReporters = reporters;
        this.synthesizeConfig();
    }

    private addTestCommand(): void {
        this.project.testTask.exec("vitest run", {
            receiveArgs: true,
        });

        const testWatch = this.project.tasks.tryFind("test:watch");
        if (!testWatch) {
            this.project.addTask("test:watch", {
                exec: "vitest watch",
            });
        }
    }

    private synthesizeConfig(): void {
        // oh dear!
        this.project.tryRemoveFile(this.configFilePath);

        new TextFile(this.project, this.configFilePath, {
            lines: this.renderConfig(),
        });
    }

    private renderConfig(): Array<string> {
        return [
            'import { configDefaults, defineConfig } from "vitest/config";',
            "",
            "export default defineConfig({",
            "  test: {",
            ...this.renderTestOptions(),
            "  },",
            "});",
        ];
    }

    private renderTestOptions(): Array<string> {
        const lines: Array<string> = [];

        if (this.include.size > 0) {
            lines.push(`    include: ${JSON.stringify(Array.from(this.include))},`);
        }

        if (this.exclude.size > 0) {
            lines.push(`    exclude: ${JSON.stringify(Array.from(this.exclude))},`);
        }

        lines.push(`    isolate: ${this.isolate},`);
        lines.push(`    pool: "${this.pool}", `);
        lines.push(`    environment: "${this.environment}",`);
        lines.push(`    globals: ${this.globals},`);

        lines.push("    coverage: {");
        lines.push(`      provider: "${this.coverageProvider}",`);
        lines.push(`      reporter: ${JSON.stringify(this.coverageReporters)},`);
        lines.push(`      reportsDirectory: "${this.coverageDirectory}",`);
        lines.push("    },");

        return lines;
    }
}
