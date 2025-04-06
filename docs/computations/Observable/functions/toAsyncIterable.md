[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / toAsyncIterable

# Function: toAsyncIterable()

> **toAsyncIterable**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> : `TComputationOf` *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> : `never`

## Type Parameters

• **T**

## Parameters

### options?

#### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

## Returns

`Function`

### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>

### Parameters

#### computation

`TComputationOf`

### Returns

`TComputationOf` *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> : `TComputationOf` *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> : `never`
