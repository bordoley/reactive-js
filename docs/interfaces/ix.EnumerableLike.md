[Reactive-JS](../README.md) / [ix](../modules/ix.md) / EnumerableLike

# Interface: EnumerableLike<T\>

[ix](../modules/ix.md).EnumerableLike

Interface for iterating a Container of items.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`InteractiveContainerLike`](ix.InteractiveContainerLike.md)<[`EnumeratorLike`](util.EnumeratorLike.md)<`T`\>\>

  ↳ **`EnumerableLike`**

## Table of contents

### Properties

- [[ContainerLike\_T]](ix.EnumerableLike.md#[containerlike_t])
- [[ContainerLike\_type]](ix.EnumerableLike.md#[containerlike_type])
- [[StableContainerLike\_state]](ix.EnumerableLike.md#[stablecontainerlike_state])

### Methods

- [[InteractiveContainerLike\_interact]](ix.EnumerableLike.md#[interactivecontainerlike_interact])

## Properties

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[ContainerLike_T]](ix.InteractiveContainerLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`EnumerableLike`](ix.EnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[ContainerLike_type]](ix.InteractiveContainerLike.md#[containerlike_type])

___

### [StableContainerLike\_state]

• `Optional` `Readonly` **[StableContainerLike\_state]**: [`EnumeratorLike`](util.EnumeratorLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[StableContainerLike_state]](ix.InteractiveContainerLike.md#[stablecontainerlike_state])

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`ctx`): [`EnumeratorLike`](util.EnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `void` |

#### Returns

[`EnumeratorLike`](util.EnumeratorLike.md)<`T`\>

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[InteractiveContainerLike_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])
