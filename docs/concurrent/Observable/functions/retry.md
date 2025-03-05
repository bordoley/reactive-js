[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>\>

## Type Parameters

• **T**

## Parameters

### shouldRetry?

(`count`, `error`) => `boolean`

## Returns

[`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>\>
