[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObservableLike

# Interface: ObservableLike<T\>

[observable](../modules/observable.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`ObservableLike`**

  ↳ [`MulticastObservableLike`](observable.MulticastObservableLike.md)

## Table of contents

### Properties

- [isSynchronous](observable.ObservableLike.md#issynchronous)

### Methods

- [observe](observable.ObservableLike.md#observe)

## Properties

### isSynchronous

• `Readonly` **isSynchronous**: `boolean`

## Methods

### observe

▸ **observe**(`this`, `observer`): `void`

Subscribes the `ObserverLike` instance to the observable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`ObservableLike`](observable.ObservableLike.md)<`T`\> | - |
| `observer` | [`ObserverLike`](observable.ObserverLike.md)<`T`\> | The observer which should be notified by the observable source. |

#### Returns

`void`
