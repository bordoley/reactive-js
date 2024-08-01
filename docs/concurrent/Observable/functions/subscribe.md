[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / subscribe

# Function: subscribe()

> **subscribe**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

## Type Parameters

• **T**

## Parameters

• **scheduler**: [`SchedulerLike`](../../interfaces/SchedulerLike.md)

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
