import { Component } from "projen/lib/component";
import { Jest, NodeProject } from "projen/lib/javascript";
import { Project } from "projen/lib/project";
import { TextFile } from "projen/lib/textfile";
import { configDefaults } from "vitest/config";

export enum VitestEnvironment {
    EDGE_RUNTIME = "edge-runtime",
    HAPPY_DOM = "happy-dom",
    JSDOM = "jsdom",
    NODE = "node",
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

export interface VitestConfigOptions {
    /**
     * Include patterns for test files
     */
    readonly include?: Array<string>;

    /**
     * Exclude patterns for test files
     */
    readonly exclude?: Array<string>;

    /**
     * Test environment
     *
     * @default "node"
     */
    readonly environment?: VitestEnvironment;

    /**
     * Enable globals
     *
     * @default true
     */
    readonly globals?: boolean;

    /**
     * Coverage reporter type
     *
     * @default "v8"
     */
    readonly coverageProvider?: CoverageProvider;

    /**
     * Coverage reporters
     *
     * @default '["text", "lcov"]'
     */
    readonly coverageReporters?: Array<CoverageReporter>;

    /**
     * Coverage output directory
     *
     * @default "coverage"
     */
    readonly coverageDirectory?: string;
}

export interface VitestOptions {
    /**
     * Config file path
     * @default "vitest.config.ts"
     */
    readonly configFilePath?: string;

    /**
     * Initial config options
     */
    readonly config?: VitestConfigOptions;

    /**
     * Vitest version
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
        this.environment = options.config?.environment ?? VitestEnvironment.NODE;
        this.globals = options.config?.globals ?? true;
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

    public configureEnvironment(env: VitestEnvironment): void {
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
