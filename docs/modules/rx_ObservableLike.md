[Reactive-JS](../README.md) / rx/ObservableLike

# Module: rx/ObservableLike

## Table of contents

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
- [toPromise](rx_ObservableLike.md#topromise)

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
