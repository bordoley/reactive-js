# @reactive-js/observable-resource

Utilities for creating, composing and transforming reactive-js Observable resources, eg Observable streams with lifecyle semantics, such as Subjects.

## Installation

### via npm

```sh
npm install @reactive-js/observable-resource
```

### via yarn

```sh
yarn add @reactive-js/observable-resource
```

## Usage

```typescript
import { connect, createSubject } from "@reactive-js/rx";
import {
  exhaust,
  generate,
  map,
  onNext,
  pipe,
} from "@reactive-js/observable-resource";
import { createSchedulerWithPriority } from "@reactive-js/node";

const scheduler = createSchedulerWithPriority(500);
const subject = createSubject();

// Create a stateful observable resource which shares the subjects
// underly disposable. eg. disposing observableResource disposes
// subject as well.
const observableResource = pipe(
  subject,
  map(x => fromArray([x, x, x, x])),
  exhaust(),
  onNext(console.log),
);

const subscription = connect(observableResource, scheduler);
```

## Documentation

API documentation is available [here](./docs).
