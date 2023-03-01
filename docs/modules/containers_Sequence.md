[Reactive-JS](../README.md) / containers/Sequence

# Module: containers/Sequence

## Table of contents

### Constructor Functions

- [compute](containers_Sequence.md#compute)
- [concat](containers_Sequence.md#concat)
- [fromReadonlyArray](containers_Sequence.md#fromreadonlyarray)
- [generate](containers_Sequence.md#generate)
- [zip](containers_Sequence.md#zip)

### Converter Functions

- [toAsyncEnumerable](containers_Sequence.md#toasyncenumerable)
- [toEnumerable](containers_Sequence.md#toenumerable)
- [toEnumerableObservable](containers_Sequence.md#toenumerableobservable)
- [toFlowable](containers_Sequence.md#toflowable)
- [toIterable](containers_Sequence.md#toiterable)
- [toObservable](containers_Sequence.md#toobservable)
- [toReadonlyArray](containers_Sequence.md#toreadonlyarray)
- [toRunnableObservable](containers_Sequence.md#torunnableobservable)

### Operator Functions

- [concatAll](containers_Sequence.md#concatall)
- [concatMap](containers_Sequence.md#concatmap)
- [concatWith](containers_Sequence.md#concatwith)
- [distinctUntilChanged](containers_Sequence.md#distinctuntilchanged)
- [endWith](containers_Sequence.md#endwith)
- [ignoreElements](containers_Sequence.md#ignoreelements)
- [keep](containers_Sequence.md#keep)
- [keepType](containers_Sequence.md#keeptype)
- [map](containers_Sequence.md#map)
- [mapTo](containers_Sequence.md#mapto)
- [pairwise](containers_Sequence.md#pairwise)
- [repeat](containers_Sequence.md#repeat)
- [scan](containers_Sequence.md#scan)
- [skipFirst](containers_Sequence.md#skipfirst)
- [startWith](containers_Sequence.md#startwith)
- [takeFirst](containers_Sequence.md#takefirst)
- [takeLast](containers_Sequence.md#takelast)
- [takeWhile](containers_Sequence.md#takewhile)
- [zipWith](containers_Sequence.md#zipwith)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`factory`, `options?`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

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

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

Returns a ContainerLike which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\> |
| `snd` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\> |
| `...tail` | readonly [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>[] |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

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

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |
| `h` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TH`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |
| `h` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TH`\> |
| `i` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TI`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Converter Functions

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toEnumerableObservable

▸ **toEnumerableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnableObservable

▸ **toRunnableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

## Operator Functions

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\> |
| `...tail` | readonly [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`count`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |
| `h` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |
| `h` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TH`\> |
| `i` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>
