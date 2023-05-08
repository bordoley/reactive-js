[Reactive-JS](../README.md) / core

# Module: core

## Table of contents

### Namespaces

- [Container](core.Container.md)
- [EnumerableContainer](core.EnumerableContainer.md)
- [KeyedContainer](core.KeyedContainer.md)
- [ReactiveContainer](core.ReactiveContainer.md)

### Collection Interfaces

- [AssociativeCollectionLike](../interfaces/core.AssociativeCollectionLike.md)
- [CollectionLike](../interfaces/core.CollectionLike.md)
- [DictionaryLike](../interfaces/core.DictionaryLike.md)
- [IndexedCollectionLike](../interfaces/core.IndexedCollectionLike.md)
- [KeyedCollectionLike](../interfaces/core.KeyedCollectionLike.md)

### Container Interfaces

- [AsyncIterableContainer](../interfaces/core.AsyncIterableContainer.md)
- [Container](../interfaces/core.Container-1.md)
- [EnumerableContainer](../interfaces/core.EnumerableContainer-1.md)
- [EnumeratorContainer](../interfaces/core.EnumeratorContainer.md)
- [EventSourceContainer](../interfaces/core.EventSourceContainer.md)
- [IterableContainer](../interfaces/core.IterableContainer.md)
- [ObservableContainer](../interfaces/core.ObservableContainer.md)
- [PauseableObservableContainer](../interfaces/core.PauseableObservableContainer.md)
- [PromiseContainer](../interfaces/core.PromiseContainer.md)
- [RunnableContainer](../interfaces/core.RunnableContainer.md)

### Event Interfaces

- [ErrorSafeEventListenerLike](../interfaces/core.ErrorSafeEventListenerLike.md)
- [EventListenerLike](../interfaces/core.EventListenerLike.md)
- [EventPublisherLike](../interfaces/core.EventPublisherLike.md)
- [EventSourceLike](../interfaces/core.EventSourceLike.md)
- [StoreLike](../interfaces/core.StoreLike.md)

### EventMap Interfaces

- [DispatcherLikeEventMap](../interfaces/core.DispatcherLikeEventMap.md)

### Interactive Interfaces

- [EnumerableLike](../interfaces/core.EnumerableLike.md)
- [EnumeratorLike](../interfaces/core.EnumeratorLike.md)
- [StreamLike](../interfaces/core.StreamLike.md)

### KeyedContainer Interfaces

- [DictionaryContainer](../interfaces/core.DictionaryContainer.md)
- [KeyedContainer](../interfaces/core.KeyedContainer-1.md)
- [ReadonlyArrayContainer](../interfaces/core.ReadonlyArrayContainer.md)
- [ReadonlyMapContainer](../interfaces/core.ReadonlyMapContainer.md)
- [ReadonlyObjectMapContainer](../interfaces/core.ReadonlyObjectMapContainer.md)

### Other Interfaces

- [StreamableLike](../interfaces/core.StreamableLike.md)

### Queueing Interfaces

- [BufferLike](../interfaces/core.BufferLike.md)
- [DispatcherLike](../interfaces/core.DispatcherLike.md)
- [IndexedBufferCollectionLike](../interfaces/core.IndexedBufferCollectionLike.md)
- [QueueableLike](../interfaces/core.QueueableLike.md)

### Reactive Interfaces

- [MulticastObservableLike](../interfaces/core.MulticastObservableLike.md)
- [ObservableLike](../interfaces/core.ObservableLike.md)
- [ObserverLike](../interfaces/core.ObserverLike.md)
- [PauseableObservableLike](../interfaces/core.PauseableObservableLike.md)
- [PublisherLike](../interfaces/core.PublisherLike.md)
- [RunnableLike](../interfaces/core.RunnableLike.md)

### Resource Management Interfaces

- [DisposableLike](../interfaces/core.DisposableLike.md)

### Scheduling Interfaces

- [PauseableLike](../interfaces/core.PauseableLike.md)
- [PauseableSchedulerLike](../interfaces/core.PauseableSchedulerLike.md)
- [SchedulerLike](../interfaces/core.SchedulerLike.md)
- [VirtualTimeSchedulerLike](../interfaces/core.VirtualTimeSchedulerLike.md)

### Type Aliases

- [DisposableOrTeardown](core.md#disposableorteardown)
- [ReadonlyObjectMapLike](core.md#readonlyobjectmaplike)
- [StreamOf](core.md#streamof)

## Type Aliases

### DisposableOrTeardown

Ƭ **DisposableOrTeardown**: [`DisposableLike`](../interfaces/core.DisposableLike.md) \| [`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<`Error`\>\>

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

Ƭ **StreamOf**<`TStreamable`\>: `NonNullable`<`TStreamable`[typeof `StreamableLike_TStream`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/core.StreamableLike.md) |
