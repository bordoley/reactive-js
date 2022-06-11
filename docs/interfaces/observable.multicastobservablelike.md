[Reactive-JS](../README.md) / [observable](../modules/observable.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[observable](../modules/observable.md).MulticastObservableLike

An `ObservableLike` that shares a common subscription to an underlying observable source.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ObservableLike`](observable.ObservableLike.md)<`T`\>

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`MulticastObservableLike`**

  ↳↳ [`IOSinkAccumulatorLike`](io.IOSinkAccumulatorLike.md)

  ↳↳ [`StreamLike`](observable.StreamLike.md)

## Table of contents

### Properties

- [observerCount](observable.MulticastObservableLike.md#observercount)

## Properties

### observerCount

• `Readonly` **observerCount**: `number`

The number of observers currently observing.
