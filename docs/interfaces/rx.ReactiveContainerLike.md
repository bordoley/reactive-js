[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ReactiveContainerLike

# Interface: ReactiveContainerLike<TSink\>

[rx](../modules/rx.md).ReactiveContainerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSink` | extends [`DisposableLike`](util.DisposableLike.md) |

## Hierarchy

- [`StatefulContainerLike`](containers.StatefulContainerLike.md)

  ↳ **`ReactiveContainerLike`**

  ↳↳ [`ObservableLike`](rx.ObservableLike.md)

  ↳↳ [`RunnableLike`](rx.RunnableLike.md)

## Table of contents

### Properties

- [[ContainerLike\_T]](rx.ReactiveContainerLike.md#[containerlike_t])
- [[ContainerLike\_type]](rx.ReactiveContainerLike.md#[containerlike_type])
- [[StableContainerLike\_state]](rx.ReactiveContainerLike.md#[stablecontainerlike_state])

### Methods

- [[ReactiveContainerLike\_sinkInto]](rx.ReactiveContainerLike.md#[reactivecontainerlike_sinkinto])

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

### [ReactiveContainerLike\_sinkInto]

▸ **[ReactiveContainerLike_sinkInto]**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

`void`
