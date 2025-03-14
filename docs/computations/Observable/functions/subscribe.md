[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / subscribe

# Function: subscribe()

> **subscribe**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

## Type Parameters

• **T**

## Parameters

### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### options?

`object` & `Partial`\<`Pick`\<[`QueueableLike`](../../../utils/interfaces/QueueableLike.md)\<`unknown`\>, *typeof* [`QueueableLike_backpressureStrategy`](../../../utils/variables/QueueableLike_backpressureStrategy.md) \| *typeof* [`QueueableLike_capacity`](../../../utils/variables/QueueableLike_capacity.md)\>\>

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
