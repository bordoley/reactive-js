[@reactive-js/schedulers](README.md)

# @reactive-js/schedulers

## Index

### Interfaces

* [HostSchedulerLike](interfaces/hostschedulerlike.md)
* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)
* [VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)

### Type aliases

* [HostSchedulerContinuation](README.md#hostschedulercontinuation)

### Functions

* [createPerfTestingScheduler](README.md#const-createperftestingscheduler)
* [createPrioritySchedulerResource](README.md#const-createpriorityschedulerresource)
* [createSchedulerWithPriority](README.md#const-createschedulerwithpriority)
* [createVirtualTimeScheduler](README.md#const-createvirtualtimescheduler)

## Type aliases

###  HostSchedulerContinuation

Ƭ **HostSchedulerContinuation**: *function*

#### Type declaration:

▸ (): *[HostSchedulerContinuation](README.md#hostschedulercontinuation) | undefined*

## Functions

### `Const` createPerfTestingScheduler

▸ **createPerfTestingScheduler**(): *[VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)*

**Returns:** *[VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)*

___

### `Const` createPrioritySchedulerResource

▸ **createPrioritySchedulerResource**(`hostScheduler`: [HostSchedulerLike](interfaces/hostschedulerlike.md)): *[PrioritySchedulerResourceLike](interfaces/priorityschedulerresourcelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`hostScheduler` | [HostSchedulerLike](interfaces/hostschedulerlike.md) |

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

### `Const` createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`maxMicroTaskTicks`: number): *[VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxMicroTaskTicks` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)*
