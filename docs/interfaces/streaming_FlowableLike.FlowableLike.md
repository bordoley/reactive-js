[Reactive-JS](../README.md) / [streaming/FlowableLike](../modules/streaming_FlowableLike.md) / FlowableLike

# Interface: FlowableLike<T, TStream\>

[streaming/FlowableLike](../modules/streaming_FlowableLike.md).FlowableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TStream` | extends [`FlowableStreamLike`](streaming_FlowableLike.FlowableStreamLike.md)<`T`\> = [`FlowableStreamLike`](streaming_FlowableLike.FlowableStreamLike.md)<`T`\> |

## Hierarchy

- [`StreamableLike`](streaming_StreamableLike.StreamableLike.md)<[`FlowMode`](../modules/streaming_FlowableLike.md#flowmode), `T`, `TStream`\>

- [`ContainerLike`](containers_ContainerLike.ContainerLike.md)<`T`\>

  ↳ **`FlowableLike`**

## Table of contents

### Properties

- [T](streaming_FlowableLike.FlowableLike.md#t)
- [TContainerOf](streaming_FlowableLike.FlowableLike.md#tcontainerof)

### Methods

- [[StreamableLike\_stream]](streaming_FlowableLike.FlowableLike.md#[streamablelike_stream])

## Properties

### T

• **T**: `undefined` \| `T`

#### Inherited from

[ContainerLike](containers_ContainerLike.ContainerLike.md).[T](containers_ContainerLike.ContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`FlowableStreamLike`](streaming_FlowableLike.FlowableStreamLike.md)<`undefined` \| `T`\>

#### Overrides

[ContainerLike](containers_ContainerLike.ContainerLike.md).[TContainerOf](containers_ContainerLike.ContainerLike.md#tcontainerof)

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`

#### Inherited from

[StreamableLike](streaming_StreamableLike.StreamableLike.md).[[StreamableLike_stream]](streaming_StreamableLike.StreamableLike.md#[streamablelike_stream])
