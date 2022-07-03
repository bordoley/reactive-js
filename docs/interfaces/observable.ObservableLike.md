[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObservableLike

# Interface: ObservableLike<T\>

[observable](../modules/observable.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SourceLike`](source.SourceLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`MulticastObservableLike`](observable.MulticastObservableLike.md)

## Implemented by

- [`AbstractDisposableObservable`](../classes/observable.AbstractDisposableObservable.md)

## Table of contents

### Properties

- [T](observable.ObservableLike.md#t)
- [TContainerOf](observable.ObservableLike.md#tcontainerof)
- [TLiftableState](observable.ObservableLike.md#tliftablestate)
- [isEnumerable](observable.ObservableLike.md#isenumerable)

### Methods

- [sink](observable.ObservableLike.md#sink)

## Properties

### T

• **T**: `unknown`

#### Overrides

[SourceLike](source.SourceLike.md).[T](source.SourceLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`ObservableLike`](observable.ObservableLike.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[TContainerOf](source.SourceLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`Observer`](../classes/observer.Observer.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[TLiftableState](source.SourceLike.md#tliftablestate)

___

### isEnumerable

• `Optional` `Readonly` **isEnumerable**: `boolean`

## Methods

### sink

▸ **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ObservableLike`](observable.ObservableLike.md)<[`T`](flowable.FlowableSinkStreamLike.md#t)\> |
| `sink` | [`Observer`](../classes/observer.Observer.md)<[`T`](flowable.FlowableSinkStreamLike.md#t)\> |

#### Returns

`void`

#### Overrides

[SourceLike](source.SourceLike.md).[sink](source.SourceLike.md#sink)
