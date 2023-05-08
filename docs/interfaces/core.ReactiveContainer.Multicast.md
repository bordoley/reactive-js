[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / Multicast

# Interface: Multicast<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).Multicast

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Transform Methods

- [multicast](core.ReactiveContainer.Multicast.md#multicast)

## Transform Methods

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>
