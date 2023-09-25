[Reactive-JS](../README.md) / [rx](../modules/rx.md) / StreamableLike

# Interface: StreamableLike<TReq, T, TStream\>

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
| `TStream` | extends [`StreamLike`](rx.StreamLike.md)<`TReq`, `T`\> = [`StreamLike`](rx.StreamLike.md)<`TReq`, `T`\> |

## Table of contents

### Properties

- [[StreamableLike\_TStream]](rx.StreamableLike.md#[streamablelike_tstream])

### Methods

- [[StreamableLike\_stream]](rx.StreamableLike.md#[streamablelike_stream])

## Properties

### [StreamableLike\_TStream]

• `Optional` `Readonly` **[StreamableLike\_TStream]**: `TStream`

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): `TStream` & [`DisposableLike`](utils.DisposableLike.md)

Subscribe to the Streamable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) | The scheduler to subscribe to the stream with. |
| `options?` | `Object` |  |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

`TStream` & [`DisposableLike`](utils.DisposableLike.md)
