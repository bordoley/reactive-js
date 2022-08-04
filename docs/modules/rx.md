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

- [ObservableType](rx.md#observabletype)
- [ToObservable](rx.md#toobservable)
- [ToRunnable](rx.md#torunnable)

### Variables

- [createObservableUsingT](rx.md#createobservableusingt)
- [createRunnableUsingT](rx.md#createrunnableusingt)
- [deferEnumerableObservableT](rx.md#deferenumerableobservablet)
- [deferObservableT](rx.md#deferobservablet)
- [deferRunnableT](rx.md#deferrunnablet)
- [emptyRunnableT](rx.md#emptyrunnablet)
- [enumerableObservableType](rx.md#enumerableobservabletype)
- [generateRunnableT](rx.md#generaterunnablet)
- [neverEnumerableObservableT](rx.md#neverenumerableobservablet)
- [neverRunnableT](rx.md#neverrunnablet)
- [observableType](rx.md#observabletype-1)
- [runnableObservableType](rx.md#runnableobservabletype)

### Functions

- [createEnumerableObservable](rx.md#createenumerableobservable)
- [createObservable](rx.md#createobservable)
- [createObservableUsing](rx.md#createobservableusing)
- [createRunnable](rx.md#createrunnable)
- [createRunnableObservable](rx.md#createrunnableobservable)
- [createRunnableUsing](rx.md#createrunnableusing)
- [createSubject](rx.md#createsubject)
- [deferEnumerableObservable](rx.md#deferenumerableobservable)
- [deferObservable](rx.md#deferobservable)
- [deferRunnable](rx.md#deferrunnable)
- [emptyObservable](rx.md#emptyobservable)
- [emptyRunnable](rx.md#emptyrunnable)
- [generateObservable](rx.md#generateobservable)
- [generateRunnable](rx.md#generaterunnable)
- [neverEnumerableObservable](rx.md#neverenumerableobservable)
- [neverRunnable](rx.md#neverrunnable)

## Type Aliases

### ObservableType

Ƭ **ObservableType**: ``0`` \| ``1`` \| ``2``

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

### createObservableUsingT

• `Const` **createObservableUsingT**: [`Using`](containers.md#using)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### createRunnableUsingT

• `Const` **createRunnableUsingT**: [`Using`](containers.md#using)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### deferEnumerableObservableT

• `Const` **deferEnumerableObservableT**: [`Defer`](containers.md#defer)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

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

### enumerableObservableType

• `Const` **enumerableObservableType**: [`ObservableType`](rx.md#observabletype)

___

### generateRunnableT

• `Const` **generateRunnableT**: [`Generate`](containers.md#generate)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### neverEnumerableObservableT

• `Const` **neverEnumerableObservableT**: [`Never`](containers.md#never)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### neverRunnableT

• `Const` **neverRunnableT**: [`Never`](containers.md#never)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### observableType

• `Const` **observableType**: [`ObservableType`](rx.md#observabletype)

___

### runnableObservableType

• `Const` **runnableObservableType**: [`ObservableType`](rx.md#observabletype)

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

### deferEnumerableObservable

▸ **deferEnumerableObservable**<`T`\>(`factory`, `options?`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

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

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

▸ **deferEnumerableObservable**<`T`\>(`factory`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\> |

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

### emptyObservable

▸ **emptyObservable**<`T`\>(): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

▸ **emptyObservable**<`T`\>(`options`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

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

### generateObservable

▸ **generateObservable**<`T`\>(`generator`, `initialValue`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

▸ **generateObservable**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

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

### neverEnumerableObservable

▸ **neverEnumerableObservable**<`T`\>(): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### neverRunnable

▸ **neverRunnable**<`T`\>(): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>
