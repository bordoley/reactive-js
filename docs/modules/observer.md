[Reactive-JS](../README.md) / observer

# Module: observer

## Table of contents

### Interfaces

- [ObserverLike](../interfaces/observer.ObserverLike.md)

### Functions

- [getDispatcher](observer.md#getdispatcher)
- [getScheduler](observer.md#getscheduler)

## Functions

### getDispatcher

▸ **getDispatcher**<`T`\>(`observer`): [`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/observer.ObserverLike.md)<`T`\> |

#### Returns

[`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

___

### getScheduler

▸ **getScheduler**<`T`\>(`observer`): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/observer.ObserverLike.md)<`T`\> |

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)
