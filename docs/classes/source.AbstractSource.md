[Reactive-JS](../README.md) / [source](../modules/source.md) / AbstractSource

# Class: AbstractSource<T, TSink\>

[source](../modules/source.md).AbstractSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\> |

## Hierarchy

- [`AbstractContainer`](container.AbstractContainer.md)

  ↳ **`AbstractSource`**

## Implements

- [`SourceLike`](../interfaces/source.SourceLike.md)

## Table of contents

### Constructors

- [constructor](source.AbstractSource.md#constructor)

### Accessors

- [T](source.AbstractSource.md#t)
- [sinkType](source.AbstractSource.md#sinktype)
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

[AbstractContainer](container.AbstractContainer.md).[constructor](container.AbstractContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[T](../interfaces/source.SourceLike.md#t)

#### Inherited from

AbstractContainer.T

___

### sinkType

• `get` **sinkType**(): `TSink`

#### Returns

`TSink`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[sinkType](../interfaces/source.SourceLike.md#sinktype)

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[type](../interfaces/source.SourceLike.md#type)

#### Inherited from

AbstractContainer.type

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
