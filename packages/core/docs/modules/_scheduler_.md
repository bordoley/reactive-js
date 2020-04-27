[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](_scheduler_.md)

# Module: "scheduler"

## Index

### Classes

* [AbstractHostScheduler](../classes/_scheduler_.abstracthostscheduler.md)
* [AbstractSchedulerContinuation](../classes/_scheduler_.abstractschedulercontinuation.md)

### Interfaces

* [PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md)
* [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md)
* [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md)
* [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)
* [VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)

### Type aliases

* [CallbackContinuation](_scheduler_.md#callbackcontinuation)

### Functions

* [createVirtualTimeScheduler](_scheduler_.md#const-createvirtualtimescheduler)
* [schedule](_scheduler_.md#const-schedule)
* [toPausableScheduler](_scheduler_.md#const-topausablescheduler)
* [toPriorityScheduler](_scheduler_.md#const-topriorityscheduler)
* [toSchedulerWithPriority](_scheduler_.md#const-toschedulerwithpriority)

## Type aliases

###  CallbackContinuation

Ƭ **CallbackContinuation**: *function*

#### Type declaration:

▸ (`shouldYield?`: function): *[CallbackContinuation](_scheduler_.md#callbackcontinuation) | void*

**Parameters:**

▪`Optional`  **shouldYield**: *function*

▸ (): *boolean*

## Functions

### `Const` createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`maxMicroTaskTicks`: number): *[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)*

Creates a new virtual time scheduler instance.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`maxMicroTaskTicks` | number | Number.MAX_SAFE_INTEGER | The max number of times shouldYield should return false before returning true. Useful for testing cooperative multitasking.  |

**Returns:** *[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)*

___

### `Const` schedule

▸ **schedule**(`callback`: [CallbackContinuation](_scheduler_.md#callbackcontinuation), `delay`: number): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`callback` | [CallbackContinuation](_scheduler_.md#callbackcontinuation) | - |
`delay` | number | 0 |

**Returns:** *(Anonymous function)*

___

### `Const` toPausableScheduler

▸ **toPausableScheduler**(`hostScheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)): *[DisposableLike](../interfaces/_disposable_.disposablelike.md) & PausableSchedulerLike*

**Parameters:**

Name | Type |
------ | ------ |
`hostScheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) |

**Returns:** *[DisposableLike](../interfaces/_disposable_.disposablelike.md) & PausableSchedulerLike*

___

### `Const` toPriorityScheduler

▸ **toPriorityScheduler**(`hostScheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)): *[DisposableLike](../interfaces/_disposable_.disposablelike.md) & [PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md)*

Creates a new priority scheduler which schedules work using the provided
host scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostScheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | The underlying platform scheduler used by the priority scheduler to schedule work.  |

**Returns:** *[DisposableLike](../interfaces/_disposable_.disposablelike.md) & [PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md)*

___

### `Const` toSchedulerWithPriority

▸ **toSchedulerWithPriority**(`priority`: number): *[Operator](_functions_.md#operator)‹[PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md), [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)›*

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`priority` | number | The priority to schedule work at.  |

**Returns:** *[Operator](_functions_.md#operator)‹[PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md), [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)›*
