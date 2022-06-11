[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / StreamableLike

# Interface: StreamableLike<TReq, T\>

[streamable](../modules/streamable.md).StreamableLike

## Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

## Hierarchy

- **`StreamableLike`**

  ↳ [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)

  ↳ [`FlowableLike`](flowable.FlowableLike.md)

  ↳ [`IOSinkLike`](io.IOSinkLike.md)

  ↳ [`StateStoreLike`](stateStore.StateStoreLike.md)

  ↳ [`WindowLocationStreamableLike`](web.WindowLocationStreamableLike.md)

## Table of contents

### Methods

- [stream](streamable.StreamableLike.md#stream)

## Methods

### stream

▸ **stream**(`scheduler`, `options?`): [`StreamLike`](observable.StreamLike.md)<`TReq`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](observable.StreamLike.md)<`TReq`, `T`\>
