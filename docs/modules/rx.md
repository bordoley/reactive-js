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

- [EnumerableObservableType](rx.md#enumerableobservabletype)
- [ObservableType](rx.md#observabletype)
- [RunnableObservableType](rx.md#runnableobservabletype)
- [ToEnumerableObservable](rx.md#toenumerableobservable)
- [ToObservable](rx.md#toobservable)
- [ToRunnable](rx.md#torunnable)
- [ToRunnableObservable](rx.md#torunnableobservable)

### Variables

- [DefaultObservable](rx.md#defaultobservable)
- [EnumerableObservable](rx.md#enumerableobservable)
- [RunnableObservable](rx.md#runnableobservable)
- [createObservableUsingT](rx.md#createobservableusingt)
- [createRunnableUsingT](rx.md#createrunnableusingt)
- [deferObservableT](rx.md#deferobservablet)
- [deferRunnableT](rx.md#deferrunnablet)
- [emptyRunnableT](rx.md#emptyrunnablet)
- [generateRunnableT](rx.md#generaterunnablet)
- [neverObservableT](rx.md#neverobservablet)
- [neverRunnableT](rx.md#neverrunnablet)

### Functions

- [createEnumerableObservable](rx.md#createenumerableobservable)
- [createObservable](rx.md#createobservable)
- [createObservableUsing](rx.md#createobservableusing)
- [createRunnable](rx.md#createrunnable)
- [createRunnableObservable](rx.md#createrunnableobservable)
- [createRunnableUsing](rx.md#createrunnableusing)
- [createSubject](rx.md#createsubject)
- [deferObservable](rx.md#deferobservable)
- [deferRunnable](rx.md#deferrunnable)
- [emptyRunnable](rx.md#emptyrunnable)
- [generateRunnable](rx.md#generaterunnable)
- [neverObservable](rx.md#neverobservable)
- [neverRunnable](rx.md#neverrunnable)

## Type Aliases

### EnumerableObservableType

Ƭ **EnumerableObservableType**: typeof [`EnumerableObservable`](rx.md#enumerableobservable)

___

### ObservableType

Ƭ **ObservableType**: ``0`` \| ``1`` \| ``2``

___

### RunnableObservableType

Ƭ **RunnableObservableType**: typeof [`RunnableObservable`](rx.md#runnableobservable) \| typeof [`EnumerableObservable`](rx.md#enumerableobservable)

___

### ToEnumerableObservable

Ƭ **ToEnumerableObservable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toEnumerableObservable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

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

___

### ToRunnableObservable

Ƭ **ToRunnableObservable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toRunnableObservable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

## Variables

### DefaultObservable

• `Const` **DefaultObservable**: [`ObservableType`](rx.md#observabletype)

___

### EnumerableObservable

• `Const` **EnumerableObservable**: [`ObservableType`](rx.md#observabletype)

___

### RunnableObservable

• `Const` **RunnableObservable**: [`ObservableType`](rx.md#observabletype)

___

### createObservableUsingT

• `Const` **createObservableUsingT**: [`Using`](containers.md#using)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### createRunnableUsingT

• `Const` **createRunnableUsingT**: [`Using`](containers.md#using)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### deferObservableT

• `Const` **deferObservableT**: [`Defer`](containers.md#defer)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### deferRunnableT

• `Const` **deferRunnableT**: [`Defer`](containers.md#defer)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### emptyRunnableT

• `Const` **emptyRunnableT**: [`Empty`](containers.md#empty)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### generateRunnableT

• `Const` **generateRunnableT**: [`Generate`](containers.md#generate)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### neverObservableT

• `Const` **neverObservableT**: [`Never`](containers.md#never)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### neverRunnableT

• `Const` **neverRunnableT**: [`Never`](containers.md#never)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

## Functions

### createEnumerableObservable

▸ **createEnumerableObservable**<`T`\>(`f`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

### createObservableUsing

▸ **createObservableUsing**<`TResource`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource`\> |
| `containerFactory` | [`Function1`](functions.md#function1)<`TResource`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **createObservableUsing**<`TResource1`, `TResource2`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`]\> |
| `containerFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **createObservableUsing**<`TResource1`, `TResource2`, `TResource3`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\> |
| `containerFactory` | [`Function3`](functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **createObservableUsing**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\> |
| `containerFactory` | [`Function4`](functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **createObservableUsing**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource5` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\> |
| `containerFactory` | [`Function5`](functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **createObservableUsing**<`TResource`, `T`\>(`resourceFactory`, `runnableFactory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `runnableFactory` | (...`resources`: readonly `TResource`[]) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |

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

▸ **createRunnableObservable**<`T`\>(`f`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

### createRunnableUsing

▸ **createRunnableUsing**<`TResource`, `T`\>(`resourceFactory`, `containerFactory`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource`\> |
| `containerFactory` | [`Function1`](functions.md#function1)<`TResource`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

▸ **createRunnableUsing**<`TResource1`, `TResource2`, `T`\>(`resourceFactory`, `containerFactory`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`]\> |
| `containerFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

▸ **createRunnableUsing**<`TResource1`, `TResource2`, `TResource3`, `T`\>(`resourceFactory`, `containerFactory`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\> |
| `containerFactory` | [`Function3`](functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

▸ **createRunnableUsing**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `T`\>(`resourceFactory`, `containerFactory`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\> |
| `containerFactory` | [`Function4`](functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

▸ **createRunnableUsing**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, `T`\>(`resourceFactory`, `containerFactory`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource5` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\> |
| `containerFactory` | [`Function5`](functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

▸ **createRunnableUsing**<`TResource`, `T`\>(`resourceFactory`, `runnableFactory`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `runnableFactory` | (...`resources`: readonly `TResource`[]) => [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

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
| `factory` | [`Factory`](functions.md#factory)<[`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **deferObservable**<`T`\>(`factory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### deferRunnable

▸ **deferRunnable**<`T`\>(`factory`, `options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### emptyRunnable

▸ **emptyRunnable**<`T`\>(`options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### generateRunnable

▸ **generateRunnable**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### neverObservable

▸ **neverObservable**<`T`\>(): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### neverRunnable

▸ **neverRunnable**<`T`\>(): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>
