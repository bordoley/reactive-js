[Reactive-JS](../README.md) / [disposable](../modules/disposable.md) / SerialDisposableLike

# Interface: SerialDisposableLike

[disposable](../modules/disposable.md).SerialDisposableLike

A `DisposableLike` container that allows replacing an inner `DisposableLike` with another,
disposing the previous inner `DisposableLike` in the process. Disposing the
container also disposes the inner `DisposableLike`. Disposing the inner `DisposableLike`
with an error, disposes the container with the error.

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`SerialDisposableLike`**

## Implemented by

- [`AbstractSerialDisposable`](../classes/disposable.AbstractSerialDisposable.md)

## Table of contents

### Properties

- [inner](disposable.SerialDisposableLike.md#inner)

## Properties

### inner

• **inner**: [`DisposableLike`](disposable.DisposableLike.md)

 The inner `DisposableLike` that may be get or set. Setting the inner
 `DisposableLike` disposes the old `DisposableLike` unless it is strictly equal
 to the new one.
