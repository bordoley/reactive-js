[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / ObservableOperatorWithSideEffects

# Type Alias: ObservableOperatorWithSideEffects()\<TIn, TOut\>

> **ObservableOperatorWithSideEffects**\<`TIn`, `TOut`\>: \<`TObservableIn`\>(`observable`) => `TObservableIn` *extends* [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TIn`\> ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TIn`\> ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>

## Type Parameters

• **TIn**

• **TOut**

## Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

## Parameters

### observable

`TObservableIn`

## Returns

`TObservableIn` *extends* [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TIn`\> ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TIn`\> ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>
