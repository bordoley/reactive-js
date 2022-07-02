[Reactive-JS](../README.md) / scheduler

# Module: scheduler

## Table of contents

### Interfaces

- [PausableSchedulerLike](../interfaces/scheduler.PausableSchedulerLike.md)
- [PrioritySchedulerLike](../interfaces/scheduler.PrioritySchedulerLike.md)
- [SchedulerContinuationLike](../interfaces/scheduler.SchedulerContinuationLike.md)
- [SchedulerLike](../interfaces/scheduler.SchedulerLike.md)
- [VirtualTimeSchedulerLike](../interfaces/scheduler.VirtualTimeSchedulerLike.md)

### Functions

- [\_\_yield](scheduler.md#__yield)
- [createHostScheduler](scheduler.md#createhostscheduler)
- [createPausableScheduler](scheduler.md#createpausablescheduler)
- [createPriorityScheduler](scheduler.md#createpriorityscheduler)
- [createVirtualTimeScheduler](scheduler.md#createvirtualtimescheduler)
- [getNow](scheduler.md#getnow)
- [inContinuation](scheduler.md#incontinuation)
- [schedule](scheduler.md#schedule)
- [shouldYield](scheduler.md#shouldyield)
- [toSchedulerWithPriority](scheduler.md#toschedulerwithpriority)

## Functions

### \_\_yield

▸ **__yield**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

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

### createPausableScheduler

▸ **createPausableScheduler**(`hostScheduler`): [`PausableSchedulerLike`](../interfaces/scheduler.PausableSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostScheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Returns

[`PausableSchedulerLike`](../interfaces/scheduler.PausableSchedulerLike.md)

___

### createPriorityScheduler

▸ **createPriorityScheduler**(`hostScheduler`): [`PrioritySchedulerLike`](../interfaces/scheduler.PrioritySchedulerLike.md)

Creates a new priority scheduler which schedules work using the provided
host scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostScheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) | The underlying platform scheduler used by the priority scheduler to schedule work. |

#### Returns

[`PrioritySchedulerLike`](../interfaces/scheduler.PrioritySchedulerLike.md)

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

### getNow

▸ **getNow**(`scheduler`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Returns

`number`

___

### inContinuation

▸ **inContinuation**(`scheduler`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) \| [`PrioritySchedulerLike`](../interfaces/scheduler.PrioritySchedulerLike.md) |

#### Returns

`boolean`

___

### schedule

▸ **schedule**(`f`, `options?`): [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), [`Disposable`](../classes/disposable.Disposable.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), [`Disposable`](../classes/disposable.Disposable.md)\>

___

### shouldYield

▸ **shouldYield**(`scheduler`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Returns

`boolean`

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
