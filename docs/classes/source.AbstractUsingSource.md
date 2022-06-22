[Reactive-JS](../README.md) / [source](../modules/source.md) / AbstractUsingSource

# Class: AbstractUsingSource<C, TResource, T\>

[source](../modules/source.md).AbstractUsingSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md) |
| `TResource` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

## Hierarchy

- [`AbstractSource`](source.AbstractSource.md)<`T`, [`SinkOf`](../modules/source.md#sinkof)<`C`, `T`\>\>

  ↳ **`AbstractUsingSource`**

## Table of contents

### Constructors

- [constructor](source.AbstractUsingSource.md#constructor)

### Accessors

- [T](source.AbstractUsingSource.md#t)
- [sinkType](source.AbstractUsingSource.md#sinktype)
- [type](source.AbstractUsingSource.md#type)

### Methods

- [sink](source.AbstractUsingSource.md#sink)

## Constructors

### constructor

• **new AbstractUsingSource**<`C`, `TResource`, `T`\>(`resourceFactory`, `sourceFactory`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `TResource` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Function1`](../modules/functions.md#function1)<[`SinkOf`](../modules/source.md#sinkof)<`C`, `T`\>, `TResource` \| readonly `TResource`[]\> |
| `sourceFactory` | (...`resources`: readonly `TResource`[]) => `C` |

#### Overrides

[AbstractSource](source.AbstractSource.md).[constructor](source.AbstractSource.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

AbstractSource.T

___

### sinkType

• `get` **sinkType**(): `TSink`

#### Returns

`TSink`

#### Inherited from

AbstractSource.sinkType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Inherited from

AbstractSource.type

## Methods

### sink

▸ **sink**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`SinkOf`](../modules/source.md#sinkof)<`C`, `T`\> |

#### Returns

`void`

#### Overrides

[AbstractSource](source.AbstractSource.md).[sink](source.AbstractSource.md#sink)
