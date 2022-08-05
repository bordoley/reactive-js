[Reactive-JS](../README.md) / rx/ObservableLike

# Module: rx/ObservableLike

## Table of contents

### Interfaces

- [concat](../interfaces/rx_ObservableLike.concat.md)
- [decodeWithCharset](../interfaces/rx_ObservableLike.decodeWithCharset.md)
- [distinctUntilChanged](../interfaces/rx_ObservableLike.distinctUntilChanged.md)
- [forEach](../interfaces/rx_ObservableLike.forEach.md)
- [forkMerge](../interfaces/rx_ObservableLike.forkMerge.md)
- [keep](../interfaces/rx_ObservableLike.keep.md)
- [map](../interfaces/rx_ObservableLike.map.md)
- [onSubscribe](../interfaces/rx_ObservableLike.onSubscribe.md)
- [pairwise](../interfaces/rx_ObservableLike.pairwise.md)
- [reduce](../interfaces/rx_ObservableLike.reduce.md)
- [scan](../interfaces/rx_ObservableLike.scan.md)
- [share](../interfaces/rx_ObservableLike.share.md)
- [skipFirst](../interfaces/rx_ObservableLike.skipFirst.md)
- [subscribeOn](../interfaces/rx_ObservableLike.subscribeOn.md)
- [switchAll](../interfaces/rx_ObservableLike.switchAll.md)
- [takeFirst](../interfaces/rx_ObservableLike.takeFirst.md)
- [takeLast](../interfaces/rx_ObservableLike.takeLast.md)
- [takeUntil](../interfaces/rx_ObservableLike.takeUntil.md)
- [takeWhile](../interfaces/rx_ObservableLike.takeWhile.md)
- [throwIfEmpty](../interfaces/rx_ObservableLike.throwIfEmpty.md)

### Variables

