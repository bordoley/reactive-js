[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / concatWith

# Function: concatWith()

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>[]

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>
