[Reactive-JS](../README.md) / [concurrent/Observable](../modules/concurrent_Observable.md) / ObservableModule

# Interface: ObservableModule

[concurrent/Observable](../modules/concurrent_Observable.md).ObservableModule

## Hierarchy

- [`PureComputationModule`](computation.PureComputationModule.md)<[`ObservableComputation`](concurrent_Observable.ObservableComputation.md)\>

  ↳ **`ObservableModule`**

## Table of contents

### Methods

- [backpressureStrategy](concurrent_Observable.ObservableModule.md#backpressurestrategy)
- [buffer](concurrent_Observable.ObservableModule.md#buffer)
- [create](concurrent_Observable.ObservableModule.md#create)
- [decodeWithCharset](concurrent_Observable.ObservableModule.md#decodewithcharset)
- [dispatchTo](concurrent_Observable.ObservableModule.md#dispatchto)
- [distinctUntilChanged](concurrent_Observable.ObservableModule.md#distinctuntilchanged)
- [empty](concurrent_Observable.ObservableModule.md#empty)
- [encodeUtf8](concurrent_Observable.ObservableModule.md#encodeutf8)
- [enqueue](concurrent_Observable.ObservableModule.md#enqueue)
- [forEach](concurrent_Observable.ObservableModule.md#foreach)
- [fromIterable](concurrent_Observable.ObservableModule.md#fromiterable)
- [ignoreElements](concurrent_Observable.ObservableModule.md#ignoreelements)
- [isPure](concurrent_Observable.ObservableModule.md#ispure)
- [isRunnable](concurrent_Observable.ObservableModule.md#isrunnable)
- [keep](concurrent_Observable.ObservableModule.md#keep)
- [map](concurrent_Observable.ObservableModule.md#map)
- [onSubscribe](concurrent_Observable.ObservableModule.md#onsubscribe)
- [pairwise](concurrent_Observable.ObservableModule.md#pairwise)
- [reduce](concurrent_Observable.ObservableModule.md#reduce)
- [run](concurrent_Observable.ObservableModule.md#run)
- [scan](concurrent_Observable.ObservableModule.md#scan)
- [skipFirst](concurrent_Observable.ObservableModule.md#skipfirst)
- [subscribe](concurrent_Observable.ObservableModule.md#subscribe)
- [takeFirst](concurrent_Observable.ObservableModule.md#takefirst)
- [takeLast](concurrent_Observable.ObservableModule.md#takelast)
- [takeWhile](concurrent_Observable.ObservableModule.md#takewhile)
- [throttle](concurrent_Observable.ObservableModule.md#throttle)
- [throwIfEmpty](concurrent_Observable.ObservableModule.md#throwifempty)
- [withCurrentTime](concurrent_Observable.ObservableModule.md#withcurrenttime)
- [withLatestFrom](concurrent_Observable.ObservableModule.md#withlatestfrom)

## Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, readonly `T`[]\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, readonly `T`[]\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[buffer](computation.PureComputationModule.md#buffer)

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ObserverLike`](concurrent.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`ArrayBuffer`, `string`\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[decodeWithCharset](computation.PureComputationModule.md#decodewithcharset)

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](rx.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[distinctUntilChanged](computation.PureComputationModule.md#distinctuntilchanged)

___

### empty

▸ **empty**<`T`\>(): [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](utils.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`unknown`, `T`\>

___

### isPure

▸ **isPure**<`T`\>(`obs`): obs is ObservableLike<T\> & Object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is ObservableLike<T\> & Object

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is ObservableLike<T\> & Object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is ObservableLike<T\> & Object

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[keep](computation.PureComputationModule.md#keep)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[map](computation.PureComputationModule.md#map)

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`DisposableLike`](utils.DisposableLike.md)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](../modules/functions.md#sideeffect) |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[pairwise](computation.PureComputationModule.md#pairwise)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>, `TAcc`\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

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

[`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `TAcc`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `TAcc`\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[scan](computation.PureComputationModule.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[skipFirst](computation.PureComputationModule.md#skipfirst)

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[takeFirst](computation.PureComputationModule.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computation.PureComputationModule.md).[takeWhile](computation.PureComputationModule.md#takewhile)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableOperator`](../modules/concurrent_Observable.md#deferredobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableOperator`](../modules/concurrent_Observable.md#deferredobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>
