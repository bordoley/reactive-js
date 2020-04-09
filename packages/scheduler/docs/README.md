[@reactive-js/scheduler](README.md)

# @reactive-js/scheduler

## Index

### Interfaces

* [HostSchedulerLike](interfaces/hostschedulerlike.md)
* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)
* [SchedulerContinuationLike](interfaces/schedulercontinuationlike.md)
* [SchedulerLike](interfaces/schedulerlike.md)
* [VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)

### Functions

* [createPriorityScheduler](README.md#const-createpriorityscheduler)
* [createVirtualTimeScheduler](README.md#const-createvirtualtimescheduler)
* [schedule](README.md#schedule)
* [scheduleCallback](README.md#const-schedulecallback)
* [toSchedulerWithPriority](README.md#const-toschedulerwithpriority)

## Functions

### `Const` createPriorityScheduler

▸ **createPriorityScheduler**(`hostScheduler`: [SchedulerLike](interfaces/schedulerlike.md)): *[PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)*

Creates a new priority scheduler which schedules work using the provided
host scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostScheduler` | [SchedulerLike](interfaces/schedulerlike.md) | The underlying platform scheduler used by the priority scheduler to schedule work.  |

**Returns:** *[PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)*

___

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

▸ **schedule**(`this`: [HostSchedulerLike](interfaces/hostschedulerlike.md), `continuation`: [SchedulerContinuationLike](interfaces/schedulercontinuationlike.md), `delay`: number): *void*

Mixin functions that can be used to implement the SchedulerLike interface

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`this` | [HostSchedulerLike](interfaces/hostschedulerlike.md) | - |
`continuation` | [SchedulerContinuationLike](interfaces/schedulercontinuationlike.md) | - |
`delay` | number | 0 |

**Returns:** *void*

___

### `Const` scheduleCallback

▸ **scheduleCallback**(`callback`: function, `delay`: number): *OperatorLike‹[SchedulerLike](interfaces/schedulerlike.md), DisposableLike›*

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

▪`Default value`  **delay**: *number*= 0

**Returns:** *OperatorLike‹[SchedulerLike](interfaces/schedulerlike.md), DisposableLike›*

___

### `Const` toSchedulerWithPriority

▸ **toSchedulerWithPriority**(`priority`: number): *OperatorLike‹[PrioritySchedulerLike](interfaces/priorityschedulerlike.md), [SchedulerLike](interfaces/schedulerlike.md)›*

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`priority` | number | The priority to schedule work at.  |

**Returns:** *OperatorLike‹[PrioritySchedulerLike](interfaces/priorityschedulerlike.md), [SchedulerLike](interfaces/schedulerlike.md)›*
