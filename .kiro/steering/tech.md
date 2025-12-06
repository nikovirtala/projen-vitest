# Technology Stack

## ⚠️ Projen-Managed Project

This project is **entirely managed by projen**. Key implications:

- **DO NOT** manually edit generated files (package.json, tsconfig.json, etc.)
- **ALL** configuration changes must be made in `.projenrc.ts`
- After modifying `.projenrc.ts`, run `npx projen` to regenerate files
- Dependencies, scripts, and tooling are defined in `.projenrc.ts`, not package.json

## Build System

- **projen**: Project configuration and build orchestration
- **JSII**: Multi-language library packaging (enables publishing to multiple package managers)
- **TypeScript**: Primary language (v5.9.3)
- **pnpm**: Package manager with hoisted node-linker
- **esbuild**: Bundling tool for define-config

## Core Dependencies

- **projen**: ^0.98.28 (peer dependency and runtime dependency)
- **constructs**: ^10.4.3 (peer dependency)
- **Node.js**: >= 22.21.1

## Development Tools

- **Biome**: Code formatting and linting (replaces ESLint and Prettier)
  - 4-space indentation
  - 120 character line width
  - Double quotes for JavaScript/TypeScript
- **Vitest**: Testing framework (v4)
- **@vitest/coverage-v8**: Code coverage
- **jsii-docgen**: API documentation generation
- **commit-and-tag-version**: Release management

## TypeScript Configuration

- Target: ES2020
- Module: CommonJS
- Strict mode enabled with all strict checks
- Inline source maps
- Declaration files generated
- Output: `lib/` directory
- Source: `src/` directory

## Common Commands

```bash
# Build the project
npm run build
# or
npx projen build

# Run tests
npm test
# or
npx projen test

# Watch mode for tests
npm run test:watch

# Update snapshots
npm run test:update

# Format and lint code
npm run biome
# or
npx projen biome

# Compile TypeScript
npm run compile

# Generate API documentation
npm run docgen

# Run all default tasks
npm run default

# Upgrade dependencies
npm run upgrade
```

## Project Structure

- Source files in `src/`
- Compiled output in `lib/`
- JSII distribution in `dist/`
- Tests in `test/`
- Configuration managed by `.projenrc.ts`
