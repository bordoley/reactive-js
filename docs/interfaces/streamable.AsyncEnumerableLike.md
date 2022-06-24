[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[streamable](../modules/streamable.md).AsyncEnumerableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`void`, `T`, [`AsyncEnumeratorLike`](streamable.AsyncEnumeratorLike.md)<`T`\>\>

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Methods

- [stream](streamable.AsyncEnumerableLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`AsyncEnumeratorLike`](streamable.AsyncEnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`void`, `T`, [`AsyncEnumeratorLike`](streamable.AsyncEnumeratorLike.md)<`T`\>\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`AsyncEnumeratorLike`](streamable.AsyncEnumeratorLike.md)<`T`\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
