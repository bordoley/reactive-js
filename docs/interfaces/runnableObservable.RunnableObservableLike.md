[Reactive-JS](../README.md) / [runnableObservable](../modules/runnableObservable.md) / RunnableObservableLike

# Interface: RunnableObservableLike<T\>

[runnableObservable](../modules/runnableObservable.md).RunnableObservableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ObservableLike`](observable.ObservableLike.md)<`T`\>

  ↳ **`RunnableObservableLike`**

## Table of contents

### Properties

- [T](runnableObservable.RunnableObservableLike.md#t)
- [TContainerOf](runnableObservable.RunnableObservableLike.md#tcontainerof)
- [TLiftableContainerState](runnableObservable.RunnableObservableLike.md#tliftablecontainerstate)
- [observableType](runnableObservable.RunnableObservableLike.md#observabletype)

### Methods

- [sinkInto](runnableObservable.RunnableObservableLike.md#sinkinto)

## Properties

### T

• **T**: `unknown`

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[T](observable.ObservableLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`RunnableObservableLike`](runnableObservable.RunnableObservableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](observable.ObservableLike.md).[TContainerOf](observable.ObservableLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`ObserverLike`](observer.ObserverLike.md)<`unknown`\>

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[TLiftableContainerState](observable.ObservableLike.md#tliftablecontainerstate)

___

### observableType

• `Readonly` **observableType**: ``2`` \| ``1``

#### Overrides

[ObservableLike](observable.ObservableLike.md).[observableType](observable.ObservableLike.md#observabletype)

## Methods

### sinkInto

▸ **sinkInto**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ObservableLike`](observable.ObservableLike.md)<`T`\> |
| `sink` | [`ObserverLike`](observer.ObserverLike.md)<`T`\> |

#### Returns

`void`

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[sinkInto](observable.ObservableLike.md#sinkinto)
