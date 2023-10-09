[Reactive-JS](../README.md) / concurrent

# Module: concurrent

## Table of contents

### Interactive Interfaces

- [StreamLike](../interfaces/concurrent.StreamLike.md)
- [StreamableLike](../interfaces/concurrent.StreamableLike.md)

### Observable Interfaces

- [DeferredObservableLike](../interfaces/concurrent.DeferredObservableLike.md)
- [ReplayObservableLike](../interfaces/concurrent.ReplayObservableLike.md)
- [RunnableLike](../interfaces/concurrent.RunnableLike.md)
- [RunnableWithSideEffectsLike](../interfaces/concurrent.RunnableWithSideEffectsLike.md)

### Other Interfaces

- [ContinuationLike](../interfaces/concurrent.ContinuationLike.md)
- [ContinuationSchedulerLike](../interfaces/concurrent.ContinuationSchedulerLike.md)
- [MulticastObservableLike](../interfaces/concurrent.MulticastObservableLike.md)
- [ObservableLike](../interfaces/concurrent.ObservableLike.md)
- [ObserverLike](../interfaces/concurrent.ObserverLike.md)
- [PauseableObservableLike](../interfaces/concurrent.PauseableObservableLike.md)
- [PauseableSchedulerLike](../interfaces/concurrent.PauseableSchedulerLike.md)
- [ReplayPublisherLike](../interfaces/concurrent.ReplayPublisherLike.md)
- [SchedulerLike](../interfaces/concurrent.SchedulerLike.md)
- [SchedulerTaskLike](../interfaces/concurrent.SchedulerTaskLike.md)
- [VirtualTimeSchedulerLike](../interfaces/concurrent.VirtualTimeSchedulerLike.md)

### Interactive Type Aliases

- [StreamOf](concurrent.md#streamof)

### Other Type Aliases

- [Observableish](concurrent.md#observableish)

### Variables

- [ContinuationLike\_activeChild](concurrent.md#continuationlike_activechild)
- [ContinuationLike\_parent](concurrent.md#continuationlike_parent)
- [ContinuationLike\_run](concurrent.md#continuationlike_run)
- [ContinuationLike\_scheduler](concurrent.md#continuationlike_scheduler)
- [ContinuationSchedulerLike\_schedule](concurrent.md#continuationschedulerlike_schedule)
- [ObservableLike\_isDeferred](concurrent.md#observablelike_isdeferred)
- [ObservableLike\_isPure](concurrent.md#observablelike_ispure)
- [ObservableLike\_isRunnable](concurrent.md#observablelike_isrunnable)
- [ObservableLike\_observe](concurrent.md#observablelike_observe)
- [ReplayObservableLike\_buffer](concurrent.md#replayobservablelike_buffer)
- [ReplayPublisherLike\_observerCount](concurrent.md#replaypublisherlike_observercount)
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
- [VirtualTimeSchedulerLike\_run](concurrent.md#virtualtimeschedulerlike_run)

## Interactive Type Aliases

### StreamOf

Ƭ **StreamOf**<`TStreamable`\>: `NonNullable`<`TStreamable`[typeof [`StreamableLike_TStream`](concurrent.md#streamablelike_tstream)]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/concurrent.StreamableLike.md) |

___

## Other Type Aliases

### Observableish

Ƭ **Observableish**<`T`\>: [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> \| [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\> \| [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\> \| `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

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

### ContinuationSchedulerLike\_schedule

• `Const` **ContinuationSchedulerLike\_schedule**: unique `symbol`

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

### ReplayObservableLike\_buffer

• `Const` **ReplayObservableLike\_buffer**: unique `symbol`

___

### ReplayPublisherLike\_observerCount

• `Const` **ReplayPublisherLike\_observerCount**: unique `symbol`

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

### VirtualTimeSchedulerLike\_run

• `Const` **VirtualTimeSchedulerLike\_run**: unique `symbol`
