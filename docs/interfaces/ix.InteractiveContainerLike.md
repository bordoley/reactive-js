[Reactive-JS](../README.md) / [ix](../modules/ix.md) / InteractiveContainerLike

# Interface: InteractiveContainerLike<TSource, TCtx\>

[ix](../modules/ix.md).InteractiveContainerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`DisposableLike`](util.DisposableLike.md) |
| `TCtx` | `void` |

## Hierarchy

- [`StatefulContainerLike`](containers.StatefulContainerLike.md)

  ↳ **`InteractiveContainerLike`**

  ↳↳ [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)

  ↳↳ [`EnumerableLike`](ix.EnumerableLike.md)

## Table of contents

### Properties

- [[ContainerLike\_T]](ix.InteractiveContainerLike.md#[containerlike_t])
- [[ContainerLike\_type]](ix.InteractiveContainerLike.md#[containerlike_type])
- [[StableContainerLike\_state]](ix.InteractiveContainerLike.md#[stablecontainerlike_state])

### Methods

- [[InteractiveContainerLike\_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])

## Properties

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[[ContainerLike_T]](containers.StatefulContainerLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: `unknown`

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[[ContainerLike_type]](containers.StatefulContainerLike.md#[containerlike_type])

___

### [StableContainerLike\_state]

• `Optional` `Readonly` **[StableContainerLike\_state]**: [`DisposableLike`](util.DisposableLike.md)

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[[StableContainerLike_state]](containers.StatefulContainerLike.md#[stablecontainerlike_state])

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`ctx`): `TSource`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `TCtx` |

#### Returns

`TSource`
