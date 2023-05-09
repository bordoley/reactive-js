[Reactive-JS](../README.md) / DeferredObservable

# Module: DeferredObservable

## Table of contents

### Constructor Functions

- [combineLatest](DeferredObservable.md#combinelatest)
- [concat](DeferredObservable.md#concat)
- [defer](DeferredObservable.md#defer)
- [empty](DeferredObservable.md#empty)
- [fromFactory](DeferredObservable.md#fromfactory)
- [fromIterable](DeferredObservable.md#fromiterable)
- [fromOptional](DeferredObservable.md#fromoptional)
- [fromReadonlyArray](DeferredObservable.md#fromreadonlyarray)
- [generate](DeferredObservable.md#generate)
- [merge](DeferredObservable.md#merge)
- [throws](DeferredObservable.md#throws)
- [zip](DeferredObservable.md#zip)
- [zipLatest](DeferredObservable.md#ziplatest)

### Operator Functions

- [backpressureStrategy](DeferredObservable.md#backpressurestrategy)
- [buffer](DeferredObservable.md#buffer)
- [concatAll](DeferredObservable.md#concatall)
- [concatMap](DeferredObservable.md#concatmap)
- [concatWith](DeferredObservable.md#concatwith)
- [decodeWithCharset](DeferredObservable.md#decodewithcharset)
- [dispatchTo](DeferredObservable.md#dispatchto)
- [distinctUntilChanged](DeferredObservable.md#distinctuntilchanged)
- [endWith](DeferredObservable.md#endwith)
- [enqueue](DeferredObservable.md#enqueue)
- [exhaust](DeferredObservable.md#exhaust)
- [exhaustMap](DeferredObservable.md#exhaustmap)
- [forEach](DeferredObservable.md#foreach)
- [forkConcat](DeferredObservable.md#forkconcat)
- [forkMerge](DeferredObservable.md#forkmerge)
- [forkZip](DeferredObservable.md#forkzip)
- [forkZipLatest](DeferredObservable.md#forkziplatest)
- [identity](DeferredObservable.md#identity)
- [ignoreElements](DeferredObservable.md#ignoreelements)
- [keep](DeferredObservable.md#keep)
- [keepType](DeferredObservable.md#keeptype)
- [map](DeferredObservable.md#map)
- [mapTo](DeferredObservable.md#mapto)
- [mergeAll](DeferredObservable.md#mergeall)
- [mergeMap](DeferredObservable.md#mergemap)
- [mergeWith](DeferredObservable.md#mergewith)
- [pairwise](DeferredObservable.md#pairwise)
- [pick](DeferredObservable.md#pick)
- [repeat](DeferredObservable.md#repeat)
- [retry](DeferredObservable.md#retry)
- [scan](DeferredObservable.md#scan)
- [skipFirst](DeferredObservable.md#skipfirst)
- [startWith](DeferredObservable.md#startwith)
- [switchAll](DeferredObservable.md#switchall)
- [switchMap](DeferredObservable.md#switchmap)
- [takeFirst](DeferredObservable.md#takefirst)
- [takeLast](DeferredObservable.md#takelast)
- [takeWhile](DeferredObservable.md#takewhile)
- [throttle](DeferredObservable.md#throttle)
- [throwIfEmpty](DeferredObservable.md#throwifempty)
- [withCurrentTime](DeferredObservable.md#withcurrenttime)
- [withLatestFrom](DeferredObservable.md#withlatestfrom)
- [zipWith](DeferredObservable.md#zipwith)
- [zipWithLatestFrom](DeferredObservable.md#zipwithlatestfrom)

### Other Functions

- [create](DeferredObservable.md#create)

### Transform Functions

- [firstAsync](DeferredObservable.md#firstasync)
- [lastAsync](DeferredObservable.md#lastasync)
- [share](DeferredObservable.md#share)

## Constructor Functions

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly `T`[]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly `T`[]\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TOut`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.DeferredObservableContainer.Type.md), `TA`, `T`\>

___

## Other Functions

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/types.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

## Transform Functions

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

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
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>
