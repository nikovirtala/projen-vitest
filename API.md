# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vitest <a name="Vitest" id="@nikovirtala/projen-vitest.Vitest"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-vitest.Vitest.Initializer"></a>

```typescript
import { Vitest } from '@nikovirtala/projen-vitest'

new Vitest(project: NodeProject, options?: VitestOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-vitest.VitestOptions">VitestOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-vitest.Vitest.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-vitest.Vitest.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-vitest.VitestOptions">VitestOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.addExclude">addExclude</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.addInclude">addInclude</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.configureCoverageProvider">configureCoverageProvider</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.configureCoverageReporters">configureCoverageReporters</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.configureEnvironment">configureEnvironment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-vitest.Vitest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-vitest.Vitest.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-vitest.Vitest.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-vitest.Vitest.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addExclude` <a name="addExclude" id="@nikovirtala/projen-vitest.Vitest.addExclude"></a>

```typescript
public addExclude(pattern: string): void
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-vitest.Vitest.addExclude.parameter.pattern"></a>

- *Type:* string

---

##### `addInclude` <a name="addInclude" id="@nikovirtala/projen-vitest.Vitest.addInclude"></a>

```typescript
public addInclude(pattern: string): void
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-vitest.Vitest.addInclude.parameter.pattern"></a>

- *Type:* string

---

##### `configureCoverageProvider` <a name="configureCoverageProvider" id="@nikovirtala/projen-vitest.Vitest.configureCoverageProvider"></a>

```typescript
public configureCoverageProvider(provider: CoverageProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="@nikovirtala/projen-vitest.Vitest.configureCoverageProvider.parameter.provider"></a>

- *Type:* <a href="#@nikovirtala/projen-vitest.CoverageProvider">CoverageProvider</a>

---

##### `configureCoverageReporters` <a name="configureCoverageReporters" id="@nikovirtala/projen-vitest.Vitest.configureCoverageReporters"></a>

```typescript
public configureCoverageReporters(reporters: CoverageReporter[]): void
```

###### `reporters`<sup>Required</sup> <a name="reporters" id="@nikovirtala/projen-vitest.Vitest.configureCoverageReporters.parameter.reporters"></a>

- *Type:* <a href="#@nikovirtala/projen-vitest.CoverageReporter">CoverageReporter</a>[]

---

##### `configureEnvironment` <a name="configureEnvironment" id="@nikovirtala/projen-vitest.Vitest.configureEnvironment"></a>

```typescript
public configureEnvironment(env: Environment): void
```

###### `env`<sup>Required</sup> <a name="env" id="@nikovirtala/projen-vitest.Vitest.configureEnvironment.parameter.env"></a>

- *Type:* <a href="#@nikovirtala/projen-vitest.Environment">Environment</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-vitest.Vitest.isConstruct"></a>

```typescript
import { Vitest } from '@nikovirtala/projen-vitest'

Vitest.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-vitest.Vitest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-vitest.Vitest.isComponent"></a>

```typescript
import { Vitest } from '@nikovirtala/projen-vitest'

Vitest.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-vitest.Vitest.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-vitest.Vitest.of"></a>

```typescript
import { Vitest } from '@nikovirtala/projen-vitest'

Vitest.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-vitest.Vitest.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-vitest.Vitest.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-vitest.Vitest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-vitest.Vitest.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### VitestConfigOptions <a name="VitestConfigOptions" id="@nikovirtala/projen-vitest.VitestConfigOptions"></a>

Vitest Config.

https://vitest.dev/config/

#### Initializer <a name="Initializer" id="@nikovirtala/projen-vitest.VitestConfigOptions.Initializer"></a>

