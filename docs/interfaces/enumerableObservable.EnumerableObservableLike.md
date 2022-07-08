[Reactive-JS](../README.md) / [enumerableObservable](../modules/enumerableObservable.md) / EnumerableObservableLike

# Interface: EnumerableObservableLike<T\>

[enumerableObservable](../modules/enumerableObservable.md).EnumerableObservableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ObservableLike`](observable.ObservableLike.md)<`T`\>

  ↳ **`EnumerableObservableLike`**

## Table of contents

### Properties

- [T](enumerableObservable.EnumerableObservableLike.md#t)
- [TContainerOf](enumerableObservable.EnumerableObservableLike.md#tcontainerof)
- [TLiftableContainerState](enumerableObservable.EnumerableObservableLike.md#tliftablecontainerstate)
- [observableType](enumerableObservable.EnumerableObservableLike.md#observabletype)

### Methods

- [sinkInto](enumerableObservable.EnumerableObservableLike.md#sinkinto)

## Properties

### T

• **T**: `unknown`

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[T](observable.ObservableLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`EnumerableObservableLike`](enumerableObservable.EnumerableObservableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](observable.ObservableLike.md).[TContainerOf](observable.ObservableLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`ObserverLike`](observer.ObserverLike.md)<`unknown`\>

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[TLiftableContainerState](observable.ObservableLike.md#tliftablecontainerstate)

___

### observableType

• `Readonly` **observableType**: ``2``

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
