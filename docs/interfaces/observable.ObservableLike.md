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
- [`AbstractObservable`](../classes/observable.AbstractObservable.md)

## Table of contents

### Properties

- [T](observable.ObservableLike.md#t)
- [isEnumerable](observable.ObservableLike.md#isenumerable)
- [liftedStateType](observable.ObservableLike.md#liftedstatetype)
- [type](observable.ObservableLike.md#type)

### Methods

- [sink](observable.ObservableLike.md#sink)

## Properties

### T

• **T**: `unknown`

#### Overrides

[SourceLike](source.SourceLike.md).[T](source.SourceLike.md#t)

___

### isEnumerable

• `Optional` `Readonly` **isEnumerable**: `boolean`

___

### liftedStateType

• `Readonly` **liftedStateType**: [`Observer`](../classes/observer.Observer.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[liftedStateType](source.SourceLike.md#liftedstatetype)

___

### type

• `Readonly` **type**: [`ObservableLike`](observable.ObservableLike.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[type](source.SourceLike.md#type)

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

#### Overrides

[SourceLike](source.SourceLike.md).[sink](source.SourceLike.md#sink)
