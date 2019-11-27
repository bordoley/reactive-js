# Reactive JS:

Fast modern reactive Javascript programming library

## Example Usage

```typescript
import { connect, pipe } from "@reactive-js/rx-observable";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
} from "@reactive-js/rx-observables";

import { scheduler } from "@reactive-js/react-scheduler";
import { registerDefaultScheduler } from "@reactive-js/scheduler";

// Register a default scheduler to be used when connecting observables
// to subscribers. In browser apps, we use the react-scheduler.
// In node apps, use the event-loop scheduler.
registerDefaultScheduler(scheduler);

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

  // write the output to the console.
  onNext(console.log),
);

// Connect the observable to a subscriber to start the subscription.
// In reactive-js, we never directly create a Subscriber, but instead
// let connect do so. To observe notifications generated by the observable,
// we use a variation of the observe operator (observe, onNext, onComplete, onError).
const subscription = connect(observable);
```

## Packages

### Core
* [@reactive-js/disposable](./packages/disposable/docs)
* [@reactive-js/serial-disposable](./packages/serial-disposable/docs)
* [@reactive-js/scheduler](./packages/scheduler/docs)

### Reactive Programming (RX)
* [@reactive-js/rx-observable-resource](./packages/rx-observable-resource/docs)
* [@reactive-js/rx-observable](./packages/rx-observable/docs)
* [@reactive-js/rx-observables](./packages/rx-observables/docs)
* [@reactive-js/rx-observer](./packages/rx-observer/docs)
* [@reactive-js/rx-subject](./packages/rx-subject/docs)
* [@reactive-js/rx-subscriber](./packages/rx-subscriber/docs)

### Asynchronous Interactive Programming (IX)
* [@reactive-js/ix-async-iterator-resource](./packages/ix-async-iterator-resource/docs)
* [@reactive-js/ix-async-iterator](./packages/ix-async-iterator/docs)

### Schedulers
* [@reactive-js/eventloop-scheduler](./packages/eventloop-scheduler/docs)
* [@reactive-js/perf-testing-scheduler](./packages/perf-testing-scheduler/docs)
* [@reactive-js/react-scheduler](./packages/react-scheduler/docs)
* [@reactive-js/virtualtime-scheduler](./packages/virtualtime-scheduler/docs)

### React JS Integration
* [@reactive-js/react-hooks](./packages/react-hooks/docs)
* [@reactive-js/react-router-dom-location-resource](./packages/react-router-dom-location-resource/docs)
* [@reactive-js/react-router-relative-uri](./packages/react-router-relative-uri/docs)
* [@reactive-js/react-router-state-component](./packages/react-router-state-component/docs)
* [@reactive-js/react-router](./packages/react-router)

### Browser Integration
* [@reactive-js/dom](./packages/dom/docs)

## RxJS/TC39 Comparison

