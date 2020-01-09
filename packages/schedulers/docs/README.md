[@reactive-js/schedulers](README.md)

# @reactive-js/schedulers

## Index

### Interfaces

* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)
* [SchedulerHost](interfaces/schedulerhost.md)
* [VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)

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

▸ **createVirtualTimeScheduler**(`maxMicroTaskTicks`: number): *[VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxMicroTaskTicks` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)*

## Object literals

### `Const` schedulerMixin

### ▪ **schedulerMixin**: *object*

Mixin functions that can be used to implement the SchedulerLike interface

###  schedule

▸ **schedule**(`this`: [SchedulerHost](interfaces/schedulerhost.md), `continuation`: SchedulerContinuationLike): *DisposableLike*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [SchedulerHost](interfaces/schedulerhost.md) |
`continuation` | SchedulerContinuationLike |

**Returns:** *DisposableLike*
