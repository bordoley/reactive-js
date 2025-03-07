[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / flatMapAsync

# Function: flatMapAsync()

> **flatMapAsync**\<`TA`, `TB`\>(`f`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### f

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `AbortSignal`, `Promise`\<`TB`\>\>

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>
