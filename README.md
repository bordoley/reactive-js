# Reactive JS:

Fast modern reactive Javascript programming library

## Example Usage

```typescript
import {
  connect,
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
  pipe,
} from "@reactive-js/rx-observable";

import { normalPriority } from "@reactive-js/react-scheduler";

// The pipe function can be used to compose operators.
const observable = pipe(
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
);

// Connect the observable to a scheduler, creating a subscription.
// In reactive-js, we never directly create a Subscriber, but instead
// use the connect function. 
const subscription = connect(observable, normalPriority);
```

## Packages

### Reactive Asynchronous Programming (RX)
* [@reactive-js/rx-core](./packages/rx-core/docs)
* [@reactive-js/rx-observable-resource](./packages/rx-observable-resource/docs)
* [@reactive-js/rx-observable](./packages/rx-observable/docs)

### Interactive Asynchronous Programming (IX)
* [@reactive-js/ix-core](./packages/ix-core/docs)
* [@reactive-js/ix-async-iterator-resource](./packages/ix-async-iterator-resource/docs)
* [@reactive-js/ix-async-iterator](./packages/ix-async-iterator/docs)

### Schedulers
* [@reactive-js/scheduler](./packages/scheduler/docs)
* [@reactive-js/schedulers](./packages/schedulers/docs)

### Resource Management
* [@reactive-js/disposable](./packages/disposable/docs)

### React JS Integration
* [@reactive-js/react](./packages/react/docs)
* [@reactive-js/react-router](./packages/react-router/docs)
* [@reactive-js/react-scheduler](./packages/react-scheduler/docs)

### Web Integration
* [@reactive-js/web](./packages/web/docs)

### Node Integration
* [@reactive-js/node](./packages/node/docs)

## RxJS/TC39 Comparison

