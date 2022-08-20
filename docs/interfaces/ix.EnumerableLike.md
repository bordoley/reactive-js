[Reactive-JS](../README.md) / [ix](../modules/ix.md) / EnumerableLike

# Interface: EnumerableLike<T\>

[ix](../modules/ix.md).EnumerableLike

Interface for iterating a Container of items.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`InteractiveContainerLike`](ix.InteractiveContainerLike.md)<[`EnumeratorLike`](ix.EnumeratorLike.md)<`T`\>\>

  ↳ **`EnumerableLike`**

## Table of contents

### Properties

- [[ContainerLike\_T]](ix.EnumerableLike.md#[containerlike_t])
- [[ContainerLike\_type]](ix.EnumerableLike.md#[containerlike_type])
- [[StatefulContainerLike\_state]](ix.EnumerableLike.md#[statefulcontainerlike_state])

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

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`EnumeratorLike`](ix.EnumeratorLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[StatefulContainerLike_state]](ix.InteractiveContainerLike.md#[statefulcontainerlike_state])

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`ctx`): [`EnumeratorLike`](ix.EnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `void` |

#### Returns

[`EnumeratorLike`](ix.EnumeratorLike.md)<`T`\>

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[InteractiveContainerLike_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])
