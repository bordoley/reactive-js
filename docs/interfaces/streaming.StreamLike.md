[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / StreamLike

# Interface: StreamLike<TReq, T\>

[streaming](../modules/streaming.md).StreamLike

Represents a duplex stream

## Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

## Hierarchy

- [`DispatcherLike`](rx.DispatcherLike.md)<`TReq`\>

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`StreamLike`**

  ↳↳ [`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md)

  ↳↳ [`FlowableStreamLike`](streaming.FlowableStreamLike.md)

  ↳↳ [`CacheStreamLike`](streaming.CacheStreamLike.md)

## Table of contents

### Properties

- [[StreamLike\_scheduler]](streaming.StreamLike.md#[streamlike_scheduler])

## Properties

### [StreamLike\_scheduler]

• `Readonly` **[StreamLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)
