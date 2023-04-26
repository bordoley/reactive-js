[Reactive-JS](../README.md) / [rx](../modules/rx.md) / EnumerateAsync

# Interface: EnumerateAsync<C, O\>

[rx](../modules/rx.md).EnumerateAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Transform Methods

- [enumerateAsync](rx.EnumerateAsync.md#enumerateasync)

## Transform Methods

### enumerateAsync

▸ **enumerateAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`InteractiveObservableLike`](rx.InteractiveObservableLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`InteractiveObservableLike`](rx.InteractiveObservableLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>
