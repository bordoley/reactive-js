[@reactive-js/scheduler](../README.md) › [SchedulerLike](schedulerlike.md)

# Interface: SchedulerLike

## Hierarchy

* **SchedulerLike**

  ↳ [SchedulerResourceLike](schedulerresourcelike.md)

## Index

### Properties

* [inScheduledContinuation](schedulerlike.md#inscheduledcontinuation)
* [now](schedulerlike.md#now)

### Methods

* [schedule](schedulerlike.md#schedule)

## Properties

###  inScheduledContinuation

• **inScheduledContinuation**: *boolean*

___

###  now

• **now**: *number*

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuation](schedulercontinuation.md), `delay?`: undefined | number, `priority?`: undefined | number): *DisposableLike*

**Parameters:**

Name | Type |
------ | ------ |
`continuation` | [SchedulerContinuation](schedulercontinuation.md) |
`delay?` | undefined &#124; number |
`priority?` | undefined &#124; number |

**Returns:** *DisposableLike*
