[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/SynchronousObservable](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### shouldRetry?

(`count`, `error`) => `number` \| `boolean`

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`, `T`\>
