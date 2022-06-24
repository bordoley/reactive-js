[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / StreamableStateLike

# Interface: StreamableStateLike<T\>

[streamable](../modules/streamable.md).StreamableStateLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StateStreamLike`](streamable.StateStreamLike.md)<`T`\>\>

  ↳ **`StreamableStateLike`**

## Table of contents

### Methods

- [stream](streamable.StreamableStateLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`StateStreamLike`](streamable.StateStreamLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StateStreamLike`](streamable.StateStreamLike.md)<`T`\>\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StateStreamLike`](streamable.StateStreamLike.md)<`T`\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
