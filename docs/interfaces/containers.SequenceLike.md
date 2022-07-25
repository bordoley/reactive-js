[Reactive-JS](../README.md) / [containers](../modules/containers.md) / SequenceLike

# Interface: SequenceLike<T\>

[containers](../modules/containers.md).SequenceLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`SequenceLike`**

## Callable

### SequenceLike

▸ **SequenceLike**(): [`Option`](../modules/functions.md#option)<{ `data`: `T` ; `next`: [`SequenceLike`](containers.SequenceLike.md)<`T`\>  }\>

#### Returns

[`Option`](../modules/functions.md#option)<{ `data`: `T` ; `next`: [`SequenceLike`](containers.SequenceLike.md)<`T`\>  }\>

## Table of contents

### Properties

- [T](containers.SequenceLike.md#t)
- [TContainerOf](containers.SequenceLike.md#tcontainerof)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[ContainerLike](containers.ContainerLike.md).[T](containers.ContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`SequenceLike`](containers.SequenceLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[TContainerOf](containers.ContainerLike.md#tcontainerof)
