[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / concat

# Function: concat()

## Call Signature

> **concat**\<`T`\>(...`computations`): [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **concat**\<`T`\>(...`computations`): [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`\>[]

### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
