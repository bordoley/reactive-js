[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / ObservableOperatorWithSideEffects

# Type Alias: ObservableOperatorWithSideEffects()\<TIn, TOut\>

> **ObservableOperatorWithSideEffects**\<`TIn`, `TOut`\>: \<`TObservableIn`\>(`observable`) => [`ObservableComputationOf`](ObservableComputationOf.md)\<`TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md) ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md) & `Pick`\<`TObservableIn`, *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), `TOut`\>

## Type Parameters

• **TIn**

• **TOut**

## Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

## Parameters

### observable

`TObservableIn`

## Returns

[`ObservableComputationOf`](ObservableComputationOf.md)\<`TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md) ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md) & `Pick`\<`TObservableIn`, *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), `TOut`\>
