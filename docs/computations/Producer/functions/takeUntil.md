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

`never`

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

`never`

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`unknown`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`unknown`\>

### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`unknown`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`unknown`\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

`never`

### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `T`\>
