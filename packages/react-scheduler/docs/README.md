
# @reactive-js/react-scheduler - v0.0.33

## Index

### Variables

* [idlePriority](README.md#const-idlepriority)
* [immediatePriority](README.md#const-immediatepriority)
* [lowPriority](README.md#const-lowpriority)
* [normalPriority](README.md#const-normalpriority)
* [userBlockingPriority](README.md#const-userblockingpriority)

## Variables

### `Const` idlePriority

• **idlePriority**: *SchedulerLike* =  pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_IdlePriority),
)

Scheduler that schedules work on React's internal priority scheduler with idle priority.

___

### `Const` immediatePriority

• **immediatePriority**: *SchedulerLike* =  pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_ImmediatePriority),
)

Scheduler that schedules work on React's internal priority scheduler with immediate priority.

___

### `Const` lowPriority

• **lowPriority**: *SchedulerLike* =  pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_LowPriority),
)

Scheduler that schedules work on React's internal priority scheduler with low priority.

___

### `Const` normalPriority

• **normalPriority**: *SchedulerLike* =  pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_NormalPriority),
)

Scheduler that schedules work on React's internal priority scheduler with normal priority.

___

### `Const` userBlockingPriority

• **userBlockingPriority**: *SchedulerLike* =  pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_UserBlockingPriority),
)

Scheduler that schedules work on React's internal priority scheduler with user blocking priority.
