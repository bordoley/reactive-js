[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/SynchronousObservable](../README.md) / toAsyncIterable

# Function: toAsyncIterable()

> **toAsyncIterable**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> : `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> : `never`

## Type Parameters

• **T**

## Parameters

### options?

`unknown`

## Returns

`Function`

### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`\>

### Parameters

#### computation

`TComputationOf`

### Returns

`TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> : `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> : `never`
