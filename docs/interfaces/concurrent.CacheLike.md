[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / CacheLike

# Interface: CacheLike\<T\>

[concurrent](../modules/concurrent.md).CacheLike

Represents a duplex stream

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamLike`](concurrent.StreamLike.md)\<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](../modules/functions.md#function1)\<[`Optional`](../modules/functions.md#optional)\<`T`\>, [`Optional`](../modules/functions.md#optional)\<`T`\>\>\>, `never`\>

  ↳ **`CacheLike`**

## Table of contents

### Methods

- [[CacheLike\_get]](concurrent.CacheLike.md#[cachelike_get])

## Methods

### [CacheLike\_get]

▸ **[CacheLike_get]**(`index`): [`ObservableLike`](concurrent.ObservableLike.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

[`ObservableLike`](concurrent.ObservableLike.md)\<`T`\>
