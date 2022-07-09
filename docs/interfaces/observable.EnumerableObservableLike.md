[Reactive-JS](../README.md) / [observable](../modules/observable.md) / EnumerableObservableLike

# Interface: EnumerableObservableLike<T\>

[observable](../modules/observable.md).EnumerableObservableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`RunnableObservableLike`](observable.RunnableObservableLike.md)<`T`\>

  ↳ **`EnumerableObservableLike`**

## Table of contents

### Properties

- [T](observable.EnumerableObservableLike.md#t)
- [TContainerOf](observable.EnumerableObservableLike.md#tcontainerof)
- [TLiftableContainerState](observable.EnumerableObservableLike.md#tliftablecontainerstate)
- [observableType](observable.EnumerableObservableLike.md#observabletype)

### Methods

- [sinkInto](observable.EnumerableObservableLike.md#sinkinto)

## Properties

### T

• **T**: `unknown`

#### Inherited from

[RunnableObservableLike](observable.RunnableObservableLike.md).[T](observable.RunnableObservableLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`EnumerableObservableLike`](observable.EnumerableObservableLike.md)<`unknown`\>

#### Overrides

[RunnableObservableLike](observable.RunnableObservableLike.md).[TContainerOf](observable.RunnableObservableLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`ObserverLike`](observer.ObserverLike.md)<`unknown`\>

#### Inherited from

[RunnableObservableLike](observable.RunnableObservableLike.md).[TLiftableContainerState](observable.RunnableObservableLike.md#tliftablecontainerstate)

___

### observableType

• `Readonly` **observableType**: ``2``

#### Overrides

[RunnableObservableLike](observable.RunnableObservableLike.md).[observableType](observable.RunnableObservableLike.md#observabletype)

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

[RunnableObservableLike](observable.RunnableObservableLike.md).[sinkInto](observable.RunnableObservableLike.md#sinkinto)
