import { cdk, javascript, TextFile } from "projen";

const nodeVersion = "22.12.0";

const project = new cdk.JsiiProject({
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    bundledDeps: ["vitest"],
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
    autoMerge: true,
    jsiiVersion: "~5.7.0",
    license: "MIT",
    licensed: true,
    minNodeVersion: nodeVersion,
    name: "projen-vitest",
    npmAccess: javascript.NpmAccess.PUBLIC,
    packageManager: javascript.NodePackageManager.PNPM,
    packageName: "@nikovirtala/projen-vitest",
    peerDeps: ["projen", "constructs"],
    pnpmVersion: "9",
    prettier: true,
    prettierOptions: {
        settings: {
            printWidth: 120,
            tabWidth: 4,
            trailingComma: javascript.TrailingComma.ALL,
        },
    },
    projenrcTs: true,
    releaseToNpm: true,
    repositoryUrl: "https://github.com/nikovirtala/projen-vitest.git",
    typescriptVersion: "5.7.2",
});

project.npmrc.addConfig("node-linker", "hoisted");

project.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint", "esbenp.prettier-vscode");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.fixAll": "explicit",
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

new TextFile(project, ".nvmrc", {
    committed: true,
    readonly: true,
    lines: ["v" + nodeVersion],
});

project.synth();
