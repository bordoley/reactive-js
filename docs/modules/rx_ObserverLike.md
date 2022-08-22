[Reactive-JS](../README.md) / rx/ObserverLike

# Module: rx/ObserverLike

## Table of contents

### Functions

- [getDispatcher](rx_ObserverLike.md#getdispatcher)
- [getScheduler](rx_ObserverLike.md#getscheduler)

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