```typescript
import { VitestConfigOptions } from '@nikovirtala/projen-vitest'

const vitestConfigOptions: VitestConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageDirectory">coverageDirectory</a></code> | <code>string</code> | Coverage output directory. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageEnabled">coverageEnabled</a></code> | <code>boolean</code> | Coverage enabled. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageProvider">coverageProvider</a></code> | <code><a href="#@nikovirtala/projen-vitest.CoverageProvider">CoverageProvider</a></code> | Coverage provider type. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageReporters">coverageReporters</a></code> | <code><a href="#@nikovirtala/projen-vitest.CoverageReporter">CoverageReporter</a>[]</code> | Coverage reporters. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.environment">environment</a></code> | <code><a href="#@nikovirtala/projen-vitest.Environment">Environment</a></code> | The environment that will be used for testing. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.exclude">exclude</a></code> | <code>string[]</code> | A list of glob patterns that should be excluded from your test files. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.globals">globals</a></code> | <code>boolean</code> | Register apis globally. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.include">include</a></code> | <code>string[]</code> | A list of glob patterns that match your test files. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.isolate">isolate</a></code> | <code>boolean</code> | Run tests in an isolated environment. This option has no effect on vmThreads pool. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.passWithNoTests">passWithNoTests</a></code> | <code>boolean</code> | Vitest will not fail, if no tests will be found. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.pool">pool</a></code> | <code><a href="#@nikovirtala/projen-vitest.Pool">Pool</a></code> | Pool used to run tests in. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.typecheckChecker">typecheckChecker</a></code> | <code>string</code> | Tool to use for type checking. Checker should implement the same output format as `tsc`. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.typecheckEnabled">typecheckEnabled</a></code> | <code>boolean</code> | Enable typechecking alongside your regular tests. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.typecheckTsconfig">typecheckTsconfig</a></code> | <code>string</code> | Path to custom tsconfig, relative to the project root. |

---

##### `coverageDirectory`<sup>Optional</sup> <a name="coverageDirectory" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageDirectory"></a>

```typescript
public readonly coverageDirectory: string;
```

- *Type:* string
- *Default:* "coverage"

Coverage output directory.

---

##### `coverageEnabled`<sup>Optional</sup> <a name="coverageEnabled" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageEnabled"></a>

```typescript
public readonly coverageEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Coverage enabled.

https://vitest.dev/config/#coverage-enabled

---

##### `coverageProvider`<sup>Optional</sup> <a name="coverageProvider" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageProvider"></a>

```typescript
public readonly coverageProvider: CoverageProvider;
```

- *Type:* <a href="#@nikovirtala/projen-vitest.CoverageProvider">CoverageProvider</a>
- *Default:* "v8"

Coverage provider type.

https://vitest.dev/config/#coverage-provider

---

##### `coverageReporters`<sup>Optional</sup> <a name="coverageReporters" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageReporters"></a>

```typescript
public readonly coverageReporters: CoverageReporter[];
```

- *Type:* <a href="#@nikovirtala/projen-vitest.CoverageReporter">CoverageReporter</a>[]
- *Default:* '["text", "lcov"]'

Coverage reporters.

https://vitest.dev/config/#coverage-reporter

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.environment"></a>

```typescript
public readonly environment: Environment;
```

- *Type:* <a href="#@nikovirtala/projen-vitest.Environment">Environment</a>
- *Default:* "node"

The environment that will be used for testing.

https://vitest.dev/config/#environment

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]
- *Default:* Vitest's `configDefaults.exclude`

A list of glob patterns that should be excluded from your test files.

https://vitest.dev/config/#exclude

---

##### `globals`<sup>Optional</sup> <a name="globals" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.globals"></a>

```typescript
public readonly globals: boolean;
```

- *Type:* boolean
- *Default:* false

Register apis globally.

If you prefer to use the APIs globally like Jest, set to `true`.
https://vitest.dev/config/#globals

---

##### `include`<sup>Optional</sup> <a name="include" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]
- *Default:* Vitest's `configDefaults.include`

A list of glob patterns that match your test files.

https://vitest.dev/config/#include

---

##### `isolate`<sup>Optional</sup> <a name="isolate" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.isolate"></a>

```typescript
public readonly isolate: boolean;
```

- *Type:* boolean
- *Default:* true

Run tests in an isolated environment. This option has no effect on vmThreads pool.

Disabling this option might improve performance if your code doesn't rely on side effects.

https://vitest.dev/config/#isolate

---

##### `passWithNoTests`<sup>Optional</sup> <a name="passWithNoTests" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.passWithNoTests"></a>

```typescript
public readonly passWithNoTests: boolean;
```

- *Type:* boolean
- *Default:* true

Vitest will not fail, if no tests will be found.

