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
- [TContainerOf](runnable.RunnableLike.md#tcontainerof)
- [TLiftableState](runnable.RunnableLike.md#tliftablestate)

### Methods

- [sink](runnable.RunnableLike.md#sink)

## Properties

### T

• **T**: `unknown`

#### Overrides

[SourceLike](source.SourceLike.md).[T](source.SourceLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`RunnableLike`](runnable.RunnableLike.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[TContainerOf](source.SourceLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`RunnableSink`](../classes/runnableSink.RunnableSink.md)<`unknown`\>

#### Overrides

[SourceLike](source.SourceLike.md).[TLiftableState](source.SourceLike.md#tliftablestate)

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
