[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / merge

# Function: merge()

## Call Signature

> **merge**\<`T`\>(...`computations`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **merge**\<`T`\>(...`computations`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`\>[]

### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
