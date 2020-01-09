# @reactive-js/scheduler

Abstract API for a cooperative multi-tasking scheduling in a javascript environment.

The Scheduler API is designed to support both immediate and delayed scheduling of work. Recursively scheduled work is also supported. Cooperative multi-tasking is achieved via periodic polling of the `shouldYield` function within a SchedulerContinuation.

This abstract API is implemented by platform specific implementations that schedule work using the platform specific scheduler such as the one provided by [React](https://github.com/facebook/react/tree/master/packages/scheduler). Such an implementation is available in the [@reactive-js/react-scheduler](https://www.npmjs.com/package/@reactive-js/react-scheduler) package.

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
