# projen vitest

> [!WARNING]
> **This package is deprecated** and won't get new features or fixes. Use [`@nikovirtala/projen-constructs`](https://github.com/nikovirtala/projen-constructs) instead.
>
> Replace the dev dependency `@nikovirtala/projen-vitest` with `@nikovirtala/projen-constructs`, then change the import:
>
> ```typescript
> import { Vitest } from "@nikovirtala/projen-constructs";
> ```
>
> `vitest.config.ts` then imports `defineConfig` from `@nikovirtala/projen-constructs/lib/vitest-define-config`, which projen rewrites for you. The component also gained `extraTestConfig` and `extraConfig` for Vitest settings it doesn't cover (#159, #210).
>
> See the [migration guide](https://github.com/nikovirtala/projen-constructs#migrating-from-the-standalone-packages) for the steps and the differences to expect.

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
