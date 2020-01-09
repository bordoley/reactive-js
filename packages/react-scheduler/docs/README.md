[@reactive-js/react-scheduler](README.md)

# @reactive-js/react-scheduler

## Index

### Variables

* [idlePriority](README.md#const-idlepriority)
* [immediatePriority](README.md#const-immediatepriority)
* [lowPriority](README.md#const-lowpriority)
* [normalPriority](README.md#const-normalpriority)
* [userBlockingPriority](README.md#const-userblockingpriority)

## Variables

### `Const` idlePriority

• **idlePriority**: *SchedulerLike* =  createSchedulerWithPriority(
  priorityScheduler,
  unstable_IdlePriority,
)

Scheduler that schedules work on React's internal priority scheduler with idle priority.

___

### `Const` immediatePriority

• **immediatePriority**: *SchedulerLike* =  createSchedulerWithPriority(
  priorityScheduler,
  unstable_ImmediatePriority,
)

Scheduler that schedules work on React's internal priority scheduler with immediate priority.

___

### `Const` lowPriority

• **lowPriority**: *SchedulerLike* =  createSchedulerWithPriority(
  priorityScheduler,
  unstable_LowPriority,
)

Scheduler that schedules work on React's internal priority scheduler with low priority.

___

### `Const` normalPriority

• **normalPriority**: *SchedulerLike* =  priorityScheduler

Scheduler that schedules work on React's internal priority scheduler with normal priority.

___

### `Const` userBlockingPriority

• **userBlockingPriority**: *SchedulerLike* =  createSchedulerWithPriority(
  priorityScheduler,
  unstable_UserBlockingPriority,
)

Scheduler that schedules work on React's internal priority scheduler with user blocking priority.
