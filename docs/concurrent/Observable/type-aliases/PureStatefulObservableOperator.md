[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / PureStatefulObservableOperator

# Type Alias: PureStatefulObservableOperator()\<TIn, TOut, TObservableInBase\>

> **PureStatefulObservableOperator**\<`TIn`, `TOut`, `TObservableInBase`\>: \<`TObservableIn`\>(`observable`) => `TObservableIn` *extends* [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TIn`\> ? [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TOut`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>

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

`TObservableIn` *extends* [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TIn`\> ? [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TOut`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>
