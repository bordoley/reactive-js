[Reactive-JS](../README.md) / core/DeferredObservable

# Module: core/DeferredObservable

## Table of contents

### Constructor Functions

- [combineLatest](core_DeferredObservable.md#combinelatest)
- [concat](core_DeferredObservable.md#concat)
- [defer](core_DeferredObservable.md#defer)
- [empty](core_DeferredObservable.md#empty)
- [fromFactory](core_DeferredObservable.md#fromfactory)
- [fromIterable](core_DeferredObservable.md#fromiterable)
- [fromOptional](core_DeferredObservable.md#fromoptional)
- [fromReadonlyArray](core_DeferredObservable.md#fromreadonlyarray)
- [generate](core_DeferredObservable.md#generate)
- [merge](core_DeferredObservable.md#merge)
- [throws](core_DeferredObservable.md#throws)
- [zip](core_DeferredObservable.md#zip)
- [zipLatest](core_DeferredObservable.md#ziplatest)

### Operator Functions

- [backpressureStrategy](core_DeferredObservable.md#backpressurestrategy)
- [buffer](core_DeferredObservable.md#buffer)
- [concatAll](core_DeferredObservable.md#concatall)
- [concatMap](core_DeferredObservable.md#concatmap)
- [concatWith](core_DeferredObservable.md#concatwith)
- [decodeWithCharset](core_DeferredObservable.md#decodewithcharset)
- [dispatchTo](core_DeferredObservable.md#dispatchto)
- [distinctUntilChanged](core_DeferredObservable.md#distinctuntilchanged)
- [endWith](core_DeferredObservable.md#endwith)
- [enqueue](core_DeferredObservable.md#enqueue)
- [exhaust](core_DeferredObservable.md#exhaust)
- [exhaustMap](core_DeferredObservable.md#exhaustmap)
- [forEach](core_DeferredObservable.md#foreach)
- [forkConcat](core_DeferredObservable.md#forkconcat)
- [forkMerge](core_DeferredObservable.md#forkmerge)
- [forkZip](core_DeferredObservable.md#forkzip)
- [forkZipLatest](core_DeferredObservable.md#forkziplatest)
- [identity](core_DeferredObservable.md#identity)
- [ignoreElements](core_DeferredObservable.md#ignoreelements)
- [keep](core_DeferredObservable.md#keep)
- [keepType](core_DeferredObservable.md#keeptype)
- [map](core_DeferredObservable.md#map)
- [mapTo](core_DeferredObservable.md#mapto)
- [mergeAll](core_DeferredObservable.md#mergeall)
- [mergeMap](core_DeferredObservable.md#mergemap)
- [mergeWith](core_DeferredObservable.md#mergewith)
- [pairwise](core_DeferredObservable.md#pairwise)
- [pick](core_DeferredObservable.md#pick)
- [repeat](core_DeferredObservable.md#repeat)
- [retry](core_DeferredObservable.md#retry)
- [scan](core_DeferredObservable.md#scan)
- [skipFirst](core_DeferredObservable.md#skipfirst)
- [startWith](core_DeferredObservable.md#startwith)
- [switchAll](core_DeferredObservable.md#switchall)
- [switchMap](core_DeferredObservable.md#switchmap)
- [takeFirst](core_DeferredObservable.md#takefirst)
- [takeLast](core_DeferredObservable.md#takelast)
- [takeWhile](core_DeferredObservable.md#takewhile)
- [throttle](core_DeferredObservable.md#throttle)
- [throwIfEmpty](core_DeferredObservable.md#throwifempty)
- [withCurrentTime](core_DeferredObservable.md#withcurrenttime)
- [withLatestFrom](core_DeferredObservable.md#withlatestfrom)
- [zipWith](core_DeferredObservable.md#zipwith)
- [zipWithLatestFrom](core_DeferredObservable.md#zipwithlatestfrom)

### Other Functions

- [create](core_DeferredObservable.md#create)

### Transform Functions

- [firstAsync](core_DeferredObservable.md#firstasync)
- [lastAsync](core_DeferredObservable.md#lastasync)
- [share](core_DeferredObservable.md#share)

## Constructor Functions

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly `T`[]\>

Returns a Container which buffers items produced by the source until the
number of items reaches the specified maximum buffer size.

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly `T`[]\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`[`TKey`]\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TAcc`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TOut`\>

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

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`DeferredObservableContainer`](../interfaces/core.DeferredObservableContainer-1.md), `TA`, `T`\>

___

## Other Functions

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/core.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

## Transform Functions

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>\>
