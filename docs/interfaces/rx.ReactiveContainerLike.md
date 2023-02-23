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

  ↳↳ [`RunnableLike`](rx.RunnableLike.md)

  ↳↳ [`ObservableLike`](rx.ObservableLike.md)

## Table of contents

### Properties

- [[StatefulContainerLike\_variance]](rx.ReactiveContainerLike.md#[statefulcontainerlike_variance])

### Methods

- [[ReactiveContainerLike\_sinkInto]](rx.ReactiveContainerLike.md#[reactivecontainerlike_sinkinto])

## Properties

### [StatefulContainerLike\_variance]

• `Optional` `Readonly` **[StatefulContainerLike\_variance]**: ``"reactive"``

#### Overrides

[StatefulContainerLike](containers.StatefulContainerLike.md).[[StatefulContainerLike_variance]](containers.StatefulContainerLike.md#[statefulcontainerlike_variance])

## Methods

### [ReactiveContainerLike\_sinkInto]

▸ **[ReactiveContainerLike_sinkInto]**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

`void`
