[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](_scheduler_.md)

# Module: "scheduler"

## Index

### Classes

* [AbstractSchedulerContinuation](../classes/_scheduler_.abstractschedulercontinuation.md)

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
* [schedule](_scheduler_.md#const-schedule)
* [toPausableScheduler](_scheduler_.md#const-topausablescheduler)
* [toPriorityScheduler](_scheduler_.md#const-topriorityscheduler)
* [toSchedulerWithPriority](_scheduler_.md#const-toschedulerwithpriority)

## Functions

### `Const` createHostScheduler

▸ **createHostScheduler**(`config`: object): *HostScheduler‹›*

**Parameters:**

▪`Default value`  **config**: *object*= {
    yieldInterval: 5,
  }

Name | Type |
------ | ------ |
`yieldInterval` | number |

**Returns:** *HostScheduler‹›*

___

### `Const` createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`__namedParameters`: object): *[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)*

Creates a new virtual time scheduler instance.

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { maxMicroTaskTicks: Number.MAX_SAFE_INTEGER }

Name | Type |
------ | ------ |
`maxMicroTaskTicks` | number |

**Returns:** *[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)*

___

### `Const` schedule

▸ **schedule**(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), `schedulerContinuation`: [SideEffect1](_functions_.md#sideeffect1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)› | [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md), `options`: object): *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

▪ **scheduler**: *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)*

▪ **schedulerContinuation**: *[SideEffect1](_functions_.md#sideeffect1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)› | [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md)*

▪`Default value`  **options**: *object*= { delay: 0 }

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

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

▸ **toSchedulerWithPriority**(`priority`: number): *[Function](_functions_.md#function)‹[PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md), [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)›*

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`priority` | number | The priority to schedule work at.  |

**Returns:** *[Function](_functions_.md#function)‹[PrioritySchedulerLike](../interfaces/_scheduler_.priorityschedulerlike.md), [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)›*
