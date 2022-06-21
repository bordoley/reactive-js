[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / RunnableLike

# Interface: RunnableLike<T\>

[runnable](../modules/runnable.md).RunnableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SourceLike`](source.SourceLike.md)

  ↳ **`RunnableLike`**

## Table of contents

### Properties

- [T](runnable.RunnableLike.md#t)
- [sinkType](runnable.RunnableLike.md#sinktype)
- [type](runnable.RunnableLike.md#type)

### Methods

- [sink](runnable.RunnableLike.md#sink)

## Properties

### T

• **T**: `unknown`

#### Overrides

[SourceLike](source.SourceLike.md).[T](source.SourceLike.md#t)

___

### sinkType

• `Readonly` **sinkType**: [`Sink`](../classes/runnable.Sink.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[sinkType](source.SourceLike.md#sinktype)

___

### type

• `Readonly` **type**: [`RunnableLike`](runnable.RunnableLike.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[type](source.SourceLike.md#type)

## Methods

### sink

▸ **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`RunnableLike`](runnable.RunnableLike.md)<[`T`](runnable.RunnableLike.md#t)\> |
| `sink` | [`Sink`](../classes/runnable.Sink.md)<[`T`](runnable.RunnableLike.md#t)\> |

#### Returns

`void`

#### Overrides

[SourceLike](source.SourceLike.md).[sink](source.SourceLike.md#sink)
