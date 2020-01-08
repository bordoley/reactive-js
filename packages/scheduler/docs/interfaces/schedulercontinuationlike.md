[@reactive-js/scheduler](../README.md) › [SchedulerContinuationLike](schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work which executes on a scheduler. Implementations should
periodically check whether they should yield, and return
a SchedulerContinuationResult if there is additional
work to be performed.

## Hierarchy

* **SchedulerContinuationLike**

## Index

### Properties

* [delay](schedulercontinuationlike.md#optional-delay)

### Methods

* [run](schedulercontinuationlike.md#run)

## Properties

### `Optional` delay

• **delay**? : *undefined | number*

## Methods

###  run

▸ **run**(`shouldYield?`: undefined | function): *[SchedulerContinuationLike](schedulercontinuationlike.md) | void*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield?` | undefined &#124; function |

**Returns:** *[SchedulerContinuationLike](schedulercontinuationlike.md) | void*
