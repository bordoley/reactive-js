[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / StreamableLike

# Interface: StreamableLike<TReq, T, TStream\>

[streaming](../modules/streaming.md).StreamableLike

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
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\> = [`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\> |

## Hierarchy

- **`StreamableLike`**

  ↳ [`CacheLike`](streaming.CacheLike.md)

  ↳ [`AnimationsEventHandlerLike`](streaming.AnimationsEventHandlerLike.md)

  ↳ [`AnimationEventHandlerLike`](streaming.AnimationEventHandlerLike.md)

## Table of contents

### Methods

- [[\_\_\_StreamableLike\_stream]](streaming.StreamableLike.md#[___streamablelike_stream])

## Methods

### [\_\_\_StreamableLike\_stream]

▸ **[___StreamableLike_stream]**(`scheduler`, `options?`): `TStream` & [`DisposableLike`](util.DisposableLike.md)

Subscribe to the Streamable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](util.SchedulerLike.md) | The scheduler to subscribe to the stream with. |
| `options?` | `Object` |  |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

`TStream` & [`DisposableLike`](util.DisposableLike.md)
