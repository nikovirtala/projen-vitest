import { cdk, JsonPatch, javascript, TextFile } from "projen";
import { Vitest } from "./src";

const nodeVersion = "22.21.1";

const project = new cdk.JsiiProject({
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    defaultReleaseBranch: "main",
    deps: ["projen"],
    description: "Vitest component for projen Node.js projects",
    dependabot: false,
    depsUpgradeOptions: {
        workflowOptions: {
            labels: ["auto-approve", "auto-merge"],
        },
    },
    autoApproveOptions: {
        secret: "GITHUB_TOKEN",
        allowedUsernames: ["nikovirtala"],
    },
    mergify: true,
    eslint: false,
    jest: false,
    jsiiVersion: "~5.9.3",
    license: "MIT",
    licensed: true,
    majorVersion: 2,
    minNodeVersion: nodeVersion,
    name: "projen-vitest",
    npmAccess: javascript.NpmAccess.PUBLIC,
    packageManager: javascript.NodePackageManager.PNPM,
    packageName: "@nikovirtala/projen-vitest",
    peerDeps: ["projen", "constructs"],
    pnpmVersion: "10",
    prettier: false,
    biome: true,
    biomeOptions: {
        biomeConfig: {
            formatter: {
                indentStyle: javascript.biome_config.IndentStyle.SPACE,
                indentWidth: 4,
                lineWidth: 120,
                useEditorconfig: false,
            },
        },
        formatter: true,
        linter: true,
    },
    projenrcTs: true,
    releaseToNpm: true,
    npmTrustedPublishing: true,
    repositoryUrl: "https://github.com/nikovirtala/projen-vitest.git",
    typescriptVersion: "5.9.3",
});

project.npmrc.addConfig("node-linker", "hoisted");

project.addDevDeps("esbuild");
project.defaultTask?.spawn(
    project.addTask("bundle-define-config", {
        exec: "ts-node --project tsconfig.dev.json src/bundle-define-config.ts",
    }),
);

project.addDevDeps("vitest");
new Vitest(project);

project.vscode?.extensions.addRecommendations("biomejs.biome");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.organizeImports.biome": "always",
    },
    "editor.defaultFormatter": "biomejs.biome",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

new TextFile(project, "mise.toml", {
    committed: true,
    readonly: true,
    lines: ["[tools]", `node = "${nodeVersion}"`],
});

// use node.js 24.x to get new enough npm to satisfy: trusted publishing requires npm CLI version 11.5.1 or later.
project.github
    ?.tryFindWorkflow("release")
    ?.file?.patch(JsonPatch.replace("/jobs/release_npm/steps/0/with/node-version", "24.x"));

// remove once configured correctly to biome, mise and vitest components
project.npmignore?.addPatterns("biome.jsonc", "mise.toml", "vitest.config.ts");

project.synth();
