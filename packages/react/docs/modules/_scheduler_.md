[@reactive-js/react - v0.0.39](../README.md) › ["scheduler"](_scheduler_.md)

# Module: "scheduler"

## Index

### Variables

* [idlePriority](_scheduler_.md#const-idlepriority)
* [immediatePriority](_scheduler_.md#const-immediatepriority)
* [lowPriority](_scheduler_.md#const-lowpriority)
* [normalPriority](_scheduler_.md#const-normalpriority)
* [userBlockingPriority](_scheduler_.md#const-userblockingpriority)

## Variables

### `Const` idlePriority

• **idlePriority**: *SchedulerLike* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_IdlePriority),
)

Scheduler that schedules work on React's internal priority scheduler with idle priority.

___

### `Const` immediatePriority

• **immediatePriority**: *SchedulerLike* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_ImmediatePriority),
)

Scheduler that schedules work on React's internal priority scheduler with immediate priority.

___

### `Const` lowPriority

• **lowPriority**: *SchedulerLike* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_LowPriority),
)

Scheduler that schedules work on React's internal priority scheduler with low priority.

___

### `Const` normalPriority

• **normalPriority**: *SchedulerLike* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_NormalPriority),
)

Scheduler that schedules work on React's internal priority scheduler with normal priority.

___

### `Const` userBlockingPriority

• **userBlockingPriority**: *SchedulerLike* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_UserBlockingPriority),
)

Scheduler that schedules work on React's internal priority scheduler with user blocking priority.
