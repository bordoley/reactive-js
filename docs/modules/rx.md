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
- [RunnableObservable](rx.md#runnableobservable)

### Functions

- [createSubject](rx.md#createsubject)

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

### RunnableObservable

• `Const` **RunnableObservable**: ``1``

## Functions

### createSubject

▸ **createSubject**<`T`\>(`options?`): [`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\>
