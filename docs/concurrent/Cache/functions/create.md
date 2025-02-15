[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Cache](../README.md) / create

# Function: create()

> **create**\<`T`\>(`scheduler`, `options`?): [`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

## Type Parameters

• **T**

## Parameters

### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

### options?

#### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### capacity

`number`

#### cleanupScheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

#### maxEntries

`number`

#### persistentStore

\{ `load`: [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`Readonly`\<[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`string`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>\>; `store`: [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`void`\>; \}

#### persistentStore.load

#### persistentStore.store

## Returns

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>
