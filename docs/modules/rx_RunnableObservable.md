[Reactive-JS](../README.md) / rx/RunnableObservable

# Module: rx/RunnableObservable

## Table of contents

### Functions

- [buffer](rx_RunnableObservable.md#buffer)
- [catchError](rx_RunnableObservable.md#catcherror)
- [concat](rx_RunnableObservable.md#concat)
- [concatAll](rx_RunnableObservable.md#concatall)
- [create](rx_RunnableObservable.md#create)
- [decodeWithCharset](rx_RunnableObservable.md#decodewithcharset)
- [defer](rx_RunnableObservable.md#defer)
- [distinctUntilChanged](rx_RunnableObservable.md#distinctuntilchanged)
- [empty](rx_RunnableObservable.md#empty)
- [everySatisfy](rx_RunnableObservable.md#everysatisfy)
- [exhaust](rx_RunnableObservable.md#exhaust)
- [forEach](rx_RunnableObservable.md#foreach)
- [fromArray](rx_RunnableObservable.md#fromarray)
- [generate](rx_RunnableObservable.md#generate)
- [keep](rx_RunnableObservable.md#keep)
- [map](rx_RunnableObservable.md#map)
- [merge](rx_RunnableObservable.md#merge)
- [mergeAll](rx_RunnableObservable.md#mergeall)
- [never](rx_RunnableObservable.md#never)
- [pairwise](rx_RunnableObservable.md#pairwise)
- [reduce](rx_RunnableObservable.md#reduce)
- [scan](rx_RunnableObservable.md#scan)
- [scanAsync](rx_RunnableObservable.md#scanasync)
- [skipFirst](rx_RunnableObservable.md#skipfirst)
- [someSatisfy](rx_RunnableObservable.md#somesatisfy)
- [switchAll](rx_RunnableObservable.md#switchall)
- [takeFirst](rx_RunnableObservable.md#takefirst)
- [takeLast](rx_RunnableObservable.md#takelast)
- [takeWhile](rx_RunnableObservable.md#takewhile)
- [throwIfEmpty](rx_RunnableObservable.md#throwifempty)
- [toEnumerable](rx_RunnableObservable.md#toenumerable)
- [toFlowable](rx_RunnableObservable.md#toflowable)
- [toPromise](rx_RunnableObservable.md#topromise)
- [toReadonlyArray](rx_RunnableObservable.md#toreadonlyarray)
- [toRunnable](rx_RunnableObservable.md#torunnable)
- [zip](rx_RunnableObservable.md#zip)

## Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `snd` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>[] |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `maxBufferSize?`: `number`  }\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### create

▸ **create**<`T`\>(`f`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`\>\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `delay`: `number`  }\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### exhaust

▸ **exhaust**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `count`: `number` ; `delay`: `number` ; `delayStart`: `boolean` ; `start`: `number`  }\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Partial`<{ `delay`: `number` ; `delayStart`: `boolean`  }\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `snd` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>[] |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `maxBufferSize?`: `number` ; `maxConcurrency?`: `number`  }\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### never

▸ **never**<`T`\>(): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### switchAll

▸ **switchAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toPromise

▸ **toPromise**<`T`\>(`ctx`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA_1`, `TB_1`, `TC`\>(`a`, `b`, `c`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA_1` |
| `TB_1` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_1`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_1`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

▸ **zip**<`TA_2`, `TB_2`, `TC_1`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_2`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_2`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_1`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

▸ **zip**<`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_3`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_3`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_2`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_1`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

▸ **zip**<`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_4`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_4`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_3`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_2`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_1`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

▸ **zip**<`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_5`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_5`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_4`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_3`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_2`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_1`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

▸ **zip**<`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_6`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_6`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_5`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_4`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_3`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_2`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG_1`\> |
| `h` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TH`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

▸ **zip**<`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_7`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_7`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_6`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_5`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_4`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_3`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG_2`\> |
| `h` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TH_1`\> |
| `i` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TI`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>
