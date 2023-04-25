[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / Flow

# Interface: Flow<C, O\>

[streaming](../modules/streaming.md).Flow

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Methods

- [flow](streaming.Flow.md#flow)

## Methods

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`FlowableStreamLike`](streaming.FlowableStreamLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `O` & { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `replay?`: `number`  } |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`FlowableStreamLike`](streaming.FlowableStreamLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>
