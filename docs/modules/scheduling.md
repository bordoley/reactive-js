[Reactive-JS](../README.md) / scheduling

# Module: scheduling

## Table of contents

### Functions

- [createHostScheduler](scheduling.md#createhostscheduler)
- [createPauseableScheduler](scheduling.md#createpauseablescheduler)
- [createPriorityScheduler](scheduling.md#createpriorityscheduler)
- [createVirtualTimeScheduler](scheduling.md#createvirtualtimescheduler)

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.yieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)

___

### createPauseableScheduler

▸ **createPauseableScheduler**(`a`): [`PauseableSchedulerLike`](../interfaces/scheduling_SchedulerLike.PauseableSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](../interfaces/scheduling_SchedulerLike.PauseableSchedulerLike.md)

___

### createPriorityScheduler

▸ **createPriorityScheduler**(`a`): [`PrioritySchedulerLike`](../interfaces/scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md) |

#### Returns

[`PrioritySchedulerLike`](../interfaces/scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md)

___

### createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`options?`): [`VirtualTimeSchedulerLike`](../interfaces/scheduling_SchedulerLike.VirtualTimeSchedulerLike.md)

Creates a new virtual time scheduler instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`VirtualTimeSchedulerLike`](../interfaces/scheduling_SchedulerLike.VirtualTimeSchedulerLike.md)
