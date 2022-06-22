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

## Implements

- [`SourceLike`](../interfaces/source.SourceLike.md)

## Table of contents

### Constructors

- [constructor](source.AbstractSource.md#constructor)

### Accessors

- [T](source.AbstractSource.md#t)
- [liftedStateType](source.AbstractSource.md#liftedstatetype)
- [type](source.AbstractSource.md#type)

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

### liftedStateType

• `get` **liftedStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[liftedStateType](../interfaces/source.SourceLike.md#liftedstatetype)

#### Inherited from

AbstractLiftable.liftedStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[type](../interfaces/source.SourceLike.md#type)

#### Inherited from

AbstractLiftable.type

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
