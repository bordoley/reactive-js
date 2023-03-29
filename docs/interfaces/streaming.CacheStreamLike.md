[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / CacheStreamLike

# Interface: CacheStreamLike<T\>

[streaming](../modules/streaming.md).CacheStreamLike

A cache stream that support transaction updates of a collection of keys
and observing the changing values of individual keys.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamLike`](streaming.StreamLike.md)<`Readonly`<`Record`<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, `T`\>\>\>, `never`\>

  ↳ **`CacheStreamLike`**

## Table of contents

### Methods

- [[CacheStreamLike\_get]](streaming.CacheStreamLike.md#[cachestreamlike_get])

## Methods

### [CacheStreamLike\_get]

▸ **[CacheStreamLike_get]**(`key`): [`ObservableLike`](rx.ObservableLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`ObservableLike`](rx.ObservableLike.md)<`T`\>
