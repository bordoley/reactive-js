[Reactive-JS](../README.md) / [Observable](../modules/Observable.md) / ObservableModule

# Interface: ObservableModule

[Observable](../modules/Observable.md).ObservableModule

## Table of contents

### Constructor Methods

- [animate](Observable.ObservableModule.md#animate)
- [combineLatest](Observable.ObservableModule.md#combinelatest)
- [compute](Observable.ObservableModule.md#compute)
- [concat](Observable.ObservableModule.md#concat)

### Operator Methods

- [backpressureStrategy](Observable.ObservableModule.md#backpressurestrategy)
- [buffer](Observable.ObservableModule.md#buffer)
- [catchError](Observable.ObservableModule.md#catcherror)
- [flatMapIterable](Observable.ObservableModule.md#flatmapiterable)
- [repeat](Observable.ObservableModule.md#repeat)
- [retry](Observable.ObservableModule.md#retry)

### Other Methods

- [concatAll](Observable.ObservableModule.md#concatall)
- [concatMany](Observable.ObservableModule.md#concatmany)
- [concatMap](Observable.ObservableModule.md#concatmap)
- [concatWith](Observable.ObservableModule.md#concatwith)
- [contains](Observable.ObservableModule.md#contains)
- [create](Observable.ObservableModule.md#create)
- [createPublisher](Observable.ObservableModule.md#createpublisher)
- [createRefCountedPublisher](Observable.ObservableModule.md#createrefcountedpublisher)
- [currentTime](Observable.ObservableModule.md#currenttime)
- [decodeWithCharset](Observable.ObservableModule.md#decodewithcharset)
- [defer](Observable.ObservableModule.md#defer)
- [dispatchTo](Observable.ObservableModule.md#dispatchto)
- [distinctUntilChanged](Observable.ObservableModule.md#distinctuntilchanged)
- [empty](Observable.ObservableModule.md#empty)
- [encodeUtf8](Observable.ObservableModule.md#encodeutf8)
- [endWith](Observable.ObservableModule.md#endwith)
- [enqueue](Observable.ObservableModule.md#enqueue)
- [enumerate](Observable.ObservableModule.md#enumerate)
- [everySatisfy](Observable.ObservableModule.md#everysatisfy)
- [exhaust](Observable.ObservableModule.md#exhaust)
- [exhaustMap](Observable.ObservableModule.md#exhaustmap)
- [first](Observable.ObservableModule.md#first)
- [firstAsync](Observable.ObservableModule.md#firstasync)
- [flatMapAsync](Observable.ObservableModule.md#flatmapasync)
- [flow](Observable.ObservableModule.md#flow)
- [forEach](Observable.ObservableModule.md#foreach)
- [forkMerge](Observable.ObservableModule.md#forkmerge)
- [fromAsyncFactory](Observable.ObservableModule.md#fromasyncfactory)
- [fromFactory](Observable.ObservableModule.md#fromfactory)
- [fromIterable](Observable.ObservableModule.md#fromiterable)
- [fromOptional](Observable.ObservableModule.md#fromoptional)
- [fromReadonlyArray](Observable.ObservableModule.md#fromreadonlyarray)
- [fromValue](Observable.ObservableModule.md#fromvalue)
- [generate](Observable.ObservableModule.md#generate)
- [ignoreElements](Observable.ObservableModule.md#ignoreelements)
- [isDeferredObservable](Observable.ObservableModule.md#isdeferredobservable)
- [isEnumerable](Observable.ObservableModule.md#isenumerable)
- [isMulticastObservable](Observable.ObservableModule.md#ismulticastobservable)
- [isPure](Observable.ObservableModule.md#ispure)
- [isRunnable](Observable.ObservableModule.md#isrunnable)
- [keep](Observable.ObservableModule.md#keep)
- [keepType](Observable.ObservableModule.md#keeptype)
- [last](Observable.ObservableModule.md#last)
- [lastAsync](Observable.ObservableModule.md#lastasync)
- [map](Observable.ObservableModule.md#map)
- [mapTo](Observable.ObservableModule.md#mapto)
- [merge](Observable.ObservableModule.md#merge)
- [mergeAll](Observable.ObservableModule.md#mergeall)
- [mergeMany](Observable.ObservableModule.md#mergemany)
- [mergeMap](Observable.ObservableModule.md#mergemap)
- [mergeWith](Observable.ObservableModule.md#mergewith)
- [never](Observable.ObservableModule.md#never)
- [noneSatisfy](Observable.ObservableModule.md#nonesatisfy)
- [onSubscribe](Observable.ObservableModule.md#onsubscribe)
- [pairwise](Observable.ObservableModule.md#pairwise)
- [pick](Observable.ObservableModule.md#pick)
- [reduce](Observable.ObservableModule.md#reduce)
- [run](Observable.ObservableModule.md#run)
- [scan](Observable.ObservableModule.md#scan)
- [skipFirst](Observable.ObservableModule.md#skipfirst)
- [someSatisfy](Observable.ObservableModule.md#somesatisfy)
- [startWith](Observable.ObservableModule.md#startwith)
- [subscribe](Observable.ObservableModule.md#subscribe)
- [subscribeOn](Observable.ObservableModule.md#subscribeon)
- [switchAll](Observable.ObservableModule.md#switchall)
- [switchMap](Observable.ObservableModule.md#switchmap)
- [takeFirst](Observable.ObservableModule.md#takefirst)
- [takeLast](Observable.ObservableModule.md#takelast)
- [takeUntil](Observable.ObservableModule.md#takeuntil)
- [takeWhile](Observable.ObservableModule.md#takewhile)
- [throttle](Observable.ObservableModule.md#throttle)
- [throwIfEmpty](Observable.ObservableModule.md#throwifempty)
- [throws](Observable.ObservableModule.md#throws)
- [toEventSource](Observable.ObservableModule.md#toeventsource)
- [toReadonlyArray](Observable.ObservableModule.md#toreadonlyarray)
- [toReadonlyArrayAsync](Observable.ObservableModule.md#toreadonlyarrayasync)
- [withCurrentTime](Observable.ObservableModule.md#withcurrenttime)
- [withLatestFrom](Observable.ObservableModule.md#withlatestfrom)
- [zip](Observable.ObservableModule.md#zip)
- [zipLatest](Observable.ObservableModule.md#ziplatest)
- [zipWith](Observable.ObservableModule.md#zipwith)

### Transform Methods

- [multicast](Observable.ObservableModule.md#multicast)
- [share](Observable.ObservableModule.md#share)

## Constructor Methods

### animate

▸ **animate**<`T`\>(`configs`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`Animation`](../modules/Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/Observable.md#animation)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](types.PureObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](types.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](types.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\> |
| `snd` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\>[] |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> |
| `snd` | [`PureObservableLike`](types.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](types.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<`T`\>

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

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

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, readonly `T`[]\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`Error`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

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

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`DeferredObservableOperator`](../modules/Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`DeferredObservableOperator`](../modules/Observable.md#deferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`DeferredObservableOperator`](../modules/Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`DeferredObservableOperator`](../modules/Observable.md#deferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`DeferredObservableOperator`](../modules/Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableOperator`](../modules/Observable.md#deferredobservableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`DeferredObservableOperator`](../modules/Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`DeferredObservableOperator`](../modules/Observable.md#deferredobservableoperator)<`T`, `T`\>

___

## Other Methods

### concatAll

▸ **concatAll**<`T`\>(): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\>[] |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>] |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\>\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\>[] |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

___

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `boolean`\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ObserverLike`](types.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

___

### createPublisher

▸ **createPublisher**<`T`\>(`options?`): [`PublisherLike`](types.PublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`PublisherLike`](types.PublisherLike.md)<`T`\>

___

### createRefCountedPublisher

▸ **createRefCountedPublisher**<`T`\>(`options?`): [`PublisherLike`](types.PublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`PublisherLike`](types.PublisherLike.md)<`T`\>

___

### currentTime

▸ **currentTime**(`options?`): [`RunnableLike`](types.RunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`number`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`ObservableLike`](types.ObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **empty**<`T`\>(`options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`string`, `Uint8Array`\>

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `boolean`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\>\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

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

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### forkMerge

▸ **forkMerge**<`TOut`, `TObservableIn`, `TObservableOut`\>(`fst`, `snd`, `...tail`): `TObservableIn` extends [`PureObservableLike`](types.PureObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`PureObservableLike`](types.PureObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOut` | `TOut` |
| `TObservableIn` | extends [`ObservableLike`](types.ObservableLike.md)<`unknown`, `TObservableIn`\> |
| `TObservableOut` | extends [`ObservableLike`](types.ObservableLike.md)<`TOut`, `TObservableOut`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, `TObservableOut`\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, `TObservableOut`\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, `TObservableOut`\>[] |

#### Returns

`TObservableIn` extends [`PureObservableLike`](types.PureObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`PureObservableLike`](types.PureObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromFactory**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<`T`\>\>

▸ **fromIterable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromOptional**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.start` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count?` | `number` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromValue**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`unknown`, `T`\>

___

### isDeferredObservable

▸ **isDeferredObservable**<`T`\>(`obs`): obs is DeferredObservableBaseLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

#### Returns

obs is DeferredObservableBaseLike<T\>

___

### isEnumerable

▸ **isEnumerable**<`T`\>(`obs`): obs is EnumerableBaseLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

#### Returns

obs is EnumerableBaseLike<T\>

___

### isMulticastObservable

▸ **isMulticastObservable**<`T`\>(`obs`): obs is MulticastObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

#### Returns

obs is MulticastObservableLike<T\>

___

### isPure

▸ **isPure**<`T`\>(`obs`): obs is PureObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

#### Returns

obs is PureObservableLike<T\>

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is RunnableBaseLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableBaseLike<T\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureObservableLike`](types.PureObservableLike.md)<`T`\> |
| `snd` | [`PureObservableLike`](types.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](types.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureObservableLike`](types.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<`T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\> |
| `...tail` | readonly [`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>[] |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureObservableLike`](types.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](types.PureObservableLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

___

### never

▸ **never**<`T`\>(): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `boolean`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`DisposableLike`](types.DisposableLike.md)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](../modules/functions.md#sideeffect) |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKey`]\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `TAcc`\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>\>

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

[`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `TAcc`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, `boolean`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](types.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\>\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableLike`](types.RunnableLike.md)<`unknown`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`unknown`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`MulticastObservableBoundedPureObservableOperator`](../modules/Observable.md#multicastobservableboundedpureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`MulticastObservableLike`](types.MulticastObservableLike.md)<`unknown`\> |

#### Returns

[`MulticastObservableBoundedPureObservableOperator`](../modules/Observable.md#multicastobservableboundedpureobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](types.ObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

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

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### throws

▸ **throws**<`T`\>(): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>, readonly `T`[]\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

▸ **toReadonlyArrayAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

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

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`, `TOther`\>(`other`, `selector`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `T` | `T` |
| `TOther` | extends [`ObservableLike`](types.ObservableLike.md)<`TB`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TE`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TF`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TF`\> |
| `g` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TG`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TF`\> |
| `g` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TG`\> |
| `h` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TH`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TF`\> |
| `g` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TG`\> |
| `h` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TH`\> |
| `i` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TI`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TE`\> |
| `f` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TE`\> |
| `f` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TF`\> |
| `g` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TE`\> |
| `f` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TF`\> |
| `g` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TG`\> |
| `h` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TE`\> |
| `f` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TF`\> |
| `g` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TG`\> |
| `h` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TH`\> |
| `i` | [`RunnableBaseLike`](types.RunnableBaseLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TE`\> |
| `f` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TE`\> |
| `f` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TF`\> |
| `g` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TE`\> |
| `f` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TF`\> |
| `g` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TG`\> |
| `h` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TE`\> |
| `f` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TF`\> |
| `g` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TG`\> |
| `h` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TH`\> |
| `i` | [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](types.PureObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](types.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](types.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](types.PureObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PureObservableLike`](types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](types.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](types.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TE`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TF`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TF`\> |
| `g` | [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`TG`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](../modules/Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

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
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

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
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

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
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

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
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

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
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](types.PureObservableLike.md)<`TH`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

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
| `b` | [`PureObservableLike`](types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](types.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](types.PureObservableLike.md)<`TI`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureObservableLike`](types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

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
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

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
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

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
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

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
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

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
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

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
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](types.ObservableLike.md)<`TI`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`TA`\>, [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

___

## Transform Methods

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableWithSideEffectsLike`](types.ObservableWithSideEffectsLike.md)<`T`\>, [`ReplayObservableLike`](types.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](types.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableWithSideEffectsLike`](types.ObservableWithSideEffectsLike.md)<`T`\>, [`ReplayObservableLike`](types.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableWithSideEffectsLike`](types.ObservableWithSideEffectsLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](types.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableWithSideEffectsLike`](types.ObservableWithSideEffectsLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>
