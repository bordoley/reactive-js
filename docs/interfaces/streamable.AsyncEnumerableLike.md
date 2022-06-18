[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[streamable](../modules/streamable.md).AsyncEnumerableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`void`, `T`\>

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Methods

- [stream](streamable.AsyncEnumerableLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`StreamLike`](observable.StreamLike.md)<`void`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`void`, `T`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](observable.StreamLike.md)<`void`, `T`\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
