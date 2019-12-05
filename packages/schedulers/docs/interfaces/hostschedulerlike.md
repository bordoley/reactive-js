[@reactive-js/schedulers](../README.md) › [HostSchedulerLike](hostschedulerlike.md)

# Interface: HostSchedulerLike

## Hierarchy

* **HostSchedulerLike**

## Index

### Properties

* [now](hostschedulerlike.md#now)
* [shouldYield](hostschedulerlike.md#shouldyield)

### Methods

* [schedule](hostschedulerlike.md#schedule)

## Properties

###  now

• **now**: *number*

___

###  shouldYield

• **shouldYield**: *boolean*

## Methods

###  schedule

▸ **schedule**(`continuation`: [HostSchedulerContinuationLike](hostschedulercontinuationlike.md), `delay?`: undefined | number): *DisposableLike*

**Parameters:**

Name | Type |
------ | ------ |
`continuation` | [HostSchedulerContinuationLike](hostschedulercontinuationlike.md) |
`delay?` | undefined &#124; number |

**Returns:** *DisposableLike*
