[Reactive-JS](../README.md) / scheduling/PrioritySchedulerLike

# Module: scheduling/PrioritySchedulerLike

## Table of contents

### Functions

- [toScheduler](scheduling_PrioritySchedulerLike.md#toscheduler)

## Functions

### toScheduler

▸ **toScheduler**(`priority`): [`Function1`](functions.md#function1)<[`PrioritySchedulerLike`](../interfaces/scheduling.PrioritySchedulerLike.md), [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)\>

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | The priority to schedule work at. |

#### Returns

[`Function1`](functions.md#function1)<[`PrioritySchedulerLike`](../interfaces/scheduling.PrioritySchedulerLike.md), [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)\>
