[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`, `TInnerType`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerType`, `T`, `T`\>

### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../type-aliases/DeferringHigherOrderInnerType.md)

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerType`, `T`\>\>

#### options

##### innerType

`TInnerType`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerType`, `T`, `T`\>
