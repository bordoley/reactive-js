[Reactive-JS](../README.md) / types

# Module: types

## Table of contents

### Collection Interfaces

- [AssociativeCollectionLike](../interfaces/types.AssociativeCollectionLike.md)
- [CollectionLike](../interfaces/types.CollectionLike.md)
- [DictionaryLike](../interfaces/types.DictionaryLike.md)
- [IndexedCollectionLike](../interfaces/types.IndexedCollectionLike.md)
- [KeyedCollectionLike](../interfaces/types.KeyedCollectionLike.md)

### Event Interfaces

- [ErrorSafeEventListenerLike](../interfaces/types.ErrorSafeEventListenerLike.md)
- [EventListenerLike](../interfaces/types.EventListenerLike.md)
- [EventPublisherLike](../interfaces/types.EventPublisherLike.md)
- [EventSourceLike](../interfaces/types.EventSourceLike.md)
- [StoreLike](../interfaces/types.StoreLike.md)

### EventMap Interfaces

- [DispatcherLikeEventMap](../interfaces/types.DispatcherLikeEventMap.md)

### Interactive Interfaces

- [EnumerableLike](../interfaces/types.EnumerableLike.md)
- [EnumeratorLike](../interfaces/types.EnumeratorLike.md)
- [StreamLike](../interfaces/types.StreamLike.md)

### Other Interfaces

- [StreamableLike](../interfaces/types.StreamableLike.md)

### Queueing Interfaces

- [BufferLike](../interfaces/types.BufferLike.md)
- [DispatcherLike](../interfaces/types.DispatcherLike.md)
- [IndexedBufferCollectionLike](../interfaces/types.IndexedBufferCollectionLike.md)
- [QueueableLike](../interfaces/types.QueueableLike.md)

### Reactive Interfaces

- [DeferredObservableLike](../interfaces/types.DeferredObservableLike.md)
- [MulticastObservableLike](../interfaces/types.MulticastObservableLike.md)
- [ObservableLike](../interfaces/types.ObservableLike.md)
- [ObserverLike](../interfaces/types.ObserverLike.md)
- [PauseableObservableLike](../interfaces/types.PauseableObservableLike.md)
- [PublisherLike](../interfaces/types.PublisherLike.md)
- [RunnableLike](../interfaces/types.RunnableLike.md)
- [SharedObservableLike](../interfaces/types.SharedObservableLike.md)

### Resource Management Interfaces

- [DisposableLike](../interfaces/types.DisposableLike.md)

### Scheduling Interfaces

- [PauseableLike](../interfaces/types.PauseableLike.md)
- [PauseableSchedulerLike](../interfaces/types.PauseableSchedulerLike.md)
- [SchedulerLike](../interfaces/types.SchedulerLike.md)
- [VirtualTimeSchedulerLike](../interfaces/types.VirtualTimeSchedulerLike.md)

### Type Aliases

