[Reactive-JS](../README.md) / core/Observable

# Module: core/Observable

## Table of contents

### Constructor Functions

- [animate](core_Observable.md#animate)
- [combineLatest](core_Observable.md#combinelatest)
- [compute](core_Observable.md#compute)
- [concat](core_Observable.md#concat)
- [create](core_Observable.md#create)
- [currentTime](core_Observable.md#currenttime)
- [defer](core_Observable.md#defer)
- [empty](core_Observable.md#empty)
- [fromAsyncFactory](core_Observable.md#fromasyncfactory)
- [fromAsyncIterable](core_Observable.md#fromasynciterable)
- [fromEnumeratorFactory](core_Observable.md#fromenumeratorfactory)
- [fromFactory](core_Observable.md#fromfactory)
- [fromIterable](core_Observable.md#fromiterable)
- [fromOptional](core_Observable.md#fromoptional)
- [fromReadonlyArray](core_Observable.md#fromreadonlyarray)
- [generate](core_Observable.md#generate)
- [merge](core_Observable.md#merge)
- [never](core_Observable.md#never)
- [throws](core_Observable.md#throws)
- [zip](core_Observable.md#zip)
- [zipLatest](core_Observable.md#ziplatest)

### Operator Functions

- [backpressureStrategy](core_Observable.md#backpressurestrategy)
- [buffer](core_Observable.md#buffer)
- [catchError](core_Observable.md#catcherror)
- [concatAll](core_Observable.md#concatall)
- [concatMap](core_Observable.md#concatmap)
- [concatWith](core_Observable.md#concatwith)
- [decodeWithCharset](core_Observable.md#decodewithcharset)
- [dispatchTo](core_Observable.md#dispatchto)
- [distinctUntilChanged](core_Observable.md#distinctuntilchanged)
- [encodeUtf8](core_Observable.md#encodeutf8)
- [endWith](core_Observable.md#endwith)
- [enqueue](core_Observable.md#enqueue)
- [exhaust](core_Observable.md#exhaust)
- [exhaustMap](core_Observable.md#exhaustmap)
- [flatMapAsync](core_Observable.md#flatmapasync)
- [flatMapIterable](core_Observable.md#flatmapiterable)
- [forEach](core_Observable.md#foreach)
- [forkCombineLatest](core_Observable.md#forkcombinelatest)
- [forkConcat](core_Observable.md#forkconcat)
- [forkMerge](core_Observable.md#forkmerge)
- [forkZip](core_Observable.md#forkzip)
- [forkZipLatest](core_Observable.md#forkziplatest)
- [identity](core_Observable.md#identity)
- [ignoreElements](core_Observable.md#ignoreelements)
- [keep](core_Observable.md#keep)
- [keepType](core_Observable.md#keeptype)
- [map](core_Observable.md#map)
- [mapTo](core_Observable.md#mapto)
- [mergeAll](core_Observable.md#mergeall)
- [mergeMap](core_Observable.md#mergemap)
- [mergeWith](core_Observable.md#mergewith)
- [onSubscribe](core_Observable.md#onsubscribe)
- [pairwise](core_Observable.md#pairwise)
- [pick](core_Observable.md#pick)
- [repeat](core_Observable.md#repeat)
- [retry](core_Observable.md#retry)
- [scan](core_Observable.md#scan)
- [scanLast](core_Observable.md#scanlast)
- [scanMany](core_Observable.md#scanmany)
- [skipFirst](core_Observable.md#skipfirst)
- [startWith](core_Observable.md#startwith)
- [subscribeOn](core_Observable.md#subscribeon)
- [switchAll](core_Observable.md#switchall)
- [switchMap](core_Observable.md#switchmap)
- [takeFirst](core_Observable.md#takefirst)
- [takeLast](core_Observable.md#takelast)
- [takeUntil](core_Observable.md#takeuntil)
- [takeWhile](core_Observable.md#takewhile)
- [throttle](core_Observable.md#throttle)
- [throwIfEmpty](core_Observable.md#throwifempty)
- [timeout](core_Observable.md#timeout)
- [withCurrentTime](core_Observable.md#withcurrenttime)
- [withLatestFrom](core_Observable.md#withlatestfrom)
- [zipWith](core_Observable.md#zipwith)
- [zipWithLatestFrom](core_Observable.md#zipwithlatestfrom)

### Other Functions

- [subscribe](core_Observable.md#subscribe)

### Transform Functions

- [firstAsync](core_Observable.md#firstasync)
- [lastAsync](core_Observable.md#lastasync)
- [multicast](core_Observable.md#multicast)
- [share](core_Observable.md#share)
- [toEnumerable](core_Observable.md#toenumerable)
- [toEventSource](core_Observable.md#toeventsource)
- [toObservable](core_Observable.md#toobservable)
- [toRunnable](core_Observable.md#torunnable)

## Constructor Functions

### animate

▸ **animate**<`T`\>(`configs`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`AnimationConfig`](core.ReactiveContainer.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](core.ReactiveContainer.md#animationconfig)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### create

▸ **create**<`T`\>(`f`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/core.ObserverLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### currentTime

▸ **currentTime**(`options?`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`number`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

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

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`abortSignal`: `AbortSignal`) => `Promise`<`T`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### never

▸ **never**<`T`\>(): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

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

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.duration?` | `number` \| [`Function1`](functions.md#function1)<`T`, [`ObservableContainer`](../interfaces/core.ObservableContainer.md)\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

Returns a Container.Operator that emits all items emitted by the source that
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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `string`, `Uint8Array`\>

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

Returns a Container.Operator that applies the side effect function to each
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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TH`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TH`\> |
| `i` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TI`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TH`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TH`\> |
| `i` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TI`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TH`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TH`\> |
| `i` | [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TI`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](core.md#disposableorteardown)\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`[`TKey`]\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

Returns a Container that mirrors the source, repeating it whenever the predicate returns true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

Returns a Container that mirrors the source, repeating it `count` times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TAcc`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TAcc`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TAcc`\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): (`observable`: [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>) => [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/core.SchedulerLike.md) & [`DisposableLike`](../interfaces/core.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

`fn`

▸ (`observable`): [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\> |

##### Returns

[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TOut`\>

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

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TH`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TI`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/core.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer.md), `TA`, `T`\>

___

## Other Functions

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

___

## Transform Functions

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

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
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>
