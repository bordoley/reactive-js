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

- [ToObservable](rx.md#toobservable)
- [ToRunnable](rx.md#torunnable)

### Variables

- [ObservableLike\_isEnumerable](rx.md#observablelike_isenumerable)
- [ObservableLike\_isRunnable](rx.md#observablelike_isrunnable)
- [deferObservableT](rx.md#deferobservablet)
- [deferRunnableT](rx.md#deferrunnablet)
- [emptyObservableT](rx.md#emptyobservablet)
- [emptyRunnableT](rx.md#emptyrunnablet)
- [generateObservableT](rx.md#generateobservablet)
- [generateRunnableT](rx.md#generaterunnablet)
- [neverObservableT](rx.md#neverobservablet)
- [neverRunnableT](rx.md#neverrunnablet)

### Functions

- [createObservable](rx.md#createobservable)
- [createRunnable](rx.md#createrunnable)
- [createSubject](rx.md#createsubject)
- [deferObservable](rx.md#deferobservable)
- [deferRunnable](rx.md#deferrunnable)
- [emptyObservable](rx.md#emptyobservable)
- [emptyRunnable](rx.md#emptyrunnable)
- [generateObservable](rx.md#generateobservable)
- [generateRunnable](rx.md#generaterunnable)
- [neverObservable](rx.md#neverobservable)
- [neverRunnable](rx.md#neverrunnable)

## Type Aliases

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

### ObservableLike\_isEnumerable

• `Const` **ObservableLike\_isEnumerable**: unique `symbol`

___

### ObservableLike\_isRunnable

• `Const` **ObservableLike\_isRunnable**: unique `symbol`

___

### deferObservableT

• `Const` **deferObservableT**: [`Defer`](containers.md#defer)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### deferRunnableT

• `Const` **deferRunnableT**: [`Defer`](containers.md#defer)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### emptyObservableT

• `Const` **emptyObservableT**: [`Empty`](containers.md#empty)<[`ObservableLike`](../interfaces/rx.ObservableLike.md), { `delay`: `number`  }\>

___

### emptyRunnableT

• `Const` **emptyRunnableT**: [`Empty`](containers.md#empty)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### generateObservableT

• `Const` **generateObservableT**: [`Generate`](containers.md#generate)<[`ObservableLike`](../interfaces/rx.ObservableLike.md), { `delay`: `number` ; `delayStart`: `boolean`  }\>

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

### createObservable

▸ **createObservable**<`T`\>(`f`, `options`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |
| `options` | `Object` |
| `options.isRunnable` | ``true`` |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

▸ **createObservable**<`T`\>(`f`, `options`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |
| `options` | `Object` |
| `options.isEnumerable` | ``true`` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

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

▸ **deferObservable**<`T`\>(`factory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **deferObservable**<`T`\>(`factory`, `options`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **deferObservable**<`T`\>(`factory`, `options`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |
| `options` | `Object` |
| `options.delay?` | `number` |
| `options.isRunnable` | ``true`` |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

▸ **deferObservable**<`T`\>(`factory`, `options`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/scheduling.ObserverLike.md)<`T`\>\> |
| `options` | `Object` |
| `options.isEnumerable` | ``true`` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

▸ **deferObservable**<`T`\>(`factory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **deferObservable**<`T`\>(`factory`, `options`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

▸ **deferObservable**<`T`\>(`factory`, `options`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.delay?` | `number` |
| `options.isRunnable` | ``true`` |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

▸ **deferObservable**<`T`\>(`factory`, `options`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.isEnumerable` | ``true`` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

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
