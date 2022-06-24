[Reactive-JS](../README.md) / [observable](../modules/observable.md) / StreamLike

# Interface: StreamLike<TReq, T\>

[observable](../modules/observable.md).StreamLike

Represents a duplex stream

## Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

## Hierarchy

- [`DispatcherLike`](observable.DispatcherLike.md)<`TReq`\>

- [`MulticastObservableLike`](observable.MulticastObservableLike.md)<`T`\>

  ↳ **`StreamLike`**

  ↳↳ [`SubjectLike`](observable.SubjectLike.md)

  ↳↳ [`AsyncEnumeratorLike`](streamable.AsyncEnumeratorLike.md)

  ↳↳ [`FlowableSinkStreamLike`](streamable.FlowableSinkStreamLike.md)

  ↳↳ [`FlowableStreamLike`](streamable.FlowableStreamLike.md)

  ↳↳ [`StateStreamLike`](streamable.StateStreamLike.md)

  ↳↳ [`WindowLocationStreamLike`](web.WindowLocationStreamLike.md)
