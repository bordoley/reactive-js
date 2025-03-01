[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / ObservableOperatorWithSideEffects

# Type Alias: ObservableOperatorWithSideEffects()\<TIn, TOut\>

> **ObservableOperatorWithSideEffects**\<`TIn`, `TOut`\>: \<`TObservableIn`\>(`observable`) => [`ObservableComputationOf`](ObservableComputationOf.md)\<`TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md) ? `Omit`\<`TObservableIn`, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md)\> & [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md) : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), `TOut`\>

## Type Parameters

• **TIn**

• **TOut**

## Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

## Parameters

### observable

`TObservableIn`

## Returns

[`ObservableComputationOf`](ObservableComputationOf.md)\<`TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md) ? `Omit`\<`TObservableIn`, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md)\> & [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md) : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), `TOut`\>
