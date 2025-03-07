[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [integrations/react](../README.md) / CacheProvider

# Function: CacheProvider()

> **CacheProvider**\<`T`\>(`props`): `ReactNode`

## Type Parameters

• **T**

## Parameters

### props

#### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### cacheContext

`Context`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<[`CacheLike`](../../../computations/interfaces/CacheLike.md)\<`T`\>\>\>

#### capacity?

`number`

#### children

`ReactNode`

#### cleanupPriority?

`2` \| `1` \| `3` \| `4` \| `5`

#### maxEntries?

`number`

#### persistentStore?

\{ `load`: [`DeferredObservableLike`](../../../computations/interfaces/DeferredObservableLike.md)\<`Readonly`\<`Record`\<`string`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>\>; `store`: [`DeferredObservableLike`](../../../computations/interfaces/DeferredObservableLike.md)\<`void`\>; \}

#### persistentStore.load

#### persistentStore.store

#### priority?

`2` \| `1` \| `3` \| `4` \| `5`

## Returns

`ReactNode`
