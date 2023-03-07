[Reactive-JS](../README.md) / scheduling/Scheduler

# Module: scheduling/Scheduler

## Table of contents

### Functions

- [createHostScheduler](scheduling_Scheduler.md#createhostscheduler)
- [createVirtualTimeScheduler](scheduling_Scheduler.md#createvirtualtimescheduler)
- [schedule](scheduling_Scheduler.md#schedule)
- [toPausableScheduler](scheduling_Scheduler.md#topausablescheduler)
- [toPriorityScheduler](scheduling_Scheduler.md#topriorityscheduler)

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxYieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

___

### createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`options?`): [`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)

___

### schedule

▸ **schedule**(`f`, `options?`): [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md), [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md), [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### toPausableScheduler

▸ **toPausableScheduler**(`a`): [`PauseableSchedulerLike`](../interfaces/scheduling.PauseableSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](../interfaces/scheduling.PauseableSchedulerLike.md)

___

### toPriorityScheduler

▸ **toPriorityScheduler**(`a`): [`PrioritySchedulerLike`](../interfaces/scheduling.PrioritySchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`PrioritySchedulerLike`](../interfaces/scheduling.PrioritySchedulerLike.md)
