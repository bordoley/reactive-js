[Reactive-JS](../README.md) / scheduling/Scheduler

# Module: scheduling/Scheduler

## Table of contents

### Functions

- [createHostScheduler](scheduling_Scheduler.md#createhostscheduler)
- [createVirtualTimeScheduler](scheduling_Scheduler.md#createvirtualtimescheduler)
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
