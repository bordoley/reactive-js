[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / toAsyncIterable

# Function: toAsyncIterable()

> **toAsyncIterable**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> : `TComputationOf` *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> : `never`

## Type Parameters

• **T**

## Parameters

### options?

`unknown`

## Returns

`Function`

### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `T`\>

### Parameters

#### computation

`TComputationOf`

### Returns

`TComputationOf` *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> : `TComputationOf` *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> : `never`
