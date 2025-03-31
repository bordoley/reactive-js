[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Broadcaster](../README.md) / fromObservable

# Function: fromObservable()

> **fromObservable**\<`T`\>(`options`?): \<`TObservable`\>(`iterable`) => `TObservable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) & [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) : `TObservable` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) & [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) : `never`

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

`TObservable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) & [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) : `TObservable` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) & [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) : `never`
