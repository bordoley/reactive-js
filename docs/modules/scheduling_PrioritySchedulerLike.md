[Reactive-JS](../README.md) / scheduling/PrioritySchedulerLike

# Module: scheduling/PrioritySchedulerLike

## Table of contents

### Interfaces

- [PrioritySchedulerLike](../interfaces/scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md)

### Type Aliases

- [PrioritySchedulerOptions](scheduling_PrioritySchedulerLike.md#priorityscheduleroptions)

### Functions

- [create](scheduling_PrioritySchedulerLike.md#create)
- [toScheduler](scheduling_PrioritySchedulerLike.md#toscheduler)

## Type Aliases

### PrioritySchedulerOptions

Ƭ **PrioritySchedulerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |
| `priority` | `number` |

## Functions

### create

▸ **create**(`a`): [`PrioritySchedulerLike`](../interfaces/scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md) |

#### Returns

[`PrioritySchedulerLike`](../interfaces/scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md)

___

### toScheduler

▸ **toScheduler**(`priority`): [`Function1`](util_functions.md#function1)<[`PrioritySchedulerLike`](../interfaces/scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md), [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)\>

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | The priority to schedule work at. |

#### Returns

[`Function1`](util_functions.md#function1)<[`PrioritySchedulerLike`](../interfaces/scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md), [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)\>
