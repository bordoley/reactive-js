# @reactive-js/react-scheduler

A set of Schedulers that schedule work on React's internal priority scheduler.

## Installation

### via npm

```sh
npm install @reactive-js/react-scheduler
```

### via yarn

```sh
yarn add @reactive-js/react-scheduler
```

## Usage

```typescript
import { idlePriority } from "@reactive-js/react-scheduler";

const disposable = idlePriority.schedule(continuation);
```

## Documentation

API documentation is available [here](./docs).
