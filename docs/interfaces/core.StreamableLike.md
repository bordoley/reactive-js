[Reactive-JS](../README.md) / [core](../modules/core.md) / StreamableLike

# Interface: StreamableLike<TReq, T, TStream\>

[core](../modules/core.md).StreamableLike

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
| `TStream` | extends [`StreamLike`](core.StreamLike.md)<`TReq`, `T`\> = [`StreamLike`](core.StreamLike.md)<`TReq`, `T`\> |

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](core.StreamableLike.md#[___streamablelike_tstream])

### Methods

- [[\_\_\_StreamableLike\_stream]](core.StreamableLike.md#[___streamablelike_stream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: `TStream`

## Methods

### [\_\_\_StreamableLike\_stream]

▸ **[___StreamableLike_stream]**(`scheduler`, `options?`): `TStream` & [`DisposableLike`](core.DisposableLike.md)

Subscribe to the Streamable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | The scheduler to subscribe to the stream with. |
| `options?` | `Object` |  |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

`TStream` & [`DisposableLike`](core.DisposableLike.md)
