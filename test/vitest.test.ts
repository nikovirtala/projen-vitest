import { Jest } from "projen/lib/javascript";
import { JsonFile } from "projen/lib/json";
import { TypeScriptProject } from "projen/lib/typescript";
import { synthSnapshot } from "projen/lib/util/synth";
import { beforeEach, describe, expect, test } from "vitest";
import { configDefaults } from "vitest/config";
import { Vitest, Environment, CoverageProvider, CoverageReporter, Pool } from "../src";

describe("jest", () => {
    test("throws when jest is enabled", () => {
        const project = new TypeScriptProject({
            name: "test-node-project",
            mergify: false,
            projenDevDependency: false,
            defaultReleaseBranch: "main",
            jest: true,
        });

        new Vitest(project);
        expect(() => synthSnapshot(project)).toThrow("vitest cannot be used together with jest");
    });

    test("throws when jest is added after vitest", () => {
        const project = new TypeScriptProject({
            name: "test-node-project",
            mergify: false,
            projenDevDependency: false,
            defaultReleaseBranch: "main",
            jest: false,
        });

        new Vitest(project);
        new Jest(project);
        expect(() => synthSnapshot(project)).toThrow("vitest cannot be used together with jest");
    });
});

describe("vitest", () => {
    let project: TypeScriptProject;

    beforeEach(() => {
        project = new TypeScriptProject({
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

        // Package dependencies & tasks
        expect(snapshot["package.json"].devDependencies.vitest).toBe("^3");
        expect(snapshot["package.json"].devDependencies["@vitest/coverage-v8"]).toBe("^3");
        expect(snapshot["package.json"].scripts["test:update"]).toBe("npx projen test:update");
        expect(snapshot["package.json"].scripts["test:watch"]).toBe("npx projen test:watch");

        const config = snapshot["vitest.config.ts"];
        // Coverage config
        expect(config).toContain("    coverage: {\n      enabled: true,");
        expect(config).toContain('      provider: "v8",\n');
        expect(config).toContain('      reporter: ["text","lcov"],\n');
        expect(config).toContain('      reportsDirectory: "coverage",\n');

        // Typecheck config
        expect(config).toContain("    typecheck: {\n      enabled: true,");
        expect(config).toContain('      checker: "tsc --noEmit",\n');
        expect(config).toContain('      tsconfig: "tsconfig.dev.json",\n');

        // Root level config
        expect(config).toContain("    bail: 0,\n");
        expect(config).toContain('    environment: "node",\n');
        expect(config).toContain("    globals: false,\n");
        expect(config).toContain("    isolate: true,\n");
        expect(config).toContain("    passWithNoTests: true,\n");
        expect(config).toContain("    printConsoleTrace: true,\n");
        expect(config).toContain('    pool: "forks",\n');
        expect(config).toContain("    slowTestThreshold: 300,\n");
        expect(config).toContain("    update: true,\n");

        // Include/exclude patterns
        expect(config).toContain(`    include: ${JSON.stringify(configDefaults.include)},\n`);
        expect(config).toContain(`    exclude: ${JSON.stringify([...configDefaults.exclude])},\n`);
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
        expect(snapshot["package.json"].devDependencies["@vitest/coverage-istanbul"]).toBe("^3");
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
        new JsonFile(project, "tsconfig.custom.json", {
            obj: {
                compilerOptions: {
                    types: [],
                },
            },
            readonly: false,
        });

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
                typecheckEnabled: false,
                typecheckChecker: "tsc",
                typecheckTsconfig: "tsconfig.custom.json",
                passWithNoTests: false,
                bail: 5,
                updateSnapshots: false,
                printConsoleTrace: false,
                slowTestThreshold: 500,
            },
        });

        const snapshot = synthSnapshot(project);
        expect(snapshot["custom.vitest.config.ts"]).toBeDefined();
        expect(snapshot["custom.vitest.config.ts"]).toContain('environment: "happy-dom"');
        expect(snapshot["custom.vitest.config.ts"]).toContain("isolate: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain("passWithNoTests: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain('pool: "threads"');
        expect(snapshot["custom.vitest.config.ts"]).toContain("globals: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain("enabled: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain('checker: "tsc"');
        expect(snapshot["custom.vitest.config.ts"]).toContain('tsconfig: "tsconfig.custom.json"');
        expect(snapshot["custom.vitest.config.ts"]).toContain('provider: "istanbul"');
        expect(snapshot["custom.vitest.config.ts"]).toContain('reporter: ["html"]');
        expect(snapshot["custom.vitest.config.ts"]).toContain('reportsDirectory: "custom-coverage"');
        expect(snapshot["custom.vitest.config.ts"]).toContain('"**/*.test.ts"');
        expect(snapshot["custom.vitest.config.ts"]).toContain('"**/*.spec.js"');
        expect(snapshot["custom.vitest.config.ts"]).toContain("bail: 5");
        expect(snapshot["custom.vitest.config.ts"]).toContain("update: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain("printConsoleTrace: false");
        expect(snapshot["custom.vitest.config.ts"]).toContain("slowTestThreshold: 500");
        expect(snapshot["package.json"].devDependencies.vitest).toBe("^3");
    });

    describe("globals", () => {
        test("adds vitest/globals to tsconfig when globals enabled", () => {
            new Vitest(project, {
                config: {
                    globals: true,
                },
            });

            const snapshot = synthSnapshot(project);
            expect(snapshot["tsconfig.dev.json"].compilerOptions.types).toContain("vitest/globals");
        });

        test("does not add vitest/globals to tsconfig when globals disabled", () => {
            new Vitest(project);

            const snapshot = synthSnapshot(project);
            expect(snapshot["tsconfig.dev.json"].compilerOptions.types || []).not.toContain("vitest/globals");
        });

        test("updates tsconfig when globals configuration changes (false --> true)", () => {
            const vitest = new Vitest(project);

            vitest.configureGlobals();
            const snapshot = synthSnapshot(project);
            expect(snapshot["tsconfig.dev.json"].compilerOptions.types).toContain("vitest/globals");
        });

        test("throws when tsconfig file doesn't exist", () => {
            const customProject = new TypeScriptProject({
                name: "test-project",
                defaultReleaseBranch: "main",
                jest: false,
            });

            const vitest = new Vitest(customProject, {
                config: {
                    globals: true,
                },
            });

            customProject.tryRemoveFile("tsconfig.dev.json");

            expect(() => vitest.configureGlobals()).toThrow("unable to find tsconfig");
        });
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
