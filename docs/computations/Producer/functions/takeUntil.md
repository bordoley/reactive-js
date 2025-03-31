[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / takeUntil

# Function: takeUntil()

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`unknown`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `unknown`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>
