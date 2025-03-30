[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / scanMany

# Function: scanMany()

> **scanMany**\<`T`, `TAcc`, `TInnerLike`\>(`scanner`, `initialValue`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TInnerLike`, `T`, `TAcc`\>

## Type Parameters

• **T**

• **TAcc**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

## Parameters

### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TInnerLike`, `TAcc`\>\>

### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

### options

`TInnerLike`

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TInnerLike`, `T`, `TAcc`\>
