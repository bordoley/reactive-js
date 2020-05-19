[@reactive-js/core - v0.0.40](../README.md) › ["observable"](_observable_.md)

# Module: "observable"

## Index

### Enumerations

* [ThrottleMode](../enums/_observable_.throttlemode.md)

### Classes

* [AbstractDelegatingObserver](../classes/_observable_.abstractdelegatingobserver.md)

### Interfaces

* [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)
* [MulticastObservableLike](../interfaces/_observable_.multicastobservablelike.md)
* [ObservableLike](../interfaces/_observable_.observablelike.md)
* [ObserverLike](../interfaces/_observable_.observerlike.md)
* [StreamLike](../interfaces/_observable_.streamlike.md)
* [SubjectLike](../interfaces/_observable_.subjectlike.md)

### Type aliases

* [AsyncReducer](_observable_.md#asyncreducer)
* [ObservableOperator](_observable_.md#observableoperator)
* [ObserverOperator](_observable_.md#observeroperator)

### Variables

* [assertObserverState](_observable_.md#const-assertobserverstate)
* [timeoutError](_observable_.md#const-timeouterror)

### Functions

* [await_](_observable_.md#const-await_)
* [buffer](_observable_.md#buffer)
* [catchError](_observable_.md#const-catcherror)
* [combineLatest](_observable_.md#combinelatest)
* [combineLatestWith](_observable_.md#const-combinelatestwith)
* [compute](_observable_.md#const-compute)
* [concat](_observable_.md#concat)
* [concatAll](_observable_.md#const-concatall)
* [concatMap](_observable_.md#const-concatmap)
* [concatWith](_observable_.md#const-concatwith)
* [createObservable](_observable_.md#const-createobservable)
* [createSubject](_observable_.md#const-createsubject)
* [dispatch](_observable_.md#const-dispatch)
* [dispatchTo](_observable_.md#const-dispatchto)
* [distinctUntilChanged](_observable_.md#const-distinctuntilchanged)
* [empty](_observable_.md#const-empty)
* [endWith](_observable_.md#endwith)
* [exhaust](_observable_.md#const-exhaust)
* [exhaustMap](_observable_.md#const-exhaustmap)
* [fromArray](_observable_.md#const-fromarray)
* [fromDisposable](_observable_.md#const-fromdisposable)
* [fromEnumerable](_observable_.md#const-fromenumerable)
* [fromIterable](_observable_.md#const-fromiterable)
* [fromIterator](_observable_.md#const-fromiterator)
* [fromPromise](_observable_.md#const-frompromise)
* [fromValue](_observable_.md#const-fromvalue)
* [genMap](_observable_.md#const-genmap)
* [generate](_observable_.md#generate)
* [ignoreElements](_observable_.md#const-ignoreelements)
* [keep](_observable_.md#const-keep)
* [keepType](_observable_.md#const-keeptype)
* [lift](_observable_.md#const-lift)
* [map](_observable_.md#const-map)
* [mapTo](_observable_.md#const-mapto)
* [merge](_observable_.md#merge)
* [mergeAll](_observable_.md#const-mergeall)
* [mergeMap](_observable_.md#const-mergemap)
* [mergeWith](_observable_.md#const-mergewith)
* [never](_observable_.md#const-never)
* [observe](_observable_.md#const-observe)
* [observeWith](_observable_.md#const-observewith)
* [onNotify](_observable_.md#onnotify)
* [onSubscribe](_observable_.md#const-onsubscribe)
* [publish](_observable_.md#const-publish)
* [reduce](_observable_.md#const-reduce)
* [repeat](_observable_.md#repeat)
* [retry](_observable_.md#retry)
* [scan](_observable_.md#const-scan)
* [scanAsync](_observable_.md#const-scanasync)
* [share](_observable_.md#const-share)
* [skipFirst](_observable_.md#const-skipfirst)
* [startWith](_observable_.md#startwith)
* [subscribe](_observable_.md#const-subscribe)
* [subscribeOn](_observable_.md#const-subscribeon)
* [switchAll](_observable_.md#const-switchall)
* [switchMap](_observable_.md#const-switchmap)
* [takeFirst](_observable_.md#const-takefirst)
* [takeLast](_observable_.md#const-takelast)
* [takeUntil](_observable_.md#const-takeuntil)
* [takeWhile](_observable_.md#const-takewhile)
* [throttle](_observable_.md#throttle)
* [throwIfEmpty](_observable_.md#const-throwifempty)
* [throws](_observable_.md#const-throws)
* [timeout](_observable_.md#timeout)
* [toPromise](_observable_.md#const-topromise)
* [toRunnable](_observable_.md#const-torunnable)
* [using](_observable_.md#using)
* [withLatestFrom](_observable_.md#const-withlatestfrom)
* [zip](_observable_.md#zip)
* [zipLatest](_observable_.md#ziplatest)
* [zipLatestWith](_observable_.md#const-ziplatestwith)
* [zipWith](_observable_.md#const-zipwith)
* [zipWithLatestFrom](_observable_.md#const-zipwithlatestfrom)

## Type aliases

###  AsyncReducer

Ƭ **AsyncReducer**: *[Function2](_functions_.md#function2)‹TAcc, T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

###  ObservableOperator

Ƭ **ObservableOperator**: *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹A›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹B››*

A function which converts an ObservableLike<A> to an ObservableLike<B>.

___

###  ObserverOperator

Ƭ **ObserverOperator**: *object*

A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.

#### Type declaration:

▸ (`observer`: [ObserverLike](../interfaces/_observable_.observerlike.md)‹B›): *[ObserverLike](../interfaces/_observable_.observerlike.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [ObserverLike](../interfaces/_observable_.observerlike.md)‹B› |

* **isSynchronous**: *boolean*

## Variables

### `Const` assertObserverState

• **assertObserverState**: *[SideEffect1](_functions_.md#sideeffect1)‹[ObserverLike](../interfaces/_observable_.observerlike.md)‹unknown››* = _assertObserverState

___

### `Const` timeoutError

• **timeoutError**: *symbol* = _timeoutError

Symbol thrown when the timeout operator times out

## Functions

### `Const` await_

▸ **await_**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

###  buffer

▸ **buffer**<**T**>(`options`: object): *[ObservableOperator](_observable_.md#observableoperator)‹T, keyof T[]›*

Returns an `ObservableLike` which buffers items produced by the source until either the
number of items reaches the specified maximum buffer size or the duration time expires.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {}

A configuration object that specifies an optional `duration` function or time in ms,
and an optional `maxBufferSize`.

Name | Type |
------ | ------ |
`duration?` | [Function1](_functions_.md#function1)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown›› &#124; number |
`maxBufferSize?` | number |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, keyof T[]›*

___

### `Const` catchError

▸ **catchError**<**T**>(`onError`: [Function1](_functions_.md#function1)‹unknown, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› | void›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` which catches errors produced by the source and either continues with
the `ObservableLike` returned from the `onError` callback or swallows the error if
void is returned.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onError` | [Function1](_functions_.md#function1)‹unknown, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› &#124; void› | a function that takes source error and either returns an `ObservableLike` to continue with or void if the error should be propagated.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

###  combineLatest

▸ **combineLatest**<**TA**, **TB**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB]›*

Returns an `ObservableLike` that combines the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **T**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC]›*

Returns an `ObservableLike` that combines the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD]›*

Returns an `ObservableLike` that combines the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE]›*

Returns an `ObservableLike` that combines the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

Returns an `ObservableLike` that combines the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

Returns an `ObservableLike` that combines the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, `h`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

Returns an `ObservableLike` that combines the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |
`h` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, `h`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›, `i`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

Returns an `ObservableLike` that combines the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |
`h` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH› |
`i` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

### `Const` combineLatestWith

▸ **combineLatestWith**<**TA**, **TB**>(`snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, [TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, [TA, TB]›*

___

### `Const` compute

▸ **compute**<**T**>(`options?`: object): *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

###  concat

▸ **concat**<**T**>(`fst`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, `snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, ...`tail`: keyof ObservableLike<T>[]): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` which emits all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`...tail` | keyof ObservableLike<T>[] |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` concatAll

▸ **concatAll**<**T**>(`maxBufferSize`: number): *[ObservableOperator](_observable_.md#observableoperator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order
`ObservableLike` by concatenating the inner sources in order.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`maxBufferSize` | number | Number.MAX_SAFE_INTEGER | The number of source observables that may be queued before dropping previous observables.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, T›*

___

### `Const` concatMap

▸ **concatMap**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››, `maxBufferSize?`: number): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›› |
`maxBufferSize?` | number |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

### `Const` concatWith

▸ **concatWith**<**T**>(`snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` createObservable

▸ **createObservable**<**T**>(`onSubscribe`: [SideEffect1](_functions_.md#sideeffect1)‹[DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Factory for safely creating new `ObservableLike` instances. The onSubscribe function
is called with a `SafeObserverLike` that may be notified from any context.

Note, implementations should not do significant blocking work in
the onSubscribe function.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onSubscribe` | [SideEffect1](_functions_.md#sideeffect1)‹[DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T›› |   |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` createSubject

▸ **createSubject**<**T**>(`replayCount`: number): *[SubjectLike](../interfaces/_observable_.subjectlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`replayCount` | number | 0 |

**Returns:** *[SubjectLike](../interfaces/_observable_.subjectlike.md)‹T›*

___

### `Const` dispatch

▸ **dispatch**<**T**>(`dispatcher`: [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T›, `v`: T): *void*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`dispatcher` | [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T› |
`v` | T |

**Returns:** *void*

___

### `Const` dispatchTo

▸ **dispatchTo**<**T**>(`dispatcher`: [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T›): *[Function1](_functions_.md#function1)‹T, void›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`dispatcher` | [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T› |

**Returns:** *[Function1](_functions_.md#function1)‹T, void›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equality`: [Equality](_functions_.md#equality)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` empty

▸ **empty**<**T**>(`__namedParameters`: object): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { delay: 0 }

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: keyof T[]): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits items from the source,
concatenated with the values specified as arguments.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | keyof T[] |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *[ObservableOperator](_observable_.md#observableoperator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
by dropping inner sources while the previous inner source
has not yet been disposed.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, T›*

___

### `Const` exhaustMap

▸ **exhaustMap**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`options`: object): *[Function1](_functions_.md#function1)‹keyof T[], [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
An optional `startIndex` in the array maybe specified,

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {}

Config object that specifies an optional `delay` between emitted items and
an optional `startIndex` into the array.

Name | Type |
------ | ------ |
`delay?` | number |
`startIndex?` | number |

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromDisposable

▸ **fromDisposable**(`disposable`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown›*

___

### `Const` fromEnumerable

▸ **fromEnumerable**<**T**>(`options`: object): *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

Creates an `ObservableLike` which enumerates through the values
produced by the provided `Enumerable` with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= { delay: 0 }

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`config`: object): *[Function1](_functions_.md#function1)‹Iterable‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterable` with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **config**: *object*= { delay: 0 }

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[Function1](_functions_.md#function1)‹Iterable‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromIterator

▸ **fromIterator**<**T**, **TReturn**, **TNext**>(`config`: object): *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹Iterator‹T, TReturn, TNext››, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterator` with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

▪ **TReturn**

▪ **TNext**

**Parameters:**

▪`Default value`  **config**: *object*= { delay: 0 }

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹Iterator‹T, TReturn, TNext››, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromPromise

▸ **fromPromise**<**T**>(`factory`: [Factory](_functions_.md#factory)‹Promise‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Converts a `Promise` to an `ObservableLike`. The provided promise factory
is invoked for each observer to the observable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹Promise‹T›› | Factory function to create a new `Promise` instance.  |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` fromValue

▸ **fromValue**<**T**>(`config`: object): *[Function1](_functions_.md#function1)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **config**: *object*= { delay: 0 }

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[Function1](_functions_.md#function1)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` genMap

▸ **genMap**<**TA**, **TB**, **TReturn**, **TNext**>(`mapper`: [Function1](_functions_.md#function1)‹TA, Generator‹TB, TReturn, TNext››): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TReturn**

▪ **TNext**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, Generator‹TB, TReturn, TNext›› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

###  generate

▸ **generate**<**T**>(`generator`: [Updater](_functions_.md#updater)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›, `options`: object): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *[Updater](_functions_.md#updater)‹T›*

the generator function.

▪ **initialValue**: *[Factory](_functions_.md#factory)‹T›*

Factory function used to generate the initial accumulator.

▪`Default value`  **options**: *object*= { delay: 0 }

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

Returns an `ObservableLike` that ignores all items emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that only emits items produced by the
source that satisfy the specified predicate.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: [TypePredicate](_functions_.md#typepredicate)‹TA, TB›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

Returns an `ObservableLike` that only emits items from the
source that satisfy the specified type predicate.

**Type parameters:**

▪ **TA**

▪ **TB**: *TA*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [TypePredicate](_functions_.md#typepredicate)‹TA, TB› | The predicate function.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [ObserverOperator](_observable_.md#observeroperator)‹TA, TB›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

Creates a new `ObservableLike` which applies the provided the operator function to
observer when the source is subscribed to.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operator` | [ObserverOperator](_observable_.md#observeroperator)‹TA, TB› | The operator function to apply.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, TB›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

Returns an `ObservableLike` that applies the `mapper` function to each
value emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, TB› | The map function to apply each value. Must be a pure function.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`value`: TB): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`value` | TB |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

###  merge

▸ **merge**<**T**>(`fst`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, `snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, ...`tail`: keyof ObservableLike<T>[]): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

 Creates an `ObservableLike` which concurrently emits values from the sources.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`...tail` | keyof ObservableLike<T>[] |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` mergeAll

▸ **mergeAll**<**T**>(`options`: object): *[ObservableOperator](_observable_.md#observableoperator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
which concurrently delivers values emitted by the inner sources.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {}

Optional configuration object. The `maxBufferSize` property specifies
how many source observables may be queued before dropping previous observables. The `maxConcurrency`
property specifies the maximum number of inner observables that may be subscribed to concurrently.

Name | Type |
------ | ------ |
`maxBufferSize?` | number |
`maxConcurrency?` | number |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, T›*

___

### `Const` mergeMap

▸ **mergeMap**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››, `options`: object): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *[Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`maxBufferSize?` | number |
`maxConcurrency?` | number |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

### `Const` mergeWith

▸ **mergeWith**<**T**>(`snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` never

▸ **never**<**T**>(): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returna an `ObservableLike` instance that emits no items and never disposes its observer.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` observe

▸ **observe**<**T**>(`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, `observer`: [ObserverLike](../interfaces/_observable_.observerlike.md)‹T›): *void*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`observer` | [ObserverLike](../interfaces/_observable_.observerlike.md)‹T› |

**Returns:** *void*

___

### `Const` observeWith

▸ **observeWith**<**T**>(`observer`: [ObserverLike](../interfaces/_observable_.observerlike.md)‹T›): *[SideEffect1](_functions_.md#sideeffect1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [ObserverLike](../interfaces/_observable_.observerlike.md)‹T› |

**Returns:** *[SideEffect1](_functions_.md#sideeffect1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

###  onNotify

▸ **onNotify**<**T**>(`onNotify`: [SideEffect1](_functions_.md#sideeffect1)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onNotify` | [SideEffect1](_functions_.md#sideeffect1)‹T› | The function that is invoked when the observable source produces values.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` onSubscribe

▸ **onSubscribe**<**T**>(`f`: [Factory](_functions_.md#factory)‹[DisposableOrTeardown](_disposable_.md#disposableorteardown) | void›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Executes a side-effect when the observable is subscribed.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | [Factory](_functions_.md#factory)‹[DisposableOrTeardown](_disposable_.md#disposableorteardown) &#124; void› |   |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` publish

▸ **publish**<**T**>(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), `replayCount`: number): *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [MulticastObservableLike](../interfaces/_observable_.multicastobservablelike.md)‹T››*

Returns a `MulticastObservableLike` backed by a single subscription to the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | - | A `SchedulerLike` that is used to subscribe to the source observable. |
`replayCount` | number | 0 | The number of events that should be replayed when the `MulticastObservableLike` is subscribed to.  |

**Returns:** *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [MulticastObservableLike](../interfaces/_observable_.multicastobservablelike.md)‹T››*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[ObservableOperator](_observable_.md#observableoperator)‹T, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, TAcc›*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹number›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that applies the predicate function each time the source
completes to determine if the subscription should be renewed.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹number› | The predicate function to apply.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

▸ **repeat**<**T**>(`count`: number): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that repeats the source count times.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number |   |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

▸ **repeat**<**T**>(): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that continually repeats the source.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

###  retry

▸ **retry**<**T**>(): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

▸ **retry**<**T**>(`predicate`: [Function2](_functions_.md#function2)‹number, unknown, boolean›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Function2](_functions_.md#function2)‹number, unknown, boolean› |   |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[ObservableOperator](_observable_.md#observableoperator)‹T, TAcc›*

Returns an `ObservableLike` that applies an accumulator function over the source,
and emits each intermediate result.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scanner` | [Reducer](_functions_.md#reducer)‹T, TAcc› | The accumulator function called on each source value. |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› | The initial accumulation value.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, TAcc›*

___

### `Const` scanAsync

▸ **scanAsync**<**T**, **TAcc**>(`scanner`: [AsyncReducer](_observable_.md#asyncreducer)‹TAcc, T›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[ObservableOperator](_observable_.md#observableoperator)‹T, TAcc›*

Returns the `ObservableLike` that applies an asynchronous accumulator function
over the source, and emits each intermediate result.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scanner` | [AsyncReducer](_observable_.md#asyncreducer)‹TAcc, T› | The accumulator function called on each source value. |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› | The initial accumulation value.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, TAcc›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), `replayCount`: number): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | - | A `SchedulerLike` that is used to subscribe to the source. |
`replayCount` | number | 0 | The number of events that should be replayed when the `ObservableLike` is subscribed to.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that skips the first count items emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The number of items emitted by source that should be skipped.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: keyof T[]): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits the values specified as arguments,
concatenated with items from the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | keyof T[] |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` subscribe

▸ **subscribe**<**T**>(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)): *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [DisposableLike](../interfaces/_disposable_.disposablelike.md)›*

Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
using the provided scheduler. The returned `DisposableLike`
may used to cancel the subscription.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | The SchedulerLike instance that should be used by the source to notify it's observer.  |

**Returns:** *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [DisposableLike](../interfaces/_disposable_.disposablelike.md)›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**T**>(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | `SchedulerLike` instance to use when subscribing to the source.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` switchAll

▸ **switchAll**<**T**>(): *function*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
values only from the most recent source.

**Type parameters:**

▪ **T**

**Returns:** *function*

▸ (`a`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

### `Const` switchMap

▸ **switchMap**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›› |

**Returns:** *function*

▸ (`a`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that only emits the first `count` values emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that only emits the last `count` items emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` takeUntil

▸ **takeUntil**<**T**>(`notifier`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`notifier` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›, `__namedParameters`: object): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *[Predicate](_functions_.md#predicate)‹T›*

The predicate function.

▪`Default value`  **__namedParameters**: *object*= { inclusive: false }

Name | Type |
------ | ------ |
`inclusive` | boolean |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

###  throttle

▸ **throttle**<**T**>(`duration`: [Function1](_functions_.md#function1)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown››, `mode?`: [ThrottleMode](../enums/_observable_.throttlemode.md)): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | [Function1](_functions_.md#function1)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown›› | Function function that is used to determine the silence duration in between emitted values. |
`mode?` | [ThrottleMode](../enums/_observable_.throttlemode.md) | The throttle mode.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

▸ **throttle**<**T**>(`duration`: number, `mode?`: [ThrottleMode](../enums/_observable_.throttlemode.md)): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | number | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
`mode?` | [ThrottleMode](../enums/_observable_.throttlemode.md) | The throttle mode.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` throwIfEmpty

▸ **throwIfEmpty**<**T**>(`factory`: [Factory](_functions_.md#factory)‹unknown›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits an error if the source completes without emitting a value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹unknown› | A factory function invoked to produce the error to be thrown.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` throws

▸ **throws**<**T**>(`__namedParameters`: object): *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹unknown›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { delay: 0 }

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹unknown›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

###  timeout

▸ **timeout**<**T**>(`duration`: number): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | number | Time in ms within which the source must emit values.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

▸ **timeout**<**T**>(`duration`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown› |   |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` toPromise

▸ **toPromise**<**T**>(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)): *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, Promise‹T››*

Returns a Promise that completes with the last value produced by
the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | The scheduler upon which to subscribe to the source.  |

**Returns:** *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, Promise‹T››*

___

### `Const` toRunnable

▸ **toRunnable**<**T**>(`schedulerFactory`: [Factory](_functions_.md#factory)‹[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)›): *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`schedulerFactory` | [Factory](_functions_.md#factory)‹[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)› | createVirtualTimeScheduler |

**Returns:** *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

###  using

▸ **using**<**TResource**, **T**>(`resourceFactory`: [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), TResource›, `observableFactory`: [Function1](_functions_.md#function1)‹TResource, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`resourceFactory` | [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), TResource› |
`observableFactory` | [Function1](_functions_.md#function1)‹TResource, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **T**>(`resourceFactory`: [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2]›, `observableFactory`: [Function2](_functions_.md#function2)‹TResource1, TResource2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource2**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`resourceFactory` | [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2]› |
`observableFactory` | [Function2](_functions_.md#function2)‹TResource1, TResource2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **T**>(`resourceFactory`: [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3]›, `observableFactory`: [Function3](_functions_.md#function3)‹TResource1, TResource2, TResource3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource2**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource3**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`resourceFactory` | [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3]› |
`observableFactory` | [Function3](_functions_.md#function3)‹TResource1, TResource2, TResource3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **TResource4**, **T**>(`resourceFactory`: [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4]›, `observableFactory`: [Function4](_functions_.md#function4)‹TResource1, TResource2, TResource3, TResource4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource2**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource3**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource4**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`resourceFactory` | [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4]› |
`observableFactory` | [Function4](_functions_.md#function4)‹TResource1, TResource2, TResource3, TResource4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **TResource4**, **TResource5**, **T**>(`resourceFactory`: [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4, TResource5]›, `observableFactory`: [Function5](_functions_.md#function5)‹TResource1, TResource2, TResource3, TResource4, TResource5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource2**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource3**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource4**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource5**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`resourceFactory` | [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4, TResource5]› |
`observableFactory` | [Function5](_functions_.md#function5)‹TResource1, TResource2, TResource3, TResource4, TResource5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource**, **T**>(`resourceFactory`: [Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), TResource | keyof TResource[]›, `observableFactory`: function): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *[Function1](_functions_.md#function1)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), TResource | keyof TResource[]›*

▪ **observableFactory**: *function*

▸ (...`resources`: keyof TResource[]): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`...resources` | keyof TResource[] |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **T**>(`other`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `selector`: [Function2](_functions_.md#function2)‹TA, TB, T›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

Returns an `ObservableLike` which combines the source with
the latest value from another `ObservableLike`.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`other` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› | - |
`selector` | [Function2](_functions_.md#function2)‹TA, TB, T› |   |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

___

###  zip

▸ **zip**<**TA**, **TB**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB]›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB]›*

▸ **zip**<**TA**, **TB**, **TC**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC]›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD]›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE]›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, `h`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |
`h` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, `h`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›, `i`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |
`h` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH› |
`i` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

###  zipLatest

▸ **zipLatest**<**TA**, **TB**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB]›*

Returns an `ObservableLike` that zips the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB]›*

▸ **zipLatest**<**TA**, **TB**, **TC**, **T**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC]›*

Returns an `ObservableLike` that zips the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC]›*

▸ **zipLatest**<**TA**, **TB**, **TC**, **TD**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD]›*

Returns an `ObservableLike` that zips the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD]›*

▸ **zipLatest**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE]›*

Returns an `ObservableLike` that zips the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE]›*

▸ **zipLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

Returns an `ObservableLike` that zips the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

▸ **zipLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

Returns an `ObservableLike` that zips the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **zipLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, `h`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

Returns an `ObservableLike` that zips the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |
`h` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **zipLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, `b`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `c`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, `d`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, `e`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, `f`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, `g`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, `h`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›, `i`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

Returns an `ObservableLike` that zips the latest values from
multiple sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TA› |
`b` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`c` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC› |
`d` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD› |
`e` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE› |
`f` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF› |
`g` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG› |
`h` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH› |
`i` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

### `Const` zipLatestWith

▸ **zipLatestWith**<**TA**, **TB**>(`snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, [TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, [TA, TB]›*

___

### `Const` zipWith

▸ **zipWith**<**TA**, **TB**>(`snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, [TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, [TA, TB]›*

___

### `Const` zipWithLatestFrom

▸ **zipWithLatestFrom**<**TA**, **TB**, **T**>(`other`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `selector`: [Function2](_functions_.md#function2)‹TA, TB, T›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

Returns an `ObservableLike` which combines the source with
the latest value from another `ObservableLike`.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`other` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› | - |
`selector` | [Function2](_functions_.md#function2)‹TA, TB, T› |   |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*
