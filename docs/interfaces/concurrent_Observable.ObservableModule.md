[Reactive-JS](../README.md) / [concurrent/Observable](../modules/concurrent_Observable.md) / ObservableModule

# Interface: ObservableModule

[concurrent/Observable](../modules/concurrent_Observable.md).ObservableModule

## Hierarchy

- [`PureComputationModule`](computations.PureComputationModule.md)<[`ObservableComputation`](concurrent_Observable.ObservableComputation.md)\>

- [`PureComputationModule`](computations.PureComputationModule.md)<[`RunnableComputation`](concurrent_Observable.RunnableComputation.md)\>

  ↳ **`ObservableModule`**

## Table of contents

### Properties

- [currentTime](concurrent_Observable.ObservableModule.md#currenttime)

### Constructor Methods

- [computeRunnable](concurrent_Observable.ObservableModule.md#computerunnable)

### Other Methods

- [animate](concurrent_Observable.ObservableModule.md#animate)
- [backpressureStrategy](concurrent_Observable.ObservableModule.md#backpressurestrategy)
- [buffer](concurrent_Observable.ObservableModule.md#buffer)
- [catchError](concurrent_Observable.ObservableModule.md#catcherror)
- [combineLatest](concurrent_Observable.ObservableModule.md#combinelatest)
- [computeDeferred](concurrent_Observable.ObservableModule.md#computedeferred)
- [concat](concurrent_Observable.ObservableModule.md#concat)
- [concatMany](concurrent_Observable.ObservableModule.md#concatmany)
- [concatWith](concurrent_Observable.ObservableModule.md#concatwith)
- [create](concurrent_Observable.ObservableModule.md#create)
- [decodeWithCharset](concurrent_Observable.ObservableModule.md#decodewithcharset)
- [defer](concurrent_Observable.ObservableModule.md#defer)
- [dispatchTo](concurrent_Observable.ObservableModule.md#dispatchto)
- [distinctUntilChanged](concurrent_Observable.ObservableModule.md#distinctuntilchanged)
- [empty](concurrent_Observable.ObservableModule.md#empty)
- [encodeUtf8](concurrent_Observable.ObservableModule.md#encodeutf8)
- [enqueue](concurrent_Observable.ObservableModule.md#enqueue)
- [firstAsync](concurrent_Observable.ObservableModule.md#firstasync)
- [flow](concurrent_Observable.ObservableModule.md#flow)
- [forEach](concurrent_Observable.ObservableModule.md#foreach)
- [fromAsyncIterable](concurrent_Observable.ObservableModule.md#fromasynciterable)
- [fromEnumerable](concurrent_Observable.ObservableModule.md#fromenumerable)
- [fromEventSource](concurrent_Observable.ObservableModule.md#fromeventsource)
- [fromFactory](concurrent_Observable.ObservableModule.md#fromfactory)
- [fromIterable](concurrent_Observable.ObservableModule.md#fromiterable)
- [fromOptional](concurrent_Observable.ObservableModule.md#fromoptional)
- [fromPromise](concurrent_Observable.ObservableModule.md#frompromise)
- [fromReadonlyArray](concurrent_Observable.ObservableModule.md#fromreadonlyarray)
- [fromStore](concurrent_Observable.ObservableModule.md#fromstore)
- [fromValue](concurrent_Observable.ObservableModule.md#fromvalue)
- [ignoreElements](concurrent_Observable.ObservableModule.md#ignoreelements)
- [isDeferred](concurrent_Observable.ObservableModule.md#isdeferred)
- [isPure](concurrent_Observable.ObservableModule.md#ispure)
- [isRunnable](concurrent_Observable.ObservableModule.md#isrunnable)
- [keep](concurrent_Observable.ObservableModule.md#keep)
- [lastAsync](concurrent_Observable.ObservableModule.md#lastasync)
- [map](concurrent_Observable.ObservableModule.md#map)
- [merge](concurrent_Observable.ObservableModule.md#merge)
- [mergeMany](concurrent_Observable.ObservableModule.md#mergemany)
- [mergeWith](concurrent_Observable.ObservableModule.md#mergewith)
- [never](concurrent_Observable.ObservableModule.md#never)
- [onSubscribe](concurrent_Observable.ObservableModule.md#onsubscribe)
- [pairwise](concurrent_Observable.ObservableModule.md#pairwise)
- [reduce](concurrent_Observable.ObservableModule.md#reduce)
- [repeat](concurrent_Observable.ObservableModule.md#repeat)
- [retry](concurrent_Observable.ObservableModule.md#retry)
- [run](concurrent_Observable.ObservableModule.md#run)
- [scan](concurrent_Observable.ObservableModule.md#scan)
- [skipFirst](concurrent_Observable.ObservableModule.md#skipfirst)
- [spring](concurrent_Observable.ObservableModule.md#spring)
- [subscribe](concurrent_Observable.ObservableModule.md#subscribe)
- [subscribeOn](concurrent_Observable.ObservableModule.md#subscribeon)
- [takeFirst](concurrent_Observable.ObservableModule.md#takefirst)
- [takeLast](concurrent_Observable.ObservableModule.md#takelast)
- [takeUntil](concurrent_Observable.ObservableModule.md#takeuntil)
- [takeWhile](concurrent_Observable.ObservableModule.md#takewhile)
- [throttle](concurrent_Observable.ObservableModule.md#throttle)
- [throwIfEmpty](concurrent_Observable.ObservableModule.md#throwifempty)
- [throws](concurrent_Observable.ObservableModule.md#throws)
- [toReadonlyArray](concurrent_Observable.ObservableModule.md#toreadonlyarray)
- [toReadonlyArrayAsync](concurrent_Observable.ObservableModule.md#toreadonlyarrayasync)
- [withCurrentTime](concurrent_Observable.ObservableModule.md#withcurrenttime)
- [withLatestFrom](concurrent_Observable.ObservableModule.md#withlatestfrom)
- [zipLatest](concurrent_Observable.ObservableModule.md#ziplatest)

### Transform Methods

- [multicast](concurrent_Observable.ObservableModule.md#multicast)
- [share](concurrent_Observable.ObservableModule.md#share)

## Properties

### currentTime

• **currentTime**: [`RunnableLike`](concurrent.RunnableLike.md)<`number`\>

## Constructor Methods

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

## Other Methods

### animate

▸ **animate**<`T`\>(`configs`): [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[] |

#### Returns

[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

___

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, readonly `T`[]\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, readonly `T`[]\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[buffer](computations.PureComputationModule.md#buffer)

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`Error`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TH`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TH`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TH`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TH`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TH`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TI`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TI`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### computeDeferred

▸ **computeDeferred**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>)[] |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>)[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>)[] |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): <TObservable\>(`obs`: `TObservable`) => `TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

`fn`

▸ <`TObservable`\>(`obs`): `TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservable` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`T`, `TObservable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservable` |

##### Returns

`TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): <TObservable\>(`obs`: `TObservable`) => `TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>)[] |

#### Returns

`fn`

▸ <`TObservable`\>(`obs`): `TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservable` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`T`, `TObservable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservable` |

##### Returns

`TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ObserverLike`](concurrent.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`ArrayBuffer`, `string`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[decodeWithCharset](computations.PureComputationModule.md#decodewithcharset)

___

### defer

▸ **defer**<`T`\>(`f`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

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

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[distinctUntilChanged](computations.PureComputationModule.md#distinctuntilchanged)

___

### empty

▸ **empty**<`T`\>(`options?`): [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

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

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](utils.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](utils.DisposableLike.md)\>

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

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

▸ **fromAsyncIterable**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

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

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

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

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

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

▸ **fromValue**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

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

### isDeferred

▸ **isDeferred**<`T`\>(`obs`): obs is ObservableLike<T\> & Object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is ObservableLike<T\> & Object

___

### isPure

▸ **isPure**<`T`\>(`obs`): obs is ObservableLike<T\> & Object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is ObservableLike<T\> & Object

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is ObservableLike<T\> & Object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is ObservableLike<T\> & Object

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

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[keep](computations.PureComputationModule.md#keep)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[map](computations.PureComputationModule.md#map)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

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
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): <TObservableIn\>(`observableIn`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

`fn`

▸ <`TObservableIn`\>(`observableIn`): `TObservableIn` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

##### Type parameters

| Name |
| :------ |
| `TObservableIn` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observableIn` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

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

▸ **pairwise**<`T`\>(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[pairwise](computations.PureComputationModule.md#pairwise)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry?`): [`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry?` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`PureDeferredObservableOperator`](../modules/concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

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

[`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `TAcc`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `TAcc`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[scan](computations.PureComputationModule.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[skipFirst](computations.PureComputationModule.md#skipfirst)

___

### spring

▸ **spring**(`options?`): [`RunnableLike`](concurrent.RunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.damping?` | `number` |
| `options.precision?` | `number` |
| `options.stiffness?` | `number` |

#### Returns

[`RunnableLike`](concurrent.RunnableLike.md)<`number`\>

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

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](concurrent.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](concurrent.SchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

`fn`

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`T`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[takeFirst](computations.PureComputationModule.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableLike`](concurrent.RunnableLike.md)<`unknown`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

▸ **takeUntil**<`T`\>(`notifier`): [`DeferredObservableOperator`](../modules/concurrent_Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\> |

#### Returns

[`DeferredObservableOperator`](../modules/concurrent_Observable.md#deferredobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`MulticastObservableOperator`](../modules/concurrent_Observable.md#multicastobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> |

#### Returns

[`MulticastObservableOperator`](../modules/concurrent_Observable.md#multicastobservableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[takeWhile](computations.PureComputationModule.md#takewhile)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### throws

▸ **throws**<`T`\>(): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.raise` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, readonly `T`[]\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

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

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `T`\>

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

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableOperator`](../modules/concurrent_Observable.md#deferredobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableOperator`](../modules/concurrent_Observable.md#deferredobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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

[`RunnableLike`](concurrent.RunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TH`\> |

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TH`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TH`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TH`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TH`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TI`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TI`\> \| [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

## Transform Methods

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>, [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](concurrent.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](concurrent.SchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>, [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](utils.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](concurrent.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](concurrent.SchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>
