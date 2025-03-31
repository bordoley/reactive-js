[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / concat

# Function: concat()

## Call Signature

> **concat**\<`T`\>(...`computations`): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **concat**\<`T`\>(...`computations`): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`\>[]

### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
