[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / StreamLike

# Interface: StreamLike<TReq, T\>

[concurrent](../modules/concurrent.md).StreamLike

Represents a duplex stream

## Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

## Hierarchy

- [`DispatcherLike`](concurrent.DispatcherLike.md)<`TReq`\>

- [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)<`T`\>

  ↳ **`StreamLike`**

  ↳↳ [`CacheLike`](concurrent.CacheLike.md)

## Table of contents

### Properties

- [[StreamLike\_scheduler]](concurrent.StreamLike.md#[streamlike_scheduler])

## Properties

### [StreamLike\_scheduler]

• `Readonly` **[StreamLike\_scheduler]**: [`SchedulerLike`](concurrent.SchedulerLike.md)
