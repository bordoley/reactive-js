[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerLike`, `T`\>, `T`\>

### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### options

##### innerType

`TInnerLike`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `TInnerLike`, `T`\>, `T`\>
