# @reactive-js/pipe

Type safe functional pipe function. This is an optional dependency for users of reactive-js, but used internally throughout the library.

## Installation

### via npm

```sh
npm install @reactive-js/pipe
```

### via yarn

```sh
yarn add @reactive-js/pipe
```

## Usage

```typescript
import { pipe } from "@reactive-js/pipe";

const arr = new Array(1000);
const result = pipe(arr, f1, f2, f3);
```

## Documentation

API documentation is available [here](./docs).
