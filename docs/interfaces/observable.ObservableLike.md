[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObservableLike

# Interface: ObservableLike<T\>

[observable](../modules/observable.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ReactiveSourceLike`](reactive.ReactiveSourceLike.md)

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

[ReactiveSourceLike](reactive.ReactiveSourceLike.md).[T](reactive.ReactiveSourceLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`ObservableLike`](observable.ObservableLike.md)<`unknown`\>

#### Overrides

[ReactiveSourceLike](reactive.ReactiveSourceLike.md).[TContainerOf](reactive.ReactiveSourceLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`Observer`](../classes/observer.Observer.md)<`unknown`\>

#### Overrides

[ReactiveSourceLike](reactive.ReactiveSourceLike.md).[TLiftableState](reactive.ReactiveSourceLike.md#tliftablestate)

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

[ReactiveSourceLike](reactive.ReactiveSourceLike.md).[sink](reactive.ReactiveSourceLike.md#sink)
