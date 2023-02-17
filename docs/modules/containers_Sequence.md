[Reactive-JS](../README.md) / containers/Sequence

# Module: containers/Sequence

## Table of contents

### Functions

- [concat](containers_Sequence.md#concat)
- [concatAll](containers_Sequence.md#concatall)
- [distinctUntilChanged](containers_Sequence.md#distinctuntilchanged)
- [fromReadonlyArray](containers_Sequence.md#fromreadonlyarray)
- [generate](containers_Sequence.md#generate)
- [keep](containers_Sequence.md#keep)
- [map](containers_Sequence.md#map)
- [pairwise](containers_Sequence.md#pairwise)
- [repeat](containers_Sequence.md#repeat)
- [scan](containers_Sequence.md#scan)
- [seek](containers_Sequence.md#seek)
- [skipFirst](containers_Sequence.md#skipfirst)
- [takeFirst](containers_Sequence.md#takefirst)
- [takeLast](containers_Sequence.md#takelast)
- [takeWhile](containers_Sequence.md#takewhile)
- [toAsyncEnumerable](containers_Sequence.md#toasyncenumerable)
- [toEnumerable](containers_Sequence.md#toenumerable)
- [toEnumerableObservable](containers_Sequence.md#toenumerableobservable)
- [toFlowable](containers_Sequence.md#toflowable)
- [toIterable](containers_Sequence.md#toiterable)
- [toObservable](containers_Sequence.md#toobservable)
- [toReadonlyArray](containers_Sequence.md#toreadonlyarray)
- [toRunnable](containers_Sequence.md#torunnable)
- [toRunnableObservable](containers_Sequence.md#torunnableobservable)
- [zip](containers_Sequence.md#zip)

## Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

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

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, `T`\>

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

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |
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

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### seek

▸ **seek**<`T`\>(`count`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

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

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

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

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`]\>

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
