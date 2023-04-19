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

  ↳ **`StreamLike`**

  ↳↳ [`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md)

  ↳↳ [`FlowableStreamLike`](streaming.FlowableStreamLike.md)

  ↳↳ [`CacheStreamLike`](streaming.CacheStreamLike.md)

## Table of contents

### Properties

- [[\_\_\_StreamLike\_scheduler]](streaming.StreamLike.md#[___streamlike_scheduler])

## Properties

### [\_\_\_StreamLike\_scheduler]

• `Readonly` **[\_\_\_StreamLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)
