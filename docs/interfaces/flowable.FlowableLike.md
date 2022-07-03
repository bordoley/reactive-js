[Reactive-JS](../README.md) / [flowable](../modules/flowable.md) / FlowableLike

# Interface: FlowableLike<T, TStream\>

[flowable](../modules/flowable.md).FlowableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TStream` | extends [`FlowableStreamLike`](flowable.FlowableStreamLike.md)<[`T`](flowable.FlowableLike.md#t)\> = [`FlowableStreamLike`](flowable.FlowableStreamLike.md)<[`T`](flowable.FlowableLike.md#t)\> |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/flowable.md#flowmode), [`T`](flowable.FlowableLike.md#t), `TStream`\>

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`FlowableLike`**

## Table of contents

### Properties

- [T](flowable.FlowableLike.md#t)
- [TContainerOf](flowable.FlowableLike.md#tcontainerof)

### Methods

- [stream](flowable.FlowableLike.md#stream)

## Properties

### T

• **T**: `unknown`

#### Overrides

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`FlowableLike`](flowable.FlowableLike.md)<`unknown`, [`FlowableStreamLike`](flowable.FlowableStreamLike.md)<`unknown`\>\>

#### Overrides

[ContainerLike](container.ContainerLike.md).[TContainerOf](container.ContainerLike.md#tcontainerof)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/flowable.md#flowmode), [`T`](flowable.FlowableLike.md#t), `TStream`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
