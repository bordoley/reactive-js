[reactive-js - v0.0.42](../README.md) › ["react"](_react_.md)

# Module: "react"

## Index

### Variables

* [idlePriority](_react_.md#const-idlepriority)
* [immediatePriority](_react_.md#const-immediatepriority)
* [lowPriority](_react_.md#const-lowpriority)
* [normalPriority](_react_.md#const-normalpriority)
* [userBlockingPriority](_react_.md#const-userblockingpriority)

### Functions

* [useObservable](_react_.md#const-useobservable)
* [useStreamable](_react_.md#const-usestreamable)

## Variables

### `Const` idlePriority

• **idlePriority**: *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_IdlePriority),
)

Scheduler that schedules work on React's internal priority scheduler with idle priority.

___

### `Const` immediatePriority

• **immediatePriority**: *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_ImmediatePriority),
)

Scheduler that schedules work on React's internal priority scheduler with immediate priority.

___

### `Const` lowPriority

• **lowPriority**: *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_LowPriority),
)

Scheduler that schedules work on React's internal priority scheduler with low priority.

___

### `Const` normalPriority

• **normalPriority**: *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_NormalPriority),
)

Scheduler that schedules work on React's internal priority scheduler with normal priority.

___

### `Const` userBlockingPriority

• **userBlockingPriority**: *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)* = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_UserBlockingPriority),
)

Scheduler that schedules work on React's internal priority scheduler with user blocking priority.

## Functions

### `Const` useObservable

▸ **useObservable**<**T**>(`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, `__namedParameters`: object): *[Option](_option_.md#option)‹T›*

Returns the current value, if defined, of `observable`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **observable**: *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

The `ObservableLike` to subscribe to.

▪`Default value`  **__namedParameters**: *object*= { scheduler: normalPriority }

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` useStreamable

▸ **useStreamable**<**TReq**, **T**>(`streamable`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›, `config`: object): *[[Option](_option_.md#option)‹T›, [SideEffect1](_functions_.md#sideeffect1)‹TReq›]*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **streamable**: *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

▪`Default value`  **config**: *object*= {}

Name | Type |
------ | ------ |
`replay?` | number |
`scheduler?` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) |
`stateScheduler?` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) |

**Returns:** *[[Option](_option_.md#option)‹T›, [SideEffect1](_functions_.md#sideeffect1)‹TReq›]*
