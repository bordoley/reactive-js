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

- [`DispatcherLike`](util.DispatcherLike.md)<`TReq`\>

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`StreamLike`**

  ↳↳ [`CacheStreamLike`](streaming.CacheStreamLike.md)

  ↳↳ [`AnimationEventHandlerStreamLike`](streaming.AnimationEventHandlerStreamLike.md)

## Table of contents

### Properties

- [[\_\_\_StreamLike\_scheduler]](streaming.StreamLike.md#[___streamlike_scheduler])

## Properties

### [\_\_\_StreamLike\_scheduler]

• `Readonly` **[\_\_\_StreamLike\_scheduler]**: [`SchedulerLike`](util.SchedulerLike.md)
