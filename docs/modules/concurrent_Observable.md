[Reactive-JS](../README.md) / concurrent/Observable

# Module: concurrent/Observable

## Table of contents

### Namespaces

- [Animation](concurrent_Observable.Animation.md)

### Module Interfaces

- [ObservableModule](../interfaces/concurrent_Observable.ObservableModule.md)

### Other Interfaces

- [DeferredSideEffectsObservableComputation](../interfaces/concurrent_Observable.DeferredSideEffectsObservableComputation.md)
- [MulticastObservableComputation](../interfaces/concurrent_Observable.MulticastObservableComputation.md)
- [ObservableComputation](../interfaces/concurrent_Observable.ObservableComputation.md)
- [PureRunnableComputation](../interfaces/concurrent_Observable.PureRunnableComputation.md)
- [RunnableWithSideEffectsComputation](../interfaces/concurrent_Observable.RunnableWithSideEffectsComputation.md)

### Type Aliases

- [Animation](concurrent_Observable.md#animation)
- [DeferredSideEffectsObservableOperator](concurrent_Observable.md#deferredsideeffectsobservableoperator)
- [MulticastObservableOperator](concurrent_Observable.md#multicastobservableoperator)
- [ObservableOperatorWithSideEffects](concurrent_Observable.md#observableoperatorwithsideeffects)
- [PureDeferredSideEffectsObservableOperator](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)
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
- [concat](concurrent_Observable.md#concat)
- [concatMany](concurrent_Observable.md#concatmany)
- [concatMap](concurrent_Observable.md#concatmap)
- [concatWith](concurrent_Observable.md#concatwith)
- [create](concurrent_Observable.md#create)
- [decodeWithCharset](concurrent_Observable.md#decodewithcharset)
- [defer](concurrent_Observable.md#defer)
- [dispatchTo](concurrent_Observable.md#dispatchto)
- [distinctUntilChanged](concurrent_Observable.md#distinctuntilchanged)
- [empty](concurrent_Observable.md#empty)
- [encodeUtf8](concurrent_Observable.md#encodeutf8)
- [endWith](concurrent_Observable.md#endwith)
- [enqueue](concurrent_Observable.md#enqueue)
- [exhaust](concurrent_Observable.md#exhaust)
- [exhaustMap](concurrent_Observable.md#exhaustmap)
- [firstAsync](concurrent_Observable.md#firstasync)
- [flatMapAsync](concurrent_Observable.md#flatmapasync)
- [flatMapIterable](concurrent_Observable.md#flatmapiterable)
- [flow](concurrent_Observable.md#flow)
- [forEach](concurrent_Observable.md#foreach)
- [forkMerge](concurrent_Observable.md#forkmerge)
- [fromAsyncFactory](concurrent_Observable.md#fromasyncfactory)
- [fromAsyncIterable](concurrent_Observable.md#fromasynciterable)
- [fromEnumerable](concurrent_Observable.md#fromenumerable)
- [fromEventSource](concurrent_Observable.md#fromeventsource)
- [fromFactory](concurrent_Observable.md#fromfactory)
- [fromIterable](concurrent_Observable.md#fromiterable)
- [fromPromise](concurrent_Observable.md#frompromise)
- [fromReadonlyArray](concurrent_Observable.md#fromreadonlyarray)
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
- [mergeAll](concurrent_Observable.md#mergeall)
- [mergeMany](concurrent_Observable.md#mergemany)
- [mergeMap](concurrent_Observable.md#mergemap)
- [never](concurrent_Observable.md#never)
- [onSubscribe](concurrent_Observable.md#onsubscribe)
- [pairwise](concurrent_Observable.md#pairwise)
- [reduce](concurrent_Observable.md#reduce)
- [repeat](concurrent_Observable.md#repeat)
- [retry](concurrent_Observable.md#retry)
- [run](concurrent_Observable.md#run)
- [scan](concurrent_Observable.md#scan)
- [scanMany](concurrent_Observable.md#scanmany)
- [skipFirst](concurrent_Observable.md#skipfirst)
- [spring](concurrent_Observable.md#spring)
- [startWith](concurrent_Observable.md#startwith)
- [subscribe](concurrent_Observable.md#subscribe)
- [subscribeOn](concurrent_Observable.md#subscribeon)
- [switchAll](concurrent_Observable.md#switchall)
- [switchMap](concurrent_Observable.md#switchmap)
- [takeFirst](concurrent_Observable.md#takefirst)
- [takeLast](concurrent_Observable.md#takelast)
- [takeUntil](concurrent_Observable.md#takeuntil)
- [takeWhile](concurrent_Observable.md#takewhile)
- [throttle](concurrent_Observable.md#throttle)
- [throwIfEmpty](concurrent_Observable.md#throwifempty)
- [throws](concurrent_Observable.md#throws)
- [toEventSource](concurrent_Observable.md#toeventsource)
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

### DeferredSideEffectsObservableOperator

Ƭ **DeferredSideEffectsObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>

___

### MulticastObservableOperator

Ƭ **MulticastObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>

___

### ObservableOperatorWithSideEffects

Ƭ **ObservableOperatorWithSideEffects**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

___

### PureDeferredSideEffectsObservableOperator

Ƭ **PureDeferredSideEffectsObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : `never`

___

### PureObservableOperator

Ƭ **PureObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : `TObservableIn` extends [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TIn`\> ? [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : `TObservableIn` extends [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TIn`\> ? [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TIn`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\> : `TObservableIn` extends [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TIn`\> ? [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`\>

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

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TF`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TG`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TH`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TH`\> |
| `i` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TI`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TF`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TG`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TH`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TF`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TG`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TH`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TI`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### computeDeferred

▸ **computeDeferred**<`T`\>(`computation`, `options?`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

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

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\> |
| `snd` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

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

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`unknown`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`unknown`\>[] |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`unknown`\>] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\>

▸ **concatMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

▸ **concatMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | `boolean` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

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
| `snd` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): <TObservable\>(`obs`: `TObservable`) => `TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

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

`fn`

▸ <`TObservable`\>(`obs`): `TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservable` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`, `TObservable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservable` |

##### Returns

`TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): <TObservable\>(`obs`: `TObservable`) => `TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>[] |

#### Returns

`fn`

▸ <`TObservable`\>(`obs`): `TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservable` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`, `TObservable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservable` |

##### Returns

`TObservable` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/concurrent.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

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

▸ **defer**<`T`\>(`f`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

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

▸ **empty**<`T`\>(`options?`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

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

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

#### Returns

[`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

### exhaust

▸ **exhaust**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

▸ **exhaust**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

▸ **exhaust**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

▸ **exhaust**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\>

▸ **exhaustMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

▸ **exhaustMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | `boolean` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

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

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](functions.md#function2)<`TA`, `AbortSignal`, `Promise`<`TB`\>\> |

#### Returns

`fn`

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`TB`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

### forkMerge

▸ **forkMerge**<`TOut`, `TObservableIn`, `TObservableOut`\>(`fst`, `snd`, `...tail`): `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`unknown`\> ? `TObservableOut` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\>\> : `TObservableOut` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> : `TObservableOut` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`unknown`\> ? `TObservableOut` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> : `TObservableOut` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOut` | `TOut` |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`unknown`, `TObservableIn`\> |
| `TObservableOut` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TOut`, `TObservableOut`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, `TObservableOut`\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, `TObservableOut`\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, `TObservableOut`\>[] |

#### Returns

`TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`unknown`\> ? `TObservableOut` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TOut`\>\> : `TObservableOut` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> : `TObservableOut` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`unknown`\> ? `TObservableOut` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> : `TObservableOut` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `never`

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

▸ **fromAsyncIterable**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

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

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

___

### fromPromise

▸ **fromPromise**<`T`\>(): [`Function1`](functions.md#function1)<`Promise`<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Promise`<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

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

▸ **fromValue**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`T`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`T`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

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

▸ **isDeferred**<`T`\>(`obs`): obs is DeferredObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is DeferredObservableLike<T\>

___

### isPure

▸ **isPure**<`T`\>(`obs`): obs is PureObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is PureObservableLike<T\>

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
| `obs` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableLike<T\>

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

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\> |
| `snd` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

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

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`T`\> |
| `snd` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

▸ **mergeAll**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

▸ **mergeAll**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>[] |

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
| `observables` | readonly [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\>

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

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

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`PureDeferredSideEffectsObservableOperator`](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`PureDeferredSideEffectsObservableOperator`](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`PureDeferredSideEffectsObservableOperator`](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`PureDeferredSideEffectsObservableOperator`](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`PureDeferredSideEffectsObservableOperator`](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredSideEffectsObservableOperator`](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry?`): [`PureDeferredSideEffectsObservableOperator`](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry?` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`PureDeferredSideEffectsObservableOperator`](concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](functions.md#sideeffect1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>

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

[`SideEffect1`](functions.md#sideeffect1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>

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

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TAcc`\>\>

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

▸ **spring**(`options?`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.damping?` | `number` |
| `options.precision?` | `number` |
| `options.stiffness?` | `number` |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`number`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`PureObservableOperator`](concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

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

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### switchAll

▸ **switchAll**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`T`\>\>

▸ **switchAll**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

▸ **switchAll**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

▸ **switchAll**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\>\>

▸ **switchMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

▸ **switchMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | `boolean` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

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
| `notifier` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`unknown`\> |

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

▸ **takeUntil**<`T`\>(`notifier`): [`DeferredSideEffectsObservableOperator`](concurrent_Observable.md#deferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`unknown`\> |

#### Returns

[`DeferredSideEffectsObservableOperator`](concurrent_Observable.md#deferredsideeffectsobservableoperator)<`T`, `T`\>

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

▸ **throws**<`T`\>(`options?`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

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
| `options.delay?` | `number` |
| `options.raise` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`T`\>, readonly `T`[]\>

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
| `other` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
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

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredSideEffectsObservableOperator`](concurrent_Observable.md#deferredsideeffectsobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredSideEffectsObservableOperator`](concurrent_Observable.md#deferredsideeffectsobservableoperator)<`TA`, `T`\>

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

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TF`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TG`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TH`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TH`\> |
| `i` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<`TI`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)<`TH`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TF`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TG`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TH`\> |

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TF`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TG`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TH`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`TI`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

## Transform Functions

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>, [`ReplayObservableLike`](../interfaces/concurrent.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)<`T`\> \| [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>, [`ReplayObservableLike`](../interfaces/concurrent.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)<`T`\>\>
