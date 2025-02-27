[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / concatMap

# Function: concatMap()

> **concatMap**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](../interfaces/IterableComputation.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `Iterable`\<`TB`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>\>

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](../interfaces/IterableComputation.md), `TA`, `TB`\>
