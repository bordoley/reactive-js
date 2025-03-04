[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / fromIterable

# Function: fromIterable()

> **fromIterable**\<`T`\>(`options`?): \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../../../computations/interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> : [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Type Parameters

• **T**

## Parameters

### options?

#### delay

`number`

#### delayStart?

`boolean`

## Returns

`Function`

### Type Parameters

• **TIterable** *extends* [`IterableLike`](../../../computations/interfaces/IterableLike.md)\<`T`\> = [`IterableLike`](../../../computations/interfaces/IterableLike.md)\<`T`\>

### Parameters

#### iterable

`TIterable`

### Returns

`TIterable` *extends* [`PureIterableLike`](../../../computations/interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> : [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>
