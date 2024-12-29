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
public configureEnvironment(env: VitestEnvironment): void
```

###### `env`<sup>Required</sup> <a name="env" id="@nikovirtala/projen-vitest.Vitest.configureEnvironment.parameter.env"></a>

- *Type:* <a href="#@nikovirtala/projen-vitest.VitestEnvironment">VitestEnvironment</a>

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
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageProvider">coverageProvider</a></code> | <code><a href="#@nikovirtala/projen-vitest.CoverageProvider">CoverageProvider</a></code> | Coverage provider type. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageReporters">coverageReporters</a></code> | <code><a href="#@nikovirtala/projen-vitest.CoverageReporter">CoverageReporter</a>[]</code> | Coverage reporters. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.environment">environment</a></code> | <code><a href="#@nikovirtala/projen-vitest.VitestEnvironment">VitestEnvironment</a></code> | The environment that will be used for testing. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.exclude">exclude</a></code> | <code>string[]</code> | A list of glob patterns that should be excluded from your test files. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.globals">globals</a></code> | <code>boolean</code> | Register apis globally. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.include">include</a></code> | <code>string[]</code> | A list of glob patterns that match your test files. |
| <code><a href="#@nikovirtala/projen-vitest.VitestConfigOptions.property.isolate">isolate</a></code> | <code>boolean</code> | Run tests in an isolated environment. This option has no effect on vmThreads pool. |

---

##### `coverageDirectory`<sup>Optional</sup> <a name="coverageDirectory" id="@nikovirtala/projen-vitest.VitestConfigOptions.property.coverageDirectory"></a>

```typescript
public readonly coverageDirectory: string;
```

- *Type:* string
- *Default:* "coverage"

Coverage output directory.

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
public readonly environment: VitestEnvironment;
```

- *Type:* <a href="#@nikovirtala/projen-vitest.VitestEnvironment">VitestEnvironment</a>
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
| <code><a href="#@nikovirtala/projen-vitest.CoverageProvider.ISTANBUL">ISTANBUL</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.CoverageProvider.V8">V8</a></code> | *No description.* |

---

##### `ISTANBUL` <a name="ISTANBUL" id="@nikovirtala/projen-vitest.CoverageProvider.ISTANBUL"></a>

---


##### `V8` <a name="V8" id="@nikovirtala/projen-vitest.CoverageProvider.V8"></a>

---


### CoverageReporter <a name="CoverageReporter" id="@nikovirtala/projen-vitest.CoverageReporter"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.CLOVER">CLOVER</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.HTML">HTML</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.JSON">JSON</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.LCOV">LCOV</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.CoverageReporter.TEXT">TEXT</a></code> | *No description.* |

---

##### `CLOVER` <a name="CLOVER" id="@nikovirtala/projen-vitest.CoverageReporter.CLOVER"></a>

---


##### `HTML` <a name="HTML" id="@nikovirtala/projen-vitest.CoverageReporter.HTML"></a>

---


##### `JSON` <a name="JSON" id="@nikovirtala/projen-vitest.CoverageReporter.JSON"></a>

---


##### `LCOV` <a name="LCOV" id="@nikovirtala/projen-vitest.CoverageReporter.LCOV"></a>

---


##### `TEXT` <a name="TEXT" id="@nikovirtala/projen-vitest.CoverageReporter.TEXT"></a>

---


### VitestEnvironment <a name="VitestEnvironment" id="@nikovirtala/projen-vitest.VitestEnvironment"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-vitest.VitestEnvironment.EDGE_RUNTIME">EDGE_RUNTIME</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.VitestEnvironment.HAPPY_DOM">HAPPY_DOM</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.VitestEnvironment.JSDOM">JSDOM</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-vitest.VitestEnvironment.NODE">NODE</a></code> | *No description.* |

---

##### `EDGE_RUNTIME` <a name="EDGE_RUNTIME" id="@nikovirtala/projen-vitest.VitestEnvironment.EDGE_RUNTIME"></a>

---


##### `HAPPY_DOM` <a name="HAPPY_DOM" id="@nikovirtala/projen-vitest.VitestEnvironment.HAPPY_DOM"></a>

---


##### `JSDOM` <a name="JSDOM" id="@nikovirtala/projen-vitest.VitestEnvironment.JSDOM"></a>

---


##### `NODE` <a name="NODE" id="@nikovirtala/projen-vitest.VitestEnvironment.NODE"></a>

---

