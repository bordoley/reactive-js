[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Deferable](../README.md) / concatWith

# Function: concatWith()

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`DeferableLike`](../../interfaces/DeferableLike.md)\<`T`\> & `Pick`\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>

### tail

...readonly [`DeferableLike`](../../interfaces/DeferableLike.md)\<`T`\> & `Pick`\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>[]

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>
