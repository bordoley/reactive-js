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
- [FromEnumerableObservable](rx.md#fromenumerableobservable)
- [FromObservable](rx.md#fromobservable)
- [ScanAsync](rx.md#scanasync)
- [ToEnumerableObservable](rx.md#toenumerableobservable)
- [ToObservable](rx.md#toobservable)
- [ToRunnable](rx.md#torunnable)
- [ToRunnableObservable](rx.md#torunnableobservable)

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

### FromEnumerableObservable

Ƭ **FromEnumerableObservable**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `fromEnumerableObservable`: <T\>(`options?`: { `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }) => [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### FromObservable

Ƭ **FromObservable**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `fromObservable`: <T\>(`scheduler`: [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)) => [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### ScanAsync

Ƭ **ScanAsync**<`C`, `CInner`\>: [`Container`](containers.md#container)<`C`\> & { `scanAsync`: <T, TAcc\>(`scanner`: [`AsyncReducer`](rx.md#asyncreducer)<`CInner`, `T`, `TAcc`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `CInner` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

___

### ToEnumerableObservable

Ƭ **ToEnumerableObservable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toEnumerableObservable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToObservable

Ƭ **ToObservable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toObservable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToRunnable

Ƭ **ToRunnable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toRunnable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToRunnableObservable

Ƭ **ToRunnableObservable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toRunnableObservable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |
