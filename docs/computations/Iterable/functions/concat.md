[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / concat

# Function: concat()

## Call Signature

> **concat**\<`T`\>(...`computations`): [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>[]

### Returns

[`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`\>[]

### Returns

[`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`PureDeferredComputationLike`](../../interfaces/PureDeferredComputationLike.md) & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureDeferredComputationLike`](../../interfaces/PureDeferredComputationLike.md) & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>[]

### Returns

[`PureDeferredComputationLike`](../../interfaces/PureDeferredComputationLike.md) & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md) & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`\>[]

### Returns

[`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md) & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>
