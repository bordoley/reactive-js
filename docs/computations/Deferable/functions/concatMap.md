[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Deferable](../README.md) / concatMap

# Function: concatMap()

> **concatMap**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferableLike`](../../interfaces/DeferableLike.md)\<`TB`\> & `Pick`\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>\>

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `TA`, `TB`\>
