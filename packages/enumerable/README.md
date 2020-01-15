# @reactive-js/enumerable

Reactive-Js's core synchronous interactive programming API.

## Installation

### via npm

```sh
npm install @reactive-js/enumerable
```

### via yarn

```sh
yarn add @reactive-js/enumerable
```

## Usage

```typescript
import { subscribe } from "@reactive-js/rx";
import { pipe } from "@reactive-js/pipe";

const observableSource;
const platformScheduler;

// Setup a subscription to the observableSource using the platform scheduler
const subscription = pipe(observableSource, subscribe(platformScheduler));

// ...later in the future

// Dispose the observable subscription
subscription.dispose();
```

## Documentation

API documentation is available [here](./docs).
