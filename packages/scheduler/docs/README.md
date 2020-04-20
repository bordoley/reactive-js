[@reactive-js/scheduler - v0.0.35](README.md)

# @reactive-js/scheduler - v0.0.35

## Index

### Classes

* [AbstractSchedulerContinuation](classes/abstractschedulercontinuation.md)

### Interfaces

* [CallbackSchedulerLike](interfaces/callbackschedulerlike.md)
* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [SchedulerContinuationLike](interfaces/schedulercontinuationlike.md)
* [SchedulerContinuationRunStatusChangedListenerLike](interfaces/schedulercontinuationrunstatuschangedlistenerlike.md)
* [SchedulerLike](interfaces/schedulerlike.md)
* [VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)

### Functions

* [createVirtualTimeScheduler](README.md#const-createvirtualtimescheduler)
* [schedule](README.md#schedule)
* [scheduleCallback](README.md#const-schedulecallback)
* [toPausableScheduler](README.md#const-topausablescheduler)
* [toPriorityScheduler](README.md#const-topriorityscheduler)
* [toSchedulerWithPriority](README.md#const-toschedulerwithpriority)

## Functions

### `Const` createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`maxMicroTaskTicks`: number): *[VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)*

Creates a new virtual time scheduler instance.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`maxMicroTaskTicks` | number |  Number.MAX_SAFE_INTEGER | The max number of times shouldYield should return false before returning true. Useful for testing cooperative multitasking.  |

**Returns:** *[VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)*

___

###  schedule

▸ **schedule**(`this`: [CallbackSchedulerLike](interfaces/callbackschedulerlike.md), `continuation`: [SchedulerContinuationLike](interfaces/schedulercontinuationlike.md), `delay`: number): *void*

Mixin functions that can be used to implement the SchedulerLike interface

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`this` | [CallbackSchedulerLike](interfaces/callbackschedulerlike.md) | - |
`continuation` | [SchedulerContinuationLike](interfaces/schedulercontinuationlike.md) | - |
`delay` | number | 0 |

**Returns:** *void*

___

### `Const` scheduleCallback

▸ **scheduleCallback**(`scheduler`: [SchedulerLike](interfaces/schedulerlike.md), `callback`: function, `delay`: number): *DisposableLike*

**Parameters:**

▪ **scheduler**: *[SchedulerLike](interfaces/schedulerlike.md)*

▪ **callback**: *function*

▸ (): *void*

▪`Default value`  **delay**: *number*= 0

**Returns:** *DisposableLike*

___

### `Const` toPausableScheduler

▸ **toPausableScheduler**(`hostScheduler`: [SchedulerLike](interfaces/schedulerlike.md)): *DisposableLike & PausableSchedulerLike*

**Parameters:**

Name | Type |
------ | ------ |
`hostScheduler` | [SchedulerLike](interfaces/schedulerlike.md) |

**Returns:** *DisposableLike & PausableSchedulerLike*

___

### `Const` toPriorityScheduler

▸ **toPriorityScheduler**(`hostScheduler`: [SchedulerLike](interfaces/schedulerlike.md)): *DisposableLike & [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)*

Creates a new priority scheduler which schedules work using the provided
host scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostScheduler` | [SchedulerLike](interfaces/schedulerlike.md) | The underlying platform scheduler used by the priority scheduler to schedule work.  |

**Returns:** *DisposableLike & [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)*

___

### `Const` toSchedulerWithPriority

▸ **toSchedulerWithPriority**(`priority`: number): *Operator‹[PrioritySchedulerLike](interfaces/priorityschedulerlike.md), [SchedulerLike](interfaces/schedulerlike.md)›*

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`priority` | number | The priority to schedule work at.  |

**Returns:** *Operator‹[PrioritySchedulerLike](interfaces/priorityschedulerlike.md), [SchedulerLike](interfaces/schedulerlike.md)›*
