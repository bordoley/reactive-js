[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / multicast

# Function: multicast()

> **multicast**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

## Type Parameters

• **T**

## Parameters

• **scheduler**: [`SchedulerLike`](../../interfaces/SchedulerLike.md)

• **options?**

• **options.autoDispose?**: `boolean`

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.replay?**: `number`

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
