# projen vitest

[Vitest](https://vitest.dev) component for [projen](https://projen.io) [Node.js](https://nodejs.org/en) projects.

## example usage

- in `.projenrc.ts` import `Vitest` component and create new instance of it:

```ts
import { awscdk, javascript } from "projen";
import { Vitest } from "@nikovirtala/projen-vitest";

const project = new awscdk.AwsCdkTypeScriptApp({
    defaultReleaseBranch: "main",
    devDeps: ["@nikovirtala/projen-vitest"],
    jest: false,
    name: "vitest-example",
    projenrcTs: true,
});

new Vitest(project);

project.synth();
```

- in `*.test.ts` import necessary modules from `vitest`:

```ts
import { describe, expect, test } from "vitest";
```

- run tests with `pj test`
