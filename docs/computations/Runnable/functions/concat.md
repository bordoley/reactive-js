[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / concat

# Function: concat()

## Call Signature

> **concat**\<`T`\>(...`computations`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`\>[]

### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`PureDeferredComputationLike`](../../interfaces/PureDeferredComputationLike.md) & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureDeferredComputationLike`](../../interfaces/PureDeferredComputationLike.md) & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

### Returns

[`PureDeferredComputationLike`](../../interfaces/PureDeferredComputationLike.md) & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md) & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`\>[]

### Returns

[`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md) & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>
