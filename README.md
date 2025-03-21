# Reactive JS:

Fast modern reactive Javascript programming library.

[![NPM Version](https://img.shields.io/npm/v/@reactive-js/core.svg)](https://npmjs.com/package/@reactive-js/core) [![License](https://img.shields.io/npm/l/@reactive-js/core.svg)](https://npmjs.com/package/@reactive-js/core) [![Coverage Status](https://coveralls.io/repos/github/bordoley/reactive-js/badge.svg?branch=master)](https://coveralls.io/github/bordoley/reactive-js?branch=master) ![Build Status](https://github.com/bordoley/reactive-js/actions/workflows/build.yml/badge.svg)

## Platform Support

ReactiveJS is an isomorphic library which supports all modern ecmascript platforms including [Node.js](https://nodejs.org/) (v16 and up), [Deno](https://deno.land/), and modern browsers.

## Installing

### NPM JS

Reactive JS can be added to your npm based project using the [@reactive-js/core](https://www.npmjs.com/@reactive-js/core) packages.

```
yarn add @reactive-js/core
```

### ES6 Modules

Both Ecmascript and Typescript modules that may be directly imported into your project are available in the [mod](./mod) directory of this repo. These modules are all [Deno](https://deno.land/) compatible. We recommend referencing specifically tagged releases of these files in your projects.

## Example Usage

```typescript
import * as Observable from "@reactive-js/core/computations/Observable";
import { incrementBy, pipe, returns } from "@reactive-js/core/functions";
import * as HostScheduler from "@reactive-js/core/utils/HostScheduler";

using scheduler = HostScheduler.create();

await pipe(
  Observable.generate(incrementBy(1), returns(0), {
    delay: 1,
    delayStart: true,
  }),
  Observable.throttle(2000),
  Observable.map(x => `${x}`),
  Observable.forEach(x => console.log(x)),
  Observable.takeUntil(Observable.empty({ delay: 20000 })),
  Observable.lastAsync(scheduler),
);
```