https://vitest.dev/config/#passwithnotests

---

##### `pool`<sup>Optional</sup> <a name="pool" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.pool"></a>

```typescript
public readonly pool: Pool;
```

- *Type:* <a href="#@nikovirtala/projen-vitest.Pool">Pool</a>
- *Default:* "forks"

Pool used to run tests in.

https://vitest.dev/config/#pool

---

##### `typecheckChecker`<sup>Optional</sup> <a name="typecheckChecker" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.typecheckChecker"></a>

```typescript
public readonly typecheckChecker: string;
```

- *Type:* string
- *Default:* "tsc --noEmit"

Tool to use for type checking. Checker should implement the same output format as `tsc`.

https://vitest.dev/config/#typecheck-checker

---

##### `typecheckEnabled`<sup>Optional</sup> <a name="typecheckEnabled" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.typecheckEnabled"></a>

```typescript
public readonly typecheckEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Enable typechecking alongside your regular tests.

https://vitest.dev/config/#typecheck-enabled

---

##### `typecheckTsconfig`<sup>Optional</sup> <a name="typecheckTsconfig" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.typecheckTsconfig"></a>

```typescript
public readonly typecheckTsconfig: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

Path to custom tsconfig, relative to the project root.

https://vitest.dev/config/#typecheck-tsconfig

---

### VitestOptions <a name="VitestOptions" id="@nikovirtala/projen-vitest.VitestOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-vitest.VitestOptions.Initializer"></a>

