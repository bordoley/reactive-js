[reactive-js](../README.md) › ["scheduler"](_scheduler_.md)

# Module: "scheduler"

## Index

### Interfaces

* [PausableSchedulerLike](../interfaces/_scheduler_.pausableschedulerlike.md)
* [PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md)
* [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md)
* [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md)
* [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)
* [VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)

### Functions

* [createHostScheduler](_scheduler_.md#const-createhostscheduler)
* [createVirtualTimeScheduler](_scheduler_.md#const-createvirtualtimescheduler)
* [run](_scheduler_.md#const-run)
* [schedule](_scheduler_.md#const-schedule)
* [toPausableScheduler](_scheduler_.md#const-topausablescheduler)
* [toPriorityScheduler](_scheduler_.md#const-topriorityscheduler)
* [toSchedulerWithPriority](_scheduler_.md#const-toschedulerwithpriority)
* [yield$](_scheduler_.md#const-yield)

## Functions

### `Const` createHostScheduler

▸ **createHostScheduler**(`options`: object): *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`yieldInterval?` | number |

**Returns:** *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)*

___

### `Const` createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`options`: object): *[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)*

Creates a new virtual time scheduler instance.

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`maxMicroTaskTicks?` | number |

**Returns:** *[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)*

___

### `Const` run

▸ **run**(`continuation`: [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`continuation` | [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md) |

**Returns:** *void*

___

### `Const` schedule

▸ **schedule**‹**T**›(`f`: [SideEffect1](_functions_.md#sideeffect1)‹T›, `options?`: object): *[Function1](_functions_.md#function1)‹T, [DisposableLike](../interfaces/_disposable_.disposablelike.md)›*

**Type parameters:**

▪ **T**: *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)*

**Parameters:**

▪ **f**: *[SideEffect1](_functions_.md#sideeffect1)‹T›*

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`delay?` | number |

**Returns:** *[Function1](_functions_.md#function1)‹T, [DisposableLike](../interfaces/_disposable_.disposablelike.md)›*

___

### `Const` toPausableScheduler

▸ **toPausableScheduler**(`hostScheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)): *[DisposableLike](../interfaces/_disposable_.disposablelike.md) & [PausableSchedulerLike](../interfaces/_scheduler_.pausableschedulerlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`hostScheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) |

**Returns:** *[DisposableLike](../interfaces/_disposable_.disposablelike.md) & [PausableSchedulerLike](../interfaces/_scheduler_.pausableschedulerlike.md)*

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

▸ **toSchedulerWithPriority**(`priority`: number): *[Function1](_functions_.md#function1)‹[PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md), [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)›*

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`priority` | number | The priority to schedule work at.  |

**Returns:** *[Function1](_functions_.md#function1)‹[PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md), [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)›*

___

### `Const` yield$

▸ **yield$**(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), `delay`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) |
`delay` | number |

**Returns:** *void*
