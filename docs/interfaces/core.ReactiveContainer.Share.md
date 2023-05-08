[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / Share

# Interface: Share<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).Share

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Transform Methods

- [share](core.ReactiveContainer.Share.md#share)

## Transform Methods

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>
