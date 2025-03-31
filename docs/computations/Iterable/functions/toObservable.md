[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / toObservable

# Function: toObservable()

> **toObservable**\<`T`\>(`options`?): \<`TIterable`\>(`iter`) => `TIterable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> : [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

## Type Parameters

• **T**

## Parameters

### options?

#### delay

`number`

#### delayStart

`boolean`

## Returns

`Function`

### Type Parameters

• **TIterable** *extends* [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

### Parameters

#### iter

`TIterable`

### Returns

`TIterable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> : [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>
