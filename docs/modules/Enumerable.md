[Reactive-JS](../README.md) / Enumerable

# Module: Enumerable

## Table of contents

### Constructor Functions

- [compute](Enumerable.md#compute)
- [concat](Enumerable.md#concat)
- [defer](Enumerable.md#defer)
- [empty](Enumerable.md#empty)
- [fromEnumeratorFactory](Enumerable.md#fromenumeratorfactory)
- [fromFactory](Enumerable.md#fromfactory)
- [fromIterable](Enumerable.md#fromiterable)
- [fromOptional](Enumerable.md#fromoptional)
- [fromReadonlyArray](Enumerable.md#fromreadonlyarray)
- [generate](Enumerable.md#generate)
- [throws](Enumerable.md#throws)
- [zip](Enumerable.md#zip)

### Operator Functions

- [buffer](Enumerable.md#buffer)
- [catchError](Enumerable.md#catcherror)
- [concatAll](Enumerable.md#concatall)
- [concatMap](Enumerable.md#concatmap)
- [concatWith](Enumerable.md#concatwith)
- [decodeWithCharset](Enumerable.md#decodewithcharset)
- [distinctUntilChanged](Enumerable.md#distinctuntilchanged)
- [encodeUtf8](Enumerable.md#encodeutf8)
- [endWith](Enumerable.md#endwith)
- [flatMapIterable](Enumerable.md#flatmapiterable)
- [forEach](Enumerable.md#foreach)
- [forkConcat](Enumerable.md#forkconcat)
- [forkZip](Enumerable.md#forkzip)
- [identity](Enumerable.md#identity)
- [ignoreElements](Enumerable.md#ignoreelements)
- [keep](Enumerable.md#keep)
- [keepType](Enumerable.md#keeptype)
- [map](Enumerable.md#map)
- [mapTo](Enumerable.md#mapto)
- [pairwise](Enumerable.md#pairwise)
- [pick](Enumerable.md#pick)
- [repeat](Enumerable.md#repeat)
- [retry](Enumerable.md#retry)
- [scan](Enumerable.md#scan)
- [scanLast](Enumerable.md#scanlast)
- [skipFirst](Enumerable.md#skipfirst)
- [startWith](Enumerable.md#startwith)
- [takeFirst](Enumerable.md#takefirst)
- [takeLast](Enumerable.md#takelast)
- [takeWhile](Enumerable.md#takewhile)
- [throwIfEmpty](Enumerable.md#throwifempty)
- [zipWith](Enumerable.md#zipwith)

### Transform Functions

- [contains](Enumerable.md#contains)
- [enumerate](Enumerable.md#enumerate)
- [everySatisfy](Enumerable.md#everysatisfy)
- [first](Enumerable.md#first)
- [firstAsync](Enumerable.md#firstasync)
- [flow](Enumerable.md#flow)
- [last](Enumerable.md#last)
- [lastAsync](Enumerable.md#lastasync)
- [noneSatisfy](Enumerable.md#nonesatisfy)
- [reduce](Enumerable.md#reduce)
- [someSatisfy](Enumerable.md#somesatisfy)
- [toReadonlyArray](Enumerable.md#toreadonlyarray)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.raise?` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly `T`[]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `string`, `Uint8Array`\>

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TAcc`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.EnumerableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Transform Functions

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, readonly `T`[]\>
