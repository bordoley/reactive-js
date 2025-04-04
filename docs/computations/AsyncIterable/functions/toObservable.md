[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / toObservable

# Function: toObservable()

> **toObservable**\<`T`\>(`options`?): \<`TComputationOf`\>(`iter`) => `TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) & [`SynchronousComputationLike`](../../interfaces/SynchronousComputationLike.md) ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) & [`SynchronousComputationLike`](../../interfaces/SynchronousComputationLike.md) ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `never`

## Type Parameters

• **T**

## Parameters

### options?

#### bufferSize?

`number`

## Returns

`Function`

### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `T`\>

### Parameters

#### iter

`TComputationOf`

### Returns

`TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) & [`SynchronousComputationLike`](../../interfaces/SynchronousComputationLike.md) ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) & [`SynchronousComputationLike`](../../interfaces/SynchronousComputationLike.md) ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `never`
