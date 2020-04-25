[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [AbstractHostScheduler](_scheduler_.abstracthostscheduler.md)

# Class: AbstractHostScheduler

## Hierarchy

* **AbstractHostScheduler**

## Implements

* [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)

## Index

### Properties

* [inContinuation](_scheduler_.abstracthostscheduler.md#incontinuation)

### Accessors

* [now](_scheduler_.abstracthostscheduler.md#now)

### Methods

* [schedule](_scheduler_.abstracthostscheduler.md#schedule)
* [scheduleDelayed](_scheduler_.abstracthostscheduler.md#abstract-scheduledelayed)
* [scheduleImmediate](_scheduler_.abstracthostscheduler.md#abstract-scheduleimmediate)

## Properties

###  inContinuation

• **inContinuation**: *boolean* = false

*Implementation of [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md).[inContinuation](../interfaces/_scheduler_.schedulerlike.md#incontinuation)*

## Accessors

###  now

• **get now**(): *number*

**Returns:** *number*

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md), `delay`: number): *void*

*Implementation of [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md) | - |
`delay` | number | 0 |

**Returns:** *void*

___

### `Abstract` scheduleDelayed

▸ **scheduleDelayed**(`callback`: function, `delay?`: number): *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

▪ **callback**: *function*

▸ (`shouldYield`: [Option](../modules/_option_.md#option)‹function›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield` | [Option](../modules/_option_.md#option)‹function› |

▪`Optional`  **delay**: *number*

**Returns:** *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

___

### `Abstract` scheduleImmediate

▸ **scheduleImmediate**(`callback`: function): *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

▪ **callback**: *function*

▸ (`shouldYield`: [Option](../modules/_option_.md#option)‹function›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield` | [Option](../modules/_option_.md#option)‹function› |

**Returns:** *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*
