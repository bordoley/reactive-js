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

- [[ContainerLike\_type]](streaming.FlowableLike.md#[containerlike_type])
- [[StreamableLike\_isEnumerable]](streaming.FlowableLike.md#[streamablelike_isenumerable])
- [[StreamableLike\_isInteractive]](streaming.FlowableLike.md#[streamablelike_isinteractive])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`FlowableLike`](streaming.FlowableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_type]](containers.ContainerLike.md#[containerlike_type])

___

### [StreamableLike\_isEnumerable]

• `Readonly` **[StreamableLike\_isEnumerable]**: ``false``

Indicates if the resulting is stream is enumerable,
producting exactly one value synchronously for every
enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_isEnumerable]](streaming.StreamableLike.md#[streamablelike_isenumerable])

___

### [StreamableLike\_isInteractive]

• `Readonly` **[StreamableLike\_isInteractive]**: ``false``

Indicates if the resulting is stream is interactive,
producing exactly one value for every enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_isInteractive]](streaming.StreamableLike.md#[streamablelike_isinteractive])
