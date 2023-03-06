[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / StreamableLike

# Interface: StreamableLike<TReq, T, TStream\>

[streaming](../modules/streaming.md).StreamableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\> = [`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\> |

## Hierarchy

- **`StreamableLike`**

  ↳ [`WindowLocationStreamableLike`](integrations_web.WindowLocationStreamableLike.md)

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

___

### [StreamableLike\_isInteractive]

• `Readonly` **[StreamableLike\_isInteractive]**: `boolean`

___

### [StreamableLike\_isRunnable]

• `Readonly` **[StreamableLike\_isRunnable]**: `boolean`

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`
