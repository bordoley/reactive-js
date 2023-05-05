[Reactive-JS](../README.md) / [rx](../modules/rx.md) / StreamableLike

# Interface: StreamableLike<TReq, T\>

[rx](../modules/rx.md).StreamableLike

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

  ↳ [`CacheLike`](rx.CacheLike.md)

  ↳ [`AnimationGroupEventHandlerLike`](rx.AnimationGroupEventHandlerLike.md)

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](rx.StreamableLike.md#[___streamablelike_tstream])

### Methods

- [[\_\_\_StreamableLike\_stream]](rx.StreamableLike.md#[___streamablelike_stream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: [`StreamLike`](rx.StreamLike.md)<`TReq`, `T`\>

## Methods

### [\_\_\_StreamableLike\_stream]

▸ **[___StreamableLike_stream]**(`scheduler`, `options?`): [`StreamLike`](rx.StreamLike.md)<`TReq`, `T`\> & [`DisposableLike`](util.DisposableLike.md)

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

[`StreamLike`](rx.StreamLike.md)<`TReq`, `T`\> & [`DisposableLike`](util.DisposableLike.md)
