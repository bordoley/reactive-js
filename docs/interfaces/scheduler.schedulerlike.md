[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerLike

# Interface: SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

* **SchedulerLike**

  ↳ [*ObserverLike*](observable.observerlike.md)

  ↳ [*PausableSchedulerLike*](scheduler.pausableschedulerlike.md)

  ↳ [*VirtualTimeSchedulerLike*](scheduler.virtualtimeschedulerlike.md)

## Index

### Properties

* [inContinuation](scheduler.schedulerlike.md#incontinuation)
* [now](scheduler.schedulerlike.md#now)
* [shouldYield](scheduler.schedulerlike.md#shouldyield)

### Methods

* [requestYield](scheduler.schedulerlike.md#requestyield)
* [schedule](scheduler.schedulerlike.md#schedule)

## Properties

### inContinuation

• `Readonly` **inContinuation**: *boolean*

___

### now

• `Readonly` **now**: *number*

___

### shouldYield

• `Readonly` **shouldYield**: *boolean*

## Methods

### requestYield

▸ **requestYield**(): *void*

Request the scheduler to yield.

**Returns:** *void*

___

### schedule

▸ **schedule**(`continuation`: [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md), `options?`: { `delay?`: *undefined* \| *number*  }): *void*

Schedules a continuation to be executed on the scheduler.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md) | The SchedulerContinuation to be executed.    |
`options?` | { `delay?`: *undefined* \| *number*  } | - |

**Returns:** *void*
