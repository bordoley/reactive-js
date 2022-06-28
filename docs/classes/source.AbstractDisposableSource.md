[Reactive-JS](../README.md) / [source](../modules/source.md) / AbstractDisposableSource

# Class: AbstractDisposableSource<T, TSink\>

[source](../modules/source.md).AbstractDisposableSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\> |

## Hierarchy

- [`AbstractDisposableLiftable`](liftable.AbstractDisposableLiftable.md)<`TSink`\>

  ↳ **`AbstractDisposableSource`**

  ↳↳ [`AbstractDisposableObservable`](observable.AbstractDisposableObservable.md)

## Implements

- [`SourceLike`](../interfaces/source.SourceLike.md)

## Table of contents

### Constructors

- [constructor](source.AbstractDisposableSource.md#constructor)

### Accessors

- [T](source.AbstractDisposableSource.md#t)
- [liftableStateType](source.AbstractDisposableSource.md#liftablestatetype)
- [type](source.AbstractDisposableSource.md#type)

### Methods

- [sink](source.AbstractDisposableSource.md#sink)

## Constructors

### constructor

• **new AbstractDisposableSource**<`T`, `TSink`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`, `TSink`\> |

#### Inherited from

[AbstractDisposableLiftable](liftable.AbstractDisposableLiftable.md).[constructor](liftable.AbstractDisposableLiftable.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[T](../interfaces/source.SourceLike.md#t)

#### Inherited from

AbstractDisposableLiftable.T

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[liftableStateType](../interfaces/source.SourceLike.md#liftablestatetype)

#### Inherited from

AbstractDisposableLiftable.liftableStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[type](../interfaces/source.SourceLike.md#type)

#### Inherited from

AbstractDisposableLiftable.type

## Methods

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDisposableSource`](source.AbstractDisposableSource.md)<`T`, `TSink`\> |
| `sink` | `TSink` |

#### Returns

`void`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[sink](../interfaces/source.SourceLike.md#sink)
