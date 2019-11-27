[@reactive-js/scheduler](README.md)

# @reactive-js/scheduler

## Index

### Interfaces

* [SchedulerContinuation](interfaces/schedulercontinuation.md)
* [SchedulerContinuationResult](interfaces/schedulercontinuationresult.md)
* [SchedulerLike](interfaces/schedulerlike.md)
* [SchedulerResourceLike](interfaces/schedulerresourcelike.md)

### Functions

* [getDefaultScheduler](README.md#const-getdefaultscheduler)
* [registerDefaultScheduler](README.md#const-registerdefaultscheduler)

## Functions

### `Const` getDefaultScheduler

▸ **getDefaultScheduler**(): *[SchedulerLike](interfaces/schedulerlike.md)*

Returns the default scheduler, if registered, otherwise throws an error.

**Returns:** *[SchedulerLike](interfaces/schedulerlike.md)*

___

### `Const` registerDefaultScheduler

▸ **registerDefaultScheduler**(`scheduler`: [SchedulerLike](interfaces/schedulerlike.md)): *void*

Registers a default scheduler for the current process. This calling this
function more than once with a different scheduler instance is a runtime
error and results in an error being thrown.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [SchedulerLike](interfaces/schedulerlike.md) |   |

**Returns:** *void*
