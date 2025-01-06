[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / subscribeOn

# Function: subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`, `options`?): \<`TObservableIn`\>(`observable`) => `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Type Parameters

• **T**

## Parameters

### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

### options?

#### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### capacity

`number`

## Returns

`Function`

### Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Parameters

#### observable

`TObservableIn`

### Returns

`TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>
