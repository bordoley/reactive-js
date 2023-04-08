[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / FlowableLike

# Interface: FlowableLike<T\>

[streaming](../modules/streaming.md).FlowableLike

A container that returns an `ObservableLike` which supports
imperative flow control when subscribed to.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`boolean` \| [`Updater`](../modules/functions.md#updater)<`boolean`\>, `T`, [`FlowableStreamLike`](streaming.FlowableStreamLike.md)<`T`\>\>

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`FlowableLike`**

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_type]](streaming.FlowableLike.md#[___containerlike_type])
- [[\_\_\_StreamableLike\_isEnumerable]](streaming.FlowableLike.md#[___streamablelike_isenumerable])
- [[\_\_\_StreamableLike\_isInteractive]](streaming.FlowableLike.md#[___streamablelike_isinteractive])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`FlowableLike`](streaming.FlowableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_type]](containers.ContainerLike.md#[___containerlike_type])

___

### [\_\_\_StreamableLike\_isEnumerable]

• `Readonly` **[\_\_\_StreamableLike\_isEnumerable]**: ``false``

Indicates if the resulting is stream is enumerable,
producting exactly one value synchronously for every
enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[___StreamableLike_isEnumerable]](streaming.StreamableLike.md#[___streamablelike_isenumerable])

___

### [\_\_\_StreamableLike\_isInteractive]

• `Readonly` **[\_\_\_StreamableLike\_isInteractive]**: ``false``

Indicates if the resulting is stream is interactive,
producing exactly one value for every enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[___StreamableLike_isInteractive]](streaming.StreamableLike.md#[___streamablelike_isinteractive])
