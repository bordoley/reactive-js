[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / DeferredReactiveObservableOperator

# Type Alias: DeferredReactiveObservableOperator()\<TIn, TOut\>

> **DeferredReactiveObservableOperator**\<`TIn`, `TOut`\>: \<`TObservableIn`\>(`observable`) => [`ObservableComputationOf`](ObservableComputationOf.md)\<`TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md) ? `TObservableIn` : `TObservableIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md) ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md) : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), `TOut`\>

## Type Parameters

• **TIn**

• **TOut**

## Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

## Parameters

### observable

`TObservableIn`

## Returns

[`ObservableComputationOf`](ObservableComputationOf.md)\<`TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md) ? `TObservableIn` : `TObservableIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md) ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md) : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), `TOut`\>
