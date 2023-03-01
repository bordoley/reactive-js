[Reactive-JS](../README.md) / rx/Runnable

# Module: rx/Runnable

## Table of contents

### Constructor Functions

- [compute](rx_Runnable.md#compute)
- [concat](rx_Runnable.md#concat)
- [defer](rx_Runnable.md#defer)
- [empty](rx_Runnable.md#empty)
- [fromEnumerable](rx_Runnable.md#fromenumerable)
- [fromIterable](rx_Runnable.md#fromiterable)
- [fromReadonlyArray](rx_Runnable.md#fromreadonlyarray)
- [fromSequence](rx_Runnable.md#fromsequence)
- [generate](rx_Runnable.md#generate)
- [throws](rx_Runnable.md#throws)
- [zip](rx_Runnable.md#zip)
- [zipLatest](rx_Runnable.md#ziplatest)

### Converter Functions

- [toFlowable](rx_Runnable.md#toflowable)
- [toObservable](rx_Runnable.md#toobservable)
- [toReadonlyArray](rx_Runnable.md#toreadonlyarray)
- [toRunnable](rx_Runnable.md#torunnable)

### Operator Functions

- [buffer](rx_Runnable.md#buffer)
- [catchError](rx_Runnable.md#catcherror)
- [concatAll](rx_Runnable.md#concatall)
- [concatMap](rx_Runnable.md#concatmap)
- [concatWith](rx_Runnable.md#concatwith)
- [contains](rx_Runnable.md#contains)
- [decodeWithCharset](rx_Runnable.md#decodewithcharset)
- [distinctUntilChanged](rx_Runnable.md#distinctuntilchanged)
- [encodeUtf8](rx_Runnable.md#encodeutf8)
- [endWith](rx_Runnable.md#endwith)
- [everySatisfy](rx_Runnable.md#everysatisfy)
- [exhaust](rx_Runnable.md#exhaust)
- [exhaustMap](rx_Runnable.md#exhaustmap)
- [flatMapIterable](rx_Runnable.md#flatmapiterable)
- [forEach](rx_Runnable.md#foreach)
- [forkConcat](rx_Runnable.md#forkconcat)
- [forkMerge](rx_Runnable.md#forkmerge)
- [forkZip](rx_Runnable.md#forkzip)
- [forkZipLatest](rx_Runnable.md#forkziplatest)
- [ignoreElements](rx_Runnable.md#ignoreelements)
- [keep](rx_Runnable.md#keep)
- [keepType](rx_Runnable.md#keeptype)
- [map](rx_Runnable.md#map)
- [mapTo](rx_Runnable.md#mapto)
- [mergeAll](rx_Runnable.md#mergeall)
- [mergeWith](rx_Runnable.md#mergewith)
- [pairwise](rx_Runnable.md#pairwise)
- [reduce](rx_Runnable.md#reduce)
- [retry](rx_Runnable.md#retry)
- [scan](rx_Runnable.md#scan)
- [scanAsync](rx_Runnable.md#scanasync)
- [skipFirst](rx_Runnable.md#skipfirst)
- [someSatisfy](rx_Runnable.md#somesatisfy)
- [startWith](rx_Runnable.md#startwith)
- [switchAll](rx_Runnable.md#switchall)
- [switchMap](rx_Runnable.md#switchmap)
- [takeFirst](rx_Runnable.md#takefirst)
- [takeLast](rx_Runnable.md#takelast)
- [takeUntil](rx_Runnable.md#takeuntil)
- [takeWhile](rx_Runnable.md#takewhile)
- [throttle](rx_Runnable.md#throttle)
- [throwIfEmpty](rx_Runnable.md#throwifempty)
- [timeout](rx_Runnable.md#timeout)
- [withLatestFrom](rx_Runnable.md#withlatestfrom)
- [zipWith](rx_Runnable.md#zipwith)
- [zipWithLatestFrom](rx_Runnable.md#zipwithlatestfrom)

### Other Functions

- [combineLatest](rx_Runnable.md#combinelatest)
- [first](rx_Runnable.md#first)
- [last](rx_Runnable.md#last)
- [merge](rx_Runnable.md#merge)
- [run](rx_Runnable.md#run)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`factory`, `options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

Returns a ContainerLike which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

Return an ContainerLike that emits no items.

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

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `delay?`: `number` ; `delayStart?`: `boolean`  } & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `delay?`: `number` ; `delayStart?`: `boolean`  } & { `raise?`: [`Factory`](functions.md#factory)<`unknown`\>  } |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Converter Functions

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

Returns a ContainerLike which buffers items produced by the source until either the
number of items reaches the specified maximum buffer size.

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike which catches errors produced by the source and either continues with
the ContainerLike returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> | a function that takes source error and either returns a ContainerLike to continue with or void if the error should be propagated. |
| `options?` | `undefined` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `string`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### exhaust

▸ **exhaust**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TH`\> |
| `i` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TH`\> |
| `i` | [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### retry

▸ **retry**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | [`ThrottleMode`](rx.md#throttlemode) | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that emits an error if the source completes without emitting a value.

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `T`\>

___

## Other Functions

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA_1`, `TB_1`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA_1` |
| `TB_1` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA_1`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB_1`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

▸ **combineLatest**<`TA_2`, `TB_2`, `TC_1`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA_2` |
| `TB_2` |
| `TC_1` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA_2`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB_2`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC_1`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

▸ **combineLatest**<`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA_3` |
| `TB_3` |
| `TC_2` |
| `TD_1` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA_3`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB_3`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC_2`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD_1`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

▸ **combineLatest**<`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA_4` |
| `TB_4` |
| `TC_3` |
| `TD_2` |
| `TE_1` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA_4`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB_4`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC_3`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD_2`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE_1`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

▸ **combineLatest**<`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA_5` |
| `TB_5` |
| `TC_4` |
| `TD_3` |
| `TE_2` |
| `TF_1` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA_5`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB_5`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC_4`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD_3`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE_2`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF_1`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

▸ **combineLatest**<`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA_6` |
| `TB_6` |
| `TC_5` |
| `TD_4` |
| `TE_3` |
| `TF_2` |
| `TG_1` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA_6`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB_6`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC_5`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD_4`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE_3`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF_2`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG_1`\> |
| `h` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

▸ **combineLatest**<`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA_7` |
| `TB_7` |
| `TC_6` |
| `TD_5` |
| `TE_4` |
| `TF_3` |
| `TG_2` |
| `TH_1` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TA_7`\> |
| `b` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TB_7`\> |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TC_6`\> |
| `d` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TD_5`\> |
| `e` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TE_4`\> |
| `f` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TF_3`\> |
| `g` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TG_2`\> |
| `h` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TH_1`\> |
| `i` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### run

▸ **run**<`T`\>(): (`observable`: [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`observable`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |

##### Returns

`void`
