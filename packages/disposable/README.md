# @reactive-js/disposable

Utilities for managing the lifetimes of resources and composing their disposal semantics.

## Installation

### via npm

```sh
npm install @reactive-js/disposable
```

### via yarn

```sh
yarn add @reactive-js/disposable
```

## Usage
```typescript
import { createDisposable } from "@reactive-js/disposable";

const arr = new Array(1000) ;
const onDispose = () => { arr.length = 0; };
const disposable = createDisposable();
disposable.add(onDispose);

// ...sometime in the future

disposable.dispose();
// guaranteed that onDispose is only ever called once.
```

## Documentation

API documentation is available [here](./docs).