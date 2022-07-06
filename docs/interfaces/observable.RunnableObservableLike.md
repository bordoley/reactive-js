[Reactive-JS](../README.md) / [observable](../modules/observable.md) / RunnableObservableLike

# Interface: RunnableObservableLike<T\>

[observable](../modules/observable.md).RunnableObservableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ObservableLike`](observable.ObservableLike.md)<`T`\>

  ↳ **`RunnableObservableLike`**

## Table of contents

### Properties

- [T](observable.RunnableObservableLike.md#t)
- [TContainerOf](observable.RunnableObservableLike.md#tcontainerof)
- [TLiftableContainerState](observable.RunnableObservableLike.md#tliftablecontainerstate)
- [observableType](observable.RunnableObservableLike.md#observabletype)

### Methods

- [sink](observable.RunnableObservableLike.md#sink)

## Properties

### T

• **T**: `unknown`

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[T](observable.ObservableLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`RunnableObservableLike`](observable.RunnableObservableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](observable.ObservableLike.md).[TContainerOf](observable.ObservableLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`Observer`](../classes/observer.Observer.md)<`unknown`\>

#### Inherited from

[ObservableLike](observable.ObservableLike.md).[TLiftableContainerState](observable.ObservableLike.md#tliftablecontainerstate)

___

### observableType

• `Readonly` **observableType**: ``1``

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
