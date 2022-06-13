[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / EnumerableLike

# Interface: EnumerableLike<T\>

[enumerable](../modules/enumerable.md).EnumerableLike

Interface for iterating a Container of items.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`EnumerableLike`**

## Table of contents

### Properties

- [T](enumerable.EnumerableLike.md#t)
- [type](enumerable.EnumerableLike.md#type)

### Methods

- [enumerate](enumerable.EnumerableLike.md#enumerate)

## Properties

### T

• **T**: `unknown`

#### Overrides

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### type

• `Readonly` **type**: [`EnumerableLike`](enumerable.EnumerableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](container.ContainerLike.md).[type](container.ContainerLike.md#type)

## Methods

### enumerate

▸ **enumerate**(`this`): [`EnumeratorLike`](enumerable.EnumeratorLike.md)<[`T`](enumerable.EnumerableLike.md#t)\>

Returns an `EnumeratorLike` to iterate through the Container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EnumerableLike`](enumerable.EnumerableLike.md)<[`T`](enumerable.EnumerableLike.md#t)\> |

#### Returns

[`EnumeratorLike`](enumerable.EnumeratorLike.md)<[`T`](enumerable.EnumerableLike.md#t)\>
