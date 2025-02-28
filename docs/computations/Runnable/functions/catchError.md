[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>
