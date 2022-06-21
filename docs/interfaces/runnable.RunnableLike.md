[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / RunnableLike

# Interface: RunnableLike<T\>

[runnable](../modules/runnable.md).RunnableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SourceLike`](sink.SourceLike.md)

  ↳ **`RunnableLike`**

## Table of contents

### Properties

- [T](runnable.RunnableLike.md#t)
- [sinkType](runnable.RunnableLike.md#sinktype)
- [type](runnable.RunnableLike.md#type)

### Methods

- [run](runnable.RunnableLike.md#run)

## Properties

### T

• **T**: `unknown`

#### Overrides

[SourceLike](sink.SourceLike.md).[T](sink.SourceLike.md#t)

___

### sinkType

• `Readonly` **sinkType**: [`Sink`](../classes/runnable.Sink.md)<`unknown`\>

#### Overrides

[SourceLike](sink.SourceLike.md).[sinkType](sink.SourceLike.md#sinktype)

___

### type

• `Readonly` **type**: [`RunnableLike`](runnable.RunnableLike.md)<`unknown`\>

#### Overrides

[SourceLike](sink.SourceLike.md).[type](sink.SourceLike.md#type)

## Methods

### run

▸ **run**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`RunnableLike`](runnable.RunnableLike.md)<[`T`](runnable.RunnableLike.md#t)\> |
| `sink` | [`Sink`](../classes/runnable.Sink.md)<[`T`](runnable.RunnableLike.md#t)\> |

#### Returns

`void`
