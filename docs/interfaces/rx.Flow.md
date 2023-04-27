[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Flow

# Interface: Flow<C, O\>

[rx](../modules/rx.md).Flow

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Transform Methods

- [flow](rx.Flow.md#flow)

## Transform Methods

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`PauseableObservableLike`](rx.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `O` & { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number`  } |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`PauseableObservableLike`](rx.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>
