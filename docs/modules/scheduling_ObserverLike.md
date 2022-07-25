[Reactive-JS](../README.md) / scheduling/ObserverLike

# Module: scheduling/ObserverLike

## Table of contents

### Functions

- [getDispatcher](scheduling_ObserverLike.md#getdispatcher)
- [getScheduler](scheduling_ObserverLike.md#getscheduler)

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
| `observer` | [`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\> |

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
| `observer` | [`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\> |

#### Returns

[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)
