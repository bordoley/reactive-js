[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### Interfaces

- [EnumerableObservableLike](../interfaces/rx.EnumerableObservableLike.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [ObserverLike](../interfaces/rx.ObserverLike.md)
- [ReactiveContainerLike](../interfaces/rx.ReactiveContainerLike.md)
- [ReactiveSinkLike](../interfaces/rx.ReactiveSinkLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)
- [RunnableObservableLike](../interfaces/rx.RunnableObservableLike.md)
- [SubjectLike](../interfaces/rx.SubjectLike.md)

### Type Aliases

- [CreateReactiveContainer](rx.md#createreactivecontainer)
- [Never](rx.md#never)
- [ToRunnable](rx.md#torunnable)

### Variables

- [DefaultObservable](rx.md#defaultobservable)
- [EnumerableObservable](rx.md#enumerableobservable)
- [MulticastObservableLike\_observerCount](rx.md#multicastobservablelike_observercount)
- [MulticastObservableLike\_replay](rx.md#multicastobservablelike_replay)
- [ObservableLike\_observableType](rx.md#observablelike_observabletype)
- [ObserverLike\_dispatcher](rx.md#observerlike_dispatcher)
- [ObserverLike\_scheduler](rx.md#observerlike_scheduler)
- [ReactiveContainerLike\_sinkInto](rx.md#reactivecontainerlike_sinkinto)
- [ReactiveSinkLike\_notify](rx.md#reactivesinklike_notify)
- [RunnableObservable](rx.md#runnableobservable)
- [SubjectLike\_publish](rx.md#subjectlike_publish)

## Type Aliases

### CreateReactiveContainer

Ƭ **CreateReactiveContainer**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `create`: <T\>(`onSink`: (`sink`: [`StatefulContainerStateOf`](containers.md#statefulcontainerstateof)<`C`, `T`\>) => `void`) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx.ReactiveContainerLike.md) |

___

### Never

Ƭ **Never**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `never`: <T\>() => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx.ReactiveContainerLike.md) |

___

### ToRunnable

Ƭ **ToRunnable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toRunnable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

## Variables

### DefaultObservable

• `Const` **DefaultObservable**: ``0``

___

### EnumerableObservable

• `Const` **EnumerableObservable**: ``2``

___

### MulticastObservableLike\_observerCount

• `Const` **MulticastObservableLike\_observerCount**: unique `symbol`

___

### MulticastObservableLike\_replay

• `Const` **MulticastObservableLike\_replay**: unique `symbol`

___

### ObservableLike\_observableType

• `Const` **ObservableLike\_observableType**: unique `symbol`

___

### ObserverLike\_dispatcher

• `Const` **ObserverLike\_dispatcher**: unique `symbol`

___

### ObserverLike\_scheduler

• `Const` **ObserverLike\_scheduler**: unique `symbol`

___

### ReactiveContainerLike\_sinkInto

• `Const` **ReactiveContainerLike\_sinkInto**: unique `symbol`

___

### ReactiveSinkLike\_notify

• `Const` **ReactiveSinkLike\_notify**: unique `symbol`

___

### RunnableObservable

• `Const` **RunnableObservable**: ``1``

___

### SubjectLike\_publish

• `Const` **SubjectLike\_publish**: unique `symbol`
