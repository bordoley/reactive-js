# @reactive-js/disposable

Utilities for managing the lifetimes of resources.

## Usage

```typescript
import { Disposable, DisposableLike } from "@reactive-js/disposable";

const disposable: DisposableLike = Disposable.create();
disposable.dispose();
```

## API

### Interfaces

*DisposableLike*

Represents a managed resource.

* `get isDisposed: boolean`

  Returns whether the resource has already been disposed or not.

* `dispose()`

  Releases the managed resource. Implementations must be idempotent, eg. it must safe to call dispose multiple times on a given resource.


* `add(disposable: DisposableLike): void`

  Adds a DisposableLike to this container or disposes it if the container has been disposed.

* `remove(disposable: DisposableLike): void`

  Removes and disposes the given DisposableLike if it is part of this container.

*SerialDisposableLike*

A DisposableLike container that allows updating/replacing the contained DisposableLike with another DisposableLike, disposing the old one when updating plus handling the disposition when the container itself is disposed.

* `get disposable: DisposableLike`

Returns the currently contained DisposableLike.

* `set disposable(disposable: DisposableLike)`

Set the next DisposableLike on this container and dispose the previous one. Dispose the next DisposableLike if the container has been disposed.

### Static Functions

Creates a new DisposableLike that calls the teardown function exactly once when initially disposed.

`Disposable.disposed: DisposableLike`

A DisposableLike instance that is disposed.

`Disposable.create(): DisposableLike`

Creates a new DisposableLike instance.

`SerialDisposable.create(): SerialDisposableLike`

Creates a new SerialDisposable instance.

`throwIfDisposed(disposable: DisposableLike):`

Throws an Error if the disposable is disposed.
