[Reactive-JS](../README.md) / core/Runnable

# Module: core/Runnable

## Table of contents

### Constructor Functions

- [animate](core_Runnable.md#animate)
- [combineLatest](core_Runnable.md#combinelatest)
- [compute](core_Runnable.md#compute)
- [concat](core_Runnable.md#concat)
- [currentTime](core_Runnable.md#currenttime)
- [defer](core_Runnable.md#defer)
- [empty](core_Runnable.md#empty)
- [fromEnumeratorFactory](core_Runnable.md#fromenumeratorfactory)
- [fromFactory](core_Runnable.md#fromfactory)
- [fromIterable](core_Runnable.md#fromiterable)
- [fromOptional](core_Runnable.md#fromoptional)
- [fromReadonlyArray](core_Runnable.md#fromreadonlyarray)
- [generate](core_Runnable.md#generate)
- [merge](core_Runnable.md#merge)
- [throws](core_Runnable.md#throws)
- [zip](core_Runnable.md#zip)
- [zipLatest](core_Runnable.md#ziplatest)

### Operator Functions

- [backpressureStrategy](core_Runnable.md#backpressurestrategy)
- [buffer](core_Runnable.md#buffer)
- [catchError](core_Runnable.md#catcherror)
- [concatAll](core_Runnable.md#concatall)
- [concatMap](core_Runnable.md#concatmap)
- [concatWith](core_Runnable.md#concatwith)
- [decodeWithCharset](core_Runnable.md#decodewithcharset)
- [dispatchTo](core_Runnable.md#dispatchto)
- [distinctUntilChanged](core_Runnable.md#distinctuntilchanged)
- [encodeUtf8](core_Runnable.md#encodeutf8)
- [endWith](core_Runnable.md#endwith)
- [enqueue](core_Runnable.md#enqueue)
- [exhaust](core_Runnable.md#exhaust)
- [exhaustMap](core_Runnable.md#exhaustmap)
- [flatMapIterable](core_Runnable.md#flatmapiterable)
- [forEach](core_Runnable.md#foreach)
- [forkConcat](core_Runnable.md#forkconcat)
- [forkMerge](core_Runnable.md#forkmerge)
- [forkZip](core_Runnable.md#forkzip)
- [forkZipLatest](core_Runnable.md#forkziplatest)
- [identity](core_Runnable.md#identity)
- [ignoreElements](core_Runnable.md#ignoreelements)
- [keep](core_Runnable.md#keep)
- [keepType](core_Runnable.md#keeptype)
- [map](core_Runnable.md#map)
- [mapTo](core_Runnable.md#mapto)
- [mergeAll](core_Runnable.md#mergeall)
- [mergeMap](core_Runnable.md#mergemap)
- [mergeWith](core_Runnable.md#mergewith)
- [pairwise](core_Runnable.md#pairwise)
- [pick](core_Runnable.md#pick)
- [repeat](core_Runnable.md#repeat)
- [retry](core_Runnable.md#retry)
- [scan](core_Runnable.md#scan)
- [scanLast](core_Runnable.md#scanlast)
- [scanMany](core_Runnable.md#scanmany)
- [skipFirst](core_Runnable.md#skipfirst)
- [startWith](core_Runnable.md#startwith)
- [switchAll](core_Runnable.md#switchall)
- [switchMap](core_Runnable.md#switchmap)
- [takeFirst](core_Runnable.md#takefirst)
- [takeLast](core_Runnable.md#takelast)
- [takeUntil](core_Runnable.md#takeuntil)
- [takeWhile](core_Runnable.md#takewhile)
- [throttle](core_Runnable.md#throttle)
- [throwIfEmpty](core_Runnable.md#throwifempty)
- [timeout](core_Runnable.md#timeout)
- [withCurrentTime](core_Runnable.md#withcurrenttime)
- [withLatestFrom](core_Runnable.md#withlatestfrom)
- [zipWith](core_Runnable.md#zipwith)
- [zipWithLatestFrom](core_Runnable.md#zipwithlatestfrom)

### Other Functions

- [run](core_Runnable.md#run)

### Transform Functions

- [contains](core_Runnable.md#contains)
- [everySatisfy](core_Runnable.md#everysatisfy)
- [first](core_Runnable.md#first)
- [firstAsync](core_Runnable.md#firstasync)
- [flow](core_Runnable.md#flow)
- [last](core_Runnable.md#last)
- [lastAsync](core_Runnable.md#lastasync)
- [noneSatisfy](core_Runnable.md#nonesatisfy)
- [reduce](core_Runnable.md#reduce)
- [someSatisfy](core_Runnable.md#somesatisfy)
- [toEnumerable](core_Runnable.md#toenumerable)
- [toReadonlyArray](core_Runnable.md#toreadonlyarray)

## Constructor Functions

### animate

▸ **animate**<`T`\>(`configs`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`AnimationConfig`](core.ReactiveContainers.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](core.ReactiveContainers.md#animationconfig)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### currentTime

▸ **currentTime**(`options?`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`number`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/core.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly `T`[]\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `string`, `Uint8Array`\>

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TF`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TG`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TH`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TH`\> |
| `i` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TI`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TF`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TG`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TH`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TH`\> |
| `i` | [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TI`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`[`TKey`]\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TAcc`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TAcc`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TAcc`\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`unknown`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/core.RunnableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`unknown`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TOut`\>

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

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TH`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TI`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`RunnableContainer`](../interfaces/core.RunnableContainer.md), `TA`, `T`\>

___

## Other Functions

### run

▸ **run**<`T`\>(`options?`): (`observable`: [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>) => `void`

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
| `observable` | [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\> |

##### Returns

`void`

___

## Transform Functions

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `boolean`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Containers.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### firstAsync

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, `boolean`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, readonly `T`[]\>
