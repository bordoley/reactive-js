[Reactive-JS](../README.md) / ix/Enumerable

# Module: ix/Enumerable

## Table of contents

### Constructor Functions

- [compute](ix_Enumerable.md#compute)
- [concat](ix_Enumerable.md#concat)
- [empty](ix_Enumerable.md#empty)
- [fromIterable](ix_Enumerable.md#fromiterable)
- [fromReadonlyArray](ix_Enumerable.md#fromreadonlyarray)
- [generate](ix_Enumerable.md#generate)
- [throws](ix_Enumerable.md#throws)
- [zip](ix_Enumerable.md#zip)

### Converter Functions

- [toAsyncEnumerable](ix_Enumerable.md#toasyncenumerable)
- [toEnumerable](ix_Enumerable.md#toenumerable)
- [toEnumerableObservable](ix_Enumerable.md#toenumerableobservable)
- [toFlowable](ix_Enumerable.md#toflowable)
- [toIterable](ix_Enumerable.md#toiterable)
- [toObservable](ix_Enumerable.md#toobservable)
- [toReadonlyArray](ix_Enumerable.md#toreadonlyarray)
- [toRunnable](ix_Enumerable.md#torunnable)
- [toRunnableObservable](ix_Enumerable.md#torunnableobservable)

### Operator Functions

- [buffer](ix_Enumerable.md#buffer)
- [concatAll](ix_Enumerable.md#concatall)
- [concatMap](ix_Enumerable.md#concatmap)
- [concatWith](ix_Enumerable.md#concatwith)
- [concatYieldMap](ix_Enumerable.md#concatyieldmap)
- [distinctUntilChanged](ix_Enumerable.md#distinctuntilchanged)
- [endWith](ix_Enumerable.md#endwith)
- [forEach](ix_Enumerable.md#foreach)
- [ignoreElements](ix_Enumerable.md#ignoreelements)
- [keep](ix_Enumerable.md#keep)
- [keepType](ix_Enumerable.md#keeptype)
- [map](ix_Enumerable.md#map)
- [mapTo](ix_Enumerable.md#mapto)
- [pairwise](ix_Enumerable.md#pairwise)
- [repeat](ix_Enumerable.md#repeat)
- [scan](ix_Enumerable.md#scan)
- [skipFirst](ix_Enumerable.md#skipfirst)
- [startWith](ix_Enumerable.md#startwith)
- [takeFirst](ix_Enumerable.md#takefirst)
- [takeLast](ix_Enumerable.md#takelast)
- [takeWhile](ix_Enumerable.md#takewhile)
- [throwIfEmpty](ix_Enumerable.md#throwifempty)
- [zipWith](ix_Enumerable.md#zipwith)

### Other Functions

- [enumerate](ix_Enumerable.md#enumerate)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`factory`, `options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

Returns a ContainerLike which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Converter Functions

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toEnumerableObservable

▸ **toEnumerableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### toRunnableObservable

▸ **toRunnableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, `T`\>

Converts a higher-order ContainerLike into a first-order
ContainerLike by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### concatYieldMap

▸ **concatYieldMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `Generator`<`TB`, `any`, `any`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that mirrors the source, repeating it whenever the predicate returns true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`count`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that mirrors the source, repeating it `count` times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

Returns a StatefulContainerLike that emits an error if the source completes without emitting a value.

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Functions

### enumerate

▸ **enumerate**<`T`\>(): (`enumerable`: [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>) => [`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`enumerable`): [`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\> |

##### Returns

[`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\>
