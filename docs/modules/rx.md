[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### Interactive Interfaces

- [StreamLike](../interfaces/rx.StreamLike.md)
- [StreamableLike](../interfaces/rx.StreamableLike.md)

### Observable Interfaces

- [DeferredObservableLike](../interfaces/rx.DeferredObservableLike.md)
- [ReplayObservableLike](../interfaces/rx.ReplayObservableLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)

### Other Interfaces

- [DispatcherLike](../interfaces/rx.DispatcherLike.md)
- [DispatcherLikeEventMap](../interfaces/rx.DispatcherLikeEventMap.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [ObserverLike](../interfaces/rx.ObserverLike.md)
- [PauseableObservableLike](../interfaces/rx.PauseableObservableLike.md)
- [PureObservableLike](../interfaces/rx.PureObservableLike.md)

### Interactive Type Aliases

- [StreamOf](rx.md#streamof)

### Variables

- [DispatcherLikeEvent\_capacityExceeded](rx.md#dispatcherlikeevent_capacityexceeded)
- [DispatcherLikeEvent\_completed](rx.md#dispatcherlikeevent_completed)
- [DispatcherLikeEvent\_ready](rx.md#dispatcherlikeevent_ready)
- [DispatcherLike\_complete](rx.md#dispatcherlike_complete)
- [ObservableLike\_isDeferred](rx.md#observablelike_isdeferred)
- [ObservableLike\_isPure](rx.md#observablelike_ispure)
- [ObservableLike\_isRunnable](rx.md#observablelike_isrunnable)
- [ObservableLike\_observe](rx.md#observablelike_observe)
- [ReplayObservableLike\_buffer](rx.md#replayobservablelike_buffer)
- [StreamLike\_scheduler](rx.md#streamlike_scheduler)
- [StreamableLike\_TStream](rx.md#streamablelike_tstream)
- [StreamableLike\_stream](rx.md#streamablelike_stream)

## Interactive Type Aliases

### StreamOf

Ƭ **StreamOf**<`TStreamable`\>: `NonNullable`<`TStreamable`[typeof [`StreamableLike_TStream`](rx.md#streamablelike_tstream)]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/rx.StreamableLike.md) |

## Variables

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

### ReplayObservableLike\_buffer

• `Const` **ReplayObservableLike\_buffer**: unique `symbol`

___

### StreamLike\_scheduler

• `Const` **StreamLike\_scheduler**: unique `symbol`

___

### StreamableLike\_TStream

• `Const` **StreamableLike\_TStream**: unique `symbol`

___

### StreamableLike\_stream

• `Const` **StreamableLike\_stream**: unique `symbol`
