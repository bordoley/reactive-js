# Reactive JS:

Fast modern reactive Javascript programming library

## Example Usage

```typescript
import { pipe } from "@reactive-js/pipe";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNotify,
  subscribe
} from "@reactive-js/observable";
import { normalPriority } from "@reactive-js/react-scheduler";

// The pipe function can be used to compose operators.
const subscription = pipe(
  // The event source is a generator that generates numbers as fast
  // as it can. Note this work is still done concurrently with
  // other worked scheduled on the scheduler. The generate function yields
  // to the scheduler to let it do other work such as letting
  // the browser paint or allowing react to render component
  // trees.
  generate(x => x + 1, 0),
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

## Packages

### Reactive Asynchronous Programming (RX)

- [@reactive-js/observable](./packages/observable)

### Interactive Synchronous Programming

- [@reactive-js/enumerable](./packages/enumerable)

### Interactive Asynchronous Programming (IX)

- [@reactive-js/async-enumerable](./packages/async-enumerable)

### Schedulers

- [@reactive-js/scheduler](./packages/scheduler)
- [@reactive-js/schedulers](./packages/schedulers)

### Utilities

- [@reactive-js/disposable](./packages/disposable)
- [@reactive-js/pipe](./packages/pipe)

### Platform Integrations

#### Node.js

- [@reactive-js/node](./packages/node)

#### React

- [@reactive-js/react](./packages/react)
- [@reactive-js/react-router](./packages/react-router)
- [@reactive-js/react-scheduler](./packages/react-scheduler)

#### Web

- [@reactive-js/web](./packages/web)
