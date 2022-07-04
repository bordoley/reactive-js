[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / RunnableLike

# Interface: RunnableLike<T\>

[runnable](../modules/runnable.md).RunnableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ReactiveContainerLike`](reactive.ReactiveContainerLike.md)

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

[ReactiveContainerLike](reactive.ReactiveContainerLike.md).[T](reactive.ReactiveContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`RunnableLike`](runnable.RunnableLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](reactive.ReactiveContainerLike.md).[TContainerOf](reactive.ReactiveContainerLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`RunnableSink`](../classes/runnableSink.RunnableSink.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](reactive.ReactiveContainerLike.md).[TLiftableState](reactive.ReactiveContainerLike.md#tliftablestate)

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

[ReactiveContainerLike](reactive.ReactiveContainerLike.md).[sink](reactive.ReactiveContainerLike.md#sink)
