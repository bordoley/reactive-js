[@reactive-js/schedulers](README.md)

# @reactive-js/schedulers

## Index

### Classes

* [AbstractScheduler](classes/abstractscheduler.md)
* [AbstractSchedulerResource](classes/abstractschedulerresource.md)

### Interfaces

* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)
* [VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)
* [VirtualTimeSchedulerResourceLike](interfaces/virtualtimeschedulerresourcelike.md)

### Functions

* [createPrioritySchedulerResource](README.md#const-createpriorityschedulerresource)
* [createSchedulerWithPriority](README.md#const-createschedulerwithpriority)
* [createSynchronousSchedulerResource](README.md#const-createsynchronousschedulerresource)
* [createVirtualTimeSchedulerResource](README.md#const-createvirtualtimeschedulerresource)

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

### `Const` createSynchronousSchedulerResource

▸ **createSynchronousSchedulerResource**(): *[VirtualTimeSchedulerResourceLike](interfaces/virtualtimeschedulerresourcelike.md)*

**Returns:** *[VirtualTimeSchedulerResourceLike](interfaces/virtualtimeschedulerresourcelike.md)*

___

### `Const` createVirtualTimeSchedulerResource

▸ **createVirtualTimeSchedulerResource**(`maxMicroTaskTicks`: number): *[VirtualTimeSchedulerResourceLike](interfaces/virtualtimeschedulerresourcelike.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxMicroTaskTicks` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[VirtualTimeSchedulerResourceLike](interfaces/virtualtimeschedulerresourcelike.md)*
