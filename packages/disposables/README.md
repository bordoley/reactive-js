# @reactive-js/disposables

Utilities for managing the lifetimes of resources.

## Usage

```typescript
import { Disposable, DisposableLike } from "@reactive-js/disposables";

const disposable: DisposableLike = Disposable.create();
disposable.dispose();
```

## API

### Interfaces

*DisposableLike*: 

Represents a managed resource.

* `get isDisposed: boolean`

  Returns whether the resource has already been disposed or not.
  
* `dispose()`

  Releases the managed resource. Implementations must be idempotent, eg. it must safe to call dispose multiple times on a given resource.

*CompositeDisposableLike*: 

A disposable that can hold onto multiple other disposables.

* `add(disposable: DisposableLike): CompositeDisposableLike`

  Adds a DisposableLike to this container or disposes it if the container has been disposed.

* `remove(disposable: DisposableLike):CompositeDisposableLike`

  Removes and disposes the given DisposableLike if it is part of this container.

*SerialDisposableLike*

A DisposableLike container that allows updating/replacing the contained DisposableLike with another DisposableLike, disposing the old one when updating plus handling the disposition when the container itself is disposed.

* `get innerDisposable: DisposableLike`

Returns the currently contained DisposableLike. 

* `set innerDisposable(disposable: DisposableLike)`

Set the next DisposableLike on this container and dispose the previous one. Dispose the next DisposableLike if the container has been disposed.

### Static Functions

`Disposable.compose(disposable: DisposableLike, ...disposables: DisposableLike[]): DisposableLike`

Creates a new DisposableLike that disposes the provided DisposableLikes when disposed.

`Disposable.create(teardown: () => void): DisposableLike`

Creates a new DisposableLike that calls the teardown function exactly once when initially disposed.

`Disposable.empty(): DisposableLike`: 

Creates a new DisposableLike that does nothing when disposed.

`Disposable.disposed: DisposableLike` 

A DisposableLike instance that is disposed.

`CompositeDisposable.create(): CompositeDisposableLike`

Creates a new CompositeDisposableLike instance.

`SerialDisposable.create(): SerialDisposableLike`

Creates a new SerialDisposable instance.
