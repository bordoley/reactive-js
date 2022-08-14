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

- [[ContainerLike\_T]](streaming.FlowableLike.md#[containerlike_t])
- [[ContainerLike\_type]](streaming.FlowableLike.md#[containerlike_type])

### Methods

- [[StreamableLike\_stream]](streaming.FlowableLike.md#[streamablelike_stream])

## Properties

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_T]](containers.ContainerLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`FlowableLike`](streaming.FlowableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_type]](containers.ContainerLike.md#[containerlike_type])

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
