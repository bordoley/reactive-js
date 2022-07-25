[Reactive-JS](../README.md) / scheduling

# Module: scheduling

## Table of contents

### Interfaces

- [DispatcherLike](../interfaces/scheduling.DispatcherLike.md)
- [PauseableSchedulerLike](../interfaces/scheduling.PauseableSchedulerLike.md)
- [PrioritySchedulerLike](../interfaces/scheduling.PrioritySchedulerLike.md)
- [SchedulerLike](../interfaces/scheduling.SchedulerLike.md)
- [VirtualTimeSchedulerLike](../interfaces/scheduling.VirtualTimeSchedulerLike.md)

### Type Aliases

- [PrioritySchedulerOptions](scheduling.md#priorityscheduleroptions)
- [SchedulerOptions](scheduling.md#scheduleroptions)

### Functions

- [createHostScheduler](scheduling.md#createhostscheduler)
- [createVirtualTimeScheduler](scheduling.md#createvirtualtimescheduler)

## Type Aliases

### PrioritySchedulerOptions

Ƭ **PrioritySchedulerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |
| `priority` | `number` |

___

### SchedulerOptions

Ƭ **SchedulerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.yieldInterval?` | `number` |

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
