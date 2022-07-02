[Reactive-JS](../README.md) / [stream](../modules/stream.md) / StreamLike

# Interface: StreamLike<TReq, T\>

[stream](../modules/stream.md).StreamLike

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

  ↳↳ [`FlowableSinkStreamLike`](flowable.FlowableSinkStreamLike.md)

  ↳↳ [`FlowableStreamLike`](flowable.FlowableStreamLike.md)

  ↳↳ [`StateStreamLike`](streamable.StateStreamLike.md)

  ↳↳ [`WindowLocationStreamLike`](web.WindowLocationStreamLike.md)

## Implemented by

- [`AbstractDelegatingAsyncEnumerator`](../classes/asyncEnumerator.AbstractDelegatingAsyncEnumerator.md)
- [`AbstractDelegatingStream`](../classes/stream.AbstractDelegatingStream.md)
- [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)
