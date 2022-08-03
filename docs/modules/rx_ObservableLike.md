[Reactive-JS](../README.md) / rx/ObservableLike

# Module: rx/ObservableLike

## Table of contents

### Functions

- [concat](rx_ObservableLike.md#concat)
- [decodeWithCharset](rx_ObservableLike.md#decodewithcharset)
- [distinctUntilChanged](rx_ObservableLike.md#distinctuntilchanged)
- [forEach](rx_ObservableLike.md#foreach)
- [forkMerge](rx_ObservableLike.md#forkmerge)
- [getObservableType](rx_ObservableLike.md#getobservabletype)
- [keep](rx_ObservableLike.md#keep)
- [map](rx_ObservableLike.md#map)
- [merge](rx_ObservableLike.md#merge)
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
- [toHotObservable](rx_ObservableLike.md#tohotobservable)
- [toPromise](rx_ObservableLike.md#topromise)

## Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>

Creates an `ObservableLike` which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>[] |

#### Returns

[`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

Creates an `ObservableLike` which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `snd` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>)[] |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

Creates an `ObservableLike` which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `snd` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>[] |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**<`C`\>(`charset?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`C`, `T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### forEach

▸ **forEach**<`C`, `T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

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

▸ **forkMerge**<`C`, `TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TIn`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TIn`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TIn`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TIn`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TIn`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TOut`\>\>

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

▸ **keep**<`C`, `T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

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

▸ **map**<`C`, `TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

▸ **map**<`TA`, `TB`\>(`mapper`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, ...`tail`): [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>[] |

#### Returns

[`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, ...`tail`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `snd` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>)[] |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, ...`tail`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `snd` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>[] |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

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

▸ **onSubscribe**<`C`, `T`\>(`f`): [`Function1`](functions.md#function1)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](util.md#disposableorteardown)\> |

#### Returns

[`Function1`](functions.md#function1)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

▸ **onSubscribe**<`T`\>(`f`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](util.md#disposableorteardown)\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### pairwise

▸ **pairwise**<`C`, `T`\>(): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>

▸ **pairwise**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`T`, `T`]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`T`, `T`]\>\>

___

### reduce

▸ **reduce**<`C`, `T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TAcc` | `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>

▸ **reduce**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### scan

▸ **scan**<`C`, `T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TAcc` | `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TAcc`\>\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>\>

___

### skipFirst

▸ **skipFirst**<`C`, `T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **skipFirst**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](functions.md#function1)<`C`, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`C`, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](functions.md#function1)<`C`, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`C`, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

___

### takeFirst

▸ **takeFirst**<`C`, `T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **takeFirst**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### takeLast

▸ **takeLast**<`C`, `T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **takeLast**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **takeWhile**<`C`, `T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`C`, `T`\>(`factory`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **throwIfEmpty**<`T`\>(`factory`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toHotObservable

▸ **toHotObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>\>

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
