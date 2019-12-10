# @reactive-js/rx

Reactive-Js's core reactive programming API.

This library defines the core interfaces (ObservableLike, ObserverLike, and SubscriberLike) to support an event-driven, reactive, asynchronous programming model. In addition, basic utilities for safely creating and using Observable streams are provided. The [@reactive-js/observable](../observable) library provides additional utilities for creating and transforming observable sources.

Unlike in RxJS, reactive-js Observable streams are always asynchronous. Calling subscribe on an Observable only sets up a subscription, but does not synchronously produce values (doing so is a programming error). Instead, reactive-js deeply integrates scheduling into the Subscriber type. During subscription setup ,Observable sources may schedule work to be done in the future, such as iterating through an iterable source.

Another significant departure from RxJS is the API for subscribing to an Observable. Unlike in RxJS where user code typically directly calls an Observable's subscribe function, in reactive-js user code should use the `connect` function to setup a subscription. The `connect` function requires the user to provide a scheduler. This scheduler is used by the Observable source to schedule both immediate and delayed work, and enables deep integration with platform specific scheduling such as React's internal scheduler.

### A note on backpressure

While reactive-js does not provide an API to directly apply backpressure to an Observable source, the library does provided several primitives that can be used to achieve the effect.

First and foremost, Observable sources are required to schedule the production of values on a Subscriber's Scheduler. Scheduling in reactive-js is designed around cooperative multi-tasking, and Observable sources must honor a Scheduler's `shouldYield` requests, ceasing to produce values, and returning a continuation callback if additional work is to be completed. This is effectively a form of backpressure that can be used to implement timeslicing and improve user experience.

A second approach is provided by the [@reactive-js/ix](../ix) package, which defines interfaces for iterating through asynchronous producers.

## Installation

### via npm

```sh
npm install @reactive-js/rx
```

### via yarn

```sh
yarn add @reactive-js/rx
```

## Usage

```typescript
import { connect } from "@reactive-js/rx";
import { pipe } from "@reactive-js/pipe";

const observableSource;
const platformScheduler;

// Setup a subscription to the observableSource using the platform scheduler
const subscription = pipe(observableSource, connect(platformScheduler));

// ...later in the future

// Dispose the observable subscription
subscription.dispose();
```

## Documentation

API documentation is available [here](./docs).
