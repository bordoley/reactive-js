[Reactive-JS](../README.md) / concurrent

# Module: concurrent

## Table of contents

### Interfaces

- [ContinuationLike](../interfaces/concurrent.ContinuationLike.md)
- [ContinuationSchedulerLike](../interfaces/concurrent.ContinuationSchedulerLike.md)
- [DeferredObservableLike](../interfaces/concurrent.DeferredObservableLike.md)
- [DeferredSideEffectsObservableLike](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)
- [DispatcherLike](../interfaces/concurrent.DispatcherLike.md)
- [DispatcherLikeEventMap](../interfaces/concurrent.DispatcherLikeEventMap.md)
- [MulticastObservableLike](../interfaces/concurrent.MulticastObservableLike.md)
- [ObservableLike](../interfaces/concurrent.ObservableLike.md)
- [ObserverLike](../interfaces/concurrent.ObserverLike.md)
- [PauseableLike](../interfaces/concurrent.PauseableLike.md)
- [PauseableObservableLike](../interfaces/concurrent.PauseableObservableLike.md)
- [PauseableSchedulerLike](../interfaces/concurrent.PauseableSchedulerLike.md)
- [PureObservableLike](../interfaces/concurrent.PureObservableLike.md)
- [PureRunnableLike](../interfaces/concurrent.PureRunnableLike.md)
- [ReplayObservableLike](../interfaces/concurrent.ReplayObservableLike.md)
- [RunnableLike](../interfaces/concurrent.RunnableLike.md)
- [RunnableWithSideEffectsLike](../interfaces/concurrent.RunnableWithSideEffectsLike.md)
- [SchedulerLike](../interfaces/concurrent.SchedulerLike.md)
- [SchedulerTaskLike](../interfaces/concurrent.SchedulerTaskLike.md)
- [StreamLike](../interfaces/concurrent.StreamLike.md)
- [StreamableLike](../interfaces/concurrent.StreamableLike.md)
- [SubjectLike](../interfaces/concurrent.SubjectLike.md)
- [VirtualTimeSchedulerLike](../interfaces/concurrent.VirtualTimeSchedulerLike.md)

### Type Aliases

