[@reactive-js/schedulers](README.md)

# @reactive-js/schedulers

## Index

### Interfaces

* [CallbackScheduler](interfaces/callbackscheduler.md)
* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)

### Functions

* [createPriorityScheduler](README.md#const-createpriorityscheduler)
* [createVirtualTimeScheduler](README.md#const-createvirtualtimescheduler)
* [schedule](README.md#schedule)
* [toSchedulerWithPriority](README.md#const-toschedulerwithpriority)

## Functions

### `Const` createPriorityScheduler

▸ **createPriorityScheduler**(`hostScheduler`: SchedulerLike): *[PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)*

Creates a new priority scheduler which schedules work using the provided
host scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hostScheduler` | SchedulerLike | The underlying platform scheduler used by the priority scheduler to schedule work.  |

**Returns:** *[PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)*

___

### `Const` createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`maxMicroTaskTicks`: number): *VirtualTimeSchedulerLike*

Creates a new virtual time scheduler instance.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`maxMicroTaskTicks` | number |  Number.MAX_SAFE_INTEGER | The max number of times shouldYield should return false before returning true. Useful for testing cooperative multitasking.  |

**Returns:** *VirtualTimeSchedulerLike*

___

###  schedule

▸ **schedule**(`this`: [CallbackScheduler](interfaces/callbackscheduler.md), `continuation`: SchedulerContinuationLike): *void*

Mixin functions that can be used to implement the SchedulerLike interface

**Parameters:**

Name | Type |
------ | ------ |
`this` | [CallbackScheduler](interfaces/callbackscheduler.md) |
`continuation` | SchedulerContinuationLike |

**Returns:** *void*

___

### `Const` toSchedulerWithPriority

▸ **toSchedulerWithPriority**(`priority`: number): *OperatorLike‹[PrioritySchedulerLike](interfaces/priorityschedulerlike.md), SchedulerLike›*

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`priority` | number | The priority to schedule work at.  |

**Returns:** *OperatorLike‹[PrioritySchedulerLike](interfaces/priorityschedulerlike.md), SchedulerLike›*
