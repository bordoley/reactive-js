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

  ↳↳ [`StreamLike`](stream.StreamLike.md)

## Implemented by

- [`Subject`](../classes/observable.Subject.md)

## Table of contents

### Properties

- [observerCount](observable.MulticastObservableLike.md#observercount)
- [replay](observable.MulticastObservableLike.md#replay)

## Properties

### observerCount

• `Readonly` **observerCount**: `number`

The number of observers currently observing.

___

### replay

• `Readonly` **replay**: `number`
