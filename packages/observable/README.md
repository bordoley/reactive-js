# @reactive-js/observable

Reactive-Js's core reactive programming API.

Reactive-Js unifies reactive and interactive programming into a single API, defined by two core interfaces: [ObservableLike](./docs/interfaces/observablelike.md) and [EnumerableLike](./docs/interfaces/enumerablelike.md). In addition, basic utilities for safely creating, transforming, and using `ObservableLike` and `EnumerableLike` streams are provided.

`ObservableLike` streams are always asynchronous. Subscribing only sets up subscription, but does not synchronously produce values (doing so is a programming error). Instead scheduling is deeply integrated into the `SubscriberLike` type. During subscription setup, `ObservableLike` sources schedule work to be done in the future, such as iterating through an iterable source. This enables tight integrationg with platform specific scheduling implementations such as React's internal scheduler.

### A note on backpressure

While reactive-js does not provide an API to directly apply backpressure to an `ObservableLike` source, the library does provided several primitives that can be used to achieve the effect.

CPU bound backpressure can be achieved via the [@reactive-js/scheduler](../scheduler) [`SchedulerLike`](../scheduler/docs/interfaces/schedulerlike.md) interface's support for cooperative multi-tasking. Specifically, `ObservableLike` sources must honor a `SchedulerLike`'s `shouldYield` requests, yielding control back to the scheduler, and returning a `SchedulerContinuationLike` if additional work is to be completed.

A second approach is provided by the [@reactive-js/async-enumerable](../async-enumerable) package, which defines a push/pull interface for iterating through asynchronous producers.

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
import { subscribe } from "@reactive-js/observable";
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
