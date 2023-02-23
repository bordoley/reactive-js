[Reactive-JS](../README.md) / rx/Observable

# Module: rx/Observable

## Table of contents

### AsyncEffect Functions

- [\_\_await](rx_Observable.md#__await)
- [\_\_currentScheduler](rx_Observable.md#__currentscheduler)
- [\_\_do](rx_Observable.md#__do)
- [\_\_memo](rx_Observable.md#__memo)
- [\_\_observe](rx_Observable.md#__observe)
- [\_\_state](rx_Observable.md#__state)
- [\_\_stream](rx_Observable.md#__stream)
- [\_\_using](rx_Observable.md#__using)

### Constructor Functions

- [combineLatest](rx_Observable.md#combinelatest)
- [compute](rx_Observable.md#compute)
- [concat](rx_Observable.md#concat)
- [defer](rx_Observable.md#defer)
- [empty](rx_Observable.md#empty)
- [fromEnumerable](rx_Observable.md#fromenumerable)
- [fromFlowable](rx_Observable.md#fromflowable)
- [fromIterable](rx_Observable.md#fromiterable)
- [fromReadonlyArray](rx_Observable.md#fromreadonlyarray)
- [fromSequence](rx_Observable.md#fromsequence)
- [generate](rx_Observable.md#generate)
- [merge](rx_Observable.md#merge)
- [never](rx_Observable.md#never)
- [throws](rx_Observable.md#throws)
- [zip](rx_Observable.md#zip)
- [zipLatest](rx_Observable.md#ziplatest)

### Operator Functions

- [catchError](rx_Observable.md#catcherror)
- [concatAll](rx_Observable.md#concatall)
- [concatMap](rx_Observable.md#concatmap)
- [concatWith](rx_Observable.md#concatwith)
- [contains](rx_Observable.md#contains)
- [decodeWithCharset](rx_Observable.md#decodewithcharset)
- [distinctUntilChanged](rx_Observable.md#distinctuntilchanged)
- [encodeUtf8](rx_Observable.md#encodeutf8)
- [endWith](rx_Observable.md#endwith)
- [everySatisfy](rx_Observable.md#everysatisfy)
- [exhaust](rx_Observable.md#exhaust)
- [exhaustMap](rx_Observable.md#exhaustmap)
- [flatMapIterable](rx_Observable.md#flatmapiterable)
- [forEach](rx_Observable.md#foreach)
- [forkCombineLatest](rx_Observable.md#forkcombinelatest)
- [forkConcat](rx_Observable.md#forkconcat)
- [forkMerge](rx_Observable.md#forkmerge)
- [forkZip](rx_Observable.md#forkzip)
- [forkZipLatest](rx_Observable.md#forkziplatest)
- [ignoreElements](rx_Observable.md#ignoreelements)
- [keep](rx_Observable.md#keep)
- [keepType](rx_Observable.md#keeptype)
- [map](rx_Observable.md#map)
- [mapTo](rx_Observable.md#mapto)
- [mergeAll](rx_Observable.md#mergeall)
- [mergeMap](rx_Observable.md#mergemap)
- [mergeWith](rx_Observable.md#mergewith)
- [pairwise](rx_Observable.md#pairwise)
- [reduce](rx_Observable.md#reduce)
- [repeat](rx_Observable.md#repeat)
- [retry](rx_Observable.md#retry)
- [scan](rx_Observable.md#scan)
- [scanAsync](rx_Observable.md#scanasync)
- [skipFirst](rx_Observable.md#skipfirst)
- [someSatisfy](rx_Observable.md#somesatisfy)
- [startWith](rx_Observable.md#startwith)
- [switchAll](rx_Observable.md#switchall)
- [switchMap](rx_Observable.md#switchmap)
- [takeFirst](rx_Observable.md#takefirst)
- [takeLast](rx_Observable.md#takelast)
- [takeUntil](rx_Observable.md#takeuntil)
- [takeWhile](rx_Observable.md#takewhile)
- [throttle](rx_Observable.md#throttle)
- [throwIfEmpty](rx_Observable.md#throwifempty)
- [timeout](rx_Observable.md#timeout)
- [withLatestFrom](rx_Observable.md#withlatestfrom)
- [zipWith](rx_Observable.md#zipwith)
- [zipWithLatestFrom](rx_Observable.md#zipwithlatestfrom)

### Other Functions

- [async](rx_Observable.md#async)
- [buffer](rx_Observable.md#buffer)
- [create](rx_Observable.md#create)
- [isEnumerable](rx_Observable.md#isenumerable)
- [isRunnable](rx_Observable.md#isrunnable)
- [mapAsync](rx_Observable.md#mapasync)
- [multicast](rx_Observable.md#multicast)
- [onSubscribe](rx_Observable.md#onsubscribe)
- [share](rx_Observable.md#share)
- [subscribe](rx_Observable.md#subscribe)
- [subscribeOn](rx_Observable.md#subscribeon)
- [toPromise](rx_Observable.md#topromise)

## AsyncEffect Functions

### \_\_await

▸ **__await**<`T`\>(`observable`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |

#### Returns

`T`

___

### \_\_currentScheduler

▸ **__currentScheduler**(): [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

___

### \_\_do

▸ **__do**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

`void`

▸ **__do**<`TA`\>(`fn`, `a`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect1`](functions.md#sideeffect1)<`TA`\> |
| `a` | `TA` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`\>(`fn`, `a`, `b`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect2`](functions.md#sideeffect2)<`TA`, `TB`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`\>(`fn`, `a`, `b`, `c`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect3`](functions.md#sideeffect3)<`TA`, `TB`, `TC`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`\>(`fn`, `a`, `b`, `c`, `d`): `void`

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
| `fn` | [`SideEffect4`](functions.md#sideeffect4)<`TA`, `TB`, `TC`, `TD`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `void`

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
| `fn` | [`SideEffect5`](functions.md#sideeffect5)<`TA`, `TB`, `TC`, `TD`, `TE`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `void`

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
| `fn` | [`SideEffect6`](functions.md#sideeffect6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`void`

___

### \_\_memo

▸ **__memo**<`T`\>(`fn`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

`T`

▸ **__memo**<`TA`, `T`\>(`fn`, `a`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function1`](functions.md#function1)<`TA`, `T`\> |
| `a` | `TA` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `T`\>(`fn`, `a`, `b`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `T`\>(`fn`, `a`, `b`, `c`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `T`\>(`fn`, `a`, `b`, `c`, `d`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function5`](functions.md#function5)<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function6`](functions.md#function6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`T`

___

### \_\_observe

▸ **__observe**<`T`\>(`observable`): [`Optional`](functions.md#optional)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

___

### \_\_state

▸ **__state**<`T`\>(`initialState`, `options?`): [`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | () => `T` |
| `options?` | `Object` |
| `options.equality?` | [`Optional`](functions.md#optional)<[`Equality`](functions.md#equality)<`T`\>\> |

#### Returns

[`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>

___

### \_\_stream

▸ **__stream**<`TReq`, `T`, `TStream`\>(`streamable`, `«destructured»?`): `TStream`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`, `TStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, `TStream`\> |
| `«destructured»` | `Object` |
| › `replay?` | `number` |
| › `scheduler?` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

`TStream`

___

### \_\_using

▸ **__using**<`T`\>(`fn`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

`T`

▸ **__using**<`TA`, `T`\>(`fn`, `a`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function1`](functions.md#function1)<`TA`, `T`\> |
| `a` | `TA` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `T`\>(`fn`, `a`, `b`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `T`\>(`fn`, `a`, `b`, `c`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `T`\>(`fn`, `a`, `b`, `c`, `d`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function5`](functions.md#function5)<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `TF` | `TF` |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function6`](functions.md#function6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`T`

___

## Constructor Functions

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`]\>

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

### compute

▸ **compute**<`T`\>(`factory`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

Returns a ContainerLike which emits all values from each source sequentially.

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

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

### empty

▸ **empty**<`T`\>(`options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `delay?`: `number` ; `delayStart?`: `boolean`  } & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

Generates a ContainerLike from a generator function
that is applied to an accumulator value between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |
| `options.delayStart?` | `boolean` | - |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

### never

▸ **never**<`T`\>(`options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

Returns a StatefulContainerLike instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `delay?`: `number` ; `delayStart?`: `boolean`  } & { `raise?`: [`Factory`](functions.md#factory)<`unknown`\>  } |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`]\>

Combines multiple sources to create a ContainerLike whose values are calculated from the values,
in order, of each of its input sources.

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

Returns a container that zips the latest values from
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

## Operator Functions

### catchError

▸ **catchError**<`T`\>(`onError`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a StatefulContainerLike which catches errors produced by the source and either continues with
the StatefulContainerLike returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> | a function that takes source error and either returns a StatefulContainerLike to continue with or void if the error should be propagated. |
| `options?` | `undefined` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order ContainerLike into a first-order
ContainerLike by concatenating the inner sources in order.

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

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerOperator that emits all items emitted by the source that
are distinct by comparison from the previous item.

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

### encodeUtf8

▸ **encodeUtf8**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `string`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### exhaust

▸ **exhaust**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

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

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`IterableLike`](../interfaces/containers.IterableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |
| `options?` | `undefined` |

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

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TIn`, `TOut`\>

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

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

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

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

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

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

### ignoreElements

▸ **ignoreElements**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

Returns a ContainerOperator that applies the `mapper` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

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

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that mirrors the source, repeating it whenever the predicate returns true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`count`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that mirrors the source, repeating it `count` times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

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

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

Returns a ContainerLike that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> | The initial accumulation value. |
| `options?` | `undefined` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that skips the first count items emitted by the source.

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

▸ **someSatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that only emits the first `count` values emitted by the source.

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

Returns a ContainerLike that only emits the last `count` items emitted by the source.

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

▸ **takeUntil**<`T`\>(`notifier`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

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
| `options.mode?` | [`ThrottleMode`](rx.md#throttlemode) | - |

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
| `options.mode?` | [`ThrottleMode`](rx.md#throttlemode) | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns a StatefulContainerLike that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |
| `options?` | `undefined` | - |

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

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

___

## Other Functions

### async

▸ **async**<`T`\>(`computation`, `«destructured»?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `«destructured»` | `Object` |
| › `mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

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

### isEnumerable

▸ **isEnumerable**(`v`): v is EnumerableObservableLike<unknown\>

A type guard function that performs a runtime check
guaranteeing `v` is of type `TB`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

v is EnumerableObservableLike<unknown\>

`true` if v is an instance of type `TB`, otherwise false.

___

### isRunnable

▸ **isRunnable**(`v`): v is RunnableObservableLike<unknown\>

A type guard function that performs a runtime check
guaranteeing `v` is of type `TB`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

v is RunnableObservableLike<unknown\>

`true` if v is an instance of type `TB`, otherwise false.

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

### toPromise

▸ **toPromise**<`T`\>(`scheduler`): (`observable`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>) => `PromiseLike`<`T`\>

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

▸ (`observable`): `PromiseLike`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |

##### Returns

`PromiseLike`<`T`\>
