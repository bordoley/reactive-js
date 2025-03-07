[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Cache](../README.md) / CacheModule

# Interface: CacheModule

## Methods

### create()

> **create**\<`T`\>(`scheduler`, `options`?): [`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### cleanupScheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

###### maxEntries?

`number`

###### persistentStore?

\{ `load`: [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`Readonly`\<[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`string`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>\>; `store`: [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`void`\>; \}

###### persistentStore.load

###### persistentStore.store

#### Returns

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

***

### get()

> **get**\<`T`\>(`cache`, `key`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### cache

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

##### key

`string`

#### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

***

### remove()

> **remove**\<`T`\>(`cache`, `key`): `boolean`

#### Type Parameters

• **T**

#### Parameters

##### cache

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

##### key

`string`

#### Returns

`boolean`

***

### removeMany()

> **removeMany**\<`T`\>(`cache`, `keys`): `boolean`

#### Type Parameters

• **T**

#### Parameters

##### cache

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

##### keys

readonly `string`[]

#### Returns

`boolean`

***

### set()

> **set**\<`T`\>(`cache`, `key`, `v`): `boolean`

#### Type Parameters

• **T**

#### Parameters

##### cache

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

##### key

`string`

##### v

[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>

#### Returns

`boolean`

***

### setMany()

> **setMany**\<`T`\>(`cache`, `keyValues`): `boolean`

#### Type Parameters

• **T**

#### Parameters

##### cache

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

##### keyValues

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`string`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Returns

`boolean`

***

### update()

> **update**\<`T`\>(`cache`, `key`, `updater`): `boolean`

#### Type Parameters

• **T**

#### Parameters

##### cache

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

##### key

`string`

##### updater

[`Updater`](../../../functions/type-aliases/Updater.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Returns

`boolean`

***

### updateMany()

> **updateMany**\<`T`\>(`cache`, `keyValues`): `boolean`

#### Type Parameters

• **T**

#### Parameters

##### cache

[`CacheLike`](../../interfaces/CacheLike.md)\<`T`\>

##### keyValues

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`string`, [`Updater`](../../../functions/type-aliases/Updater.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

#### Returns

`boolean`
