[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / Multicast

# Interface: Multicast<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).Multicast

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](rx.ObservableContainer.md) |

## Table of contents

### Transform Methods

- [multicast](rx.Reactive.Multicast.md#multicast)

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
| `scheduler` | [`SchedulerLike`](util.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](util.DisposableLike.md)\>
