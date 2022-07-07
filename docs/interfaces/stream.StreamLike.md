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

  ↳↳ [`AsyncEnumeratorLike`](asyncEnumerator.AsyncEnumeratorLike.md)

  ↳↳ [`FlowableStreamLike`](flowable.FlowableStreamLike.md)

  ↳↳ [`WindowLocationStreamLike`](web.WindowLocationStreamLike.md)
