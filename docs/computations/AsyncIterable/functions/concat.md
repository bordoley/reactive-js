[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / concat

# Function: concat()

## Call Signature

> **concat**\<`T`\>(...`computations`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **concat**\<`T`\>(...`computations`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `T`\>[]

### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
