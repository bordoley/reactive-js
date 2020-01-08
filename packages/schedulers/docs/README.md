[@reactive-js/schedulers](README.md)

# @reactive-js/schedulers

## Index

### Interfaces

* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)
* [SchedulerHost](interfaces/schedulerhost.md)
* [VirtualTimeSchedulerResourceLike](interfaces/virtualtimeschedulerresourcelike.md)

### Functions

* [createPrioritySchedulerResource](README.md#const-createpriorityschedulerresource)
* [createSchedulerWithPriority](README.md#const-createschedulerwithpriority)
* [createVirtualTimeSchedulerResource](README.md#const-createvirtualtimeschedulerresource)

### Object literals

* [schedulerMixin](README.md#const-schedulermixin)

## Functions

### `Const` createPrioritySchedulerResource

▸ **createPrioritySchedulerResource**(`hostScheduler`: SchedulerLike): *[PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`hostScheduler` | SchedulerLike |

**Returns:** *[PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)*

___

### `Const` createSchedulerWithPriority

▸ **createSchedulerWithPriority**(`priorityScheduler`: [PrioritySchedulerLike](interfaces/priorityschedulerlike.md), `priority`: number): *SchedulerLike*

**Parameters:**

Name | Type |
------ | ------ |
`priorityScheduler` | [PrioritySchedulerLike](interfaces/priorityschedulerlike.md) |
`priority` | number |

**Returns:** *SchedulerLike*

___

### `Const` createVirtualTimeSchedulerResource

▸ **createVirtualTimeSchedulerResource**(`maxMicroTaskTicks`: number): *[VirtualTimeSchedulerResourceLike](interfaces/virtualtimeschedulerresourcelike.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxMicroTaskTicks` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[VirtualTimeSchedulerResourceLike](interfaces/virtualtimeschedulerresourcelike.md)*

## Object literals

### `Const` schedulerMixin

### ▪ **schedulerMixin**: *object*

###  schedule

▸ **schedule**(`this`: [SchedulerHost](interfaces/schedulerhost.md), `continuation`: SchedulerContinuationLike): *DisposableLike*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [SchedulerHost](interfaces/schedulerhost.md) |
`continuation` | SchedulerContinuationLike |

**Returns:** *DisposableLike*
