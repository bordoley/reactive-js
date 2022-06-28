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
- [liftedStateType](runnable.RunnableLike.md#liftedstatetype)
- [type](runnable.RunnableLike.md#type)

### Methods

- [sink](runnable.RunnableLike.md#sink)

## Properties

### T

• **T**: `unknown`

#### Overrides

[SourceLike](source.SourceLike.md).[T](source.SourceLike.md#t)

___

### liftedStateType

• `Readonly` **liftedStateType**: [`RunnableSink`](../classes/runnableSink.RunnableSink.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[liftedStateType](source.SourceLike.md#liftedstatetype)

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
| `sink` | [`RunnableSink`](../classes/runnableSink.RunnableSink.md)<[`T`](runnable.RunnableLike.md#t)\> |

#### Returns

`void`

#### Overrides

[SourceLike](source.SourceLike.md).[sink](source.SourceLike.md#sink)
