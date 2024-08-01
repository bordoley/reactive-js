[**Reactive-JS**](../../../../README.md) • **Docs**

***

[Reactive-JS](../../../../README.md) / [concurrent/Observable/effects](../README.md) / \_\_state

# Function: \_\_state()

> **\_\_state**\<`T`\>(`initialState`, `options`?): [`StreamLike`](../../../interfaces/StreamLike.md)\<[`Updater`](../../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>

## Type Parameters

• **T**

## Parameters

• **initialState**

• **options?**

• **options.capacity?**: `number`

• **options.equality?**: [`Optional`](../../../../functions/type-aliases/Optional.md)\<[`Equality`](../../../../functions/type-aliases/Equality.md)\<`T`\>\>

• **options.replay?**: `number`

• **options.scheduler?**: [`SchedulerLike`](../../../interfaces/SchedulerLike.md)

## Returns

[`StreamLike`](../../../interfaces/StreamLike.md)\<[`Updater`](../../../../functions/type-aliases/Updater.md)\<`T`\>, `T`\>