- [StreamOf](concurrent.md#streamof)

### Variables

- [ContinuationLike\_activeChild](concurrent.md#continuationlike_activechild)
- [ContinuationLike\_parent](concurrent.md#continuationlike_parent)
- [ContinuationLike\_run](concurrent.md#continuationlike_run)
- [ContinuationLike\_scheduler](concurrent.md#continuationlike_scheduler)
- [ContinuationLike\_yield](concurrent.md#continuationlike_yield)
- [ContinuationSchedulerLike\_schedule](concurrent.md#continuationschedulerlike_schedule)
- [DispatcherLikeEvent\_capacityExceeded](concurrent.md#dispatcherlikeevent_capacityexceeded)
- [DispatcherLikeEvent\_completed](concurrent.md#dispatcherlikeevent_completed)
- [DispatcherLikeEvent\_ready](concurrent.md#dispatcherlikeevent_ready)
- [DispatcherLike\_complete](concurrent.md#dispatcherlike_complete)
- [ObservableLike\_isDeferred](concurrent.md#observablelike_isdeferred)
- [ObservableLike\_isPure](concurrent.md#observablelike_ispure)
- [ObservableLike\_isRunnable](concurrent.md#observablelike_isrunnable)
- [ObservableLike\_observe](concurrent.md#observablelike_observe)
- [PauseableLike\_isPaused](concurrent.md#pauseablelike_ispaused)
- [PauseableLike\_pause](concurrent.md#pauseablelike_pause)
- [PauseableLike\_resume](concurrent.md#pauseablelike_resume)
- [ReplayObservableLike\_buffer](concurrent.md#replayobservablelike_buffer)
- [SchedulerLike\_inContinuation](concurrent.md#schedulerlike_incontinuation)
- [SchedulerLike\_maxYieldInterval](concurrent.md#schedulerlike_maxyieldinterval)
- [SchedulerLike\_now](concurrent.md#schedulerlike_now)
- [SchedulerLike\_requestYield](concurrent.md#schedulerlike_requestyield)
- [SchedulerLike\_schedule](concurrent.md#schedulerlike_schedule)
- [SchedulerLike\_shouldYield](concurrent.md#schedulerlike_shouldyield)
- [SchedulerLike\_yield](concurrent.md#schedulerlike_yield)
- [SchedulerTaskLike\_continuation](concurrent.md#schedulertasklike_continuation)
- [SchedulerTaskLike\_dueTime](concurrent.md#schedulertasklike_duetime)
- [SchedulerTaskLike\_id](concurrent.md#schedulertasklike_id)
- [StreamLike\_scheduler](concurrent.md#streamlike_scheduler)
- [StreamableLike\_TStream](concurrent.md#streamablelike_tstream)
- [StreamableLike\_stream](concurrent.md#streamablelike_stream)
- [SubjectLike\_observerCount](concurrent.md#subjectlike_observercount)
- [VirtualTimeSchedulerLike\_run](concurrent.md#virtualtimeschedulerlike_run)

## Type Aliases

### StreamOf

Ƭ **StreamOf**<`TStreamable`\>: `NonNullable`<`TStreamable`[typeof [`StreamableLike_TStream`](concurrent.md#streamablelike_tstream)]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/concurrent.StreamableLike.md) |

## Variables

### ContinuationLike\_activeChild

• `Const` **ContinuationLike\_activeChild**: unique `symbol`

___

### ContinuationLike\_parent

• `Const` **ContinuationLike\_parent**: unique `symbol`

___

### ContinuationLike\_run

• `Const` **ContinuationLike\_run**: unique `symbol`

___

### ContinuationLike\_scheduler

• `Const` **ContinuationLike\_scheduler**: unique `symbol`

___

### ContinuationLike\_yield

• `Const` **ContinuationLike\_yield**: unique `symbol`

___

### ContinuationSchedulerLike\_schedule

• `Const` **ContinuationSchedulerLike\_schedule**: unique `symbol`

___

### DispatcherLikeEvent\_capacityExceeded

• `Const` **DispatcherLikeEvent\_capacityExceeded**: unique `symbol`

___

### DispatcherLikeEvent\_completed

• `Const` **DispatcherLikeEvent\_completed**: unique `symbol`

___

### DispatcherLikeEvent\_ready

• `Const` **DispatcherLikeEvent\_ready**: unique `symbol`

___

### DispatcherLike\_complete

• `Const` **DispatcherLike\_complete**: unique `symbol`

___

### ObservableLike\_isDeferred

• `Const` **ObservableLike\_isDeferred**: unique `symbol`

___

### ObservableLike\_isPure

• `Const` **ObservableLike\_isPure**: unique `symbol`

___

### ObservableLike\_isRunnable

• `Const` **ObservableLike\_isRunnable**: unique `symbol`

___

### ObservableLike\_observe

• `Const` **ObservableLike\_observe**: unique `symbol`

___

### PauseableLike\_isPaused

• `Const` **PauseableLike\_isPaused**: unique `symbol`

___

### PauseableLike\_pause

• `Const` **PauseableLike\_pause**: unique `symbol`

___

### PauseableLike\_resume

• `Const` **PauseableLike\_resume**: unique `symbol`

___

### ReplayObservableLike\_buffer

• `Const` **ReplayObservableLike\_buffer**: unique `symbol`

___

### SchedulerLike\_inContinuation

• `Const` **SchedulerLike\_inContinuation**: unique `symbol`

___

### SchedulerLike\_maxYieldInterval

• `Const` **SchedulerLike\_maxYieldInterval**: unique `symbol`

___

### SchedulerLike\_now

• `Const` **SchedulerLike\_now**: unique `symbol`

___

### SchedulerLike\_requestYield

• `Const` **SchedulerLike\_requestYield**: unique `symbol`

___

### SchedulerLike\_schedule

• `Const` **SchedulerLike\_schedule**: unique `symbol`

___

### SchedulerLike\_shouldYield

• `Const` **SchedulerLike\_shouldYield**: unique `symbol`

___

### SchedulerLike\_yield

• `Const` **SchedulerLike\_yield**: unique `symbol`

___

### SchedulerTaskLike\_continuation

• `Const` **SchedulerTaskLike\_continuation**: unique `symbol`

___

### SchedulerTaskLike\_dueTime

• `Const` **SchedulerTaskLike\_dueTime**: unique `symbol`

___

### SchedulerTaskLike\_id

• `Const` **SchedulerTaskLike\_id**: unique `symbol`

___

### StreamLike\_scheduler

• `Const` **StreamLike\_scheduler**: unique `symbol`

___

### StreamableLike\_TStream

• `Const` **StreamableLike\_TStream**: unique `symbol`

___

### StreamableLike\_stream

• `Const` **StreamableLike\_stream**: unique `symbol`

___

### SubjectLike\_observerCount

• `Const` **SubjectLike\_observerCount**: unique `symbol`

___

### VirtualTimeSchedulerLike\_run

• `Const` **VirtualTimeSchedulerLike\_run**: unique `symbol`
