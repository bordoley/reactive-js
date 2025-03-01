[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / DeferringObservableOperator

# Type Alias: DeferringObservableOperator()\<TIn, TOut\>

> **DeferringObservableOperator**\<`TIn`, `TOut`\>: \<`TObservableIn`\>(`obs`) => `TObservableIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

## Type Parameters

• **TIn**

• **TOut**

## Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

## Parameters

### obs

`TObservableIn`

## Returns

`TObservableIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>