- [concatT](rx_ObservableLike.md#concatt)
- [decodeWithCharsetT](rx_ObservableLike.md#decodewithcharsett)
- [distinctUntilChangedT](rx_ObservableLike.md#distinctuntilchangedt)
- [forEachT](rx_ObservableLike.md#foreacht)
- [keepT](rx_ObservableLike.md#keept)
- [mapT](rx_ObservableLike.md#mapt)
- [mergeT](rx_ObservableLike.md#merget)
- [pairwiseT](rx_ObservableLike.md#pairwiset)
- [reduceT](rx_ObservableLike.md#reducet)
- [scanT](rx_ObservableLike.md#scant)
- [skipFirstT](rx_ObservableLike.md#skipfirstt)
- [switchAllT](rx_ObservableLike.md#switchallt)
- [takeFirstT](rx_ObservableLike.md#takefirstt)
- [takeLastT](rx_ObservableLike.md#takelastt)
- [takeWhileT](rx_ObservableLike.md#takewhilet)
- [throwIfEmptyT](rx_ObservableLike.md#throwifemptyt)
- [zipT](rx_ObservableLike.md#zipt)

### Functions

- [decodeWithCharset](rx_ObservableLike.md#decodewithcharset)
- [distinctUntilChanged](rx_ObservableLike.md#distinctuntilchanged)
- [forEach](rx_ObservableLike.md#foreach)
- [forkMerge](rx_ObservableLike.md#forkmerge)
- [getObservableType](rx_ObservableLike.md#getobservabletype)
- [keep](rx_ObservableLike.md#keep)
- [map](rx_ObservableLike.md#map)
- [multicast](rx_ObservableLike.md#multicast)
- [onSubscribe](rx_ObservableLike.md#onsubscribe)
- [pairwise](rx_ObservableLike.md#pairwise)
- [reduce](rx_ObservableLike.md#reduce)
- [scan](rx_ObservableLike.md#scan)
- [share](rx_ObservableLike.md#share)
- [skipFirst](rx_ObservableLike.md#skipfirst)
- [subscribe](rx_ObservableLike.md#subscribe)
- [subscribeOn](rx_ObservableLike.md#subscribeon)
- [switchAll](rx_ObservableLike.md#switchall)
- [takeFirst](rx_ObservableLike.md#takefirst)
- [takeLast](rx_ObservableLike.md#takelast)
- [takeUntil](rx_ObservableLike.md#takeuntil)
- [takeWhile](rx_ObservableLike.md#takewhile)
- [throwIfEmpty](rx_ObservableLike.md#throwifempty)
- [toEnumerable](rx_ObservableLike.md#toenumerable)
- [toEnumerableObservable](rx_ObservableLike.md#toenumerableobservable)
- [toPromise](rx_ObservableLike.md#topromise)
- [toRunnableObservable](rx_ObservableLike.md#torunnableobservable)
- [zip](rx_ObservableLike.md#zip)

## Variables

### concatT

• `Const` **concatT**: [`Concat`](containers.md#concat)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](containers.md#decodewithcharset)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### mergeT

• `Const` **mergeT**: [`Concat`](containers.md#concat)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](containers.md#reduce)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### switchAllT

• `Const` **switchAllT**: [`ConcatAll`](containers.md#concatall)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers.md#takefirst)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](containers.md#takelast)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers.md#takewhile)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](containers.md#throwifempty)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### zipT

• `Const` **zipT**: [`Zip`](containers.md#zip)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

## Functions

### decodeWithCharset

▸ **decodeWithCharset**<`C`\>(`charset?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`, `C`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### forEach

▸ **forEach**<`T`, `C`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **forEach**<`T`\>(`effect`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`, `C`\>(`fst`, `snd`, ...`tail`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TIn` | `TIn` |
| `TOut` | `TOut` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>

___

### getObservableType

▸ **getObservableType**(`obs`): ``0`` \| ``2`` \| ``1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

``0`` \| ``2`` \| ``1``

___

### keep

▸ **keep**<`T`, `C`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **keep**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### map

▸ **map**<`TA`, `TB`, `C`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/rx.MulticastObservableLike.md)<`T`\>\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/rx.MulticastObservableLike.md)<`T`\>\>

___

### onSubscribe

▸ **onSubscribe**<`T`, `C`\>(`f`): [`Function1`](functions.md#function1)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](util.md#disposableorteardown)\> |

#### Returns

[`Function1`](functions.md#function1)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

___

### pairwise

▸ **pairwise**<`T`, `C`\>(): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `C`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>

___

### scan

▸ **scan**<`T`, `TAcc`, `C`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### skipFirst

▸ **skipFirst**<`T`, `C`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](functions.md#function1)<`C`, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`C`, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](functions.md#function1)<`C`, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`C`, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](functions.md#function1)<`C`, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`C`, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](functions.md#function1)<`C`, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`C`, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

### takeFirst

▸ **takeFirst**<`T`, `C`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`, `C`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`C`, `T`\>(`notifier`): [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\> \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

▸ **takeUntil**<`C`, `T`\>(`notifier`): [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\> \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

▸ **takeUntil**<`T`\>(`notifier`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### takeWhile

▸ **takeWhile**<`T`, `C`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`, `C`\>(`factory`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`Option`](functions.md#option)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`Option`](functions.md#option)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>\>

___

### toEnumerableObservable

▸ **toEnumerableObservable**<`T`\>(): (`obs`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>) => [`Option`](functions.md#option)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`obs`): [`Option`](functions.md#option)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |

##### Returns

[`Option`](functions.md#option)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

___

### toPromise

▸ **toPromise**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `Promise`<`T`\>\>

Returns a Promise that completes with the last value produced by
the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) | The scheduler upon which to subscribe to the source. |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `Promise`<`T`\>\>

___

### toRunnableObservable

▸ **toRunnableObservable**<`T`\>(): (`obs`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>) => [`Option`](functions.md#option)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`obs`): [`Option`](functions.md#option)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |

##### Returns

[`Option`](functions.md#option)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>
