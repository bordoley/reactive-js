[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [integrations/react](../README.md) / useCache

# Function: useCache()

> **useCache**\<`T`\>(`options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`CacheLike`](../../../concurrent/interfaces/CacheLike.md)\<`T`\>\>

## Type Parameters

• **T**

## Parameters

### options?

#### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### capacity

`number`

#### cleanupPriority

`2` \| `1` \| `3` \| `4` \| `5`

#### maxEntries

`number`

#### persistentStore

\{ `load`: [`DeferredObservableLike`](../../../concurrent/interfaces/DeferredObservableLike.md)\<`Readonly`\<`Record`\<`string`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>\>; `store`: [`DeferredObservableLike`](../../../concurrent/interfaces/DeferredObservableLike.md)\<`void`\>; \}

#### persistentStore.load

#### persistentStore.store

#### priority

`2` \| `1` \| `3` \| `4` \| `5`

## Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`CacheLike`](../../../concurrent/interfaces/CacheLike.md)\<`T`\>\>
