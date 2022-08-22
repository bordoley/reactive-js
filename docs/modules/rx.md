[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### Interfaces

- [EnumerableObservableLike](../interfaces/rx.EnumerableObservableLike.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [ObserverLike](../interfaces/rx.ObserverLike.md)
- [ReactiveContainerLike](../interfaces/rx.ReactiveContainerLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)
- [RunnableObservableLike](../interfaces/rx.RunnableObservableLike.md)
- [SinkLike](../interfaces/rx.SinkLike.md)
- [SubjectLike](../interfaces/rx.SubjectLike.md)

### Type Aliases

- [AsyncReducer](rx.md#asyncreducer)
- [ScanAsync](rx.md#scanasync)
- [ToObservable](rx.md#toobservable)
- [ToRunnable](rx.md#torunnable)

## Type Aliases

### AsyncReducer

Ƭ **AsyncReducer**<`C`, `T`, `TAcc`\>: [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ContainerOf`](containers.md#containerof)<`C`, `TAcc`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |
| `T` | `T` |
| `TAcc` | `TAcc` |

___

### ScanAsync

Ƭ **ScanAsync**<`C`, `CInner`\>: [`Container`](containers.md#container)<`C`\> & { `scanAsync`: <T, TAcc\>(`scanner`: [`AsyncReducer`](rx.md#asyncreducer)<`CInner`, `T`, `TAcc`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `CInner` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

___

### ToObservable

Ƭ **ToObservable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toObservable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

___

### ToRunnable

Ƭ **ToRunnable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toRunnable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |
