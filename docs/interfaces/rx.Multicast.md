[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Multicast

# Interface: Multicast<C, O\>

[rx](../modules/rx.md).Multicast

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Transform Methods

- [multicast](rx.Multicast.md#multicast)

## Transform Methods

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `O` & { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `replay?`: `number`  } | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>
