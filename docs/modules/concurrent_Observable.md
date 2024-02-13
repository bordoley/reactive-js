[Reactive-JS](../README.md) / concurrent/Observable

# Module: concurrent/Observable

## Table of contents

### Interfaces

- [DeferredObservableWithSideEffectsComputation](../interfaces/concurrent_Observable.DeferredObservableWithSideEffectsComputation.md)
- [MulticastObservableComputation](../interfaces/concurrent_Observable.MulticastObservableComputation.md)
- [ObservableModule](../interfaces/concurrent_Observable.ObservableModule.md)
- [PureRunnableComputation](../interfaces/concurrent_Observable.PureRunnableComputation.md)
- [PuredDeferredObservableComputation](../interfaces/concurrent_Observable.PuredDeferredObservableComputation.md)
- [RunnableWithSideEffectsComputation](../interfaces/concurrent_Observable.RunnableWithSideEffectsComputation.md)

### Type Aliases

- [ComputeMode](concurrent_Observable.md#computemode)
- [DeferringObservableOperator](concurrent_Observable.md#deferringobservableoperator)
- [ObservableOperatorWithSideEffects](concurrent_Observable.md#observableoperatorwithsideeffects)
- [PureStatefulObservableOperator](concurrent_Observable.md#purestatefulobservableoperator)
- [PureStatelessObservableOperator](concurrent_Observable.md#purestatelessobservableoperator)
- [Signature](concurrent_Observable.md#signature)
- [ThrottleMode](concurrent_Observable.md#throttlemode)

### Variables

- [BatchedComputeMode](concurrent_Observable.md#batchedcomputemode)
- [CombineLatestComputeMode](concurrent_Observable.md#combinelatestcomputemode)
- [DeferredObservableWithSideEffectsType](concurrent_Observable.md#deferredobservablewithsideeffectstype)
- [PureDeferredObservableType](concurrent_Observable.md#puredeferredobservabletype)
- [PureRunnableType](concurrent_Observable.md#purerunnabletype)
- [RunnableWithSideEffectsType](concurrent_Observable.md#runnablewithsideeffectstype)
- [ThrottleFirstMode](concurrent_Observable.md#throttlefirstmode)
- [ThrottleIntervalMode](concurrent_Observable.md#throttleintervalmode)
- [ThrottleLastMode](concurrent_Observable.md#throttlelastmode)
- [currentTime](concurrent_Observable.md#currenttime)

### Functions

- [backpressureStrategy](concurrent_Observable.md#backpressurestrategy)
- [buffer](concurrent_Observable.md#buffer)
- [catchError](concurrent_Observable.md#catcherror)
- [combineLatest](concurrent_Observable.md#combinelatest)
- [computeDeferred](concurrent_Observable.md#computedeferred)
- [computeRunnable](concurrent_Observable.md#computerunnable)
- [concat](concurrent_Observable.md#concat)
- [concatAll](concurrent_Observable.md#concatall)
- [concatMany](concurrent_Observable.md#concatmany)
- [concatMap](concurrent_Observable.md#concatmap)
- [concatWith](concurrent_Observable.md#concatwith)
- [create](concurrent_Observable.md#create)
- [debug](concurrent_Observable.md#debug)
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
- [forEach](concurrent_Observable.md#foreach)
- [forkMerge](concurrent_Observable.md#forkmerge)
- [fromAsyncFactory](concurrent_Observable.md#fromasyncfactory)
- [fromAsyncIterable](concurrent_Observable.md#fromasynciterable)
- [fromEnumerable](concurrent_Observable.md#fromenumerable)
- [fromEventSource](concurrent_Observable.md#fromeventsource)
- [fromIterable](concurrent_Observable.md#fromiterable)
- [fromPromise](concurrent_Observable.md#frompromise)
- [fromReadonlyArray](concurrent_Observable.md#fromreadonlyarray)
- [fromStore](concurrent_Observable.md#fromstore)
- [fromValue](concurrent_Observable.md#fromvalue)
- [generate](concurrent_Observable.md#generate)
- [ignoreElements](concurrent_Observable.md#ignoreelements)
- [keep](concurrent_Observable.md#keep)
- [keyFrame](concurrent_Observable.md#keyframe)
- [lastAsync](concurrent_Observable.md#lastasync)
- [log](concurrent_Observable.md#log)
- [map](concurrent_Observable.md#map)
- [merge](concurrent_Observable.md#merge)
- [mergeAll](concurrent_Observable.md#mergeall)
- [mergeMany](concurrent_Observable.md#mergemany)
- [mergeMap](concurrent_Observable.md#mergemap)
- [mergeWith](concurrent_Observable.md#mergewith)
- [multicast](concurrent_Observable.md#multicast)
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

## Type Aliases

### ComputeMode

Ƭ **ComputeMode**: typeof [`BatchedComputeMode`](concurrent_Observable.md#batchedcomputemode) \| typeof [`CombineLatestComputeMode`](concurrent_Observable.md#combinelatestcomputemode)

___

### DeferringObservableOperator

Ƭ **DeferringObservableOperator**\<`TIn`, `TOut`, `TObservableInBase`\>: \<TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TIn` | `TIn` |
| `TOut` | `TOut` |
| `TObservableInBase` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

#### Type declaration

▸ \<`TObservableIn`\>(`obs`): `TObservableIn` extends [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends `TObservableInBase` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

___

### ObservableOperatorWithSideEffects

Ƭ **ObservableOperatorWithSideEffects**\<`TIn`, `TOut`\>: \<TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ \<`TObservableIn`\>(`observable`): `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

___

### PureStatefulObservableOperator

Ƭ **PureStatefulObservableOperator**\<`TIn`, `TOut`, `TObservableInBase`\>: \<TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TIn` | `TIn` |
| `TOut` | `TOut` |
| `TObservableInBase` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

#### Type declaration

▸ \<`TObservableIn`\>(`observable`): `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends `TObservableInBase` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

___

### PureStatelessObservableOperator

Ƭ **PureStatelessObservableOperator**\<`TIn`, `TOut`\>: \<TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ \<`TObservableIn`\>(`observable`): `TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TIn`\> ? [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TOut`\> : `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TIn`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TIn`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>

___

### Signature

Ƭ **Signature**: [`ObservableModule`](../interfaces/concurrent_Observable.ObservableModule.md)

___

### ThrottleMode

Ƭ **ThrottleMode**: typeof [`ThrottleFirstMode`](concurrent_Observable.md#throttlefirstmode) \| typeof [`ThrottleLastMode`](concurrent_Observable.md#throttlelastmode) \| typeof [`ThrottleIntervalMode`](concurrent_Observable.md#throttleintervalmode)

## Variables

### BatchedComputeMode

• `Const` **BatchedComputeMode**: ``"batched"``

___

### CombineLatestComputeMode

• `Const` **CombineLatestComputeMode**: ``"combine-latest"``

___

### DeferredObservableWithSideEffectsType

• `Const` **DeferredObservableWithSideEffectsType**: `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md), typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\>

___

### PureDeferredObservableType

• `Const` **PureDeferredObservableType**: `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md), typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\>

___

### PureRunnableType

• `Const` **PureRunnableType**: `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md), typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\>

___

### RunnableWithSideEffectsType

• `Const` **RunnableWithSideEffectsType**: `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md), typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\>

___

### ThrottleFirstMode

• `Const` **ThrottleFirstMode**: ``"first"``

___

### ThrottleIntervalMode

• `Const` **ThrottleIntervalMode**: ``"interval"``

___

### ThrottleLastMode

• `Const` **ThrottleLastMode**: ``"last"``

___

### currentTime

• `Const` **currentTime**: [`Signature`](concurrent_Observable.md#signature)[``"currentTime"``]

## Functions

### backpressureStrategy

▸ **backpressureStrategy**\<`T`\>(`capacity`, `backpressureStrategy`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### buffer

▸ **buffer**\<`T`\>(`options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, readonly `T`[], [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

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

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, readonly `T`[], [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### catchError

▸ **catchError**\<`T`\>(`onError`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`SideEffect1`](functions.md#sideeffect1)\<`Error`\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### combineLatest

▸ **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TF`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TG`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TG`\> |
| `h` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TH`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TG`\> |
| `h` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TH`\> |
| `i` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TI`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TF`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TG`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TH`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TF`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TG`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TH`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TH`\> |
| `i` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TI`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TF`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TG`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TH`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TI`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### computeDeferred

▸ **computeDeferred**\<`T`\>(`computation`, `options?`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)\<`T`\> |
| `options?` | `Object` |
| `options.mode?` | [`ComputeMode`](concurrent_Observable.md#computemode) |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

___

### computeRunnable

▸ **computeRunnable**\<`T`\>(`computation`, `options?`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)\<`T`\> |
| `options?` | `Object` |
| `options.mode?` | [`ComputeMode`](concurrent_Observable.md#computemode) |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

___

### concat

▸ **concat**\<`T`\>(`fst`, `snd`, `...tail`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\> |
| `snd` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>[] |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

▸ **concat**\<`T`\>(`fst`, `snd`, `...tail`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> |
| `snd` | [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

▸ **concat**\<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

▸ **concat**\<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

▸ **concat**\<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> |
| `snd` | [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

▸ **concat**\<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`unknown`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

___

### concatAll

▸ **concatAll**\<`T`\>(): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

▸ **concatAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

▸ **concatAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`\>

▸ **concatAll**\<`T`\>(`options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>\>\>

▸ **concatAll**\<`T`\>(`options`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### concatMany

▸ **concatMany**\<`T`\>(`observables`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>[] |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

▸ **concatMany**\<`T`\>(`observables`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

▸ **concatMany**\<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

▸ **concatMany**\<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

▸ **concatMany**\<`T`\>(`observables`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>] |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

▸ **concatMany**\<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

___

### concatMap

▸ **concatMap**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\>\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

▸ **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

___

### concatWith

▸ **concatWith**\<`T`\>(`snd`, `...tail`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>[] |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **concatWith**\<`T`\>(`snd`, `...tail`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>[] |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

▸ **concatWith**\<`T`\>(`snd`, `...tail`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **concatWith**\<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`Function1`](functions.md#function1)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> \| [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### create

▸ **create**\<`T`\>(`f`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)\<[`ObserverLike`](../interfaces/concurrent.ObserverLike.md)\<`T`\>\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

___

### debug

▸ **debug**\<`T`\>(): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`ArrayBuffer`, `string`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`ArrayBuffer`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |
| `options.fatal?` | `boolean` |
| `options.ignoreBOM?` | `boolean` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`ArrayBuffer`, `string`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`ArrayBuffer`\>\>

___

### defer

▸ **defer**\<`T`\>(`f`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

___

### dispatchTo

▸ **dispatchTo**\<`T`\>(`dispatcher`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/concurrent.DispatcherLike.md)\<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**\<`T`\>(`options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)\<`T`\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### empty

▸ **empty**\<`T`\>(): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

▸ **empty**\<`T`\>(`options?`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

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

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`string`, `Uint8Array`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`string`\>\>

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`string`, `Uint8Array`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`string`\>\>

___

### endWith

▸ **endWith**\<`T`\>(`value`, `...values`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

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

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### enqueue

▸ **enqueue**\<`T`\>(`queue`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/utils.QueueableLike.md)\<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

___

### exhaust

▸ **exhaust**\<`T`\>(): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

▸ **exhaust**\<`T`\>(`options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

▸ **exhaust**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`\>

▸ **exhaust**\<`T`\>(`options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>\>\>

▸ **exhaust**\<`T`\>(`options`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### exhaustMap

▸ **exhaustMap**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\>\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

▸ **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

___

### firstAsync

▸ **firstAsync**\<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](functions.md#optional)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](functions.md#optional)\<`T`\>\>\>

___

### flatMapAsync

▸ **flatMapAsync**\<`TA`, `TB`\>(`f`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](functions.md#function2)\<`TA`, `AbortSignal`, `Promise`\<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

___

### flatMapIterable

▸ **flatMapIterable**\<`TA`, `TB`\>(`selector`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, `Iterable`\<`TB`\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

___

### forEach

▸ **forEach**\<`T`\>(`effect`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)\<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

___

### forkMerge

▸ **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): \<TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\>\>[] |

#### Returns

`fn`

▸ \<`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

▸ **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): \<TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\>\>[] |

#### Returns

`fn`

▸ \<`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

▸ **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): \<TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\>\>[] |

#### Returns

`fn`

▸ \<`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

▸ **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): \<TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\>\>[] |

#### Returns

`fn`

▸ \<`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

▸ **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): \<TObservableIn\>(`obs`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TOut`\>\>[] |

#### Returns

`fn`

▸ \<`TObservableIn`\>(`obs`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

▸ **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**\<`T`\>(): [`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`AbortSignal`, `Promise`\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`AbortSignal`, `Promise`\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**\<`T`\>(): [`Function1`](functions.md#function1)\<`AsyncIterable`\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)\<`AsyncIterable`\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**\<`T`\>(`options?`): [`Function1`](functions.md#function1)\<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)\<`T`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>

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

[`Function1`](functions.md#function1)\<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)\<`T`\>, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>

___

### fromEventSource

▸ **fromEventSource**\<`T`\>(): [`Function1`](functions.md#function1)\<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)\<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>\>

___

### fromIterable

▸ **fromIterable**\<`T`\>(`options?`): [`Function1`](functions.md#function1)\<`Iterable`\<`T`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>\>

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

[`Function1`](functions.md#function1)\<`Iterable`\<`T`\>, [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>\>

___

### fromPromise

▸ **fromPromise**\<`T`\>(): [`Function1`](functions.md#function1)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**\<`T`\>(`options?`): [`Function1`](functions.md#function1)\<readonly `T`[], [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<readonly `T`[], [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>

___

### fromStore

▸ **fromStore**\<`T`\>(): [`Function1`](functions.md#function1)\<[`StoreLike`](../interfaces/events.StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)\<[`StoreLike`](../interfaces/events.StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>\>

___

### fromValue

▸ **fromValue**\<`T`\>(`options?`): [`Function1`](functions.md#function1)\<`T`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>

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

[`Function1`](functions.md#function1)\<`T`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>

___

### generate

▸ **generate**\<`T`\>(`generator`, `initialValue`, `options?`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)\<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)\<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

___

### ignoreElements

▸ **ignoreElements**\<`T`\>(): [`PureStatelessObservableOperator`](concurrent_Observable.md#purestatelessobservableoperator)\<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureStatelessObservableOperator`](concurrent_Observable.md#purestatelessobservableoperator)\<`unknown`, `T`\>

___

### keep

▸ **keep**\<`T`\>(`predicate`): [`PureStatelessObservableOperator`](concurrent_Observable.md#purestatelessobservableoperator)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)\<`T`\> |

#### Returns

[`PureStatelessObservableOperator`](concurrent_Observable.md#purestatelessobservableoperator)\<`T`, `T`\>

___

### keyFrame

▸ **keyFrame**(`duration`, `options?`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `options?` | `Object` |
| `options.easing?` | [`Function1`](functions.md#function1)\<`number`, `number`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`number`\>

___

### lastAsync

▸ **lastAsync**\<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](functions.md#optional)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](functions.md#optional)\<`T`\>\>\>

___

### log

▸ **log**\<`T`\>(): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

___

### map

▸ **map**\<`TA`, `TB`\>(`selector`): [`PureStatelessObservableOperator`](concurrent_Observable.md#purestatelessobservableoperator)\<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, `TB`\> |

#### Returns

[`PureStatelessObservableOperator`](concurrent_Observable.md#purestatelessobservableoperator)\<`TA`, `TB`\>

___

### merge

▸ **merge**\<`T`\>(`fst`, `snd`, `...tail`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\> |
| `snd` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>[] |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

▸ **merge**\<`T`\>(`fst`, `snd`, `...tail`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> |
| `snd` | [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

▸ **merge**\<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

▸ **merge**\<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> |
| `snd` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> |
| `...tail` | readonly [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

▸ **merge**\<`T`\>(`fst`, `snd`, `...tail`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`T`\> |
| `snd` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`T`\> |
| `...tail` | readonly [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

▸ **merge**\<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

___

### mergeAll

▸ **mergeAll**\<`T`\>(`options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

▸ **mergeAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

▸ **mergeAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`\>

▸ **mergeAll**\<`T`\>(`options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>\>\>

▸ **mergeAll**\<`T`\>(`options?`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### mergeMany

▸ **mergeMany**\<`T`\>(`observables`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>[] |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

▸ **mergeMany**\<`T`\>(`observables`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

▸ **mergeMany**\<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\>

▸ **mergeMany**\<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

▸ **mergeMany**\<`T`\>(`observables`): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

▸ **mergeMany**\<`T`\>(`observables`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`T`\>[] |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>

▸ **mergeMany**\<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>[] |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>

___

### mergeMap

▸ **mergeMap**\<`TA`, `TB`\>(`selector`, `options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

▸ **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

___

### mergeWith

▸ **mergeWith**\<`T`\>(`snd`, `...tail`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>[] |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **mergeWith**\<`T`\>(`snd`, `...tail`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>[] |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

▸ **mergeWith**\<`T`\>(`snd`, `...tail`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> |
| `...tail` | readonly [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>[] |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **mergeWith**\<`T`\>(`snd`, `...tail`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`T`\> |
| `...tail` | readonly [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`T`\>[] |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **mergeWith**\<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>[] |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### multicast

▸ **multicast**\<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.autoDispose?` | `boolean` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### never

▸ **never**\<`T`\>(): [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\>

___

### onSubscribe

▸ **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)\<[`DisposableLike`](../interfaces/utils.DisposableLike.md)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

▸ **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)\<[`SideEffect1`](functions.md#sideeffect1)\<[`Optional`](functions.md#optional)\<`Error`\>\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

▸ **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

___

### pairwise

▸ **pairwise**\<`T`\>(): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, [`Tuple2`](functions.md#tuple2)\<`T`, `T`\>, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, [`Tuple2`](functions.md#tuple2)\<`T`, `T`\>, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### reduce

▸ **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)\<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)\<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `TAcc`\>

___

### repeat

▸ **repeat**\<`T`\>(`predicate`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)\<`number`\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>

▸ **repeat**\<`T`\>(`count`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>

▸ **repeat**\<`T`\>(): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>

___

### retry

▸ **retry**\<`T`\>(`shouldRetry?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry?` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>

___

### run

▸ **run**\<`T`\>(`options?`): [`SideEffect1`](functions.md#sideeffect1)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>\>

___

### scan

▸ **scan**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `TAcc`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)\<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)\<`TAcc`\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `TAcc`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### scanMany

▸ **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `TAcc`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)\<`TAcc`, `T`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)\<`TAcc`\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `TAcc`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `TAcc`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)\<`TAcc`, `T`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)\<`TAcc`\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `TAcc`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)\<`TAcc`, `T`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)\<`TAcc`\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `TAcc`\>

▸ **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`T`, `TAcc`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)\<`TAcc`, `T`, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)\<`TAcc`\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`T`, `TAcc`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)\<`TAcc`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)\<`TAcc`\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TAcc`\>\>

___

### skipFirst

▸ **skipFirst**\<`T`\>(`options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

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

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### spring

▸ **spring**(`options?`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.damping?` | `number` |
| `options.precision?` | `number` |
| `options.stiffness?` | `number` |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`number`\>

___

### startWith

▸ **startWith**\<`T`\>(`value`, `...values`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

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

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### subscribe

▸ **subscribe**\<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**\<`T`\>(`scheduler`, `options?`): \<TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |

#### Returns

`fn`

▸ \<`TObservableIn`\>(`observable`): `TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`T`\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` extends [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>

___

### switchAll

▸ **switchAll**\<`T`\>(): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

▸ **switchAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\>

▸ **switchAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, `T`\>

▸ **switchAll**\<`T`\>(`options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`T`\>\>\>

▸ **switchAll**\<`T`\>(`options`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<[`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### switchMap

▸ **switchMap**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\>\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `TB`\>

▸ **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)\<`TA`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`TB`\>\> |
| `options` | `Object` |
| `options.innerType` | `Pick`\<[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, typeof [`ObservableLike_isDeferred`](concurrent.md#observablelike_isdeferred) \| typeof [`ObservableLike_isMulticasted`](concurrent.md#observablelike_ismulticasted) \| typeof [`ObservableLike_isPure`](concurrent.md#observablelike_ispure) \| typeof [`ObservableLike_isRunnable`](concurrent.md#observablelike_isrunnable)\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

___

### takeFirst

▸ **takeFirst**\<`T`\>(`options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

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

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### takeLast

▸ **takeLast**\<`T`\>(`options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

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

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### takeUntil

▸ **takeUntil**\<`T`\>(`notifier`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`unknown`\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

▸ **takeUntil**\<`T`\>(`notifier`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`unknown`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`T`, `T`\>

▸ **takeUntil**\<`T`\>(`notifier`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`unknown`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

▸ **takeUntil**\<`T`\>(`notifier`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`unknown`\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### takeWhile

▸ **takeWhile**\<`T`\>(`predicate`, `options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)\<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### throttle

▸ **throttle**\<`T`\>(`duration`, `options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `options?` | `Object` |
| `options.mode?` | [`ThrottleMode`](concurrent_Observable.md#throttlemode) |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### throwIfEmpty

▸ **throwIfEmpty**\<`T`\>(`factory`, `options?`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)\<`unknown`\> |
| `options?` | `undefined` |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`T`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>\>

___

### throws

▸ **throws**\<`T`\>(`options?`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.raise?` | [`Factory`](functions.md#factory)\<`unknown`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>

___

### toEventSource

▸ **toEventSource**\<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**\<`T`\>(`options?`): [`Function1`](functions.md#function1)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, readonly `T`[]\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**\<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, `Promise`\<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, `Promise`\<readonly `T`[]\>\>

___

### withCurrentTime

▸ **withCurrentTime**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)\<`number`, `TA`, `TB`\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `TB`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

___

### withLatestFrom

▸ **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)\<`TA`, `TB`, `T`\> |

#### Returns

[`PureStatefulObservableOperator`](concurrent_Observable.md#purestatefulobservableoperator)\<`TA`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

▸ **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)\<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](concurrent_Observable.md#observableoperatorwithsideeffects)\<`TA`, `T`\>

▸ **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)\<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

▸ **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)\<`TA`, `TB`, `T`\> |

#### Returns

[`DeferringObservableOperator`](concurrent_Observable.md#deferringobservableoperator)\<`TA`, `T`, [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\>\>

___

### zipLatest

▸ **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TF`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TG`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TG`\> |
| `h` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TH`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TA`\> |
| `b` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TB`\> |
| `c` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TC`\> |
| `d` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TD`\> |
| `e` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TE`\> |
| `f` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TF`\> |
| `g` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TG`\> |
| `h` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TH`\> |
| `i` | [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`TI`\> |

#### Returns

[`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TF`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TG`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TH`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](../interfaces/concurrent.RunnableWithSideEffectsLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TF`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TG`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TH`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TH`\> |
| `i` | [`PureObservableLike`](../interfaces/concurrent.PureObservableLike.md)\<`TI`\> |

#### Returns

[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](functions.md#tuple2)\<`TA`, `TB`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](functions.md#tuple3)\<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](functions.md#tuple4)\<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple5`](functions.md#tuple5)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TF`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple6`](functions.md#tuple6)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TG`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple7`](functions.md#tuple7)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TH`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple8`](functions.md#tuple8)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`TI`\> |

#### Returns

[`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<[`Tuple9`](functions.md#tuple9)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>
