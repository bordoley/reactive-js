[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [concurrent/Streamable](../README.md) / persistentCache

# Function: persistentCache()

> **persistentCache**\<`T`\>(`persistentStore`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`string`, [`Function1`](../../../functions/type-aliases/Function1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>, `never`, [`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>\>

## Type Parameters

• **T**

## Parameters

• **persistentStore**

• **persistentStore.load**

• **persistentStore.store?**

• **options?**

• **options.capacity?**: `number`

• **options.cleanupScheduler?**: [`SchedulerLike`](../../interfaces/SchedulerLike.md)

## Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`string`, [`Function1`](../../../functions/type-aliases/Function1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>, `never`, [`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>\>
