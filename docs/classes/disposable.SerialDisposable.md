[Reactive-JS](../README.md) / [disposable](../modules/disposable.md) / SerialDisposable

# Class: SerialDisposable

[disposable](../modules/disposable.md).SerialDisposable

A `Disposable` container that allows replacing an inner `Disposable` with another,
disposing the previous inner `Disposable` in the process. Disposing the
container also disposes the inner `Disposable`. Disposing the inner `Disposable`
with an error, disposes the container with the error.

## Hierarchy

- [`Disposable`](disposable.Disposable.md)

  ↳ **`SerialDisposable`**

## Table of contents

### Accessors

- [inner](disposable.SerialDisposable.md#inner)

## Accessors

### inner

• `get` **inner**(): [`Disposable`](disposable.Disposable.md)

 The inner `Disposable` that may be get or set. Setting the inner
 `Disposable` disposes the old `Disposable` unless it is strictly equal
 to the new one.

#### Returns

[`Disposable`](disposable.Disposable.md)
