# Product Overview

This is a Vitest component for projen Node.js projects. It provides a reusable, configurable Vitest testing setup that can be integrated into any projen-managed Node.js project.

## Purpose

The package exports a `Vitest` class that extends projen's `Component` class, allowing developers to add Vitest testing capabilities to their projen projects with minimal configuration. It handles:

- Vitest configuration file generation
- Test task setup (test, test:watch, test:update)
- Coverage configuration
- TypeScript integration
- Environment and pool configuration

## Target Users

Developers using projen to manage their Node.js/TypeScript projects who want to use Vitest instead of Jest for testing.

## Key Features

- Configurable test environments (node, jsdom, happy-dom, edge-runtime)
- Multiple pool options (forks, threads, vmforks, vmthreads)
- Coverage providers (v8, istanbul)
- TypeScript type checking integration
- Snapshot testing support
- Global API configuration
