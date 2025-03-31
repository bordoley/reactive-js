[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / toObservable

# Function: toObservable()

> **toObservable**\<`T`\>(`options`?): \<`TAsyncIterable`\>(`iter`) => `TAsyncIterable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\>

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

• **TAsyncIterable** *extends* [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>

### Parameters

#### iter

`TAsyncIterable`

### Returns

`TAsyncIterable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\>
