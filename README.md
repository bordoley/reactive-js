# Reactive JS:

Fast modern reactive Javascript programming library

## Example Usage

```typescript
import { connect } from "@reactive-js/rx";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
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
  // we use a variation of the observe operator (observe, onNext, onComplete, onError).
  onNext(console.log),

  // Connect the observable to a scheduler, creating a subscription.
// In reactive-js, we never directly create a Subscriber, but instead
// use the connect function.
 connect(normalPriority);
);
```

## Packages

### Reactive Asynchronous Programming (RX)

- [@reactive-js/rx](./packages/rx)
- [@reactive-js/observable](./packages/observable)
- [@reactive-js/observable-resource](./packages/observable-resource)

### Interactive Asynchronous Programming (IX)

- [@reactive-js/ix](./packages/ix/docs)
- [@reactive-js/async-iterator](./packages/async-iterator/docs)
- [@reactive-js/async-iterator-resource](./packages/async-iterator-resource/docs)

### Schedulers

- [@reactive-js/scheduler](./packages/scheduler)
- [@reactive-js/schedulers](./packages/schedulers/docs)

### Utilities

- [@reactive-js/disposable](./packages/disposable)
- [@reactive-js/pipe](./packages/pipe/docs)

### Platform Integrations

#### Node.js

- [@reactive-js/node](./packages/node/docs)

#### React

- [@reactive-js/react](./packages/react/docs)
- [@reactive-js/react-router](./packages/react-router/docs)
- [@reactive-js/react-scheduler](./packages/react-scheduler/docs)

#### Web

- [@reactive-js/web](./packages/web/docs)

## RxJS/TC39 Comparison
