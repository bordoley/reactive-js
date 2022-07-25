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

### Variables

- [DispatcherLike\_dispatch](scheduling.md#dispatcherlike_dispatch)
- [DispatcherLike\_scheduler](scheduling.md#dispatcherlike_scheduler)
- [SchedulerLike\_requestYield](scheduling.md#schedulerlike_requestyield)
- [SchedulerLike\_schedule](scheduling.md#schedulerlike_schedule)
- [SchedulerLike\_shouldYield](scheduling.md#schedulerlike_shouldyield)
- [createVirtualTimeScheduler](scheduling.md#createvirtualtimescheduler)

### Functions

- [createHostScheduler](scheduling.md#createhostscheduler)

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

## Variables

### DispatcherLike\_dispatch

• `Const` **DispatcherLike\_dispatch**: unique `symbol`

___

### DispatcherLike\_scheduler

• `Const` **DispatcherLike\_scheduler**: unique `symbol`

___

### SchedulerLike\_requestYield

• `Const` **SchedulerLike\_requestYield**: unique `symbol`

___

### SchedulerLike\_schedule

• `Const` **SchedulerLike\_schedule**: unique `symbol`

___

### SchedulerLike\_shouldYield

• `Const` **SchedulerLike\_shouldYield**: unique `symbol`

___

### createVirtualTimeScheduler

• `Const` **createVirtualTimeScheduler**: `void`

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
