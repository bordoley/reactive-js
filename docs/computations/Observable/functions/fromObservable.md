[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / fromObservable

# Function: fromObservable()

> **fromObservable**\<`T`\>(`options`?): \<`TObservable`\>(`iterable`) => `TObservable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TObservable` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

## Type Parameters

• **T**

## Parameters

### options?

#### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

## Returns

`Function`

### Type Parameters

• **TObservable** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Parameters

#### iterable

`TObservable`

### Returns

`TObservable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TObservable` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`
