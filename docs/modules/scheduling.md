[Reactive-JS](../README.md) / scheduling

# Module: scheduling

## Table of contents

### Functions

- [createHostScheduler](scheduling.md#createhostscheduler)
- [createVirtualTimeScheduler](scheduling.md#createvirtualtimescheduler)

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](scheduling_SchedulerLike.md#scheduleroptions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.yieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](scheduling_SchedulerLike.md#scheduleroptions)\>

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
