[Reactive-JS](../README.md) / concurrent/Observable

# Module: concurrent/Observable

## Table of contents

### Namespaces

- [Animation](concurrent_Observable.Animation.md)

### Module Interfaces

- [ObservableModule](../interfaces/concurrent_Observable.ObservableModule.md)

### Other Interfaces

- [ObservableComputation](../interfaces/concurrent_Observable.ObservableComputation.md)
- [RunnableComputation](../interfaces/concurrent_Observable.RunnableComputation.md)

### Type Aliases

- [Animation](concurrent_Observable.md#animation)
- [DeferredObservableOperator](concurrent_Observable.md#deferredobservableoperator)
- [MulticastObservableOperator](concurrent_Observable.md#multicastobservableoperator)
- [ObservableOperatorWithSideEffects](concurrent_Observable.md#observableoperatorwithsideeffects)
- [PureDeferredObservableOperator](concurrent_Observable.md#puredeferredobservableoperator)
- [PureObservableOperator](concurrent_Observable.md#pureobservableoperator)
- [Signature](concurrent_Observable.md#signature)
- [Type](concurrent_Observable.md#type)

### Variables

- [currentTime](concurrent_Observable.md#currenttime)

### Constructor Functions

- [computeRunnable](concurrent_Observable.md#computerunnable)

### Other Functions

- [backpressureStrategy](concurrent_Observable.md#backpressurestrategy)
- [buffer](concurrent_Observable.md#buffer)
- [catchError](concurrent_Observable.md#catcherror)
- [combineLatest](concurrent_Observable.md#combinelatest)
- [computeDeferred](concurrent_Observable.md#computedeferred)
- [concatMany](concurrent_Observable.md#concatmany)
- [concatWith](concurrent_Observable.md#concatwith)
- [create](concurrent_Observable.md#create)
- [decodeWithCharset](concurrent_Observable.md#decodewithcharset)
- [defer](concurrent_Observable.md#defer)
- [dispatchTo](concurrent_Observable.md#dispatchto)
- [distinctUntilChanged](concurrent_Observable.md#distinctuntilchanged)
- [empty](concurrent_Observable.md#empty)
- [encodeUtf8](concurrent_Observable.md#encodeutf8)
- [enqueue](concurrent_Observable.md#enqueue)
- [firstAsync](concurrent_Observable.md#firstasync)
- [forEach](concurrent_Observable.md#foreach)
- [fromEnumerable](concurrent_Observable.md#fromenumerable)
- [fromEventSource](concurrent_Observable.md#fromeventsource)
- [fromFactory](concurrent_Observable.md#fromfactory)
- [fromIterable](concurrent_Observable.md#fromiterable)
- [fromStore](concurrent_Observable.md#fromstore)
- [fromValue](concurrent_Observable.md#fromvalue)
- [ignoreElements](concurrent_Observable.md#ignoreelements)
- [isDeferred](concurrent_Observable.md#isdeferred)
- [isPure](concurrent_Observable.md#ispure)
- [isRunnable](concurrent_Observable.md#isrunnable)
- [keep](concurrent_Observable.md#keep)
- [lastAsync](concurrent_Observable.md#lastasync)
- [map](concurrent_Observable.md#map)
- [merge](concurrent_Observable.md#merge)
- [mergeMany](concurrent_Observable.md#mergemany)
- [never](concurrent_Observable.md#never)
- [onSubscribe](concurrent_Observable.md#onsubscribe)
- [pairwise](concurrent_Observable.md#pairwise)
- [reduce](concurrent_Observable.md#reduce)
- [repeat](concurrent_Observable.md#repeat)
- [retry](concurrent_Observable.md#retry)
- [run](concurrent_Observable.md#run)
- [scan](concurrent_Observable.md#scan)
- [skipFirst](concurrent_Observable.md#skipfirst)
- [spring](concurrent_Observable.md#spring)
- [subscribe](concurrent_Observable.md#subscribe)
- [subscribeOn](concurrent_Observable.md#subscribeon)
- [takeFirst](concurrent_Observable.md#takefirst)
- [takeLast](concurrent_Observable.md#takelast)
- [takeUntil](concurrent_Observable.md#takeuntil)
- [takeWhile](concurrent_Observable.md#takewhile)
- [throttle](concurrent_Observable.md#throttle)
- [throwIfEmpty](concurrent_Observable.md#throwifempty)
- [throws](concurrent_Observable.md#throws)
- [toReadonlyArray](concurrent_Observable.md#toreadonlyarray)
- [toReadonlyArrayAsync](concurrent_Observable.md#toreadonlyarrayasync)
- [withCurrentTime](concurrent_Observable.md#withcurrenttime)
- [withLatestFrom](concurrent_Observable.md#withlatestfrom)
- [zipLatest](concurrent_Observable.md#ziplatest)

### Transform Functions

- [multicast](concurrent_Observable.md#multicast)
- [share](concurrent_Observable.md#share)

## Type Aliases

### Animation

Ƭ **Animation**<`T`\>: [`Delay`](../interfaces/concurrent_Observable.Animation.Delay.md) \| [`Loop`](../interfaces/concurrent_Observable.Animation.Loop.md)<`T`\> \| `T` extends `number` ? [`KeyFrame`](../interfaces/concurrent_Observable.Animation.KeyFrame.md) \| [`Spring`](../interfaces/concurrent_Observable.Animation.Spring.md) \| [`Frame`](../interfaces/concurrent_Observable.Animation.Frame.md) & { `selector?`: `never`  } : [`KeyFrame`](../interfaces/concurrent_Observable.Animation.KeyFrame.md) \| [`Spring`](../interfaces/concurrent_Observable.Animation.Spring.md) \| [`Frame`](../interfaces/concurrent_Observable.Animation.Frame.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

___

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

### MulticastObservableOperator

Ƭ **MulticastObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\>

___

### ObservableOperatorWithSideEffects

Ƭ **ObservableOperatorWithSideEffects**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

___

### PureDeferredObservableOperator

Ƭ **PureDeferredObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `never`

___

### PureObservableOperator

Ƭ **PureObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

___

### Signature

Ƭ **Signature**: [`ObservableModule`](../interfaces/concurrent_Observable.ObservableModule.md)

___

### Type

Ƭ **Type**: [`ObservableComputation`](../interfaces/concurrent_Observable.ObservableComputation.md)

## Variables

### currentTime

• `Const` **currentTime**: [`Signature`](concurrent_Observable.md#signature)[``"currentTime"``]

## Constructor Functions

### computeRunnable

▸ **computeRunnable**<`T`\>(`computation`, `options?`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

___

## Other Functions

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

### catchError

▸ **catchError**<`T`\>(`onError`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`SideEffect1`](functions.md#sideeffect1)<`Error`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TH`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TI`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TI`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TH`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TH`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TH`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TH`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TI`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TI`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TI`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### computeDeferred

▸ **computeDeferred**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>)[] |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): <TObservable\>(`obs`: `TObservable`) => `TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

`fn`

▸ <`TObservable`\>(`obs`): `TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservable` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`, `TObservable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservable` |

##### Returns

`TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): <TObservable\>(`obs`: `TObservable`) => `TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>)[] |

#### Returns

`fn`

▸ <`TObservable`\>(`obs`): `TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservable` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`, `TObservable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservable` |

##### Returns

`TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

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

### defer

▸ **defer**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/concurrent.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

### empty

▸ **empty**<`T`\>(`options?`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

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

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>

___

### fromEventSource

▸ **fromEventSource**<`T`\>(): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>

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

### fromStore

▸ **fromStore**<`T`\>(): [`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/events.StoreLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/events.StoreLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`unknown`, `T`\>

___

### isDeferred

▸ **isDeferred**<`T`\>(`obs`): obs is ObservableLike<T\> & Object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is ObservableLike<T\> & Object

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
| `obs` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |

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
| `obs` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is ObservableLike<T\> & Object

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

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> |
| `...tail` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>)[] |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>)[] |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

___

### never

▸ **never**<`T`\>(): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`DisposableLike`](../interfaces/utils.DisposableLike.md)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<`Error`\>\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`PureDeferredObservableOperator`](concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`PureDeferredObservableOperator`](concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`PureDeferredObservableOperator`](concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`PureDeferredObservableOperator`](concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`PureDeferredObservableOperator`](concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredObservableOperator`](concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry?`): [`PureDeferredObservableOperator`](concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry?` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`PureDeferredObservableOperator`](concurrent_Observable.md#puredeferredobservableoperator)<`T`, `T`\>

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

### spring

▸ **spring**(`options?`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.damping?` | `number` |
| `options.precision?` | `number` |
| `options.stiffness?` | `number` |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`number`\>

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

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

`fn`

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>

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

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`unknown`\> |

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`unknown`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`DeferredObservableOperator`](concurrent_Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`unknown`\> |

#### Returns

[`DeferredObservableOperator`](concurrent_Observable.md#deferredobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`MulticastObservableOperator`](concurrent_Observable.md#multicastobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> |

#### Returns

[`MulticastObservableOperator`](concurrent_Observable.md#multicastobservableoperator)<`T`, `T`\>

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

### throws

▸ **throws**<`T`\>(): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.raise` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>, readonly `T`[]\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

▸ **toReadonlyArrayAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

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

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TH`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TI`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TI`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TH`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TH`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TA`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TA`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TC`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TC`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TD`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TD`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TE`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TE`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TF`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TF`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TG`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TG`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TH`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TH`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TI`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TI`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TI`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

## Transform Functions

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>, [`ReplayObservableLike`](../interfaces/concurrent.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>, [`ReplayObservableLike`](../interfaces/concurrent.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> \| [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>
