[Reactive-JS](../README.md) / [concurrent/Observable](../modules/concurrent_Observable.md) / ObservableModule

# Interface: ObservableModule

[concurrent/Observable](../modules/concurrent_Observable.md).ObservableModule

## Table of contents

### Properties

- [currentTime](concurrent_Observable.ObservableModule.md#currenttime)

### Methods

- [animate](concurrent_Observable.ObservableModule.md#animate)
- [backpressureStrategy](concurrent_Observable.ObservableModule.md#backpressurestrategy)
- [buffer](concurrent_Observable.ObservableModule.md#buffer)
- [catchError](concurrent_Observable.ObservableModule.md#catcherror)
- [combineLatest](concurrent_Observable.ObservableModule.md#combinelatest)
- [computeDeferred](concurrent_Observable.ObservableModule.md#computedeferred)
- [computeRunnable](concurrent_Observable.ObservableModule.md#computerunnable)
- [concat](concurrent_Observable.ObservableModule.md#concat)
- [concatAll](concurrent_Observable.ObservableModule.md#concatall)
- [concatMany](concurrent_Observable.ObservableModule.md#concatmany)
- [concatMap](concurrent_Observable.ObservableModule.md#concatmap)
- [concatWith](concurrent_Observable.ObservableModule.md#concatwith)
- [create](concurrent_Observable.ObservableModule.md#create)
- [debug](concurrent_Observable.ObservableModule.md#debug)
- [decodeWithCharset](concurrent_Observable.ObservableModule.md#decodewithcharset)
- [defer](concurrent_Observable.ObservableModule.md#defer)
- [dispatchTo](concurrent_Observable.ObservableModule.md#dispatchto)
- [distinctUntilChanged](concurrent_Observable.ObservableModule.md#distinctuntilchanged)
- [empty](concurrent_Observable.ObservableModule.md#empty)
- [encodeUtf8](concurrent_Observable.ObservableModule.md#encodeutf8)
- [endWith](concurrent_Observable.ObservableModule.md#endwith)
- [enqueue](concurrent_Observable.ObservableModule.md#enqueue)
- [exhaust](concurrent_Observable.ObservableModule.md#exhaust)
- [exhaustMap](concurrent_Observable.ObservableModule.md#exhaustmap)
- [firstAsync](concurrent_Observable.ObservableModule.md#firstasync)
- [flatMapAsync](concurrent_Observable.ObservableModule.md#flatmapasync)
- [flatMapIterable](concurrent_Observable.ObservableModule.md#flatmapiterable)
- [forEach](concurrent_Observable.ObservableModule.md#foreach)
- [forkMerge](concurrent_Observable.ObservableModule.md#forkmerge)
- [fromAsyncFactory](concurrent_Observable.ObservableModule.md#fromasyncfactory)
- [fromAsyncIterable](concurrent_Observable.ObservableModule.md#fromasynciterable)
- [fromEnumerable](concurrent_Observable.ObservableModule.md#fromenumerable)
- [fromEventSource](concurrent_Observable.ObservableModule.md#fromeventsource)
- [fromIterable](concurrent_Observable.ObservableModule.md#fromiterable)
- [fromPromise](concurrent_Observable.ObservableModule.md#frompromise)
- [fromReadonlyArray](concurrent_Observable.ObservableModule.md#fromreadonlyarray)
- [fromStore](concurrent_Observable.ObservableModule.md#fromstore)
- [fromValue](concurrent_Observable.ObservableModule.md#fromvalue)
- [ignoreElements](concurrent_Observable.ObservableModule.md#ignoreelements)
- [keep](concurrent_Observable.ObservableModule.md#keep)
- [lastAsync](concurrent_Observable.ObservableModule.md#lastasync)
- [log](concurrent_Observable.ObservableModule.md#log)
- [map](concurrent_Observable.ObservableModule.md#map)
- [merge](concurrent_Observable.ObservableModule.md#merge)
- [mergeAll](concurrent_Observable.ObservableModule.md#mergeall)
- [mergeMany](concurrent_Observable.ObservableModule.md#mergemany)
- [mergeMap](concurrent_Observable.ObservableModule.md#mergemap)
- [mergeWith](concurrent_Observable.ObservableModule.md#mergewith)
- [multicast](concurrent_Observable.ObservableModule.md#multicast)
- [never](concurrent_Observable.ObservableModule.md#never)
- [onSubscribe](concurrent_Observable.ObservableModule.md#onsubscribe)
- [pairwise](concurrent_Observable.ObservableModule.md#pairwise)
- [reduce](concurrent_Observable.ObservableModule.md#reduce)
- [repeat](concurrent_Observable.ObservableModule.md#repeat)
- [retry](concurrent_Observable.ObservableModule.md#retry)
- [run](concurrent_Observable.ObservableModule.md#run)
- [scan](concurrent_Observable.ObservableModule.md#scan)
- [scanMany](concurrent_Observable.ObservableModule.md#scanmany)
- [skipFirst](concurrent_Observable.ObservableModule.md#skipfirst)
- [startWith](concurrent_Observable.ObservableModule.md#startwith)
- [subscribe](concurrent_Observable.ObservableModule.md#subscribe)
- [subscribeOn](concurrent_Observable.ObservableModule.md#subscribeon)
- [switchAll](concurrent_Observable.ObservableModule.md#switchall)
- [switchMap](concurrent_Observable.ObservableModule.md#switchmap)
- [takeFirst](concurrent_Observable.ObservableModule.md#takefirst)
- [takeLast](concurrent_Observable.ObservableModule.md#takelast)
- [takeUntil](concurrent_Observable.ObservableModule.md#takeuntil)
- [takeWhile](concurrent_Observable.ObservableModule.md#takewhile)
- [throttle](concurrent_Observable.ObservableModule.md#throttle)
- [throwIfEmpty](concurrent_Observable.ObservableModule.md#throwifempty)
- [throws](concurrent_Observable.ObservableModule.md#throws)
- [toEventSource](concurrent_Observable.ObservableModule.md#toeventsource)
- [toReadonlyArray](concurrent_Observable.ObservableModule.md#toreadonlyarray)
- [toReadonlyArrayAsync](concurrent_Observable.ObservableModule.md#toreadonlyarrayasync)
- [withCurrentTime](concurrent_Observable.ObservableModule.md#withcurrenttime)
- [withLatestFrom](concurrent_Observable.ObservableModule.md#withlatestfrom)
- [zipLatest](concurrent_Observable.ObservableModule.md#ziplatest)

## Properties

### currentTime

• **currentTime**: [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`number`\>

## Methods

### animate

▸ **animate**<`T`\>(`configs`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

___

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, readonly `T`[], [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

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

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, readonly `T`[], [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`Error`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TH`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TH`\> |
| `i` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TI`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TH`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TI`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](concurrent.ObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](concurrent.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](concurrent.ObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### computeDeferred

▸ **computeDeferred**<`T`\>(`computation`, `options?`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

___

### computeRunnable

▸ **computeRunnable**<`T`\>(`computation`, `options?`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `snd` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> |
| `snd` | [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

▸ **concatAll**<`T`\>(`options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

▸ **concatAll**<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`\>

▸ **concatAll**<`T`\>(`options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>\>\>

▸ **concatAll**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>] |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **concatMap**<`TA`, `TB`\>(`selector`, `options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **concatMap**<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

▸ **concatMap**<`TA`, `TB`\>(`selector`, `options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **concatMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>[] |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ObserverLike`](concurrent.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

___

### debug

▸ **debug**<`T`\>(): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`ArrayBuffer`, `string`, [`ObservableLike`](concurrent.ObservableLike.md)<`ArrayBuffer`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |
| `options.fatal?` | `boolean` |
| `options.ignoreBOM?` | `boolean` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`ArrayBuffer`, `string`, [`ObservableLike`](concurrent.ObservableLike.md)<`ArrayBuffer`\>\>

___

### defer

▸ **defer**<`T`\>(`f`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](concurrent.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### empty

▸ **empty**<`T`\>(): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

▸ **empty**<`T`\>(`options?`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`string`, `Uint8Array`, [`ObservableLike`](concurrent.ObservableLike.md)<`string`\>\>

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`string`, `Uint8Array`, [`ObservableLike`](concurrent.ObservableLike.md)<`string`\>\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](utils.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

▸ **exhaust**<`T`\>(`options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

▸ **exhaust**<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`\>

▸ **exhaust**<`T`\>(`options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>\>

▸ **exhaust**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **exhaustMap**<`TA`, `TB`\>(`selector`, `options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **exhaustMap**<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

▸ **exhaustMap**<`TA`, `TB`\>(`selector`, `options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **exhaustMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

___

### firstAsync

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](../modules/functions.md#function2)<`TA`, `AbortSignal`, `Promise`<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): <TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\>\>[] |

#### Returns

`fn`

▸ <`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`TIn`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): <TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TOut`\>\>[] |

#### Returns

`fn`

▸ <`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`TIn`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): <TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\>[] |

#### Returns

`fn`

▸ <`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`TIn`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): <TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureObservableLike`](concurrent.PureObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureObservableLike`](concurrent.PureObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`PureObservableLike`](concurrent.PureObservableLike.md)<`TOut`\>\>[] |

#### Returns

`fn`

▸ <`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`TIn`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`ObservableLike`](concurrent.ObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`ObservableLike`](concurrent.ObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TIn`\>, [`ObservableLike`](concurrent.ObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TOut`\>\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

___

### fromEventSource

▸ **fromEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

___

### fromPromise

▸ **fromPromise**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Promise`<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Promise`<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

___

### fromStore

▸ **fromStore**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](events.StoreLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](events.StoreLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`T`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### lastAsync

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### log

▸ **log**<`T`\>(): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `snd` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> |
| `snd` | [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `...tail` | readonly [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> |
| `snd` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

▸ **mergeAll**<`T`\>(`options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

▸ **mergeAll**<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`\>

▸ **mergeAll**<`T`\>(`options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>\>\>

▸ **mergeAll**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>[] |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>[] |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.autoDispose?` | `boolean` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](utils.DisposableLike.md)\>

___

### never

▸ **never**<`T`\>(): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`DisposableLike`](utils.DisposableLike.md)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](../modules/functions.md#sideeffect) |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

▸ **repeat**<`T`\>(`count`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

▸ **repeat**<`T`\>(): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry?` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `TAcc`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `TAcc`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `TAcc`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `TAcc`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `TAcc`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `TAcc`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`RunnableLike`](concurrent.RunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `TAcc`\>

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`T`, `TAcc`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`T`, `TAcc`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TAcc`\>\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

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

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`scheduler`, `options?`): <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> ? [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> : `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\> ? [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\> : `TObservableIn` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

`fn`

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> ? [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> : `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\> ? [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\> : `TObservableIn` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`T`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> ? [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\> : `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\> ? [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\> : `TObservableIn` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

▸ **switchAll**<`T`\>(`options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>\>

▸ **switchAll**<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `T`\>

▸ **switchAll**<`T`\>(`options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`T`\>\>\>

▸ **switchAll**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **switchMap**<`TA`, `TB`\>(`selector`, `options`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **switchMap**<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

▸ **switchMap**<`TA`, `TB`\>(`selector`, `options`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **switchMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`<[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>, typeof [`ObservableLike_isDeferred`](../modules/concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](../modules/concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](../modules/concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](../modules/concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

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

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

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

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

▸ **takeUntil**<`T`\>(`notifier`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

▸ **takeUntil**<`T`\>(`notifier`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `options?` | `Object` |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |
| `options?` | `undefined` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, readonly `T`[]\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`number`, `TA`, `TB`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `TB`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`TA`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`AlwaysDeferObservableOperator`](../modules/concurrent_Observable.md#alwaysdeferobservableoperator)<`TA`, `T`, [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TH`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TH`\> |
| `i` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TI`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TH`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TI`\> |

#### Returns

[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](concurrent.ObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](concurrent.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](concurrent.ObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>
