[Reactive-JS](../README.md) / [Observable](../modules/Observable.md) / Signature

# Interface: Signature

[Observable](../modules/Observable.md).Signature

## Table of contents

### Properties

- [encodeUtf8](Observable.Signature.md#encodeutf8)

### Methods

- [backpressureStrategy](Observable.Signature.md#backpressurestrategy)
- [currentTime](Observable.Signature.md#currenttime)
- [decodeWithCharset](Observable.Signature.md#decodewithcharset)
- [defer](Observable.Signature.md#defer)
- [dispatchTo](Observable.Signature.md#dispatchto)
- [distinctUntilChanged](Observable.Signature.md#distinctuntilchanged)
- [enqueue](Observable.Signature.md#enqueue)
- [forEach](Observable.Signature.md#foreach)
- [generate](Observable.Signature.md#generate)
- [ignoreElements](Observable.Signature.md#ignoreelements)
- [isDeferredObservable](Observable.Signature.md#isdeferredobservable)
- [isEnumerable](Observable.Signature.md#isenumerable)
- [isRunnable](Observable.Signature.md#isrunnable)
- [isSharedObservable](Observable.Signature.md#issharedobservable)
- [keep](Observable.Signature.md#keep)
- [lastAsync](Observable.Signature.md#lastasync)
- [map](Observable.Signature.md#map)
- [mapTo](Observable.Signature.md#mapto)
- [pairwise](Observable.Signature.md#pairwise)
- [pick](Observable.Signature.md#pick)
- [scan](Observable.Signature.md#scan)
- [skipFirst](Observable.Signature.md#skipfirst)
- [subscribe](Observable.Signature.md#subscribe)
- [takeFirst](Observable.Signature.md#takefirst)
- [takeLast](Observable.Signature.md#takelast)
- [takeWhile](Observable.Signature.md#takewhile)
- [throwIfEmpty](Observable.Signature.md#throwifempty)
- [toEventSource](Observable.Signature.md#toeventsource)
- [withCurrentTime](Observable.Signature.md#withcurrenttime)

## Properties

### encodeUtf8

• **encodeUtf8**: [`ObservableOperator`](../modules/Observable.md#observableoperator)<`string`, `Uint8Array`\>

## Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### currentTime

▸ **currentTime**(`options?`): [`RunnableLike`](types.RunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`number`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`SharedObservableLike`](types.SharedObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`unknown`, `T`\>

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
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

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
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

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
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

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
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

#### Returns

obs is SharedObservableLike<T\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKey`]\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |
| `options?` | `undefined` |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`T`, `T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`number`, `TA`, `TB`\> |

#### Returns

[`ObservableOperator`](../modules/Observable.md#observableoperator)<`TA`, `TB`\>
