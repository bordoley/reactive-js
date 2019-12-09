# @reactive-js/scheduler

Abstract API for a cooperative multi-tasking scheduler in a javascript environment.

The Scheduler API is designed to support both immediate and delayed scheduling of work, known as a SchedulerContinuation. Recursively scheduled work is also supported. Cooperative multi-tasking is achieved via periodic polling of the `shouldYield` function within a SchedulerContinuation.

This abstract API is meant to be implemented by a platform specific implementation such as React's [Scheduler](https://github.com/facebook/react/tree/master/packages/scheduler) package. Such an implementation is available in the [@reactive-js/react-scheduler](https://www.npmjs.com/package/@reactive-js/react-scheduler) package.

## Installation

### via npm

```sh
npm install @reactive-js/scheduler
```

### via yarn

```sh
yarn add @reactive-js/scheduler
```

## Documentation

API documentation is available [here](./docs).
