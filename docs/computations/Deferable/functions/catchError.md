[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Deferable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`DeferableLike`](../../interfaces/DeferableLike.md)\<`T`\> & `Pick`\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, [`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>
