[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / PureStatefulObservableOperator

# Type Alias: PureStatefulObservableOperator()\<TIn, TOut, TObservableInBase\>

> **PureStatefulObservableOperator**\<`TIn`, `TOut`, `TObservableInBase`\>: \<`TObservableIn`\>(`observable`) => `TObservableIn` *extends* [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TIn`\> ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TIn`\> ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> ? [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TOut`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>

## Type Parameters

• **TIn**

• **TOut**

• **TObservableInBase** = [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

## Type Parameters

• **TObservableIn** *extends* `TObservableInBase`

## Parameters

### observable

`TObservableIn`

## Returns

`TObservableIn` *extends* [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TIn`\> ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TIn`\> ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> ? [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TOut`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>
