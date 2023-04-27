[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ToInteractiveObservable

# Interface: ToInteractiveObservable<C, O\>

[rx](../modules/rx.md).ToInteractiveObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Transform Methods

- [toInteractiveObservable](rx.ToInteractiveObservable.md#tointeractiveobservable)

## Transform Methods

### toInteractiveObservable

▸ **toInteractiveObservable**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`InteractiveObservableLike`](rx.InteractiveObservableLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>

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
