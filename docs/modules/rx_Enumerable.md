[Reactive-JS](../README.md) / rx/Enumerable

# Module: rx/Enumerable

## Table of contents

### Constructor Functions

- [compute](rx_Enumerable.md#compute)
- [concat](rx_Enumerable.md#concat)
- [defer](rx_Enumerable.md#defer)
- [empty](rx_Enumerable.md#empty)
- [fromIterable](rx_Enumerable.md#fromiterable)
- [fromOptional](rx_Enumerable.md#fromoptional)
- [fromReadonlyArray](rx_Enumerable.md#fromreadonlyarray)
- [fromSequence](rx_Enumerable.md#fromsequence)
- [generate](rx_Enumerable.md#generate)
- [throws](rx_Enumerable.md#throws)
- [zip](rx_Enumerable.md#zip)

### Converter Functions

- [toAsyncEnumerable](rx_Enumerable.md#toasyncenumerable)
- [toEnumerable](rx_Enumerable.md#toenumerable)
- [toFlowable](rx_Enumerable.md#toflowable)
- [toIterable](rx_Enumerable.md#toiterable)
- [toObservable](rx_Enumerable.md#toobservable)
- [toReadonlyArray](rx_Enumerable.md#toreadonlyarray)
- [toRunnable](rx_Enumerable.md#torunnable)

### Operator Functions

- [buffer](rx_Enumerable.md#buffer)
- [catchError](rx_Enumerable.md#catcherror)
- [concatAll](rx_Enumerable.md#concatall)
- [concatMap](rx_Enumerable.md#concatmap)
- [concatWith](rx_Enumerable.md#concatwith)
- [contains](rx_Enumerable.md#contains)
- [decodeWithCharset](rx_Enumerable.md#decodewithcharset)
- [distinctUntilChanged](rx_Enumerable.md#distinctuntilchanged)
- [encodeUtf8](rx_Enumerable.md#encodeutf8)
- [endWith](rx_Enumerable.md#endwith)
- [everySatisfy](rx_Enumerable.md#everysatisfy)
- [flatMapIterable](rx_Enumerable.md#flatmapiterable)
- [forEach](rx_Enumerable.md#foreach)
- [forkConcat](rx_Enumerable.md#forkconcat)
- [forkZip](rx_Enumerable.md#forkzip)
- [ignoreElements](rx_Enumerable.md#ignoreelements)
- [keep](rx_Enumerable.md#keep)
- [keepType](rx_Enumerable.md#keeptype)
- [map](rx_Enumerable.md#map)
- [mapTo](rx_Enumerable.md#mapto)
- [pairwise](rx_Enumerable.md#pairwise)
- [reduce](rx_Enumerable.md#reduce)
- [retry](rx_Enumerable.md#retry)
- [scan](rx_Enumerable.md#scan)
- [scanAsync](rx_Enumerable.md#scanasync)
- [skipFirst](rx_Enumerable.md#skipfirst)
- [someSatisfy](rx_Enumerable.md#somesatisfy)
- [startWith](rx_Enumerable.md#startwith)
- [takeFirst](rx_Enumerable.md#takefirst)
- [takeLast](rx_Enumerable.md#takelast)
- [takeWhile](rx_Enumerable.md#takewhile)
- [throwIfEmpty](rx_Enumerable.md#throwifempty)
- [zipWith](rx_Enumerable.md#zipwith)

### Other Functions

- [enumerate](rx_Enumerable.md#enumerate)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`factory`, `options?`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

Returns a ContainerLike which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

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
| `options?` | `undefined` | - |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Converter Functions

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streaming.AsyncEnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streaming.AsyncEnumerableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

Converts the ContainerLike to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\> | a function that takes source error and either returns a ContainerLike to continue with or void if the error should be propagated. |
| `options?` | `undefined` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `boolean`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `string`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `boolean`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TA`\> |
| `b` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TB`\> |
| `c` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TC`\> |
| `d` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TD`\> |
| `e` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TE`\> |
| `f` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TF`\> |
| `g` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TG`\> |
| `h` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TH`\> |
| `i` | [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### retry

▸ **retry**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `boolean`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Functions

### enumerate

▸ **enumerate**<`T`\>(): (`enumerable`: [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>) => [`EnumeratorLike`](../interfaces/util.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`enumerable`): [`EnumeratorLike`](../interfaces/util.EnumeratorLike.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\> |

##### Returns

[`EnumeratorLike`](../interfaces/util.EnumeratorLike.md)<`T`\>
