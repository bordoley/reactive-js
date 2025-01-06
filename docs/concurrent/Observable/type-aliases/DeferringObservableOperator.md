[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / DeferringObservableOperator

# Type Alias: DeferringObservableOperator()\<TIn, TOut, TObservableInBase\>

> **DeferringObservableOperator**\<`TIn`, `TOut`, `TObservableInBase`\>: \<`TObservableIn`\>(`obs`) => `TObservableIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

## Type Parameters

• **TIn**

• **TOut**

• **TObservableInBase** = [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

## Type Parameters

• **TObservableIn** *extends* `TObservableInBase`

## Parameters

### obs

`TObservableIn`

## Returns

`TObservableIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>
