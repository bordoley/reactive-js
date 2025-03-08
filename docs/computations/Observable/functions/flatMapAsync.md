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

[`AsyncFunction2`](../../../functions/type-aliases/AsyncFunction2.md)\<`TA`, `AbortSignal`, `TB`\>

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>
