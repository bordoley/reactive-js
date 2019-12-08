# @reactive-js/observable

Utilities for creating, composing and transforming reactive-js Observable streams.

This package consists the of the utilities traditionally considered part of the reactive extensions. The goal of this library is to provide an approximately equivalent API surface to that provided by RxJS, simplified where possible, while removing operators and overloads not commonly used. 

## Installation

### via npm

```sh
npm install @reactive-js/observable
```

### via yarn

```sh
yarn add @reactive-js/observable
```

## Usage
```typescript
import { connect } from "@reactive-js/rx";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
  pipe,
} from "@reactive-js/observable";
import { createSchedulerWithPriority } from "@reactive-js/node";

const scheduler = createSchedulerWithPriority(500);

connect(
  pipe(
    generate(x => x + 1, 0),
    map(x => fromArray([x, x, x, x])),
    exhaust(),
    onNext(console.log),
  ),
  scheduler,
);

```

## Documentation

API documentation is available [here](./docs).