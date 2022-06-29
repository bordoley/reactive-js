[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / StreamLike

# Interface: StreamLike<TReq, T\>

[streamable](../modules/streamable.md).StreamLike

Represents a duplex stream

## Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

## Hierarchy

- [`DispatcherLike`](dispatcher.DispatcherLike.md)<`TReq`\>

- [`MulticastObservableLike`](observable.MulticastObservableLike.md)<`T`\>

  ↳ **`StreamLike`**

  ↳↳ [`FlowableSinkStreamLike`](streamable.FlowableSinkStreamLike.md)

  ↳↳ [`FlowableStreamLike`](streamable.FlowableStreamLike.md)

  ↳↳ [`StateStreamLike`](streamable.StateStreamLike.md)

  ↳↳ [`WindowLocationStreamLike`](web.WindowLocationStreamLike.md)

## Implemented by

- [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)

## Table of contents

### Properties

- [scheduler](streamable.StreamLike.md#scheduler)

## Properties

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](scheduler.SchedulerLike.md)
