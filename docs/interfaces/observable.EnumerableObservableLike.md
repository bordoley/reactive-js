[Reactive-JS](../README.md) / [observable](../modules/observable.md) / EnumerableObservableLike

# Interface: EnumerableObservableLike<T\>

[observable](../modules/observable.md).EnumerableObservableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ObservableLike`](observable.ObservableLike.md)<`T`\>

  ↳ **`EnumerableObservableLike`**

## Table of contents

### Properties

- [T](observable.EnumerableObservableLike.md#t)
- [TContainerOf](observable.EnumerableObservableLike.md#tcontainerof)
- [TLiftableContainerState](observable.EnumerableObservableLike.md#tliftablecontainerstate)
- [observableType](observable.EnumerableObservableLike.md#observabletype)

### Methods

- [sink](observable.EnumerableObservableLike.md#sink)

## Properties

### T

• **T**: `unknown`

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[T](observable.ObservableLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`EnumerableObservableLike`](observable.EnumerableObservableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](observable.ObservableLike.md).[TContainerOf](observable.ObservableLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`Observer`](../classes/observer.Observer.md)<`unknown`\>

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[TLiftableContainerState](observable.ObservableLike.md#tliftablecontainerstate)

___

### observableType

• `Readonly` **observableType**: ``2``

#### Overrides

[ObservableLike](observable.ObservableLike.md).[observableType](observable.ObservableLike.md#observabletype)

## Methods

### sink

▸ **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ObservableLike`](observable.ObservableLike.md)<`T`\> |
| `sink` | [`Observer`](../classes/observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[sink](observable.ObservableLike.md#sink)
