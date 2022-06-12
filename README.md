# Reactive JS:

Fast modern reactive Javascript programming library.

[![NPM Version](https://img.shields.io/npm/v/@reactive-js/core.svg)](https://npmjs.com/package/@reactive-js/core) [![License](https://img.shields.io/npm/l/@reactive-js/core.svg)](https://npmjs.com/package/@reactive-js/core) [![Coverage Status](https://coveralls.io/repos/github/bordoley/reactive-js/badge.svg?branch=master)](https://coveralls.io/github/bordoley/reactive-js?branch=master) ![Build Status workflow](https://github.com/bordoley/reactive-js/actions/workflows/build-test/badge.svg)


## Platform Support

ReactiveJS is an isomorphic library which supports all modern ecmascript platforms including [Node.js](https://nodejs.org/) (v14 and up), [Deno](https://deno.land/), and modern browsers.

## Installing

### NPM JS

Reactive JS can be added to your npm based project using the [@reactive-js/core](https://www.npmjs.com/@reactive-js/core) packages.

```
yarn add @reactive-js/core
```

### ES6 Modules

Both Ecmascript and Typescript modules that may be directly imported into your project are available in the [mod](./mod) directory of this repo. These modules are all [Deno](https://deno.land/) compatible. Only modules in the toplevel directory are supported. Modules in the internal or experimental folders include API that is subject to change at any time. We recommend referencing specifically tagged releases of these files in your projects.

## Example Usage

```typescript
import { increment, pipe, returns } from "@reactive-js/core/functions";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNotify,
  subscribe
} from "@reactive-js/core/observable";
import { normalPriority } from "@reactive-js/core/react";

// The pipe function can be used to compose operators.
const subscription = pipe(
  // The event source is a generator that generates numbers as fast
  // as it can. Note this work is still done concurrently with
  // other worked scheduled on the scheduler. The generate function yields
  // to the scheduler to let it do other work such as letting
  // the browser paint or allowing react to render component
  // trees.
  generate(increment, returns(0)),
  map(x => fromArray([x, x, x, x])),
  exhaust(),

  // Write the output to the console.
  // To observe notifications generated by the observable,
  // we use a variation of the observe operator (observe, onNext, onComplete, onError)
  onNotify(console.log),

 // Subscribe to the observable using the normal priority scheduler, creating a subscription.
 subscribe(normalPriority);
);
```
