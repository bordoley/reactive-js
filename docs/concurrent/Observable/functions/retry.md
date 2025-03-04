[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`shouldRetry`?): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### shouldRetry?

(`count`, `error`) => `boolean`

## Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>
