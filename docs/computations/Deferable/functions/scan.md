[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Deferable](../README.md) / scan

# Function: scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `TAcc`\>

## Type Parameters

• **T**

• **TAcc**

## Parameters

### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `TAcc`\>
