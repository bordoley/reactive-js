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

  ↳ [`AsyncEnumerableLike`](streaming.AsyncEnumerableLike.md)

  ↳ [`FlowableLike`](streaming.FlowableLike.md)

  ↳ [`CacheLike`](streaming.CacheLike.md)

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_isEnumerable]](streaming.StreamableLike.md#[___streamablelike_isenumerable])
- [[\_\_\_StreamableLike\_isInteractive]](streaming.StreamableLike.md#[___streamablelike_isinteractive])
- [[\_\_\_StreamableLike\_isRunnable]](streaming.StreamableLike.md#[___streamablelike_isrunnable])

### Methods

- [[\_\_\_StreamableLike\_stream]](streaming.StreamableLike.md#[___streamablelike_stream])

## Properties

### [\_\_\_StreamableLike\_isEnumerable]

• `Readonly` **[\_\_\_StreamableLike\_isEnumerable]**: `boolean`

Indicates if the resulting is stream is enumerable,
producting exactly one value synchronously for every
enqueued request.

___

### [\_\_\_StreamableLike\_isInteractive]

• `Readonly` **[\_\_\_StreamableLike\_isInteractive]**: `boolean`

Indicates if the resulting is stream is interactive,
producing exactly one value for every enqueued request.

___

### [\_\_\_StreamableLike\_isRunnable]

• `Readonly` **[\_\_\_StreamableLike\_isRunnable]**: `boolean`

Indicates if subscriptions on a VirtualTimeScheduler
are supported.

## Methods

### [\_\_\_StreamableLike\_stream]

▸ **[___StreamableLike_stream]**(`scheduler`, `options?`): `TStream` & [`DisposableLike`](util.DisposableLike.md)

Subscribe to the Streamable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) | The scheduler to subscribe to the stream with. |
| `options?` | `Object` |  |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

`TStream` & [`DisposableLike`](util.DisposableLike.md)
