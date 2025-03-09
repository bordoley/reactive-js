[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `T`\>\>

## Type Parameters

• **T**

## Parameters

### shouldRetry?

(`count`, `error`) => `boolean`

## Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `T`\>\>
