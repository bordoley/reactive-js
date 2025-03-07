[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>\>

## Type Parameters

• **T**

## Parameters

### shouldRetry?

(`count`, `error`) => `boolean`

## Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>\>
