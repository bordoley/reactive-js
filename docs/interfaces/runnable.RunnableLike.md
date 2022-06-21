[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / RunnableLike

# Interface: RunnableLike<T\>

[runnable](../modules/runnable.md).RunnableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`RunnableLike`**

## Table of contents

### Properties

- [T](runnable.RunnableLike.md#t)
- [type](runnable.RunnableLike.md#type)

### Methods

- [run](runnable.RunnableLike.md#run)

## Properties

### T

• **T**: `unknown`

#### Overrides

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### type

• `Readonly` **type**: [`RunnableLike`](runnable.RunnableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](container.ContainerLike.md).[type](container.ContainerLike.md#type)

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
