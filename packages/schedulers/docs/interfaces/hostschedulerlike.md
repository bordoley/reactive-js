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

▸ **schedule**(`continuation`: [HostSchedulerContinuation](../README.md#hostschedulercontinuation), `delay?`: undefined | number): *DisposableLike*

**Parameters:**

Name | Type |
------ | ------ |
`continuation` | [HostSchedulerContinuation](../README.md#hostschedulercontinuation) |
`delay?` | undefined &#124; number |

**Returns:** *DisposableLike*
