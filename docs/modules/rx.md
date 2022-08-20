[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### Interfaces

- [EnumerableObservableLike](../interfaces/rx.EnumerableObservableLike.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [ReactiveContainerLike](../interfaces/rx.ReactiveContainerLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)
- [RunnableObservableLike](../interfaces/rx.RunnableObservableLike.md)
- [SubjectLike](../interfaces/rx.SubjectLike.md)

### Type Aliases

- [AsyncReducer](rx.md#asyncreducer)
- [ScanAsync](rx.md#scanasync)
- [ToObservable](rx.md#toobservable)
- [ToRunnable](rx.md#torunnable)

### Variables

- [deferEnumerableObservableT](rx.md#deferenumerableobservablet)
- [deferObservableT](rx.md#deferobservablet)
- [deferRunnableObservableT](rx.md#deferrunnableobservablet)

### Functions

- [createEnumerableObservable](rx.md#createenumerableobservable)
- [createObservable](rx.md#createobservable)
- [createRunnable](rx.md#createrunnable)
- [createRunnableObservable](rx.md#createrunnableobservable)
- [deferEnumerableObservable](rx.md#deferenumerableobservable)
- [deferObservable](rx.md#deferobservable)
- [deferRunnableObservable](rx.md#deferrunnableobservable)

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

## Variables

### deferEnumerableObservableT

• `Const` **deferEnumerableObservableT**: [`Defer`](containers.md#defer)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### deferObservableT

• `Const` **deferObservableT**: [`Defer`](containers.md#defer)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### deferRunnableObservableT

• `Const` **deferRunnableObservableT**: [`Defer`](containers.md#defer)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

## Functions

### createEnumerableObservable

▸ **createEnumerableObservable**<`T`\>(`f`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### createObservable

▸ **createObservable**<`T`\>(`f`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### createRunnable

▸ **createRunnable**<`T`\>(`run`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | [`SideEffect1`](functions.md#sideeffect1)<[`SinkLike`](../interfaces/util.SinkLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### createRunnableObservable

▸ **createRunnableObservable**<`T`\>(`f`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### deferEnumerableObservable

▸ **deferEnumerableObservable**<`T`\>(`factory`, `options?`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### deferObservable

▸ **deferObservable**<`T`\>(`factory`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### deferRunnableObservable

▸ **deferRunnableObservable**<`T`\>(`factory`, `options?`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\> |
| `options?` | `Partial`<{ `delay`: `number`  }\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>
