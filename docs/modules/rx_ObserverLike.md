[Reactive-JS](../README.md) / rx/ObserverLike

# Module: rx/ObserverLike

## Table of contents

### Interfaces

- [ObserverLike](../interfaces/rx_ObserverLike.ObserverLike.md)

### Variables

- [ObserverLike\_dispatcher](rx_ObserverLike.md#observerlike_dispatcher)
- [ObserverLike\_scheduler](rx_ObserverLike.md#observerlike_scheduler)

### Functions

- [getDispatcher](rx_ObserverLike.md#getdispatcher)
- [getScheduler](rx_ObserverLike.md#getscheduler)

## Variables

### ObserverLike\_dispatcher

• `Const` **ObserverLike\_dispatcher**: unique `symbol`

___

### ObserverLike\_scheduler

• `Const` **ObserverLike\_scheduler**: unique `symbol`

## Functions

### getDispatcher

▸ **getDispatcher**<`T`\>(`observer`): [`DispatcherLike`](../interfaces/scheduling_DispatcherLike.DispatcherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/rx_ObserverLike.ObserverLike.md)<`T`\> |

#### Returns

[`DispatcherLike`](../interfaces/scheduling_DispatcherLike.DispatcherLike.md)<`T`\>

___

### getScheduler

▸ **getScheduler**<`T`\>(`observer`): [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](scheduling_SchedulerLike.md#scheduleroptions)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/rx_ObserverLike.ObserverLike.md)<`T`\> |

#### Returns

[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](scheduling_SchedulerLike.md#scheduleroptions)\>
