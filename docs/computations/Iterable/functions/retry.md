[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`\>\>

## Type Parameters

• **T**

## Parameters

### shouldRetry?

(`count`, `error`) => `boolean`

## Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`\>\>
