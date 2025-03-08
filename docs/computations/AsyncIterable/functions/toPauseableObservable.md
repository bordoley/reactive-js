[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / toPauseableObservable

# Function: toPauseableObservable()

> **toPauseableObservable**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

## Type Parameters

• **T**

## Parameters

### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### options?

#### autoDispose?

`boolean`

#### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### capacity?

`number`

#### replay?

`number`

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
