[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### Namespaces

- [Reactive](rx.Reactive.md)

### Container Interfaces

- [EnumerableContainer](../interfaces/rx.EnumerableContainer.md)
- [ObservableContainer](../interfaces/rx.ObservableContainer.md)
- [PauseableObservableContainer](../interfaces/rx.PauseableObservableContainer.md)
- [RunnableContainer](../interfaces/rx.RunnableContainer.md)

### Observable Interfaces

- [EnumerableLike](../interfaces/rx.EnumerableLike.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [PauseableObservableLike](../interfaces/rx.PauseableObservableLike.md)
- [PublisherLike](../interfaces/rx.PublisherLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)
- [StreamLike](../interfaces/rx.StreamLike.md)

### Other Interfaces

- [ObserverLike](../interfaces/rx.ObserverLike.md)

### Streamable Interfaces

- [AnimationGroupEventHandlerLike](../interfaces/rx.AnimationGroupEventHandlerLike.md)
- [CacheLike](../interfaces/rx.CacheLike.md)
- [StreamableLike](../interfaces/rx.StreamableLike.md)

### Type Aliases

- [DisposableStreamOf](rx.md#disposablestreamof)
- [StreamOf](rx.md#streamof)

## Type Aliases

### DisposableStreamOf

Ƭ **DisposableStreamOf**<`TStreamable`\>: [`StreamOf`](rx.md#streamof)<`TStreamable`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/rx.StreamableLike.md) |

___

### StreamOf

Ƭ **StreamOf**<`TStreamable`\>: `NonNullable`<`TStreamable`[typeof `StreamableLike_TStream`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/rx.StreamableLike.md) |
