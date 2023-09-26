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

### Other Interfaces

- [MulticastObservableLike](../interfaces/concurrent.MulticastObservableLike.md)
- [ObservableLike](../interfaces/concurrent.ObservableLike.md)
- [ObserverLike](../interfaces/concurrent.ObserverLike.md)
- [PauseableObservableLike](../interfaces/concurrent.PauseableObservableLike.md)
- [PauseableSchedulerLike](../interfaces/concurrent.PauseableSchedulerLike.md)
- [PureObservableLike](../interfaces/concurrent.PureObservableLike.md)
- [SchedulerLike](../interfaces/concurrent.SchedulerLike.md)
- [VirtualTimeSchedulerLike](../interfaces/concurrent.VirtualTimeSchedulerLike.md)

### Interactive Type Aliases

- [StreamOf](concurrent.md#streamof)

### Other Type Aliases

- [Observableish](concurrent.md#observableish)

### Variables

- [ObservableLike\_isDeferred](concurrent.md#observablelike_isdeferred)
- [ObservableLike\_isPure](concurrent.md#observablelike_ispure)
- [ObservableLike\_isRunnable](concurrent.md#observablelike_isrunnable)
- [ObservableLike\_observe](concurrent.md#observablelike_observe)
- [ReplayObservableLike\_buffer](concurrent.md#replayobservablelike_buffer)
- [SchedulerLike\_inContinuation](concurrent.md#schedulerlike_incontinuation)
- [SchedulerLike\_maxYieldInterval](concurrent.md#schedulerlike_maxyieldinterval)
- [SchedulerLike\_now](concurrent.md#schedulerlike_now)
- [SchedulerLike\_requestYield](concurrent.md#schedulerlike_requestyield)
- [SchedulerLike\_schedule](concurrent.md#schedulerlike_schedule)
- [SchedulerLike\_shouldYield](concurrent.md#schedulerlike_shouldyield)
- [SchedulerLike\_yield](concurrent.md#schedulerlike_yield)
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

Ƭ **Observableish**<`T`\>: [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> \| [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\> \| [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\> \| `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

## Variables

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
