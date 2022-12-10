[Reactive-JS](../README.md) / rx/ObserverLike

# Module: rx/ObserverLike

## Table of contents

### Functions

- [getDispatcher](rx_ObserverLike.md#getdispatcher)
- [getScheduler](rx_ObserverLike.md#getscheduler)
- [schedule](rx_ObserverLike.md#schedule)

## Functions

### getDispatcher

▸ **getDispatcher**<`T`\>(`observer`): [`DispatcherLike`](../interfaces/scheduling.DispatcherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`\> |

#### Returns

[`DispatcherLike`](../interfaces/scheduling.DispatcherLike.md)<`T`\>

___

### getScheduler

▸ **getScheduler**<`T`\>(`observer`): [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`\> |

#### Returns

[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

___

### schedule

▸ **schedule**(`f`, `options?`): [`Function1`](functions.md#function1)<[`ObserverLike`](../interfaces/rx.ObserverLike.md)<`unknown`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`ContinuationLike`](../interfaces/scheduling.ContinuationLike.md) \| [`SideEffect`](functions.md#sideeffect) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObserverLike`](../interfaces/rx.ObserverLike.md)<`unknown`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>
