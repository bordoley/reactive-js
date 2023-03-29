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
