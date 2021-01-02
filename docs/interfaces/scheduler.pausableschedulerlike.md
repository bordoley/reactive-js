[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / PausableSchedulerLike

# Interface: PausableSchedulerLike

## Hierarchy

* [*SchedulerLike*](scheduler.schedulerlike.md)

  ↳ **PausableSchedulerLike**

## Index

### Properties

* [inContinuation](scheduler.pausableschedulerlike.md#incontinuation)
* [now](scheduler.pausableschedulerlike.md#now)
* [shouldYield](scheduler.pausableschedulerlike.md#shouldyield)

### Methods

* [pause](scheduler.pausableschedulerlike.md#pause)
* [resume](scheduler.pausableschedulerlike.md#resume)
* [schedule](scheduler.pausableschedulerlike.md#schedule)

## Properties

### inContinuation

• `Readonly` **inContinuation**: *boolean*

Inherited from: [SchedulerLike](scheduler.schedulerlike.md).[inContinuation](scheduler.schedulerlike.md#incontinuation)

___

### now

• `Readonly` **now**: *number*

Inherited from: [SchedulerLike](scheduler.schedulerlike.md).[now](scheduler.schedulerlike.md#now)

___

### shouldYield

• `Readonly` **shouldYield**: *boolean*

Inherited from: [SchedulerLike](scheduler.schedulerlike.md).[shouldYield](scheduler.schedulerlike.md#shouldyield)

## Methods

### pause

▸ **pause**(): *void*

**Returns:** *void*

___

### resume

▸ **resume**(): *void*

**Returns:** *void*

___

### schedule

▸ **schedule**(`continuation`: [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md), `options?`: { `delay?`: *undefined* \| *number*  }): *void*

Inherited from: [SchedulerLike](scheduler.schedulerlike.md)

Schedules a continuation to be executed on the scheduler.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md) | The SchedulerContinuation to be executed.    |
`options?` | { `delay?`: *undefined* \| *number*  } | - |

**Returns:** *void*
