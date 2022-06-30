[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / StreamableStateLike

# Interface: StreamableStateLike<T, TStream\>

[streamable](../modules/streamable.md).StreamableStateLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TStream` | extends [`StateStreamLike`](streamable.StateStreamLike.md)<`T`\> = [`StateStreamLike`](streamable.StateStreamLike.md)<`T`\> |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, `TStream`\>

  ↳ **`StreamableStateLike`**

## Table of contents

### Methods

- [stream](streamable.StreamableStateLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, `TStream`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
