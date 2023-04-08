[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / CacheLike

# Interface: CacheLike<T\>

[streaming](../modules/streaming.md).CacheLike

A container that returns a CacheStream when subscribed to.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`Readonly`<`Record`<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>\>, `never`, [`CacheStreamLike`](streaming.CacheStreamLike.md)<`T`\>\>

  ↳ **`CacheLike`**

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_type]](streaming.CacheLike.md#[___containerlike_type])
- [[\_\_\_StreamableLike\_isEnumerable]](streaming.CacheLike.md#[___streamablelike_isenumerable])
- [[\_\_\_StreamableLike\_isInteractive]](streaming.CacheLike.md#[___streamablelike_isinteractive])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`CacheLike`](streaming.CacheLike.md)<`never`\>

___

### [\_\_\_StreamableLike\_isEnumerable]

• `Readonly` **[\_\_\_StreamableLike\_isEnumerable]**: ``false``

Indicates if the resulting is stream is enumerable,
producting exactly one value synchronously for every
enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[___StreamableLike_isEnumerable]](streaming.StreamableLike.md#[___streamablelike_isenumerable])

___

### [\_\_\_StreamableLike\_isInteractive]

• `Readonly` **[\_\_\_StreamableLike\_isInteractive]**: ``false``

Indicates if the resulting is stream is interactive,
producing exactly one value for every enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[___StreamableLike_isInteractive]](streaming.StreamableLike.md#[___streamablelike_isinteractive])
