[Reactive-JS](../README.md) / Runnable

# Module: Runnable

## Table of contents

### Namespaces

- [AnimationConfig](Runnable.AnimationConfig.md)

### Constructor Functions

- [combineLatest](Runnable.md#combinelatest)
- [compute](Runnable.md#compute)
- [concat](Runnable.md#concat)
- [defer](Runnable.md#defer)
- [empty](Runnable.md#empty)
- [fromEnumeratorFactory](Runnable.md#fromenumeratorfactory)
- [fromFactory](Runnable.md#fromfactory)
- [fromIterable](Runnable.md#fromiterable)
- [fromOptional](Runnable.md#fromoptional)
- [fromReadonlyArray](Runnable.md#fromreadonlyarray)
- [generate](Runnable.md#generate)
- [merge](Runnable.md#merge)
- [throws](Runnable.md#throws)
- [zip](Runnable.md#zip)
- [zipLatest](Runnable.md#ziplatest)

### Operator Functions

- [backpressureStrategy](Runnable.md#backpressurestrategy)
- [buffer](Runnable.md#buffer)
- [catchError](Runnable.md#catcherror)
- [concatAll](Runnable.md#concatall)
- [concatMap](Runnable.md#concatmap)
- [concatWith](Runnable.md#concatwith)
- [decodeWithCharset](Runnable.md#decodewithcharset)
- [dispatchTo](Runnable.md#dispatchto)
- [distinctUntilChanged](Runnable.md#distinctuntilchanged)
- [encodeUtf8](Runnable.md#encodeutf8)
- [endWith](Runnable.md#endwith)
- [enqueue](Runnable.md#enqueue)
- [exhaust](Runnable.md#exhaust)
- [exhaustMap](Runnable.md#exhaustmap)
- [flatMapIterable](Runnable.md#flatmapiterable)
- [forEach](Runnable.md#foreach)
- [forkConcat](Runnable.md#forkconcat)
- [forkMerge](Runnable.md#forkmerge)
- [forkZip](Runnable.md#forkzip)
- [forkZipLatest](Runnable.md#forkziplatest)
- [identity](Runnable.md#identity)
- [ignoreElements](Runnable.md#ignoreelements)
- [keep](Runnable.md#keep)
- [keepType](Runnable.md#keeptype)
- [map](Runnable.md#map)
- [mapTo](Runnable.md#mapto)
- [mergeAll](Runnable.md#mergeall)
- [mergeMap](Runnable.md#mergemap)
- [mergeWith](Runnable.md#mergewith)
- [pairwise](Runnable.md#pairwise)
- [pick](Runnable.md#pick)
- [repeat](Runnable.md#repeat)
- [retry](Runnable.md#retry)
- [scan](Runnable.md#scan)
- [scanLast](Runnable.md#scanlast)
- [scanMany](Runnable.md#scanmany)
- [skipFirst](Runnable.md#skipfirst)
- [startWith](Runnable.md#startwith)
- [switchAll](Runnable.md#switchall)
- [switchMap](Runnable.md#switchmap)
- [takeFirst](Runnable.md#takefirst)
- [takeLast](Runnable.md#takelast)
- [takeUntil](Runnable.md#takeuntil)
- [takeWhile](Runnable.md#takewhile)
- [throttle](Runnable.md#throttle)
- [throwIfEmpty](Runnable.md#throwifempty)
- [timeout](Runnable.md#timeout)
- [withCurrentTime](Runnable.md#withcurrenttime)
- [withLatestFrom](Runnable.md#withlatestfrom)
- [zipWith](Runnable.md#zipwith)
- [zipWithLatestFrom](Runnable.md#zipwithlatestfrom)

### Other Functions

- [animate](Runnable.md#animate)
- [currentTime](Runnable.md#currenttime)
- [run](Runnable.md#run)

### Transform Functions

- [contains](Runnable.md#contains)
- [everySatisfy](Runnable.md#everysatisfy)
- [first](Runnable.md#first)
- [firstAsync](Runnable.md#firstasync)
- [flow](Runnable.md#flow)
- [last](Runnable.md#last)
- [lastAsync](Runnable.md#lastasync)
- [noneSatisfy](Runnable.md#nonesatisfy)
- [reduce](Runnable.md#reduce)
- [someSatisfy](Runnable.md#somesatisfy)
- [toReadonlyArray](Runnable.md#toreadonlyarray)

## Constructor Functions

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly `T`[]\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `string`, `Uint8Array`\>

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TAcc`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TAcc`\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`unknown`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`unknown`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TOut`\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.RunnableContainer.Type.md), `TA`, `T`\>

___

## Other Functions

### animate

▸ **animate**<`T`\>(`configs`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`Description`](Runnable.AnimationConfig.md#description)<`T`\> \| readonly [`Description`](Runnable.AnimationConfig.md#description)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### currentTime

▸ **currentTime**(`options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`number`\>

___

### run

▸ **run**<`T`\>(`options?`): (`observable`: [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>) => `void`

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

`fn`

▸ (`observable`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |

##### Returns

`void`

___

## Transform Functions

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Container.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, readonly `T`[]\>
