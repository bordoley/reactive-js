[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / concatWith

# Function: concatWith()

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

### tail

...readonly `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>[]

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>
