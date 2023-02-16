[Reactive-JS](../README.md) / rx/EnumerableObservable

# Module: rx/EnumerableObservable

## Table of contents

### Functions

- [buffer](rx_EnumerableObservable.md#buffer)
- [catchError](rx_EnumerableObservable.md#catcherror)
- [concat](rx_EnumerableObservable.md#concat)
- [concatAll](rx_EnumerableObservable.md#concatall)
- [decodeWithCharset](rx_EnumerableObservable.md#decodewithcharset)
- [defer](rx_EnumerableObservable.md#defer)
- [distinctUntilChanged](rx_EnumerableObservable.md#distinctuntilchanged)
- [empty](rx_EnumerableObservable.md#empty)
- [everySatisfy](rx_EnumerableObservable.md#everysatisfy)
- [exhaust](rx_EnumerableObservable.md#exhaust)
- [forEach](rx_EnumerableObservable.md#foreach)
- [fromReadonlyArray](rx_EnumerableObservable.md#fromreadonlyarray)
- [generate](rx_EnumerableObservable.md#generate)
- [keep](rx_EnumerableObservable.md#keep)
- [map](rx_EnumerableObservable.md#map)
- [merge](rx_EnumerableObservable.md#merge)
- [mergeAll](rx_EnumerableObservable.md#mergeall)
- [pairwise](rx_EnumerableObservable.md#pairwise)
- [reduce](rx_EnumerableObservable.md#reduce)
- [retry](rx_EnumerableObservable.md#retry)
- [scan](rx_EnumerableObservable.md#scan)
- [scanAsync](rx_EnumerableObservable.md#scanasync)
- [skipFirst](rx_EnumerableObservable.md#skipfirst)
- [someSatisfy](rx_EnumerableObservable.md#somesatisfy)
- [switchAll](rx_EnumerableObservable.md#switchall)
- [takeFirst](rx_EnumerableObservable.md#takefirst)
- [takeLast](rx_EnumerableObservable.md#takelast)
- [takeWhile](rx_EnumerableObservable.md#takewhile)
- [throwIfEmpty](rx_EnumerableObservable.md#throwifempty)
- [toEnumerable](rx_EnumerableObservable.md#toenumerable)
- [toFlowable](rx_EnumerableObservable.md#toflowable)
- [toObservable](rx_EnumerableObservable.md#toobservable)
- [toReadonlyArray](rx_EnumerableObservable.md#toreadonlyarray)
- [toRunnable](rx_EnumerableObservable.md#torunnable)
- [toRunnableObservable](rx_EnumerableObservable.md#torunnableobservable)
- [zip](rx_EnumerableObservable.md#zip)

## Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `snd` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>[] |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

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

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### exhaust

▸ **exhaust**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

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

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `snd` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>[] |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### retry

▸ **retry**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### switchAll

▸ **switchAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.schedulerFactory` | [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### toRunnableObservable

▸ **toRunnableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TA`\> |
| `b` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TB`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA_1`, `TB_1`, `TC`\>(`a`, `b`, `c`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA_1` |
| `TB_1` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TA_1`\> |
| `b` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TB_1`\> |
| `c` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TC`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

▸ **zip**<`TA_2`, `TB_2`, `TC_1`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

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
| `a` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TA_2`\> |
| `b` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TB_2`\> |
| `c` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TC_1`\> |
| `d` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TD`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

▸ **zip**<`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

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
| `a` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TA_3`\> |
| `b` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TB_3`\> |
| `c` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TC_2`\> |
| `d` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TD_1`\> |
| `e` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TE`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

▸ **zip**<`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

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
| `a` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TA_4`\> |
| `b` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TB_4`\> |
| `c` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TC_3`\> |
| `d` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TD_2`\> |
| `e` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TE_1`\> |
| `f` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TF`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

▸ **zip**<`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

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
| `a` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TA_5`\> |
| `b` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TB_5`\> |
| `c` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TC_4`\> |
| `d` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TD_3`\> |
| `e` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TE_2`\> |
| `f` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TF_1`\> |
| `g` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TG`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

▸ **zip**<`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

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
| `a` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TA_6`\> |
| `b` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TB_6`\> |
| `c` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TC_5`\> |
| `d` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TD_4`\> |
| `e` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TE_3`\> |
| `f` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TF_2`\> |
| `g` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TG_1`\> |
| `h` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TH`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

▸ **zip**<`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>

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
| `a` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TA_7`\> |
| `b` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TB_7`\> |
| `c` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TC_6`\> |
| `d` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TD_5`\> |
| `e` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TE_4`\> |
| `f` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TF_3`\> |
| `g` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TG_2`\> |
| `h` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TH_1`\> |
| `i` | [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`TI`\> |

#### Returns

[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>
