[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / toObservable

# Function: toObservable()

> **toObservable**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `never`

## Type Parameters

• **T**

## Parameters

### options?

`unknown`

## Returns

`Function`

### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>

### Parameters

#### computation

`TComputationOf`

### Returns

`TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `never`
