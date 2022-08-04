[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / share

# Interface: share

[rx/ObservableLike](../modules/rx_ObservableLike.md).share

## Callable

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

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
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>
