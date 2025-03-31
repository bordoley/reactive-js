[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / scanMany

# Function: scanMany()

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TAcc`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `TAcc`\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TAcc`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `TAcc`\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`, `TAcc`\>
