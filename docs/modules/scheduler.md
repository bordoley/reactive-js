[Reactive-JS](../README.md) / scheduler

# Module: scheduler

## Table of contents

### Classes

- [YieldError](../classes/scheduler.YieldError.md)

### Interfaces

- [PausableSchedulerLike](../interfaces/scheduler.PausableSchedulerLike.md)
- [PrioritySchedulerLike](../interfaces/scheduler.PrioritySchedulerLike.md)
- [SchedulerContinuationLike](../interfaces/scheduler.SchedulerContinuationLike.md)
- [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/scheduler.SchedulerContinuationRunStatusChangedListenerLike.md)
- [SchedulerLike](../interfaces/scheduler.SchedulerLike.md)
- [VirtualTimeSchedulerLike](../interfaces/scheduler.VirtualTimeSchedulerLike.md)

### Functions

- [\_\_yield](scheduler.md#__yield)
- [createHostScheduler](scheduler.md#createhostscheduler)
- [createVirtualTimeScheduler](scheduler.md#createvirtualtimescheduler)
- [run](scheduler.md#run)
- [schedule](scheduler.md#schedule)
- [toPausableScheduler](scheduler.md#topausablescheduler)
- [toPriorityScheduler](scheduler.md#topriorityscheduler)
- [toSchedulerWithPriority](scheduler.md#toschedulerwithpriority)

## Functions

### \_\_yield

▸ **__yield**(`delay?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |

#### Returns

`void`

___

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.yieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

___

### createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`options?`): [`VirtualTimeSchedulerLike`](../interfaces/scheduler.VirtualTimeSchedulerLike.md)

Creates a new virtual time scheduler instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`VirtualTimeSchedulerLike`](../interfaces/scheduler.VirtualTimeSchedulerLike.md)

___

### run

▸ **run**(`continuation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`SchedulerContinuationLike`](../interfaces/scheduler.SchedulerContinuationLike.md) |

#### Returns

`void`

___

### schedule

▸ **schedule**(`f`, `options?`): [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), [`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), [`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

___

### toPausableScheduler

▸ **toPausableScheduler**(`hostScheduler`): [`DisposableLike`](../interfaces/disposable.DisposableLike.md) & [`PausableSchedulerLike`](../interfaces/scheduler.PausableSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostScheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Returns

[`DisposableLike`](../interfaces/disposable.DisposableLike.md) & [`PausableSchedulerLike`](../interfaces/scheduler.PausableSchedulerLike.md)

___

### toPriorityScheduler

▸ **toPriorityScheduler**(`hostScheduler`): [`DisposableLike`](../interfaces/disposable.DisposableLike.md) & [`PrioritySchedulerLike`](../interfaces/scheduler.PrioritySchedulerLike.md)

Creates a new priority scheduler which schedules work using the provided
host scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostScheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) | The underlying platform scheduler used by the priority scheduler to schedule work. |

#### Returns

[`DisposableLike`](../interfaces/disposable.DisposableLike.md) & [`PrioritySchedulerLike`](../interfaces/scheduler.PrioritySchedulerLike.md)

___

### toSchedulerWithPriority

▸ **toSchedulerWithPriority**(`priority`): [`Function1`](functions.md#function1)<[`PrioritySchedulerLike`](../interfaces/scheduler.PrioritySchedulerLike.md), [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)\>

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | The priority to schedule work at. |

#### Returns

[`Function1`](functions.md#function1)<[`PrioritySchedulerLike`](../interfaces/scheduler.PrioritySchedulerLike.md), [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)\>
