[Reactive-JS](../README.md) / [rx](../modules/rx.md) / RunnableLike

# Interface: RunnableLike<T\>

[rx](../modules/rx.md).RunnableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveContainerLike`](rx.ReactiveContainerLike.md)<[`SinkLike`](util.SinkLike.md)<`T`\>\>

  ↳ **`RunnableLike`**

## Table of contents

### Properties

- [[ContainerLike\_T]](rx.RunnableLike.md#[containerlike_t])
- [[ContainerLike\_type]](rx.RunnableLike.md#[containerlike_type])
- [[StableContainerLike\_state]](rx.RunnableLike.md#[stablecontainerlike_state])

### Methods

- [[ReactiveContainerLike\_sinkInto]](rx.RunnableLike.md#[reactivecontainerlike_sinkinto])

## Properties

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[[ContainerLike_T]](rx.ReactiveContainerLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`RunnableLike`](rx.RunnableLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[[ContainerLike_type]](rx.ReactiveContainerLike.md#[containerlike_type])

___

### [StableContainerLike\_state]

• `Optional` `Readonly` **[StableContainerLike\_state]**: [`SinkLike`](util.SinkLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[[StableContainerLike_state]](rx.ReactiveContainerLike.md#[stablecontainerlike_state])

## Methods

### [ReactiveContainerLike\_sinkInto]

▸ **[ReactiveContainerLike_sinkInto]**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`SinkLike`](util.SinkLike.md)<`T`\> |

#### Returns

`void`

#### Inherited from

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[[ReactiveContainerLike_sinkInto]](rx.ReactiveContainerLike.md#[reactivecontainerlike_sinkinto])
