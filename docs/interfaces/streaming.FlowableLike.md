[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / FlowableLike

# Interface: FlowableLike<T\>

[streaming](../modules/streaming.md).FlowableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<[`FlowMode`](../modules/streaming.md#flowmode), `T`, [`FlowableStreamLike`](streaming.FlowableStreamLike.md)<`T`\>\>

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`FlowableLike`**

## Table of contents

### Properties

- [T](streaming.FlowableLike.md#t)
- [TContainerOf](streaming.FlowableLike.md#tcontainerof)

### Methods

- [[StreamableLike\_stream]](streaming.FlowableLike.md#[streamablelike_stream])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[ContainerLike](containers.ContainerLike.md).[T](containers.ContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`FlowableLike`](streaming.FlowableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[TContainerOf](containers.ContainerLike.md#tcontainerof)

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): [`FlowableStreamLike`](streaming.FlowableStreamLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`FlowableStreamLike`](streaming.FlowableStreamLike.md)<`T`\>

#### Inherited from

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_stream]](streaming.StreamableLike.md#[streamablelike_stream])
