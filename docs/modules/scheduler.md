[Reactive-JS](../README.md) / scheduler

# Module: scheduler

## Index

### Classes

* [YieldError](../classes/scheduler.yielderror.md)

### Interfaces

* [PausableSchedulerLike](../interfaces/scheduler.pausableschedulerlike.md)
* [PrioritySchedulerLike](../interfaces/scheduler.priorityschedulerlike.md)
* [SchedulerContinuationLike](../interfaces/scheduler.schedulercontinuationlike.md)
* [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/scheduler.schedulercontinuationrunstatuschangedlistenerlike.md)
* [SchedulerLike](../interfaces/scheduler.schedulerlike.md)
* [VirtualTimeSchedulerLike](../interfaces/scheduler.virtualtimeschedulerlike.md)

### Functions

* [\_\_yield](scheduler.md#__yield)
* [createHostScheduler](scheduler.md#createhostscheduler)
* [createVirtualTimeScheduler](scheduler.md#createvirtualtimescheduler)
* [run](scheduler.md#run)
* [schedule](scheduler.md#schedule)
* [toPausableScheduler](scheduler.md#topausablescheduler)
* [toPriorityScheduler](scheduler.md#topriorityscheduler)
* [toSchedulerWithPriority](scheduler.md#toschedulerwithpriority)

## Functions

### \_\_yield

▸ `Const`**__yield**(`delay?`: *number*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`delay?` | *number* |

**Returns:** *void*

___

### createHostScheduler

▸ `Const`**createHostScheduler**(`options?`: { `yieldInterval?`: *undefined* \| *number*  }): [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `yieldInterval?`: *undefined* \| *number*  } |

**Returns:** [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

___

### createVirtualTimeScheduler

▸ `Const`**createVirtualTimeScheduler**(`options?`: { `maxMicroTaskTicks?`: *undefined* \| *number*  }): [*VirtualTimeSchedulerLike*](../interfaces/scheduler.virtualtimeschedulerlike.md)

Creates a new virtual time scheduler instance.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `maxMicroTaskTicks?`: *undefined* \| *number*  } |

**Returns:** [*VirtualTimeSchedulerLike*](../interfaces/scheduler.virtualtimeschedulerlike.md)

___

### run

▸ `Const`**run**(`continuation`: [*SchedulerContinuationLike*](../interfaces/scheduler.schedulercontinuationlike.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`continuation` | [*SchedulerContinuationLike*](../interfaces/scheduler.schedulercontinuationlike.md) |

**Returns:** *void*

___

### schedule

▸ `Const`**schedule**(`f`: [*SideEffect*](functions.md#sideeffect), `options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [*DisposableLike*](../interfaces/disposable.disposablelike.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`f` | [*SideEffect*](functions.md#sideeffect) |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [*DisposableLike*](../interfaces/disposable.disposablelike.md)\>

___

### toPausableScheduler

▸ `Const`**toPausableScheduler**(`hostScheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)): [*DisposableLike*](../interfaces/disposable.disposablelike.md) & [*PausableSchedulerLike*](../interfaces/scheduler.pausableschedulerlike.md)

#### Parameters:

Name | Type |
------ | ------ |
`hostScheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) |

**Returns:** [*DisposableLike*](../interfaces/disposable.disposablelike.md) & [*PausableSchedulerLike*](../interfaces/scheduler.pausableschedulerlike.md)

___

### toPriorityScheduler

▸ `Const`**toPriorityScheduler**(`hostScheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)): [*DisposableLike*](../interfaces/disposable.disposablelike.md) & [*PrioritySchedulerLike*](../interfaces/scheduler.priorityschedulerlike.md)

Creates a new priority scheduler which schedules work using the provided
host scheduler.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`hostScheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) | The underlying platform scheduler used by the priority scheduler to schedule work.    |

**Returns:** [*DisposableLike*](../interfaces/disposable.disposablelike.md) & [*PrioritySchedulerLike*](../interfaces/scheduler.priorityschedulerlike.md)

___

### toSchedulerWithPriority

▸ `Const`**toSchedulerWithPriority**(`priority`: *number*): [*Function1*](functions.md#function1)<[*PrioritySchedulerLike*](../interfaces/scheduler.priorityschedulerlike.md), [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)\>

Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`priority` | *number* | The priority to schedule work at.    |

**Returns:** [*Function1*](functions.md#function1)<[*PrioritySchedulerLike*](../interfaces/scheduler.priorityschedulerlike.md), [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)\>
