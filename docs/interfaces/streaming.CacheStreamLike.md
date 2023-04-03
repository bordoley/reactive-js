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

- [`StreamLike`](streaming.StreamLike.md)<[`ReadonlyRecordLike`](../modules/keyedcontainers.md#readonlyrecordlike)<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>, `never`\>

- [`KeyedCollectionLike`](util.KeyedCollectionLike.md)<`string`, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

  ↳ **`CacheStreamLike`**
