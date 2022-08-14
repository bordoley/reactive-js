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
- [ScanAsync](../interfaces/rx.ScanAsync.md)
- [SubjectLike](../interfaces/rx.SubjectLike.md)

### Type Aliases

- [AsyncReducer](rx.md#asyncreducer)
- [ToObservable](rx.md#toobservable)
- [ToRunnable](rx.md#torunnable)

### Variables

- [deferEnumerableObservableT](rx.md#deferenumerableobservablet)
- [deferObservableT](rx.md#deferobservablet)
- [deferRunnableObservableT](rx.md#deferrunnableobservablet)
- [deferRunnableT](rx.md#deferrunnablet)
- [emptyEnumerableObservableT](rx.md#emptyenumerableobservablet)
- [emptyObservableT](rx.md#emptyobservablet)
- [emptyRunnableObservableT](rx.md#emptyrunnableobservablet)
- [emptyRunnableT](rx.md#emptyrunnablet)
- [generateEnumerableObservableT](rx.md#generateenumerableobservablet)
- [generateObservableT](rx.md#generateobservablet)
- [generateRunnableObservableT](rx.md#generaterunnableobservablet)
- [generateRunnableT](rx.md#generaterunnablet)
- [neverEnumerableObservableT](rx.md#neverenumerableobservablet)
- [neverObservableT](rx.md#neverobservablet)
- [neverRunnableObservableT](rx.md#neverrunnableobservablet)
- [neverRunnableT](rx.md#neverrunnablet)

### Functions

- [createEnumerableObservable](rx.md#createenumerableobservable)
- [createObservable](rx.md#createobservable)
- [createRunnable](rx.md#createrunnable)
- [createRunnableObservable](rx.md#createrunnableobservable)
- [createSubject](rx.md#createsubject)
- [deferEnumerableObservable](rx.md#deferenumerableobservable)
- [deferObservable](rx.md#deferobservable)
- [deferRunnable](rx.md#deferrunnable)
- [deferRunnableObservable](rx.md#deferrunnableobservable)
- [emptyObservable](rx.md#emptyobservable)
- [emptyRunnable](rx.md#emptyrunnable)
- [generateObservable](rx.md#generateobservable)
- [generateRunnable](rx.md#generaterunnable)
- [neverObservable](rx.md#neverobservable)
- [neverRunnable](rx.md#neverrunnable)

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

___

### deferRunnableT

• `Const` **deferRunnableT**: [`Defer`](containers.md#defer)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### emptyEnumerableObservableT

• `Const` **emptyEnumerableObservableT**: [`Empty`](containers.md#empty)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### emptyObservableT

• `Const` **emptyObservableT**: [`Empty`](containers.md#empty)<[`ObservableLike`](../interfaces/rx.ObservableLike.md), { `delay`: `number`  }\>

___

### emptyRunnableObservableT

• `Const` **emptyRunnableObservableT**: [`Empty`](containers.md#empty)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), { `delay`: `number`  }\>

___

### emptyRunnableT

• `Const` **emptyRunnableT**: [`Empty`](containers.md#empty)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### generateEnumerableObservableT

• `Const` **generateEnumerableObservableT**: [`Generate`](containers.md#generate)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### generateObservableT

• `Const` **generateObservableT**: [`Generate`](containers.md#generate)<[`ObservableLike`](../interfaces/rx.ObservableLike.md), { `delay`: `number` ; `delayStart`: `boolean`  }\>

___

### generateRunnableObservableT

• `Const` **generateRunnableObservableT**: [`Generate`](containers.md#generate)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), { `delay`: `number` ; `delayStart`: `boolean`  }\>

___

### generateRunnableT

• `Const` **generateRunnableT**: [`Generate`](containers.md#generate)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### neverEnumerableObservableT

• `Const` **neverEnumerableObservableT**: [`Never`](containers.md#never)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### neverObservableT

• `Const` **neverObservableT**: [`Never`](containers.md#never)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### neverRunnableObservableT

• `Const` **neverRunnableObservableT**: [`Never`](containers.md#never)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### neverRunnableT

• `Const` **neverRunnableT**: [`Never`](containers.md#never)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

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

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

▸ **generateObservable**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options` | `Object` | - |
| `options.delay` | `number` | - |
| `options.delayStart?` | `boolean` | - |

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

### neverObservable

▸ **neverObservable**<`T`\>(): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

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