- [DisposableOrTeardown](types.md#disposableorteardown)
- [ReadonlyObjectMapLike](types.md#readonlyobjectmaplike)
- [StreamOf](types.md#streamof)

### Variables

- [AssociativeCollectionLike\_keys](types.md#associativecollectionlike_keys)
- [BufferLike\_capacity](types.md#bufferlike_capacity)
- [CollectionLike\_count](types.md#collectionlike_count)
- [DispatcherLikeEvent\_capacityExceeded](types.md#dispatcherlikeevent_capacityexceeded)
- [DispatcherLikeEvent\_completed](types.md#dispatcherlikeevent_completed)
- [DispatcherLikeEvent\_ready](types.md#dispatcherlikeevent_ready)
- [DispatcherLike\_complete](types.md#dispatcherlike_complete)
- [DisposableLike\_add](types.md#disposablelike_add)
- [DisposableLike\_dispose](types.md#disposablelike_dispose)
- [DisposableLike\_error](types.md#disposablelike_error)
- [DisposableLike\_isDisposed](types.md#disposablelike_isdisposed)
- [EnumeratorLike\_current](types.md#enumeratorlike_current)
- [EnumeratorLike\_hasCurrent](types.md#enumeratorlike_hascurrent)
- [EnumeratorLike\_move](types.md#enumeratorlike_move)
- [EventListenerLike\_isErrorSafe](types.md#eventlistenerlike_iserrorsafe)
- [EventListenerLike\_notify](types.md#eventlistenerlike_notify)
- [EventPublisherLike\_listenerCount](types.md#eventpublisherlike_listenercount)
- [EventSourceLike\_addEventListener](types.md#eventsourcelike_addeventlistener)
- [KeyedCollectionLike\_get](types.md#keyedcollectionlike_get)
- [MulticastObservableLike\_buffer](types.md#multicastobservablelike_buffer)
- [ObservableLike\_isDeferred](types.md#observablelike_isdeferred)
- [ObservableLike\_isEnumerable](types.md#observablelike_isenumerable)
- [ObservableLike\_isRunnable](types.md#observablelike_isrunnable)
- [ObservableLike\_observe](types.md#observablelike_observe)
- [ObserverLike\_notify](types.md#observerlike_notify)
- [PauseableLike\_isPaused](types.md#pauseablelike_ispaused)
- [PauseableLike\_pause](types.md#pauseablelike_pause)
- [PauseableLike\_resume](types.md#pauseablelike_resume)
- [PublisherLike\_observerCount](types.md#publisherlike_observercount)
- [QueueableLike\_backpressureStrategy](types.md#queueablelike_backpressurestrategy)
- [QueueableLike\_enqueue](types.md#queueablelike_enqueue)
- [SchedulerLike\_inContinuation](types.md#schedulerlike_incontinuation)
- [SchedulerLike\_maxYieldInterval](types.md#schedulerlike_maxyieldinterval)
- [SchedulerLike\_now](types.md#schedulerlike_now)
- [SchedulerLike\_requestYield](types.md#schedulerlike_requestyield)
- [SchedulerLike\_schedule](types.md#schedulerlike_schedule)
- [SchedulerLike\_shouldYield](types.md#schedulerlike_shouldyield)
- [SchedulerLike\_yield](types.md#schedulerlike_yield)
- [StoreLike\_value](types.md#storelike_value)
- [StreamLike\_scheduler](types.md#streamlike_scheduler)
- [StreamableLike\_TStream](types.md#streamablelike_tstream)
- [StreamableLike\_stream](types.md#streamablelike_stream)
- [VirtualTimeSchedulerLike\_run](types.md#virtualtimeschedulerlike_run)

## Type Aliases

### DisposableOrTeardown

Ƭ **DisposableOrTeardown**: [`DisposableLike`](../interfaces/types.DisposableLike.md) \| [`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<`Error`\>\>

___

### ReadonlyObjectMapLike

Ƭ **ReadonlyObjectMapLike**<`TKey`, `T`\>: { readonly [P in TKey]?: T }

**`No Inherit Doc`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `number` \| `string` = `string` |
| `T` | `unknown` |

___

### StreamOf

Ƭ **StreamOf**<`TStreamable`\>: `NonNullable`<`TStreamable`[typeof [`StreamableLike_TStream`](types.md#streamablelike_tstream)]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/types.StreamableLike.md) |

## Variables

### AssociativeCollectionLike\_keys

• `Const` **AssociativeCollectionLike\_keys**: typeof `__AssociativeCollectionLike_keys`

___

### BufferLike\_capacity

• `Const` **BufferLike\_capacity**: typeof `__BufferLike_capacity`

___

### CollectionLike\_count

• `Const` **CollectionLike\_count**: typeof `__CollectionLike_count`

___

### DispatcherLikeEvent\_capacityExceeded

• `Const` **DispatcherLikeEvent\_capacityExceeded**: typeof `__DispatcherLikeEvent_capacityExceeded`

___

### DispatcherLikeEvent\_completed

• `Const` **DispatcherLikeEvent\_completed**: typeof `__DispatcherLikeEvent_completed`

___

### DispatcherLikeEvent\_ready

• `Const` **DispatcherLikeEvent\_ready**: typeof `__DispatcherLikeEvent_ready`

___

### DispatcherLike\_complete

• `Const` **DispatcherLike\_complete**: typeof `__DispatcherLike_complete`

___

### DisposableLike\_add

• `Const` **DisposableLike\_add**: typeof `__DisposableLike_add`

___

### DisposableLike\_dispose

• `Const` **DisposableLike\_dispose**: typeof `__DisposableLike_dispose`

___

### DisposableLike\_error

• `Const` **DisposableLike\_error**: typeof `__DisposableLike_error`

___

### DisposableLike\_isDisposed

• `Const` **DisposableLike\_isDisposed**: typeof `__DisposableLike_isDisposed`

___

### EnumeratorLike\_current

• `Const` **EnumeratorLike\_current**: typeof `__EnumeratorLike_current`

___

### EnumeratorLike\_hasCurrent

• `Const` **EnumeratorLike\_hasCurrent**: typeof `__EnumeratorLike_hasCurrent`

___

### EnumeratorLike\_move

• `Const` **EnumeratorLike\_move**: typeof `__EnumeratorLike_move`

___

### EventListenerLike\_isErrorSafe

• `Const` **EventListenerLike\_isErrorSafe**: typeof `__EventListenerLike_isErrorSafe`

___

### EventListenerLike\_notify

• `Const` **EventListenerLike\_notify**: typeof `__EventListenerLike_notify`

___

### EventPublisherLike\_listenerCount

• `Const` **EventPublisherLike\_listenerCount**: typeof `__EventPublisherLike_listenerCount`

___

### EventSourceLike\_addEventListener

• `Const` **EventSourceLike\_addEventListener**: typeof `__EventSourceLike_addEventListener`

___

### KeyedCollectionLike\_get

• `Const` **KeyedCollectionLike\_get**: typeof `__KeyedCollectionLike_get`

___

### MulticastObservableLike\_buffer

• `Const` **MulticastObservableLike\_buffer**: typeof `__MulticastObservableLike_buffer`

___

### ObservableLike\_isDeferred

• `Const` **ObservableLike\_isDeferred**: typeof `__ObservableLike_isDeferred`

___

### ObservableLike\_isEnumerable

• `Const` **ObservableLike\_isEnumerable**: typeof `__ObservableLike_isEnumerable`

___

### ObservableLike\_isRunnable

• `Const` **ObservableLike\_isRunnable**: typeof `__ObservableLike_isRunnable`

___

### ObservableLike\_observe

• `Const` **ObservableLike\_observe**: typeof `__ObservableLike_observe`

___

### ObserverLike\_notify

• `Const` **ObserverLike\_notify**: typeof `__ObserverLike_notify`

___

### PauseableLike\_isPaused

• `Const` **PauseableLike\_isPaused**: typeof `__PauseableLike_isPaused`

___

### PauseableLike\_pause

• `Const` **PauseableLike\_pause**: typeof `__PauseableLike_pause`

___

### PauseableLike\_resume

• `Const` **PauseableLike\_resume**: typeof `__PauseableLike_resume`

___

### PublisherLike\_observerCount

• `Const` **PublisherLike\_observerCount**: typeof `__PublisherLike_observerCount`

___

### QueueableLike\_backpressureStrategy

• `Const` **QueueableLike\_backpressureStrategy**: typeof `__QueueableLike_backpressureStrategy`

___

### QueueableLike\_enqueue

• `Const` **QueueableLike\_enqueue**: typeof `__QueueableLike_enqueue`

___

### SchedulerLike\_inContinuation

• `Const` **SchedulerLike\_inContinuation**: typeof `__SchedulerLike_inContinuation`

___

### SchedulerLike\_maxYieldInterval

• `Const` **SchedulerLike\_maxYieldInterval**: typeof `__SchedulerLike_maxYieldInterval`

___

### SchedulerLike\_now

• `Const` **SchedulerLike\_now**: typeof `__SchedulerLike_now`

___

### SchedulerLike\_requestYield

• `Const` **SchedulerLike\_requestYield**: typeof `__SchedulerLike_requestYield`

___

### SchedulerLike\_schedule

• `Const` **SchedulerLike\_schedule**: typeof `__SchedulerLike_schedule`

___

### SchedulerLike\_shouldYield

• `Const` **SchedulerLike\_shouldYield**: typeof `__SchedulerLike_shouldYield`

___

### SchedulerLike\_yield

• `Const` **SchedulerLike\_yield**: typeof `__SchedulerLike_yield`

___

### StoreLike\_value

• `Const` **StoreLike\_value**: typeof `__StoreLike_value`

___

### StreamLike\_scheduler

• `Const` **StreamLike\_scheduler**: typeof `__StreamLike_scheduler`

___

### StreamableLike\_TStream

• `Const` **StreamableLike\_TStream**: typeof `__StreamableLike_TStream`

___

### StreamableLike\_stream

• `Const` **StreamableLike\_stream**: typeof `__StreamableLike_stream`

___

### VirtualTimeSchedulerLike\_run

• `Const` **VirtualTimeSchedulerLike\_run**: typeof `__VirtualTimeSchedulerLike_run`
