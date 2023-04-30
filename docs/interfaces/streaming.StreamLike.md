[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / StreamLike

# Interface: StreamLike<TReq, T, TEvents\>

[streaming](../modules/streaming.md).StreamLike

Represents a duplex stream

## Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TEvents` | extends `Object` = { `type`: ``"wait"`` \| ``"drain"`` \| ``"complete"``  } |

## Hierarchy

- [`DispatcherLike`](util.DispatcherLike.md)<`TReq`, `TEvents`\>

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`StreamLike`**

## Table of contents

### Properties

- [[\_\_\_StreamLike\_scheduler]](streaming.StreamLike.md#[___streamlike_scheduler])

## Properties

### [\_\_\_StreamLike\_scheduler]

• `Readonly` **[\_\_\_StreamLike\_scheduler]**: [`SchedulerLike`](util.SchedulerLike.md)
