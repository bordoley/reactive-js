[Reactive-JS](../README.md) / [types](../modules/types.md) / StreamableLike

# Interface: StreamableLike<TReq, T, TStream\>

[types](../modules/types.md).StreamableLike

A container that supports bi-directional streaming.

**`Typeparam`**

TReq

**`Typeparam`**

T

**`Typeparam`**

TStream

## Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `unknown` |
| `T` | `unknown` |
| `TStream` | extends [`StreamLike`](types.StreamLike.md)<`TReq`, `T`\> = [`StreamLike`](types.StreamLike.md)<`TReq`, `T`\> |

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](types.StreamableLike.md#[___streamablelike_tstream])

### Methods

- [[\_\_\_StreamableLike\_stream]](types.StreamableLike.md#[___streamablelike_stream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: `TStream`

## Methods

### [\_\_\_StreamableLike\_stream]

▸ **[___StreamableLike_stream]**(`scheduler`, `options?`): `TStream` & [`DisposableLike`](types.DisposableLike.md)

Subscribe to the Streamable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | The scheduler to subscribe to the stream with. |
| `options?` | `Object` |  |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

`TStream` & [`DisposableLike`](types.DisposableLike.md)
