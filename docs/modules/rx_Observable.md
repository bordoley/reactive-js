[Reactive-JS](../README.md) / rx/Observable

# Module: rx/Observable

## Table of contents

### Constructor Functions

- [animate](rx_Observable.md#animate)
- [combineLatest](rx_Observable.md#combinelatest)
- [compute](rx_Observable.md#compute)
- [concat](rx_Observable.md#concat)
- [create](rx_Observable.md#create)
- [currentTime](rx_Observable.md#currenttime)
- [defer](rx_Observable.md#defer)
- [empty](rx_Observable.md#empty)
- [fromAsyncFactory](rx_Observable.md#fromasyncfactory)
- [fromAsyncIterable](rx_Observable.md#fromasynciterable)
- [fromEnumeratorFactory](rx_Observable.md#fromenumeratorfactory)
- [fromFactory](rx_Observable.md#fromfactory)
- [fromIterable](rx_Observable.md#fromiterable)
- [fromOptional](rx_Observable.md#fromoptional)
- [fromReadonlyArray](rx_Observable.md#fromreadonlyarray)
- [generate](rx_Observable.md#generate)
- [merge](rx_Observable.md#merge)
- [never](rx_Observable.md#never)
- [throws](rx_Observable.md#throws)
- [zip](rx_Observable.md#zip)
- [zipLatest](rx_Observable.md#ziplatest)

### Operator Functions

- [backpressureStrategy](rx_Observable.md#backpressurestrategy)
- [buffer](rx_Observable.md#buffer)
- [catchError](rx_Observable.md#catcherror)
- [concatAll](rx_Observable.md#concatall)
- [concatMap](rx_Observable.md#concatmap)
- [concatWith](rx_Observable.md#concatwith)
- [decodeWithCharset](rx_Observable.md#decodewithcharset)
- [dispatchTo](rx_Observable.md#dispatchto)
- [distinctUntilChanged](rx_Observable.md#distinctuntilchanged)
- [encodeUtf8](rx_Observable.md#encodeutf8)
- [endWith](rx_Observable.md#endwith)
- [enqueue](rx_Observable.md#enqueue)
- [exhaust](rx_Observable.md#exhaust)
- [exhaustMap](rx_Observable.md#exhaustmap)
- [flatMapAsync](rx_Observable.md#flatmapasync)
- [flatMapIterable](rx_Observable.md#flatmapiterable)
- [forEach](rx_Observable.md#foreach)
- [forkCombineLatest](rx_Observable.md#forkcombinelatest)
- [forkConcat](rx_Observable.md#forkconcat)
- [forkMerge](rx_Observable.md#forkmerge)
- [forkZip](rx_Observable.md#forkzip)
- [forkZipLatest](rx_Observable.md#forkziplatest)
- [identity](rx_Observable.md#identity)
- [ignoreElements](rx_Observable.md#ignoreelements)
- [keep](rx_Observable.md#keep)
- [keepType](rx_Observable.md#keeptype)
- [map](rx_Observable.md#map)
- [mapTo](rx_Observable.md#mapto)
- [mergeAll](rx_Observable.md#mergeall)
- [mergeMap](rx_Observable.md#mergemap)
- [mergeWith](rx_Observable.md#mergewith)
- [onSubscribe](rx_Observable.md#onsubscribe)
- [pairwise](rx_Observable.md#pairwise)
- [pick](rx_Observable.md#pick)
- [repeat](rx_Observable.md#repeat)
- [retry](rx_Observable.md#retry)
- [scan](rx_Observable.md#scan)
- [scanLast](rx_Observable.md#scanlast)
- [scanMany](rx_Observable.md#scanmany)
- [skipFirst](rx_Observable.md#skipfirst)
- [startWith](rx_Observable.md#startwith)
- [subscribeOn](rx_Observable.md#subscribeon)
- [switchAll](rx_Observable.md#switchall)
- [switchMap](rx_Observable.md#switchmap)
- [takeFirst](rx_Observable.md#takefirst)
- [takeLast](rx_Observable.md#takelast)
- [takeUntil](rx_Observable.md#takeuntil)
- [takeWhile](rx_Observable.md#takewhile)
- [throttle](rx_Observable.md#throttle)
- [throwIfEmpty](rx_Observable.md#throwifempty)
- [timeout](rx_Observable.md#timeout)
- [withCurrentTime](rx_Observable.md#withcurrenttime)
- [withLatestFrom](rx_Observable.md#withlatestfrom)
- [zipWith](rx_Observable.md#zipwith)
- [zipWithLatestFrom](rx_Observable.md#zipwithlatestfrom)

### Other Functions

- [subscribe](rx_Observable.md#subscribe)

### Transform Functions

- [firstAsync](rx_Observable.md#firstasync)
- [lastAsync](rx_Observable.md#lastasync)
- [multicast](rx_Observable.md#multicast)
- [share](rx_Observable.md#share)
- [toEnumerable](rx_Observable.md#toenumerable)
- [toEventSource](rx_Observable.md#toeventsource)
- [toObservable](rx_Observable.md#toobservable)
- [toRunnable](rx_Observable.md#torunnable)

## Constructor Functions

### animate

▸ **animate**<`T`\>(`configs`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

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

▸ **compute**<`T`\>(`computation`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

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

### currentTime

▸ **currentTime**(`options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`number`\>

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

### empty

▸ **empty**<`T`\>(`options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

Return an Container that emits no items.

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

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(`f`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`abortSignal`: `AbortSignal`) => `Promise`<`T`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

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

▸ **never**<`T`\>(): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

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
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.raise?` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<readonly [`TA`, `TB`]\>

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

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.duration?` | `number` \| [`Function1`](functions.md#function1)<`T`, [`ObservableContainer`](../interfaces/rx.ObservableContainer.md)\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/util.DispatcherLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `string`, `Uint8Array`\>

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/util.QueueableLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TH`\> |
| `i` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TH`\> |
| `i` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TH`\> |
| `i` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](util.md#disposableorteardown)\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TAcc`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TAcc`\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): (`observable`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/util.SchedulerLike.md) & [`DisposableLike`](../interfaces/util.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

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

▸ **switchAll**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TOut`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TA`, `T`\>

___

## Other Functions

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

## Transform Functions

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/rx.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/rx.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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
| `scheduler` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>
