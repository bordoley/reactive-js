[Reactive-JS](../README.md) / core/Enumerable

# Module: core/Enumerable

## Table of contents

### Constructor Functions

- [compute](core_Enumerable.md#compute)
- [concat](core_Enumerable.md#concat)
- [defer](core_Enumerable.md#defer)
- [empty](core_Enumerable.md#empty)
- [fromEnumeratorFactory](core_Enumerable.md#fromenumeratorfactory)
- [fromFactory](core_Enumerable.md#fromfactory)
- [fromIterable](core_Enumerable.md#fromiterable)
- [fromOptional](core_Enumerable.md#fromoptional)
- [fromReadonlyArray](core_Enumerable.md#fromreadonlyarray)
- [generate](core_Enumerable.md#generate)
- [throws](core_Enumerable.md#throws)
- [zip](core_Enumerable.md#zip)

### Operator Functions

- [backpressureStrategy](core_Enumerable.md#backpressurestrategy)
- [buffer](core_Enumerable.md#buffer)
- [catchError](core_Enumerable.md#catcherror)
- [concatAll](core_Enumerable.md#concatall)
- [concatMap](core_Enumerable.md#concatmap)
- [concatWith](core_Enumerable.md#concatwith)
- [decodeWithCharset](core_Enumerable.md#decodewithcharset)
- [dispatchTo](core_Enumerable.md#dispatchto)
- [distinctUntilChanged](core_Enumerable.md#distinctuntilchanged)
- [encodeUtf8](core_Enumerable.md#encodeutf8)
- [endWith](core_Enumerable.md#endwith)
- [enqueue](core_Enumerable.md#enqueue)
- [flatMapIterable](core_Enumerable.md#flatmapiterable)
- [forEach](core_Enumerable.md#foreach)
- [forkConcat](core_Enumerable.md#forkconcat)
- [forkZip](core_Enumerable.md#forkzip)
- [identity](core_Enumerable.md#identity)
- [ignoreElements](core_Enumerable.md#ignoreelements)
- [keep](core_Enumerable.md#keep)
- [keepType](core_Enumerable.md#keeptype)
- [map](core_Enumerable.md#map)
- [mapTo](core_Enumerable.md#mapto)
- [pairwise](core_Enumerable.md#pairwise)
- [pick](core_Enumerable.md#pick)
- [repeat](core_Enumerable.md#repeat)
- [retry](core_Enumerable.md#retry)
- [scan](core_Enumerable.md#scan)
- [scanLast](core_Enumerable.md#scanlast)
- [skipFirst](core_Enumerable.md#skipfirst)
- [startWith](core_Enumerable.md#startwith)
- [takeFirst](core_Enumerable.md#takefirst)
- [takeLast](core_Enumerable.md#takelast)
- [takeWhile](core_Enumerable.md#takewhile)
- [throwIfEmpty](core_Enumerable.md#throwifempty)
- [zipWith](core_Enumerable.md#zipwith)

### Transform Functions

- [contains](core_Enumerable.md#contains)
- [enumerate](core_Enumerable.md#enumerate)
- [everySatisfy](core_Enumerable.md#everysatisfy)
- [first](core_Enumerable.md#first)
- [firstAsync](core_Enumerable.md#firstasync)
- [flow](core_Enumerable.md#flow)
- [last](core_Enumerable.md#last)
- [lastAsync](core_Enumerable.md#lastasync)
- [noneSatisfy](core_Enumerable.md#nonesatisfy)
- [reduce](core_Enumerable.md#reduce)
- [someSatisfy](core_Enumerable.md#somesatisfy)
- [toReadonlyArray](core_Enumerable.md#toreadonlyarray)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

Generates a Container from a generator function
that is applied to an accumulator value between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly `T`[]\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>[] |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `string`, `Uint8Array`\>

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TB`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TC`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TD`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TE`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TF`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TG`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TH`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TA`\> |
| `b` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TB`\> |
| `c` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TC`\> |
| `d` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TD`\> |
| `e` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TE`\> |
| `f` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TF`\> |
| `g` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TG`\> |
| `h` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TH`\> |
| `i` | [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TI`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`[`TKey`]\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TAcc`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TAcc`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

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

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TF`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TG`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TH`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`TI`\> |

#### Returns

[`Operator`](core.Container.md#operator)<[`EnumerableContainer`](../interfaces/core.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Transform Functions

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `boolean`\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, `boolean`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, readonly `T`[]\>
