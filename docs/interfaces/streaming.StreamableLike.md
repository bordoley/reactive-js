[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / StreamableLike

# Interface: StreamableLike<TReq, T\>

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
| `TReq` | `unknown` |
| `T` | `unknown` |

## Hierarchy

- **`StreamableLike`**

  ↳ [`CacheLike`](streaming.CacheLike.md)

  ↳ [`AnimationGroupEventHandlerLike`](streaming.AnimationGroupEventHandlerLike.md)

  ↳ [`AnimationEventHandlerLike`](streaming.AnimationEventHandlerLike.md)

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](streaming.StreamableLike.md#[___streamablelike_tstream])

### Methods

- [[\_\_\_StreamableLike\_stream]](streaming.StreamableLike.md#[___streamablelike_stream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: [`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\>

## Methods

### [\_\_\_StreamableLike\_stream]

▸ **[___StreamableLike_stream]**(`scheduler`, `options?`): [`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\> & [`DisposableLike`](util.DisposableLike.md)

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

[`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\> & [`DisposableLike`](util.DisposableLike.md)
