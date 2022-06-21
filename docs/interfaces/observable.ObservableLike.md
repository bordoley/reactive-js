[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObservableLike

# Interface: ObservableLike<T\>

[observable](../modules/observable.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`MulticastObservableLike`](observable.MulticastObservableLike.md)

## Table of contents

### Properties

- [T](observable.ObservableLike.md#t)
- [isSynchronous](observable.ObservableLike.md#issynchronous)
- [type](observable.ObservableLike.md#type)

### Methods

- [observe](observable.ObservableLike.md#observe)

## Properties

### T

• **T**: `unknown`

#### Overrides

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### isSynchronous

• `Readonly` **isSynchronous**: `boolean`

___

### type

• `Readonly` **type**: [`ObservableLike`](observable.ObservableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](container.ContainerLike.md).[type](container.ContainerLike.md#type)

## Methods

### observe

▸ **observe**(`this`, `observer`): `void`

Subscribes the `ObserverLike` instance to the observable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`ObservableLike`](observable.ObservableLike.md)<`T`\> | - |
| `observer` | [`Observer`](../classes/observable.Observer.md)<`T`\> | The observer which should be notified by the observable source. |

#### Returns

`void`
