[@reactive-js/scheduler](../README.md) › [SchedulerContinuationLike](schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work which executes on a scheduler. Implementations should
periodically check whether they should yield, and return
a SchedulerContinuationResult if there is additional
work to be performed.

## Hierarchy

* **SchedulerContinuationLike**

## Index

### Methods

* [run](schedulercontinuationlike.md#run)

## Methods

###  run

▸ **run**(`shouldYield?`: undefined | function): *[SchedulerContinuationResultLike](schedulercontinuationresultlike.md) | void*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield?` | undefined &#124; function |

**Returns:** *[SchedulerContinuationResultLike](schedulercontinuationresultlike.md) | void*
