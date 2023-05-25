[Reactive-JS](../README.md) / Observable

# Module: Observable

## Table of contents

### Namespaces

- [Animation](Observable.Animation.md)

### Container Interfaces

- [ObservableContainer](../interfaces/Observable.ObservableContainer.md)

### Module Interfaces

- [ObservableModule](../interfaces/Observable.ObservableModule.md)

### Type Aliases

- [Animation](Observable.md#animation)
- [DeferredObservableBoundedObservableOperatorWithSideEffects](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)
- [DeferredObservableOperator](Observable.md#deferredobservableoperator)
- [MulticastObservableBoundedPureObservableOperator](Observable.md#multicastobservableboundedpureobservableoperator)
- [ObservableOperator](Observable.md#observableoperator)
- [ObservableOperatorWithSideEffects](Observable.md#observableoperatorwithsideeffects)
- [RunnableBoundedObservableOperatorWithSideEffects](Observable.md#runnableboundedobservableoperatorwithsideeffects)
- [Signature](Observable.md#signature)
- [Type](Observable.md#type)

### Constructor Functions

- [animate](Observable.md#animate)
- [combineLatest](Observable.md#combinelatest)
- [compute](Observable.md#compute)
- [concat](Observable.md#concat)

### Operator Functions

- [backpressureStrategy](Observable.md#backpressurestrategy)
- [buffer](Observable.md#buffer)
- [catchError](Observable.md#catcherror)
- [flatMapIterable](Observable.md#flatmapiterable)
- [repeat](Observable.md#repeat)
- [retry](Observable.md#retry)

### Other Functions

- [concatAll](Observable.md#concatall)
- [concatMany](Observable.md#concatmany)
- [concatMap](Observable.md#concatmap)
- [concatWith](Observable.md#concatwith)
- [contains](Observable.md#contains)
- [create](Observable.md#create)
- [createPublisher](Observable.md#createpublisher)
- [createRefCountedPublisher](Observable.md#createrefcountedpublisher)
- [currentTime](Observable.md#currenttime)
- [decodeWithCharset](Observable.md#decodewithcharset)
- [defer](Observable.md#defer)
- [delay](Observable.md#delay)
- [dispatchTo](Observable.md#dispatchto)
- [distinctUntilChanged](Observable.md#distinctuntilchanged)
- [empty](Observable.md#empty)
- [encodeUtf8](Observable.md#encodeutf8)
- [endWith](Observable.md#endwith)
- [enqueue](Observable.md#enqueue)
- [enumerate](Observable.md#enumerate)
- [everySatisfy](Observable.md#everysatisfy)
- [exhaust](Observable.md#exhaust)
- [exhaustMap](Observable.md#exhaustmap)
- [first](Observable.md#first)
- [firstAsync](Observable.md#firstasync)
- [flatMapAsync](Observable.md#flatmapasync)
- [flow](Observable.md#flow)
- [forEach](Observable.md#foreach)
- [forkMerge](Observable.md#forkmerge)
- [fromAsyncFactory](Observable.md#fromasyncfactory)
- [fromFactory](Observable.md#fromfactory)
- [fromIterable](Observable.md#fromiterable)
- [fromOptional](Observable.md#fromoptional)
- [fromReadonlyArray](Observable.md#fromreadonlyarray)
- [fromValue](Observable.md#fromvalue)
- [generate](Observable.md#generate)
- [ignoreElements](Observable.md#ignoreelements)
- [isDeferredObservable](Observable.md#isdeferredobservable)
- [isEnumerable](Observable.md#isenumerable)
- [isMulticastObservable](Observable.md#ismulticastobservable)
- [isPure](Observable.md#ispure)
- [isRunnable](Observable.md#isrunnable)
- [keep](Observable.md#keep)
- [keepType](Observable.md#keeptype)
- [last](Observable.md#last)
- [lastAsync](Observable.md#lastasync)
- [map](Observable.md#map)
- [mapTo](Observable.md#mapto)
- [merge](Observable.md#merge)
- [mergeAll](Observable.md#mergeall)
- [mergeMany](Observable.md#mergemany)
- [mergeMap](Observable.md#mergemap)
- [mergeWith](Observable.md#mergewith)
- [never](Observable.md#never)
- [noneSatisfy](Observable.md#nonesatisfy)
- [onSubscribe](Observable.md#onsubscribe)
- [pairwise](Observable.md#pairwise)
- [pick](Observable.md#pick)
- [reduce](Observable.md#reduce)
- [run](Observable.md#run)
- [scan](Observable.md#scan)
- [skipFirst](Observable.md#skipfirst)
- [someSatisfy](Observable.md#somesatisfy)
- [startWith](Observable.md#startwith)
- [subscribe](Observable.md#subscribe)
- [subscribeOn](Observable.md#subscribeon)
- [switchAll](Observable.md#switchall)
- [switchMap](Observable.md#switchmap)
- [takeFirst](Observable.md#takefirst)
- [takeLast](Observable.md#takelast)
- [takeUntil](Observable.md#takeuntil)
- [takeWhile](Observable.md#takewhile)
- [throttle](Observable.md#throttle)
- [throwIfEmpty](Observable.md#throwifempty)
- [throws](Observable.md#throws)
- [toEventSource](Observable.md#toeventsource)
- [toIterable](Observable.md#toiterable)
- [toReadonlyArray](Observable.md#toreadonlyarray)
- [toReadonlyArrayAsync](Observable.md#toreadonlyarrayasync)
- [withCurrentTime](Observable.md#withcurrenttime)
- [withLatestFrom](Observable.md#withlatestfrom)
- [zip](Observable.md#zip)
- [zipLatest](Observable.md#ziplatest)
- [zipWith](Observable.md#zipwith)

### Transform Functions

- [multicast](Observable.md#multicast)
- [share](Observable.md#share)

## Type Aliases

### Animation

Ƭ **Animation**<`T`\>: [`Delay`](../interfaces/Observable.Animation.Delay.md) \| [`Loop`](../interfaces/Observable.Animation.Loop.md)<`T`\> \| `T` extends `number` ? [`KeyFrame`](../interfaces/Observable.Animation.KeyFrame.md) \| [`Spring`](../interfaces/Observable.Animation.Spring.md) \| [`Frame`](../interfaces/Observable.Animation.Frame.md) & { `selector?`: `never`  } : [`KeyFrame`](../interfaces/Observable.Animation.KeyFrame.md) \| [`Spring`](../interfaces/Observable.Animation.Spring.md) \| [`Frame`](../interfaces/Observable.Animation.Frame.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

___

### DeferredObservableBoundedObservableOperatorWithSideEffects

Ƭ **DeferredObservableBoundedObservableOperatorWithSideEffects**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

___

### DeferredObservableOperator

Ƭ **DeferredObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TOut`\> : `never`

___

### MulticastObservableBoundedPureObservableOperator

Ƭ **MulticastObservableBoundedPureObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

___

### ObservableOperator

Ƭ **ObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : `TObservableIn` extends [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TIn`\> ? [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TOut`\> : `TObservableIn` extends [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TIn`\> ? [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : `TObservableIn` extends [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TIn`\> ? [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TOut`\> : `TObservableIn` extends [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TIn`\> ? [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : `TObservableIn` extends [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TIn`\> ? [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TOut`\> : `TObservableIn` extends [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TIn`\> ? [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

___

### ObservableOperatorWithSideEffects

Ƭ **ObservableOperatorWithSideEffects**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TIn`\> ? [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\>

___

### RunnableBoundedObservableOperatorWithSideEffects

Ƭ **RunnableBoundedObservableOperatorWithSideEffects**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : [`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`TOut`\>

___

### Signature

Ƭ **Signature**: [`ObservableModule`](../interfaces/Observable.ObservableModule.md)

___

### Type

Ƭ **Type**: [`ObservableContainer`](../interfaces/Observable.ObservableContainer.md)

## Constructor Functions

### animate

▸ **animate**<`T`\>(`configs`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`Animation`](Observable.md#animation)<`T`\> \| readonly [`Animation`](Observable.md#animation)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

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

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\> |
| `snd` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>[] |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> |
| `snd` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

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

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, readonly `T`[]\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`SideEffect1`](functions.md#sideeffect1)<`Error`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

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

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`DeferredObservableOperator`](Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`DeferredObservableOperator`](Observable.md#deferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`DeferredObservableOperator`](Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`DeferredObservableOperator`](Observable.md#deferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`DeferredObservableOperator`](Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableOperator`](Observable.md#deferredobservableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`DeferredObservableOperator`](Observable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`DeferredObservableOperator`](Observable.md#deferredobservableoperator)<`T`, `T`\>

___

## Other Functions

### concatAll

▸ **concatAll**<`T`\>(): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>[] |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>] |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\>\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>[] |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

___

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `boolean`\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/types.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### createPublisher

▸ **createPublisher**<`T`\>(`options?`): [`PublisherLike`](../interfaces/types.PublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`PublisherLike`](../interfaces/types.PublisherLike.md)<`T`\>

___

### createRefCountedPublisher

▸ **createRefCountedPublisher**<`T`\>(`options?`): [`PublisherLike`](../interfaces/types.PublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`PublisherLike`](../interfaces/types.PublisherLike.md)<`T`\>

___

### currentTime

▸ **currentTime**(): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`number`\>

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`number`\>

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
| `f` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### delay

▸ **delay**<`T`\>(`delay`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay` | `number` |
| `options?` | `Object` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`ObservableOperator`](Observable.md#observableoperator)<`string`, `Uint8Array`\>

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `boolean`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\>\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

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

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### forkMerge

▸ **forkMerge**<`TOut`, `TObservableIn`, `TObservableOut`\>(`fst`, `snd`, `...tail`): `TObservableIn` extends [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOut` | `TOut` |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`unknown`, `TObservableIn`\> |
| `TObservableOut` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`, `TObservableOut`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, `TObservableOut`\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, `TObservableOut`\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, `TObservableOut`\>[] |

#### Returns

`TObservableIn` extends [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TOut`\> ? [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\> : [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`unknown`, `T`\>

___

### isDeferredObservable

▸ **isDeferredObservable**<`T`\>(`obs`): obs is DeferredObservableBaseLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is DeferredObservableBaseLike<T\>

___

### isEnumerable

▸ **isEnumerable**<`T`\>(`obs`): obs is EnumerableBaseLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is EnumerableBaseLike<T\>

___

### isMulticastObservable

▸ **isMulticastObservable**<`T`\>(`obs`): obs is MulticastObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is MulticastObservableLike<T\>

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
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is PureObservableLike<T\>

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is RunnableBaseLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableBaseLike<T\>

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

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

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

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\> |
| `snd` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\> |
| `...tail` | readonly [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>[] |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\>[] |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>[] |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

___

### never

▸ **never**<`T`\>(): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `boolean`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`DisposableLike`](../interfaces/types.DisposableLike.md)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<`Error`\>\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `TAcc`\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](functions.md#sideeffect1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>

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

[`SideEffect1`](functions.md#sideeffect1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>

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

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, `boolean`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\>\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

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

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`unknown`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`unknown`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`MulticastObservableBoundedPureObservableOperator`](Observable.md#multicastobservableboundedpureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`unknown`\> |

#### Returns

[`MulticastObservableBoundedPureObservableOperator`](Observable.md#multicastobservableboundedpureobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

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

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

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

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### throws

▸ **throws**<`T`\>(): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

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

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`T`\>, `Iterable`<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>, readonly `T`[]\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

▸ **toReadonlyArrayAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

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

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`, `TOther`\>(`other`, `selector`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `T` | `T` |
| `TOther` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TE`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TF`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TF`\> |
| `g` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TG`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TF`\> |
| `g` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TG`\> |
| `h` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TH`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TA`\> |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TF`\> |
| `g` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TG`\> |
| `h` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TH`\> |
| `i` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TI`\> |

#### Returns

[`EnumerableWithSideEffectsLike`](../interfaces/types.EnumerableWithSideEffectsLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TE`\> |
| `f` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TE`\> |
| `f` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TF`\> |
| `g` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TE`\> |
| `f` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TF`\> |
| `g` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TG`\> |
| `h` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\> |
| `b` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\> |
| `c` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TC`\> |
| `d` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TD`\> |
| `e` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TE`\> |
| `f` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TF`\> |
| `g` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TG`\> |
| `h` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TH`\> |
| `i` | [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TE`\> |
| `f` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TE`\> |
| `f` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TF`\> |
| `g` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TE`\> |
| `f` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TF`\> |
| `g` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TG`\> |
| `h` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TA`\> |
| `b` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TB`\> |
| `c` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TC`\> |
| `d` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TD`\> |
| `e` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TE`\> |
| `f` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TF`\> |
| `g` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TG`\> |
| `h` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TH`\> |
| `i` | [`DeferredObservableBaseLike`](../interfaces/types.DeferredObservableBaseLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TE`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TF`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TB`\> |
| `c` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TC`\> |
| `d` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TD`\> |
| `e` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TE`\> |
| `f` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TF`\> |
| `g` | [`EnumerableBaseLike`](../interfaces/types.EnumerableBaseLike.md)<`TG`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](Observable.md#observableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableBoundedObservableOperatorWithSideEffects`](Observable.md#runnableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableBoundedObservableOperatorWithSideEffects`](Observable.md#deferredobservableboundedobservableoperatorwithsideeffects)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

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
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

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
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

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
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

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
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

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
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TH`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

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
| `b` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TI`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PureObservableLike`](../interfaces/types.PureObservableLike.md)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

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
| `b` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TI`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`TA`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

___

## Transform Functions

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`T`\>, [`ReplayObservableLike`](../interfaces/types.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`T`\>, [`ReplayObservableLike`](../interfaces/types.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableWithSideEffectsLike`](../interfaces/types.ObservableWithSideEffectsLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>
