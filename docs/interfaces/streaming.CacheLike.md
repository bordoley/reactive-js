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

- [[ContainerLike\_type]](streaming.CacheLike.md#[containerlike_type])
- [[StreamableLike\_isEnumerable]](streaming.CacheLike.md#[streamablelike_isenumerable])
- [[StreamableLike\_isInteractive]](streaming.CacheLike.md#[streamablelike_isinteractive])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`CacheLike`](streaming.CacheLike.md)<`never`\>

___

### [StreamableLike\_isEnumerable]

• `Readonly` **[StreamableLike\_isEnumerable]**: ``false``

Indicates if the resulting is stream is enumerable,
producting exactly one value synchronously for every
enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_isEnumerable]](streaming.StreamableLike.md#[streamablelike_isenumerable])

___

### [StreamableLike\_isInteractive]

• `Readonly` **[StreamableLike\_isInteractive]**: ``false``

Indicates if the resulting is stream is interactive,
producing exactly one value for every enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_isInteractive]](streaming.StreamableLike.md#[streamablelike_isinteractive])
