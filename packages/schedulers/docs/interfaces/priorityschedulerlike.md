[@reactive-js/schedulers](../README.md) › [PrioritySchedulerLike](priorityschedulerlike.md)

# Interface: PrioritySchedulerLike

## Hierarchy

* **PrioritySchedulerLike**

  ↳ [PrioritySchedulerResourceLike](priorityschedulerresourcelike.md)

## Index

### Properties

* [inScheduledContinuation](priorityschedulerlike.md#inscheduledcontinuation)
* [now](priorityschedulerlike.md#now)

### Methods

* [schedule](priorityschedulerlike.md#schedule)

## Properties

###  inScheduledContinuation

• **inScheduledContinuation**: *boolean*

___

###  now

• **now**: *number*

## Methods

###  schedule

▸ **schedule**(`continuation`: SchedulerContinuationLike, `priority`: number, `delay?`: undefined | number): *DisposableLike*

**Parameters:**

Name | Type |
------ | ------ |
`continuation` | SchedulerContinuationLike |
`priority` | number |
`delay?` | undefined &#124; number |

**Returns:** *DisposableLike*
