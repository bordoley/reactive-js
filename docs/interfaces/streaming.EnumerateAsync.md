[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / EnumerateAsync

# Interface: EnumerateAsync<C, O\>

[streaming](../modules/streaming.md).EnumerateAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Methods

- [enumerateAsync](streaming.EnumerateAsync.md#enumerateasync)

## Methods

### enumerateAsync

▸ **enumerateAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`StreamLike`](streaming.StreamLike.md)<`void`, `T`\> & [`DisposableLike`](util.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`StreamLike`](streaming.StreamLike.md)<`void`, `T`\> & [`DisposableLike`](util.DisposableLike.md)\>
