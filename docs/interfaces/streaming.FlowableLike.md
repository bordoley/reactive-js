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

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

  ↳ **`FlowableLike`**

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_type]](streaming.FlowableLike.md#[___containerlike_type])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`FlowableLike`](streaming.FlowableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[___ContainerLike_type]](rx.ObservableLike.md#[___containerlike_type])
