import { NodeProject } from "projen/lib/javascript";
import { synthSnapshot } from "projen/lib/util/synth";
import { Vitest, Environment, CoverageProvider, CoverageReporter, Pool } from "../src";

describe("jest", () => {
    test("throws when jest is enabled", () => {
        const project = new NodeProject({
            name: "test-node-project",
            mergify: false,
            projenDevDependency: false,
            defaultReleaseBranch: "main",
            jest: true,
        });

        expect(() => new Vitest(project)).toThrow("vitest cannot be used together with jest");
    });
});

describe("vitest", () => {
    let project: NodeProject;

    beforeEach(() => {
        project = new NodeProject({
            name: "test-node-project",
            mergify: false,
            projenDevDependency: false,
            defaultReleaseBranch: "main",
            jest: false,
        });
    });

    test("node project with vitest defaults", () => {
        expect(() => new Vitest(project)).not.toThrow();

        const snapshot = synthSnapshot(project);

        expect(snapshot["vitest.config.ts"]).toBeDefined();
        expect(snapshot["package.json"].devDependencies.vitest).toBe("^2");
        expect(snapshot["package.json"].devDependencies["@vitest/coverage-v8"]).toBe("^2");
    });

    test("custom environment", () => {
        const vitest = new Vitest(project);
        vitest.configureEnvironment(Environment.JSDOM);

        const snapshot = synthSnapshot(project);
        expect(snapshot["vitest.config.ts"]).toContain('environment: "jsdom"');
    });

    test("custom coverage provider", () => {
        const vitest = new Vitest(project);
        vitest.configureCoverageProvider(CoverageProvider.ISTANBUL);

        const snapshot = synthSnapshot(project);

        expect(snapshot["vitest.config.ts"]).toContain('provider: "istanbul"');
        expect(snapshot["package.json"].devDependencies["@vitest/coverage-istanbul"]).toBe("^2");
    });

    test("custom coverage reporters", () => {
        const vitest = new Vitest(project);
        vitest.configureCoverageReporters([CoverageReporter.HTML, CoverageReporter.JSON]);

        const snapshot = synthSnapshot(project);
        expect(snapshot["vitest.config.ts"]).toContain('reporter: ["html","json"]');
    });

    test("custom include patterns", () => {
        const vitest = new Vitest(project);
        vitest.addInclude("**/*.spec.ts");

        const snapshot = synthSnapshot(project);
        expect(snapshot["vitest.config.ts"]).toContain('"**/*.spec.ts"');
    });

    test("custom exclude patterns", () => {
        const vitest = new Vitest(project);
        vitest.addExclude("**/*.test.js");

        const snapshot = synthSnapshot(project);
        expect(snapshot["vitest.config.ts"]).toContain('"**/*.test.js"');
    });

    test("handles non-existent dependencies gracefully", () => {
        const vitest = new Vitest(project);

        expect(() => vitest.configureCoverageProvider(CoverageProvider.V8)).not.toThrow();
        expect(() => vitest.configureCoverageProvider(CoverageProvider.ISTANBUL)).not.toThrow();
        expect(() => vitest.configureCoverageProvider(CoverageProvider.V8)).not.toThrow();
    });

    test("initialize with custom options", () => {
        new Vitest(project, {
            configFilePath: "custom.vitest.config.ts",
            vitestVersion: "^3",
            config: {
                environment: Environment.HAPPY_DOM,
                isolate: false,
                pool: Pool.THREADS,
                globals: false,
                coverageEnabled: false,
                coverageProvider: CoverageProvider.ISTANBUL,
                coverageReporters: [CoverageReporter.HTML],
                coverageDirectory: "custom-coverage",
                include: ["**/*.test.ts"],
                exclude: ["**/*.spec.js"],
            },
        });

        const snapshot = synthSnapshot(project);
        expect(snapshot["custom.vitest.config.ts"]).toBeDefined();
        expect(snapshot["custom.vitest.config.ts"]).toContain('environment: "happy-dom"');
        expect(snapshot["custom.vitest.config.ts"]).toContain("isolate: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain('pool: "threads"');
        expect(snapshot["custom.vitest.config.ts"]).toContain("globals: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain("enabled: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain('provider: "istanbul"');
        expect(snapshot["custom.vitest.config.ts"]).toContain('reporter: ["html"]');
        expect(snapshot["custom.vitest.config.ts"]).toContain('reportsDirectory: "custom-coverage"');
        expect(snapshot["custom.vitest.config.ts"]).toContain('"**/*.test.ts"');
        expect(snapshot["custom.vitest.config.ts"]).toContain('"**/*.spec.js"');
        expect(snapshot["package.json"].devDependencies.vitest).toBe("^3");
    });

    describe("of", () => {
        test("returns vitest instance when found", () => {
            const vitest = new Vitest(project);

            const found = Vitest.of(project);
            expect(found).toBe(vitest);
        });

        test("returns undefined when not found", () => {
            const found = Vitest.of(project);
            expect(found).toBeUndefined();
        });
    });
});