```typescript
import { VitestOptions } from '@nikovirtala/projen-vitest'

const vitestOptions: VitestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.VitestOptions.property.config">config</a></code> | <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions">VitestConfigOptions</a></code> | Initial config options. |
| <code><a href="#@nikovirtala/projen-vitest.VitestOptions.property.configFilePath">configFilePath</a></code> | <code>string</code> | Config file path. |
| <code><a href="#@nikovirtala/projen-vitest.VitestOptions.property.vitestVersion">vitestVersion</a></code> | <code>string</code> | Vitest version. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@nikovirtala/projen-vitest.VitestOptions.property.config"></a>

```typescript
public readonly config: VitestConfigOptions;
```

- *Type:* <a href="#@nikovirtala/projen-vitest.VitestConfigOptions">VitestConfigOptions</a>

Initial config options.

---

##### `configFilePath`<sup>Optional</sup> <a name="configFilePath" id="@nikovirtala/projen-vitest.VitestOptions.property.configFilePath"></a>

```typescript
public readonly configFilePath: string;
```

- *Type:* string
- *Default:* "vitest.config.ts"

Config file path.

---

##### `vitestVersion`<sup>Optional</sup> <a name="vitestVersion" id="@nikovirtala/projen-vitest.VitestOptions.property.vitestVersion"></a>

```typescript
public readonly vitestVersion: string;
```

- *Type:* string
- *Default:* "^2"

Vitest version.

---



## Enums <a name="Enums" id="Enums"></a>

### CoverageProvider <a name="CoverageProvider" id="@nikovirtala/projen-vitest.CoverageProvider"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.CoverageProvider.ISTANBUL">ISTANBUL</a></code> | Provide coverage report using istanbul. |
| <code><a href="#@nikovirtala/projen-vitest.CoverageProvider.V8">V8</a></code> | Provide coverage reports using v8. |

---

##### `ISTANBUL` <a name="ISTANBUL" id="@nikovirtala/projen-vitest.CoverageProvider.ISTANBUL"></a>

Provide coverage report using istanbul.

https://istanbul.js.org

---


##### `V8` <a name="V8" id="@nikovirtala/projen-vitest.CoverageProvider.V8"></a>

Provide coverage reports using v8.

https://v8.dev/blog/javascript-code-coverage

---


### CoverageReporter <a name="CoverageReporter" id="@nikovirtala/projen-vitest.CoverageReporter"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.CLOVER">CLOVER</a></code> | Provides `clover` report. |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.HTML">HTML</a></code> | Provides `HTML` report. |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.JSON">JSON</a></code> | Provides `JSON` report. |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.LCOV">LCOV</a></code> | Provides `LCOV` report. |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.TEXT">TEXT</a></code> | Provides `text` report. |

---

##### `CLOVER` <a name="CLOVER" id="@nikovirtala/projen-vitest.CoverageReporter.CLOVER"></a>

Provides `clover` report.

---


##### `HTML` <a name="HTML" id="@nikovirtala/projen-vitest.CoverageReporter.HTML"></a>

Provides `HTML` report.

---


##### `JSON` <a name="JSON" id="@nikovirtala/projen-vitest.CoverageReporter.JSON"></a>

Provides `JSON` report.

---


##### `LCOV` <a name="LCOV" id="@nikovirtala/projen-vitest.CoverageReporter.LCOV"></a>

Provides `LCOV` report.

---


##### `TEXT` <a name="TEXT" id="@nikovirtala/projen-vitest.CoverageReporter.TEXT"></a>

Provides `text` report.

---


### Environment <a name="Environment" id="@nikovirtala/projen-vitest.Environment"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.Environment.EDGE_RUNTIME">EDGE_RUNTIME</a></code> | Run tests in Vercel's Edge Runtime VM. |
| <code><a href="#@nikovirtala/projen-vitest.Environment.HAPPY_DOM">HAPPY_DOM</a></code> | Run tests in `happy-dom` environment. |
| <code><a href="#@nikovirtala/projen-vitest.Environment.JSDOM">JSDOM</a></code> | Run tests in `jsdom` environment. |
| <code><a href="#@nikovirtala/projen-vitest.Environment.NODE">NODE</a></code> | Run tests in a Node.js environment. |

---

##### `EDGE_RUNTIME` <a name="EDGE_RUNTIME" id="@nikovirtala/projen-vitest.Environment.EDGE_RUNTIME"></a>

Run tests in Vercel's Edge Runtime VM.

https://edge-runtime.vercel.app/packages/vm

---


##### `HAPPY_DOM` <a name="HAPPY_DOM" id="@nikovirtala/projen-vitest.Environment.HAPPY_DOM"></a>

Run tests in `happy-dom` environment.

https://github.com/capricorn86/happy-dom

---


##### `JSDOM` <a name="JSDOM" id="@nikovirtala/projen-vitest.Environment.JSDOM"></a>

Run tests in `jsdom` environment.

https://github.com/jsdom/jsdom

---


##### `NODE` <a name="NODE" id="@nikovirtala/projen-vitest.Environment.NODE"></a>

Run tests in a Node.js environment.

---


### Pool <a name="Pool" id="@nikovirtala/projen-vitest.Pool"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.Pool.FORKS">FORKS</a></code> | Run tests in `node:child_process` using [`fork()`](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options). |
| <code><a href="#@nikovirtala/projen-vitest.Pool.THREADS">THREADS</a></code> | Run tests in `node:worker_threads`. |
| <code><a href="#@nikovirtala/projen-vitest.Pool.VMFORKS">VMFORKS</a></code> | Run tests in isolated `node:vm`. |
| <code><a href="#@nikovirtala/projen-vitest.Pool.VMTHREADS">VMTHREADS</a></code> | Run tests in isolated `node:vm`. Test files are run parallel using `node:worker_threads`. |

---

##### `FORKS` <a name="FORKS" id="@nikovirtala/projen-vitest.Pool.FORKS"></a>

Run tests in `node:child_process` using [`fork()`](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options).

Test isolation (when enabled) is done by spawning a new child process for each test file.

---


##### `THREADS` <a name="THREADS" id="@nikovirtala/projen-vitest.Pool.THREADS"></a>

Run tests in `node:worker_threads`.

Test isolation (when enabled) is done by spawning a new thread for each test file.

---


##### `VMFORKS` <a name="VMFORKS" id="@nikovirtala/projen-vitest.Pool.VMFORKS"></a>

Run tests in isolated `node:vm`.

Test files are run parallel using `node:child_process` [`fork()`](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)

This makes tests run faster, but VM module is unstable. Your tests might leak memory.

---


##### `VMTHREADS` <a name="VMTHREADS" id="@nikovirtala/projen-vitest.Pool.VMTHREADS"></a>

Run tests in isolated `node:vm`. Test files are run parallel using `node:worker_threads`.

This makes tests run faster, but VM module is unstable. Your tests might leak memory.

---

