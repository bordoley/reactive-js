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

- [`DispatcherLike`](scheduling.DispatcherLike.md)<`TReq`\>

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`StreamLike`**

  ↳↳ [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)

  ↳↳ [`FlowableStreamLike`](streaming.FlowableStreamLike.md)
