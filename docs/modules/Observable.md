[Reactive-JS](../README.md) / Observable

# Module: Observable

## Table of contents

### Interfaces

- [Signature](../interfaces/Observable.Signature.md)
- [Type](../interfaces/Observable.Type.md)

### Type Aliases

- [ObservableOperator](Observable.md#observableoperator)

### Functions

- [backpressureStrategy](Observable.md#backpressurestrategy)
- [decodeWithCharset](Observable.md#decodewithcharset)
- [defer](Observable.md#defer)
- [dispatchTo](Observable.md#dispatchto)
- [distinctUntilChanged](Observable.md#distinctuntilchanged)
- [encodeUtf8](Observable.md#encodeutf8)
- [enqueue](Observable.md#enqueue)
- [forEach](Observable.md#foreach)
- [ignoreElements](Observable.md#ignoreelements)
- [isDeferredObservable](Observable.md#isdeferredobservable)
- [isEnumerable](Observable.md#isenumerable)
- [isRunnable](Observable.md#isrunnable)
- [isSharedObservable](Observable.md#issharedobservable)
- [keep](Observable.md#keep)
- [lastAsync](Observable.md#lastasync)
- [map](Observable.md#map)
- [mapTo](Observable.md#mapto)
- [pairwise](Observable.md#pairwise)
- [pick](Observable.md#pick)
- [scan](Observable.md#scan)
- [skipFirst](Observable.md#skipfirst)
- [subscribe](Observable.md#subscribe)
- [takeFirst](Observable.md#takefirst)
- [takeLast](Observable.md#takelast)
- [takeWhile](Observable.md#takewhile)
- [throwIfEmpty](Observable.md#throwifempty)
- [toEventSource](Observable.md#toeventsource)
- [withCurrentTime](Observable.md#withcurrenttime)

## Type Aliases

### ObservableOperator

Ƭ **ObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\>) => `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

## Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**<`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`string`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`string`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`string`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`string`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`Uint8Array`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`string`, `TObservableIn`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`string`\> |

#### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`string`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`string`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`string`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`string`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`Uint8Array`\> : `never`

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ObservableOperator`](Observable.md#observableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`unknown`, `T`\>

___

### isDeferredObservable

▸ **isDeferredObservable**<`T`\>(`obs`): obs is DeferredObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is DeferredObservableLike<T\>

___

### isEnumerable

▸ **isEnumerable**<`T`\>(`obs`): obs is EnumerableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is EnumerableLike<T\>

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is RunnableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableLike<T\>

___

### isSharedObservable

▸ **isSharedObservable**<`T`\>(`obs`): obs is SharedObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is SharedObservableLike<T\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ObservableOperator`](Observable.md#observableoperator)<`T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKey`]\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `TAcc`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`number`, `TA`, `TB`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>
