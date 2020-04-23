[@reactive-js/scheduler - v0.0.37](../README.md) › [AbstractHostScheduler](abstracthostscheduler.md)

# Class: AbstractHostScheduler

## Hierarchy

* **AbstractHostScheduler**

## Implements

* [SchedulerLike](../interfaces/schedulerlike.md)

## Index

### Properties

* [inContinuation](abstracthostscheduler.md#incontinuation)

### Accessors

* [now](abstracthostscheduler.md#now)

### Methods

* [schedule](abstracthostscheduler.md#schedule)
* [scheduleDelayed](abstracthostscheduler.md#abstract-scheduledelayed)
* [scheduleImmediate](abstracthostscheduler.md#abstract-scheduleimmediate)

## Properties

###  inContinuation

• **inContinuation**: *boolean* = false

*Implementation of [SchedulerLike](../interfaces/schedulerlike.md).[inContinuation](../interfaces/schedulerlike.md#incontinuation)*

## Accessors

###  now

• **get now**(): *number*

**Returns:** *number*

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](../interfaces/schedulercontinuationlike.md), `delay`: number): *void*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](../interfaces/schedulercontinuationlike.md) | - |
`delay` | number | 0 |

**Returns:** *void*

___

### `Abstract` scheduleDelayed

▸ **scheduleDelayed**(`callback`: function, `delay?`: undefined | number): *DisposableLike*

**Parameters:**

▪ **callback**: *function*

▸ (`shouldYield`: Option‹function›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield` | Option‹function› |

▪`Optional`  **delay**: *undefined | number*

**Returns:** *DisposableLike*

___

### `Abstract` scheduleImmediate

▸ **scheduleImmediate**(`callback`: function): *DisposableLike*

**Parameters:**

▪ **callback**: *function*

▸ (`shouldYield`: Option‹function›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield` | Option‹function› |

**Returns:** *DisposableLike*
