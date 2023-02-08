[Reactive-JS](../README.md) / rx/Observable

# Module: rx/Observable

## Table of contents

### Variables

- [default](rx_Observable.md#default)

### Functions

- [buffer](rx_Observable.md#buffer)
- [catchError](rx_Observable.md#catcherror)
- [combineLatest](rx_Observable.md#combinelatest)
- [concat](rx_Observable.md#concat)
- [concatAll](rx_Observable.md#concatall)
- [create](rx_Observable.md#create)
- [decodeWithCharset](rx_Observable.md#decodewithcharset)
- [defer](rx_Observable.md#defer)
- [distinctUntilChanged](rx_Observable.md#distinctuntilchanged)
- [empty](rx_Observable.md#empty)
- [everySatisfy](rx_Observable.md#everysatisfy)
- [exhaust](rx_Observable.md#exhaust)
- [forEach](rx_Observable.md#foreach)
- [forkCombineLatest](rx_Observable.md#forkcombinelatest)
- [forkMerge](rx_Observable.md#forkmerge)
- [forkZipLatest](rx_Observable.md#forkziplatest)
- [fromArray](rx_Observable.md#fromarray)
- [fromDisposable](rx_Observable.md#fromdisposable)
- [fromFlowable](rx_Observable.md#fromflowable)
- [fromPromise](rx_Observable.md#frompromise)
- [generate](rx_Observable.md#generate)
- [isEnumerable](rx_Observable.md#isenumerable)
- [isRunnable](rx_Observable.md#isrunnable)
- [keep](rx_Observable.md#keep)
- [map](rx_Observable.md#map)
- [mapAsync](rx_Observable.md#mapasync)
- [merge](rx_Observable.md#merge)
- [mergeAll](rx_Observable.md#mergeall)
- [multicast](rx_Observable.md#multicast)
- [never](rx_Observable.md#never)
- [onSubscribe](rx_Observable.md#onsubscribe)
- [pairwise](rx_Observable.md#pairwise)
- [reduce](rx_Observable.md#reduce)
- [repeat](rx_Observable.md#repeat)
- [retry](rx_Observable.md#retry)
- [scan](rx_Observable.md#scan)
- [scanAsync](rx_Observable.md#scanasync)
- [share](rx_Observable.md#share)
- [skipFirst](rx_Observable.md#skipfirst)
- [someSatisfy](rx_Observable.md#somesatisfy)
- [subscribe](rx_Observable.md#subscribe)
- [subscribeOn](rx_Observable.md#subscribeon)
- [switchAll](rx_Observable.md#switchall)
- [takeFirst](rx_Observable.md#takefirst)
- [takeLast](rx_Observable.md#takelast)
- [takeUntil](rx_Observable.md#takeuntil)
- [takeWhile](rx_Observable.md#takewhile)
- [throttle](rx_Observable.md#throttle)
- [throwIfEmpty](rx_Observable.md#throwifempty)
- [timeout](rx_Observable.md#timeout)
- [toEnumerable](rx_Observable.md#toenumerable)
- [toFlowable](rx_Observable.md#toflowable)
- [toPromise](rx_Observable.md#topromise)
- [toReadonlyArray](rx_Observable.md#toreadonlyarray)
- [toRunnable](rx_Observable.md#torunnable)
- [withLatestFrom](rx_Observable.md#withlatestfrom)
- [zip](rx_Observable.md#zip)
- [zipLatest](rx_Observable.md#ziplatest)
- [zipWithLatestFrom](rx_Observable.md#zipwithlatestfrom)

## Variables

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buffer` | <T\>(`options?`: { `duration?`: `number` \| [`Function1`](functions.md#function1)<`T`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> ; `maxBufferSize?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\> |
| `catchError` | <T_1\>(`onError`: [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_1`\>\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_1`, `T_1`\> |
| `concat` | <T_2\>(`fst`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_2`\>, `snd`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_2`\>, ...`tail`: readonly [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_2`\>[]) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_2`\> |
| `concatAll` | <T_3\>(`options?`: { `maxBufferSize?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_3`\>, `T_3`\> |
| `decodeWithCharset` | (`charset?`: `string`) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\> |
| `defer` | <T_4\>(`factory`: [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_4`\>\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_4`\> |
| `distinctUntilChanged` | <T_5\>(`options?`: { `equality?`: [`Equality`](functions.md#equality)<`T_5`\>  }) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_5`, `T_5`\> |
| `empty` | `EmptyObservable` |
| `everySatisfy` | <T_6\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_6`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_6`, `boolean`\> |
| `forEach` | <T_7\>(`effect`: [`SideEffect1`](functions.md#sideeffect1)<`T_7`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_7`, `T_7`\> |
| `fromArray` | <T_8\>(`options?`: { `count?`: `number` ; `delay?`: `number` ; `delayStart?`: `boolean` ; `start?`: `number`  }) => [`Function1`](functions.md#function1)<readonly `T_8`[], [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_8`\>\> |
| `fromFlowable` | <T_9\>(`options?`: `undefined`) => [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T_9`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_9`\>\> |
| `fromPromise` | <T_10\>(`options?`: `undefined`) => [`Function1`](functions.md#function1)<[`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T_10`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_10`\>\> |
| `generate` | `GenerateObservable` |
| `keep` | <T_11\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_11`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_11`, `T_11`\> |
| `map` | <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\> |
| `never` | <T_12\>() => [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T_12`\> |
| `pairwise` | <T_13\>() => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_13`, readonly [`T_13`, `T_13`]\> |
| `reduce` | <T_14, TAcc\>(`reducer`: [`Reducer`](functions.md#reducer)<`T_14`, `TAcc`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_14`, `TAcc`\> |
| `repeat` | `RepeatOperator` |
| `scan` | <T_15, TAcc_1\>(`scanner`: [`Reducer`](functions.md#reducer)<`T_15`, `TAcc_1`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc_1`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_15`, `TAcc_1`\> |
| `scanAsync` | <T_16, TAcc_2\>(`scanner`: [`AsyncReducer`](rx.md#asyncreducer)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_16`, `TAcc_2`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc_2`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_16`, `TAcc_2`\> |
| `skipFirst` | <T_17\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_17`, `T_17`\> |
| `someSatisfy` | <T_18\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_18`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_18`, `boolean`\> |
| `takeFirst` | <T_19\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_19`, `T_19`\> |
| `takeLast` | <T_20\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_20`, `T_20`\> |
| `takeWhile` | <T_21\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_21`\>, `options?`: { `inclusive?`: `boolean`  }) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_21`, `T_21`\> |
| `throwIfEmpty` | <T_22\>(`factory`: [`Factory`](functions.md#factory)<`unknown`\>) => [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T_22`, `T_22`\> |
| `toEnumerable` | <T_23\>(`options?`: `undefined`) => [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_23`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T_23`\>\> |
| `toFlowable` | <T_24\>(`options?`: `undefined`) => [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_24`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T_24`\>\> |
| `toPromise` | <T_25\>(`ctx`: [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)) => [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_25`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T_25`\>\> |
| `toReadonlyArray` | <T_26\>(`options?`: `undefined`) => [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_26`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T_26`\>\> |
| `toRunnable` | <T_27\>(`options?`: { `schedulerFactory?`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }) => [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T_27`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T_27`\>\> |
| `zip` | <TA_1, TB_1\>(`a`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA_1`\>, `b`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB_1`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA_1`, `TB_1`]\><TA_2, TB_2, TC\>(`a`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA_2`\>, `b`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB_2`\>, `c`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC`]\><TA_3, TB_3, TC_1, TD\>(`a`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA_3`\>, `b`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB_3`\>, `c`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC_1`\>, `d`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_1`, `TD`]\><TA_4, TB_4, TC_2, TD_1, TE\>(`a`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA_4`\>, `b`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB_4`\>, `c`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC_2`\>, `d`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD_1`\>, `e`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_2`, `TD_1`, `TE`]\><TA_5, TB_5, TC_3, TD_2, TE_1, TF\>(`a`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA_5`\>, `b`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB_5`\>, `c`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC_3`\>, `d`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD_2`\>, `e`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE_1`\>, `f`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_3`, `TD_2`, `TE_1`, `TF`]\><TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG\>(`a`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA_6`\>, `b`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB_6`\>, `c`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC_4`\>, `d`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD_3`\>, `e`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE_2`\>, `f`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF_1`\>, `g`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\><TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH\>(`a`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA_7`\>, `b`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB_7`\>, `c`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC_5`\>, `d`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD_4`\>, `e`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE_3`\>, `f`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF_2`\>, `g`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG_1`\>, `h`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TH`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\><TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI\>(`a`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TA_8`\>, `b`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB_8`\>, `c`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC_6`\>, `d`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD_5`\>, `e`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE_4`\>, `f`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF_3`\>, `g`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG_2`\>, `h`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TH_1`\>, `i`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TI`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA_8`, `TB_8`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\> |

## Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.duration?` | `number` \| [`Function1`](functions.md#function1)<`T`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |
| `options.maxBufferSize?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`]\>

Returns an `ObservableLike` that combines the latest values from
multiple sources.

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

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

Returns an `ObservableLike` that combines the latest values from
multiple sources.

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

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

Returns an `ObservableLike` that combines the latest values from
multiple sources.

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

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

Returns an `ObservableLike` that combines the latest values from
multiple sources.

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

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

Returns an `ObservableLike` that combines the latest values from
multiple sources.

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

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

Returns an `ObservableLike` that combines the latest values from
multiple sources.

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

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

Returns an `ObservableLike` that combines the latest values from
multiple sources.

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

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

Returns an `ObservableLike` that combines the latest values from
multiple sources.

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

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

Creates an `ObservableLike` which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order `ObservableLike` into a first-order
`ObservableLike` by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBufferSize?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

___

### create

▸ **create**<`T`\>(`f`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

▸ **empty**<`T`\>(`options`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

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

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### exhaust

▸ **exhaust**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
by dropping inner sources while the previous inner source
has not yet been disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TH`\> |
| `i` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TIn`, `TOut`\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TH`\> |
| `i` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### fromDisposable

▸ **fromDisposable**<`T`\>(): [`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/util.DisposableLike.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/util.DisposableLike.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### fromFlowable

▸ **fromFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### fromPromise

▸ **fromPromise**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

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

▸ **generate**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

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

### isEnumerable

▸ **isEnumerable**(`obs`): obs is EnumerableObservableLike<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

obs is EnumerableObservableLike<unknown\>

___

### isRunnable

▸ **isRunnable**(`obs`): obs is RunnableObservableLike<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

obs is RunnableObservableLike<unknown\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### mapAsync

▸ **mapAsync**<`TA`, `TB`\>(`f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function1`](functions.md#function1)<`TA`, `Promise`<`TB`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBufferSize?` | `number` |
| `options.maxConcurrency?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

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

### never

▸ **never**<`T`\>(): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](util.md#disposableorteardown)\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that applies the predicate function each time the source
completes to determine if the subscription should be renewed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> | The predicate function to apply. |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that repeats the source count times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that continually repeats the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`number`, `unknown`, `boolean`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

Returns the `ObservableLike` that applies an asynchronous accumulator function
over the source, and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

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

▸ **subscribeOn**<`T`\>(`scheduler`): (`observable`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

`fn`

▸ (`observable`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |

##### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### switchAll

▸ **switchAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeUntil

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

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time in ms within which the source must emit values. |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toPromise

▸ **toPromise**<`T`\>(`ctx`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.schedulerFactory?` | [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `T`\>

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

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`]\>

Returns an `ObservableLike` that zips the latest values from
multiple sources.

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

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

Returns an `ObservableLike` that zips the latest values from
multiple sources.

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

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

Returns an `ObservableLike` that zips the latest values from
multiple sources.

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

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

Returns an `ObservableLike` that zips the latest values from
multiple sources.

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

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

Returns an `ObservableLike` that zips the latest values from
multiple sources.

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

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

Returns an `ObservableLike` that zips the latest values from
multiple sources.

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

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

Returns an `ObservableLike` that zips the latest values from
multiple sources.

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

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

Returns an `ObservableLike` that zips the latest values from
multiple sources.

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

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `T`\>
