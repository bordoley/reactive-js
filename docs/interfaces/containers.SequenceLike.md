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

▸ **SequenceLike**(): [`Optional`](../modules/functions.md#optional)<{ `[SequenceLike_data]`: `T` ; `[SequenceLike_next]`: [`SequenceLike`](containers.SequenceLike.md)<`T`\>  }\>

#### Returns

[`Optional`](../modules/functions.md#optional)<{ `[SequenceLike_data]`: `T` ; `[SequenceLike_next]`: [`SequenceLike`](containers.SequenceLike.md)<`T`\>  }\>

## Table of contents

### Properties

- [[ContainerLike\_T]](containers.SequenceLike.md#[containerlike_t])
- [[ContainerLike\_type]](containers.SequenceLike.md#[containerlike_type])

## Properties

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_T]](containers.ContainerLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`SequenceLike`](containers.SequenceLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_type]](containers.ContainerLike.md#[containerlike_type])
