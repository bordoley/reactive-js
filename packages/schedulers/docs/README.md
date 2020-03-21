[@reactive-js/schedulers](README.md)

# @reactive-js/schedulers

## Index

### Interfaces

* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)
* [SchedulerHost](interfaces/schedulerhost.md)

### Functions

* [createPriorityScheduler](README.md#const-createpriorityscheduler)
* [createSchedulerWithPriority](README.md#const-createschedulerwithpriority)
* [createVirtualTimeScheduler](README.md#const-createvirtualtimescheduler)

### Object literals

* [schedulerMixin](README.md#const-schedulermixin)

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

### `Const` createSchedulerWithPriority

▸ **createSchedulerWithPriority**(`priorityScheduler`: [PrioritySchedulerLike](interfaces/priorityschedulerlike.md), `priority`: number): *SchedulerLike*

Creates a scheduler instance that schedules work on the provided priority
scheduler with the given priority.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`priorityScheduler` | [PrioritySchedulerLike](interfaces/priorityschedulerlike.md) | The underlying scheduler upon which to scheduler work. |
`priority` | number | The priority to schedule work at.  |

**Returns:** *SchedulerLike*

___

### `Const` createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`maxMicroTaskTicks`: number): *VirtualTimeSchedulerLike*

Creates a new virtual time scheduler instance.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`maxMicroTaskTicks` | number |  Number.MAX_SAFE_INTEGER | The max number of times shouldYield should return false before returning true. Useful for testing cooperative multitasking.  |

**Returns:** *VirtualTimeSchedulerLike*

## Object literals

### `Const` schedulerMixin

### ▪ **schedulerMixin**: *object*

Mixin functions that can be used to implement the SchedulerLike interface

###  schedule

▸ **schedule**(`this`: [SchedulerHost](interfaces/schedulerhost.md), `continuation`: SchedulerContinuationLike): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [SchedulerHost](interfaces/schedulerhost.md) |
`continuation` | SchedulerContinuationLike |

**Returns:** *void*
