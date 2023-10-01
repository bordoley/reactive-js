[Reactive-JS](../README.md) / concurrent/Observable

# Module: concurrent/Observable

## Table of contents

### Module Interfaces

- [ObservableModule](../interfaces/concurrent_Observable.ObservableModule.md)

### Type Aliases

- [DeferredObservableOperator](concurrent_Observable.md#deferredobservableoperator)
- [ObservableOperatorWithSideEffects](concurrent_Observable.md#observableoperatorwithsideeffects)
- [PureObservableOperator](concurrent_Observable.md#pureobservableoperator)
- [Signature](concurrent_Observable.md#signature)

### Functions

- [backpressureStrategy](concurrent_Observable.md#backpressurestrategy)
- [buffer](concurrent_Observable.md#buffer)
- [create](concurrent_Observable.md#create)
- [decodeWithCharset](concurrent_Observable.md#decodewithcharset)
- [distinctUntilChanged](concurrent_Observable.md#distinctuntilchanged)
- [enqueue](concurrent_Observable.md#enqueue)
- [forEach](concurrent_Observable.md#foreach)
- [fromIterable](concurrent_Observable.md#fromiterable)
- [keep](concurrent_Observable.md#keep)
- [map](concurrent_Observable.md#map)
- [pairwise](concurrent_Observable.md#pairwise)
- [run](concurrent_Observable.md#run)
- [scan](concurrent_Observable.md#scan)
- [skipFirst](concurrent_Observable.md#skipfirst)
- [subscribe](concurrent_Observable.md#subscribe)
- [takeFirst](concurrent_Observable.md#takefirst)
- [takeLast](concurrent_Observable.md#takelast)
- [takeWhile](concurrent_Observable.md#takewhile)
- [throttle](concurrent_Observable.md#throttle)
- [throwIfEmpty](concurrent_Observable.md#throwifempty)
- [withCurrentTime](concurrent_Observable.md#withcurrenttime)
- [withLatestFrom](concurrent_Observable.md#withlatestfrom)

## Type Aliases

### DeferredObservableOperator

Ƭ **DeferredObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\>

___

### ObservableOperatorWithSideEffects

Ƭ **ObservableOperatorWithSideEffects**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `never`

___

### PureObservableOperator

Ƭ **PureObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : `never`

___

### Signature

Ƭ **Signature**: [`ObservableModule`](../interfaces/concurrent_Observable.ObservableModule.md)

## Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, readonly `T`[]\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, readonly `T`[]\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/concurrent.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/utils.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](functions.md#sideeffect1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `TAcc`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `options?` | `Object` |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

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

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableOperator`](concurrent_Observable.md#deferredobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableOperator`](concurrent_Observable.md#deferredobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>
