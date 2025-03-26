[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`, `TInnerLike`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerLike`, `T`, `T`\>

### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerLike`, `T`\>\>

#### options

##### innerType

`TInnerLike`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerLike`, `T`, `T`\>
