[Reactive-JS](../README.md) / Observable

# Module: Observable

## Table of contents

### Constructor Functions

- [combineLatest](Observable.md#combinelatest)
- [compute](Observable.md#compute)
- [defer](Observable.md#defer)
- [fromAsyncFactory](Observable.md#fromasyncfactory)
- [fromAsyncIterable](Observable.md#fromasynciterable)
- [merge](Observable.md#merge)
- [never](Observable.md#never)
- [throws](Observable.md#throws)
- [zip](Observable.md#zip)
- [zipLatest](Observable.md#ziplatest)

### Operator Functions

- [backpressureStrategy](Observable.md#backpressurestrategy)
- [buffer](Observable.md#buffer)
- [catchError](Observable.md#catcherror)
- [decodeWithCharset](Observable.md#decodewithcharset)
- [dispatchTo](Observable.md#dispatchto)
- [distinctUntilChanged](Observable.md#distinctuntilchanged)
- [encodeUtf8](Observable.md#encodeutf8)
- [enqueue](Observable.md#enqueue)
- [exhaust](Observable.md#exhaust)
- [exhaustMap](Observable.md#exhaustmap)
- [flatMapAsync](Observable.md#flatmapasync)
- [flatMapIterable](Observable.md#flatmapiterable)
- [forEach](Observable.md#foreach)
- [forkCombineLatest](Observable.md#forkcombinelatest)
- [forkMerge](Observable.md#forkmerge)
- [forkZip](Observable.md#forkzip)
- [forkZipLatest](Observable.md#forkziplatest)
- [identity](Observable.md#identity)
- [ignoreElements](Observable.md#ignoreelements)
- [keep](Observable.md#keep)
- [keepType](Observable.md#keeptype)
- [map](Observable.md#map)
- [mapTo](Observable.md#mapto)
- [mergeAll](Observable.md#mergeall)
- [mergeMap](Observable.md#mergemap)
- [mergeWith](Observable.md#mergewith)
- [onSubscribe](Observable.md#onsubscribe)
- [pairwise](Observable.md#pairwise)
- [pick](Observable.md#pick)
- [scan](Observable.md#scan)
- [scanLast](Observable.md#scanlast)
- [scanMany](Observable.md#scanmany)
- [skipFirst](Observable.md#skipfirst)
- [subscribeOn](Observable.md#subscribeon)
- [switchAll](Observable.md#switchall)
- [switchMap](Observable.md#switchmap)
- [takeFirst](Observable.md#takefirst)
- [takeLast](Observable.md#takelast)
- [takeUntil](Observable.md#takeuntil)
- [takeWhile](Observable.md#takewhile)
- [throttle](Observable.md#throttle)
- [throwIfEmpty](Observable.md#throwifempty)
- [timeout](Observable.md#timeout)
- [withCurrentTime](Observable.md#withcurrenttime)
- [withLatestFrom](Observable.md#withlatestfrom)
- [zipWith](Observable.md#zipwith)
- [zipWithLatestFrom](Observable.md#zipwithlatestfrom)

### Other Functions

- [subscribe](Observable.md#subscribe)

### Transform Functions

- [firstAsync](Observable.md#firstasync)
- [lastAsync](Observable.md#lastasync)
- [toEventSource](Observable.md#toeventsource)
- [toObservable](Observable.md#toobservable)

## Constructor Functions

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`abortSignal`: `AbortSignal`) => `Promise`<`T`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

___

### never

▸ **never**<`T`\>(): [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.raise?` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

Combines multiple sources to create a Container whose values are calculated from the values,
in order, of each of its input sources.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.duration?` | `number` \| [`Function1`](functions.md#function1)<`T`, [`ObservableContainer`](../interfaces/types.ObservableContainer-1.md)\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Container which catches errors produced by the source and either continues with
the Container returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Containers.Operator that emits all items emitted by the source that
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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `string`, `Uint8Array`\>

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `string`, `Uint8Array`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](functions.md#function2)<`TA`, `AbortSignal`, `Promise`<`TB`\>\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Containers.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `T`\>

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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](types.md#disposableorteardown)\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`[`TKey`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TAcc`\>

Returns a Container that applies an accumulator function over the source,
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

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TAcc`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TAcc`\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Container that skips the first count items emitted by the source.

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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **subscribeOn**<`T_1`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T_1`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T_1`\>\>

#### Type parameters

| Name |
| :------ |
| `T_1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T_1`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T_1`\>\>

▸ **subscribeOn**<`T_2`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T_2`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T_2`\>\>

#### Type parameters

| Name |
| :------ |
| `T_2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T_2`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T_2`\>\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Container that only emits the first `count` values emitted by the source.

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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Container that only emits the last `count` items emitted by the source.

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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Container which emits values emitted by the source as long
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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

Returns a Container that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`number`, `T`, `TOut`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TI`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](types.Containers.md#operator)<[`ObservableContainer`](../interfaces/types.ObservableContainer-1.md), `TA`, `T`\>

___

## Other Functions

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

## Transform Functions

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>
