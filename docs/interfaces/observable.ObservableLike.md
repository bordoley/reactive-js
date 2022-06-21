[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObservableLike

# Interface: ObservableLike<T\>

[observable](../modules/observable.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SourceLike`](sink.SourceLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`MulticastObservableLike`](observable.MulticastObservableLike.md)

## Table of contents

### Properties

- [T](observable.ObservableLike.md#t)
- [isSynchronous](observable.ObservableLike.md#issynchronous)
- [sinkType](observable.ObservableLike.md#sinktype)
- [type](observable.ObservableLike.md#type)

### Methods

- [observe](observable.ObservableLike.md#observe)

## Properties

### T

• **T**: `unknown`

#### Overrides

[SourceLike](sink.SourceLike.md).[T](sink.SourceLike.md#t)

___

### isSynchronous

• `Readonly` **isSynchronous**: `boolean`

___

### sinkType

• `Readonly` **sinkType**: [`Observer`](../classes/observable.Observer.md)<`unknown`\>

#### Overrides

[SourceLike](sink.SourceLike.md).[sinkType](sink.SourceLike.md#sinktype)

___

### type

• `Readonly` **type**: [`ObservableLike`](observable.ObservableLike.md)<`unknown`\>

#### Overrides

[SourceLike](sink.SourceLike.md).[type](sink.SourceLike.md#type)

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
