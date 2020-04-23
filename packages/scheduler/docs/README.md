[@reactive-js/scheduler - v0.0.37](README.md)

# @reactive-js/scheduler - v0.0.37

## Index

### Classes

* [AbstractHostScheduler](classes/abstracthostscheduler.md)
* [AbstractSchedulerContinuation](classes/abstractschedulercontinuation.md)

### Interfaces

* [PausableSchedulerLike](interfaces/pausableschedulerlike.md)
* [PrioritySchedulerLike](interfaces/priorityschedulerlike.md)
* [SchedulerContinuationLike](interfaces/schedulercontinuationlike.md)
* [SchedulerContinuationRunStatusChangedListenerLike](interfaces/schedulercontinuationrunstatuschangedlistenerlike.md)
* [SchedulerLike](interfaces/schedulerlike.md)
* [VirtualTimeSchedulerLike](interfaces/virtualtimeschedulerlike.md)

### Type aliases

* [CallbackContinuation](README.md#callbackcontinuation)

### Functions

* [createVirtualTimeScheduler](README.md#const-createvirtualtimescheduler)
* [schedule](README.md#const-schedule)
* [toPausableScheduler](README.md#const-topausablescheduler)
* [toPriorityScheduler](README.md#const-topriorityscheduler)
* [toSchedulerWithPriority](README.md#const-toschedulerwithpriority)

## Type aliases

###  CallbackContinuation

Ƭ **CallbackContinuation**: *function*

#### Type declaration:

▸ (`shouldYield?`: undefined | function): *[CallbackContinuation](README.md#callbackcontinuation) | void*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield?` | undefined &#124; function |

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

### `Const` schedule

▸ **schedule**(`callback`: [CallbackContinuation](README.md#callbackcontinuation), `delay`: number): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`callback` | [CallbackContinuation](README.md#callbackcontinuation) | - |
`delay` | number | 0 |

**Returns:** *(Anonymous function)*

___

### `Const` toPausableScheduler

▸ **toPausableScheduler**(`hostScheduler`: [SchedulerLike](interfaces/schedulerlike.md)): *DisposableLike & [PausableSchedulerLike](interfaces/pausableschedulerlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`hostScheduler` | [SchedulerLike](interfaces/schedulerlike.md) |

**Returns:** *DisposableLike & [PausableSchedulerLike](interfaces/pausableschedulerlike.md)*

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
