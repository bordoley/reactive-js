[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/SynchronousObservable](../README.md) / takeUntil

# Function: takeUntil()

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`unknown`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `unknown`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`, `T`\>
