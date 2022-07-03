[Reactive-JS](../README.md) / [source](../modules/source.md) / AbstractSource

# Class: AbstractSource<T, TSink\>

[source](../modules/source.md).AbstractSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\> |

## Hierarchy

- [`AbstractLiftable`](liftable.AbstractLiftable.md)<`TSink`\>

  ↳ **`AbstractSource`**

  ↳↳ [`AbstractObservable`](observable.AbstractObservable.md)

## Implements

- [`SourceLike`](../interfaces/source.SourceLike.md)

## Table of contents

### Constructors

- [constructor](source.AbstractSource.md#constructor)

### Accessors

- [T](source.AbstractSource.md#t)
- [TContainerOf](source.AbstractSource.md#tcontainerof)
- [TLiftableState](source.AbstractSource.md#tliftablestate)

### Methods

- [sink](source.AbstractSource.md#sink)

## Constructors

### constructor

• **new AbstractSource**<`T`, `TSink`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`, `TSink`\> |

#### Inherited from

[AbstractLiftable](liftable.AbstractLiftable.md).[constructor](liftable.AbstractLiftable.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[T](../interfaces/source.SourceLike.md#t)

#### Inherited from

AbstractLiftable.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[TContainerOf](../interfaces/source.SourceLike.md#tcontainerof)

#### Inherited from

AbstractLiftable.TContainerOf

___

### TLiftableState

• `get` **TLiftableState**(): `TState`

#### Returns

`TState`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[TLiftableState](../interfaces/source.SourceLike.md#tliftablestate)

#### Inherited from

AbstractLiftable.TLiftableState

## Methods

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractSource`](source.AbstractSource.md)<`T`, `TSink`\> |
| `sink` | `TSink` |

#### Returns

`void`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[sink](../interfaces/source.SourceLike.md#sink)
