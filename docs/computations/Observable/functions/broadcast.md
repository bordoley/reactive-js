[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / broadcast

# Function: broadcast()

> **broadcast**\<`T`\>(`scheduler`, `options`?): \<`TObservable`\>(`obs`) => `TObservable` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> ? [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) : [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

## Type Parameters

• **T**

## Parameters

### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### options?

#### autoDispose?

`boolean`

#### replay?

`number`

## Returns

`Function`

### Type Parameters

• **TObservable** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Parameters

#### obs

`TObservable`

### Returns

`TObservable` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> ? [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) : [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)
