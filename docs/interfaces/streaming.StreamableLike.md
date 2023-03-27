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

## Table of contents

### Properties

- [[StreamableLike\_isEnumerable]](streaming.StreamableLike.md#[streamablelike_isenumerable])
- [[StreamableLike\_isInteractive]](streaming.StreamableLike.md#[streamablelike_isinteractive])
- [[StreamableLike\_isRunnable]](streaming.StreamableLike.md#[streamablelike_isrunnable])

### Methods

- [[StreamableLike\_stream]](streaming.StreamableLike.md#[streamablelike_stream])

## Properties

### [StreamableLike\_isEnumerable]

• `Readonly` **[StreamableLike\_isEnumerable]**: `boolean`

Indicates if the resulting is stream is enumerable,
producting exactly one value synchronously for every
enqueued request.

___

### [StreamableLike\_isInteractive]

• `Readonly` **[StreamableLike\_isInteractive]**: `boolean`

Indicates if the resulting is stream is interactive,
producing exactly one value for every enqueued request.

___

### [StreamableLike\_isRunnable]

• `Readonly` **[StreamableLike\_isRunnable]**: `boolean`

Indicates if subscriptions on a VirtualTimeScheduler
are supported.

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): `TStream`

Subscribe to the Streamable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) | The scheduler to subscribe to the stream with. |
| `options?` | `Object` |  |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

`TStream`
