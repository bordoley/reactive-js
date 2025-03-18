[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / toEventSource

# Function: toEventSource()

> **toEventSource**\<`T`\>(`scheduler`): \<`TObservable`\>(`obs`) => `TObservable` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> ? [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) : [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

## Type Parameters

• **T**

## Parameters

### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

## Returns

`Function`

### Type Parameters

• **TObservable** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Parameters

#### obs

`TObservable`

### Returns

`TObservable` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> ? [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) : [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)
