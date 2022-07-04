[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObservableLike

# Interface: ObservableLike<T\>

[observable](../modules/observable.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ReactiveContainerLike`](reactive.ReactiveContainerLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`MulticastObservableLike`](observable.MulticastObservableLike.md)

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

[ReactiveContainerLike](reactive.ReactiveContainerLike.md).[T](reactive.ReactiveContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`ObservableLike`](observable.ObservableLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](reactive.ReactiveContainerLike.md).[TContainerOf](reactive.ReactiveContainerLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`Observer`](../classes/observer.Observer.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](reactive.ReactiveContainerLike.md).[TLiftableState](reactive.ReactiveContainerLike.md#tliftablestate)

___

### isEnumerable

• `Optional` `Readonly` **isEnumerable**: `boolean`

## Methods

### sink

▸ **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ObservableLike`](observable.ObservableLike.md)<[`T`](flowable.FlowableStreamLike.md#t)\> |
| `sink` | [`Observer`](../classes/observer.Observer.md)<[`T`](flowable.FlowableStreamLike.md#t)\> |

#### Returns

`void`

#### Overrides

[ReactiveContainerLike](reactive.ReactiveContainerLike.md).[sink](reactive.ReactiveContainerLike.md#sink)
