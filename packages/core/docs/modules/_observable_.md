[@reactive-js/core - v0.0.37](../README.md) › ["observable"](_observable_.md)

# Module: "observable"

## Index

### Enumerations

* [ThrottleMode](../enums/_observable_.throttlemode.md)

### Classes

* [AbstractDelegatingSubscriber](../classes/_observable_.abstractdelegatingsubscriber.md)

### Interfaces

* [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)
* [MulticastObservableLike](../interfaces/_observable_.multicastobservablelike.md)
* [ObservableLike](../interfaces/_observable_.observablelike.md)
* [StreamLike](../interfaces/_observable_.streamlike.md)
* [SubjectLike](../interfaces/_observable_.subjectlike.md)
* [SubscriberLike](../interfaces/_observable_.subscriberlike.md)

### Type aliases

* [ObservableOperator](_observable_.md#observableoperator)
* [SubscriberOperator](_observable_.md#subscriberoperator)

### Variables

* [assertSubscriberNotifyInContinuation](_observable_.md#const-assertsubscribernotifyincontinuation)
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
* [contains](_observable_.md#const-contains)
* [createObservable](_observable_.md#const-createobservable)
* [createSubject](_observable_.md#const-createsubject)
* [dispatchTo](_observable_.md#const-dispatchto)
* [distinctUntilChanged](_observable_.md#const-distinctuntilchanged)
* [empty](_observable_.md#const-empty)
* [endWith](_observable_.md#endwith)
* [everySatisfy](_observable_.md#const-everysatisfy)
* [exhaust](_observable_.md#const-exhaust)
* [exhaustMap](_observable_.md#const-exhaustmap)
* [forEach](_observable_.md#const-foreach)
* [fromArray](_observable_.md#const-fromarray)
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
* [noneSatisfy](_observable_.md#const-nonesatisfy)
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
* [someSatisfy](_observable_.md#const-somesatisfy)
* [startWith](_observable_.md#startwith)
* [subscribe](_observable_.md#const-subscribe)
* [subscribeOn](_observable_.md#const-subscribeon)
* [switchAll](_observable_.md#const-switchall)
* [switchMap](_observable_.md#const-switchmap)
* [takeFirst](_observable_.md#const-takefirst)
* [takeLast](_observable_.md#const-takelast)
* [takeWhile](_observable_.md#const-takewhile)
* [throttle](_observable_.md#throttle)
* [throwIfEmpty](_observable_.md#const-throwifempty)
* [throws](_observable_.md#const-throws)
* [timeout](_observable_.md#timeout)
* [toArray](_observable_.md#const-toarray)
* [toPromise](_observable_.md#const-topromise)
* [toValue](_observable_.md#const-tovalue)
* [using](_observable_.md#using)
* [withLatestFrom](_observable_.md#const-withlatestfrom)
* [zip](_observable_.md#zip)
* [zipWith](_observable_.md#const-zipwith)
* [zipWithLatestFrom](_observable_.md#const-zipwithlatestfrom)

## Type aliases

###  ObservableOperator

Ƭ **ObservableOperator**: *function*

A function which converts an ObservableLike<A> to an ObservableLike<B>.

#### Type declaration:

▸ (`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹A›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹A› |

___

###  SubscriberOperator

Ƭ **SubscriberOperator**: *object*

A function which transforms a `SubscriberLike<B>` to a `SubscriberLike<A>`.

#### Type declaration:

▸ (`observable`: [SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹B›): *[SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹B› |

* **isSynchronous**: *boolean*

## Variables

### `Const` assertSubscriberNotifyInContinuation

• **assertSubscriberNotifyInContinuation**: *function* = _assertSubscriberNotifyInContinuation

#### Type declaration:

▸ (`subscriber`: [SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹unknown›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹unknown› |

___

### `Const` timeoutError

• **timeoutError**: *unique symbol* = Symbol("TimeoutError")

Symbol thrown when the timeout operator times out

## Functions

### `Const` await_

▸ **await_**<**TA**, **TB**>(`mapper`: [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›› |

**Returns:** *function*

▸ (`a`: TA): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

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
`duration?` | [Operator](_functions_.md#operator)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown›› &#124; number |
`maxBufferSize?` | number |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, keyof T[]›*

___

### `Const` catchError

▸ **catchError**<**T**>(`onError`: [Operator](_functions_.md#operator)‹unknown, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› | void›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` which catches errors produced by the source and either continues with
the `ObservableLike` returned from the `onError` callback or swallows the error if
void is returned.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onError` | [Operator](_functions_.md#operator)‹unknown, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› &#124; void› | a function that takes source error and either returns an `ObservableLike` to continue with or void if the error should be propagated.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

###  combineLatest

▸ **combineLatest**<**TA**, **TB**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›], `selector`: [Selector2](_functions_.md#selector2)‹TA, TB, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›] |
`selector` | [Selector2](_functions_.md#selector2)‹TA, TB, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›], `selector`: [Selector3](_functions_.md#selector3)‹TA, TB, TC, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›] |
`selector` | [Selector3](_functions_.md#selector3)‹TA, TB, TC, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›], `selector`: [Selector4](_functions_.md#selector4)‹TA, TB, TC, TD, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›] |
`selector` | [Selector4](_functions_.md#selector4)‹TA, TB, TC, TD, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›], `selector`: [Selector5](_functions_.md#selector5)‹TA, TB, TC, TD, TE, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›] |
`selector` | [Selector5](_functions_.md#selector5)‹TA, TB, TC, TD, TE, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›], `selector`: [Selector6](_functions_.md#selector6)‹TA, TB, TC, TD, TE, TF, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›] |
`selector` | [Selector6](_functions_.md#selector6)‹TA, TB, TC, TD, TE, TF, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›], `selector`: [Selector7](_functions_.md#selector7)‹TA, TB, TC, TD, TE, TF, TG, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›] |
`selector` | [Selector7](_functions_.md#selector7)‹TA, TB, TC, TD, TE, TF, TG, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›], `selector`: [Selector8](_functions_.md#selector8)‹TA, TB, TC, TD, TE, TF, TG, TH, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›] |
`selector` | [Selector8](_functions_.md#selector8)‹TA, TB, TC, TD, TE, TF, TG, TH, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI›], `selector`: [Selector9](_functions_.md#selector9)‹TA, TB, TC, TD, TE, TF, TG, TH, TI, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

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

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI›] |
`selector` | [Selector9](_functions_.md#selector9)‹TA, TB, TC, TD, TE, TF, TG, TH, TI, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` combineLatestWith

▸ **combineLatestWith**<**TA**, **TB**, **T**>(`snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `selector`: [Selector2](_functions_.md#selector2)‹TA, TB, T›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`selector` | [Selector2](_functions_.md#selector2)‹TA, TB, T› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

___

### `Const` compute

▸ **compute**<**T**>(`options?`: object): *[Operator](_functions_.md#operator)‹[Factory](_functions_.md#factory)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *[Operator](_functions_.md#operator)‹[Factory](_functions_.md#factory)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

###  concat

▸ **concat**<**T**>(`fst`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, `snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, ...`tail`: Array‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` which emits all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`...tail` | Array‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

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

▸ **concatMap**<**TA**, **TB**>(`mapper`: [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››, `maxBufferSize?`: number): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›› |
`maxBufferSize?` | number |

**Returns:** *function*

▸ (`a`: TA): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

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

### `Const` contains

▸ **contains**<**T**>(`value`: T, `equals`: [Equality](_functions_.md#equality)‹T›): *function*

Returns an `ObservableLike` that emits a single `true` value if the source
emits any item equal to `value`, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | T | - | - |
`equals` | [Equality](_functions_.md#equality)‹T› | referenceEquals |   |

**Returns:** *function*

▸ (`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹A›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹A› |

___

### `Const` createObservable

▸ **createObservable**<**T**>(`onSubscribe`: function): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Factory for safely creating new `ObservableLike` instances. The onSubscribe function
is called with a `SafeSubscriberLike` that may be notified from any context.

Note, implementations should not do significant blocking work in
the onSubscribe function.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onSubscribe**: *function*

▸ (`dispatcher`: [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`dispatcher` | [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T› |

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

### `Const` dispatchTo

▸ **dispatchTo**<**T**>(`dispatcher`: [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T›): *[Operator](_functions_.md#operator)‹T, void›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`dispatcher` | [DispatcherLike](../interfaces/_observable_.dispatcherlike.md)‹T› |

**Returns:** *[Operator](_functions_.md#operator)‹T, void›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals`: [Equality](_functions_.md#equality)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`equals` | [Equality](_functions_.md#equality)‹T› | referenceEquals | Optional equality function that is used to compare if an item is distinct from the previous item.  |

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

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits items from the source,
concatenated with the values specified as arguments.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` everySatisfy

▸ **everySatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, boolean›*

Returns an `ObservableLike` that emits a single `true` value if the predicate is satisfied for
every value produced by the source, or if the source is empty, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, boolean›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *function*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
by dropping inner sources while the previous inner source
has not yet been disposed.

**Type parameters:**

▪ **T**

**Returns:** *function*

▸ (`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹A›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹A› |

___

### `Const` exhaustMap

▸ **exhaustMap**<**TA**, **TB**>(`mapper`: [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›› |

**Returns:** *function*

▸ (`a`: TA): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

### `Const` forEach

▸ **forEach**<**T**>(`callback`: function, `schedulerFactory`: [Factory](_functions_.md#factory)‹[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)›): *[Operator](_functions_.md#operator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, void›*

Synchronously subscribes to the source using a `VirtualTimeSchedulerLike` scheduler,
invoking the onNotify callback for each item emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **callback**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

▪`Default value`  **schedulerFactory**: *[Factory](_functions_.md#factory)‹[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)›*= createVirtualTimeScheduler

**Returns:** *[Operator](_functions_.md#operator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, void›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`options`: object): *[Operator](_functions_.md#operator)‹keyof T[], [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

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

**Returns:** *[Operator](_functions_.md#operator)‹keyof T[], [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromEnumerable

▸ **fromEnumerable**<**T**>(`__namedParameters`: object): *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

Creates an `ObservableLike` which enumerates through the values
produced by the provided `Enumerable` with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { delay: 0 }

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`config`: object): *[Operator](_functions_.md#operator)‹Iterable‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterable` with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **config**: *object*= { delay: 0 }

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[Operator](_functions_.md#operator)‹Iterable‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromIterator

▸ **fromIterator**<**T**, **TReturn**, **TNext**>(`config`: object): *[Operator](_functions_.md#operator)‹function, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

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

**Returns:** *[Operator](_functions_.md#operator)‹function, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromPromise

▸ **fromPromise**<**T**>(`factory`: [Factory](_functions_.md#factory)‹Promise‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Converts a `Promise` to an `ObservableLike`. The provided promise factory
is invoked for each subscriber to the observable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹Promise‹T›› | Factory function to create a new `Promise` instance.  |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` fromValue

▸ **fromValue**<**T**>(`config`: object): *[Operator](_functions_.md#operator)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **config**: *object*= { delay: 0 }

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[Operator](_functions_.md#operator)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` genMap

▸ **genMap**<**TA**, **TB**, **TReturn**, **TNext**>(`mapper`: [Operator](_functions_.md#operator)‹TA, Generator‹TB, TReturn, TNext››): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TReturn**

▪ **TNext**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Operator](_functions_.md#operator)‹TA, Generator‹TB, TReturn, TNext›› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

###  generate

▸ **generate**<**T**>(`generator`: [Generator](_functions_.md#generator)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›, `__namedParameters`: object): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *[Generator](_functions_.md#generator)‹T›*

the generator function.

▪ **initialValue**: *[Factory](_functions_.md#factory)‹T›*

Factory function used to generate the initial accumulator.

▪`Default value`  **__namedParameters**: *object*= { delay: 0 }

Name | Type | Description |
------ | ------ | ------ |
`delay` | number | The requested delay between emitted items by the observable.  |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *function*

Returns an `ObservableLike` that ignores all items emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *function*

▸ (`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹A›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹A› |

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

▸ **keepType**<**TA**, **TB**>(`predicate`: function): *[ObservableOperator](_observable_.md#observableoperator)‹unknown, TB›*

Returns an `ObservableLike` that only emits items from the
source that satisfy the specified type predicate.

**Type parameters:**

▪ **TA**

▪ **TB**: *TA*

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`data`: TA): *data is TB*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TA |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹unknown, TB›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [SubscriberOperator](_observable_.md#subscriberoperator)‹TA, TB›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

Creates a new `ObservableLike` which applies the provided the operator function to
subscriber when the source is subscribed to.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operator` | [SubscriberOperator](_observable_.md#subscriberoperator)‹TA, TB› | The operator function to apply.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Operator](_functions_.md#operator)‹TA, TB›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, TB›*

Returns an `ObservableLike` that applies the `mapper` function to each
value emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Operator](_functions_.md#operator)‹TA, TB› | The map function to apply each value. Must be a pure function.  |

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

▸ **merge**<**T**>(`fst`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, `snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, ...`tail`: Array‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

 Creates an `ObservableLike` which concurrently emits values from the sources.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |
`...tail` | Array‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

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

▸ **mergeMap**<**TA**, **TB**>(`mapper`: [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››, `options`: object): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *[Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`maxBufferSize?` | number |
`maxConcurrency?` | number |

**Returns:** *function*

▸ (`a`: TA): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

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

Returna an `ObservableLike` instance that emits no items and never disposes its subscriber.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` noneSatisfy

▸ **noneSatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, boolean›*

Returns an `ObservableLike` that emits a single `true` value if the predicate does not satisfy
every value produced by the source, or if the source is empty, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, boolean›*

___

###  onNotify

▸ **onNotify**<**T**>(`onNotify`: function): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNotify**: *function*

The function that is invoked when the observable source produces values.

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

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

▸ **publish**<**T**>(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), `replayCount`: number): *[Operator](_functions_.md#operator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [MulticastObservableLike](../interfaces/_observable_.multicastobservablelike.md)‹T››*

Returns a `MulticastObservableLike` backed by a single subscription to the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | - | A `SchedulerLike` that is used to subscribe to the source observable. |
`replayCount` | number | 0 | The number of events that should be replayed when the `MulticastObservableLike` is subscribed to.  |

**Returns:** *[Operator](_functions_.md#operator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [MulticastObservableLike](../interfaces/_observable_.multicastobservablelike.md)‹T››*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[ObservableOperator](_observable_.md#observableoperator)‹T, TAcc›*

Returns an `ObservableLike` that applies an accumulator function
over the source, returning the accumulated result when the subscription is disposed.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› | The accumulator function called on each source value. |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› | The initial accumulation value.  |

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

▸ **retry**<**T**>(`predicate`: function): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`count`: number, `error`: unknown): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`error` | unknown |

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

▸ **scanAsync**<**T**, **TAcc**>(`scanner`: function, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[ObservableOperator](_observable_.md#observableoperator)‹T, TAcc›*

Returns the `ObservableLike` that applies an asynchronous accumulator function
over the source, and emits each intermediate result.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **scanner**: *function*

The accumulator function called on each source value.

▸ (`acc`: TAcc, `next`: T): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *[Factory](_functions_.md#factory)‹TAcc›*

The initial accumulation value.

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

### `Const` someSatisfy

▸ **someSatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[ObservableOperator](_observable_.md#observableoperator)‹T, boolean›*

Returns an `ObservableLike` that emits a single `true` value if the source
emits any items which satisfy the predicate, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, boolean›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits the values specified as arguments,
concatenated with items from the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

___

### `Const` subscribe

▸ **subscribe**<**T**>(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)): *[Operator](_functions_.md#operator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [DisposableLike](../interfaces/_disposable_.disposablelike.md)›*

Safely subscribes to an `ObservableLike` with a `SubscriberLike` instance
using the provided scheduler. The returned `DisposableLike`
may used to cancel the subscription.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | The SchedulerLike instance that should be used by the source to notify it's subscriber.  |

**Returns:** *[Operator](_functions_.md#operator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [DisposableLike](../interfaces/_disposable_.disposablelike.md)›*

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

▸ (`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹A›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹A› |

___

### `Const` switchMap

▸ **switchMap**<**TA**, **TB**>(`mapper`: [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB››): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Operator](_functions_.md#operator)‹TA, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›› |

**Returns:** *function*

▸ (`a`: TA): *T*

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

▸ **throttle**<**T**>(`duration`: [Operator](_functions_.md#operator)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown››, `mode?`: [ThrottleMode](../enums/_observable_.throttlemode.md)): *[ObservableOperator](_observable_.md#observableoperator)‹T, T›*

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | [Operator](_functions_.md#operator)‹T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹unknown›› | Selector function that is used to determine the silence duration in between emitted values. |
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

▸ **throws**<**T**>(`__namedParameters`: object): *[Operator](_functions_.md#operator)‹[Factory](_functions_.md#factory)‹unknown›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { delay: 0 }

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *[Operator](_functions_.md#operator)‹[Factory](_functions_.md#factory)‹unknown›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

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

### `Const` toArray

▸ **toArray**<**T**>(`schedulerFactory`: [Factory](_functions_.md#factory)‹[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)›): *function*

Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, accumulating all
values emitted by `source` into an array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`schedulerFactory` | [Factory](_functions_.md#factory)‹[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)› | createVirtualTimeScheduler |

**Returns:** *function*

▸ (`a`: TA): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

### `Const` toPromise

▸ **toPromise**<**T**>(`scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)): *[Operator](_functions_.md#operator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, Promise‹T››*

Returns a Promise that completes with the last value produced by
the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | The scheduler upon which to subscribe to the source.  |

**Returns:** *[Operator](_functions_.md#operator)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, Promise‹T››*

___

### `Const` toValue

▸ **toValue**(`schedulerFactory`: [Factory](_functions_.md#factory)‹[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)›): *(Anonymous function)*

Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, returning
the last value produced.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`schedulerFactory` | [Factory](_functions_.md#factory)‹[VirtualTimeSchedulerLike](../interfaces/_scheduler_.virtualtimeschedulerlike.md)› | createVirtualTimeScheduler |

**Returns:** *(Anonymous function)*

___

###  using

▸ **using**<**TResource**, **T**>(`resourceFactory`: [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), TResource›, `observableFactory`: [Operator](_functions_.md#operator)‹TResource, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`resourceFactory` | [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), TResource› |
`observableFactory` | [Operator](_functions_.md#operator)‹TResource, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **T**>(`resourceFactory`: [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2]›, `observableFactory`: [Selector2](_functions_.md#selector2)‹TResource1, TResource2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **TResource2**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`resourceFactory` | [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2]› |
`observableFactory` | [Selector2](_functions_.md#selector2)‹TResource1, TResource2, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **T**>(`resourceFactory`: [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3]›, `observableFactory`: [Selector3](_functions_.md#selector3)‹TResource1, TResource2, TResource3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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
`resourceFactory` | [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3]› |
`observableFactory` | [Selector3](_functions_.md#selector3)‹TResource1, TResource2, TResource3, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **TResource4**, **T**>(`resourceFactory`: [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4]›, `observableFactory`: [Selector4](_functions_.md#selector4)‹TResource1, TResource2, TResource3, TResource4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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
`resourceFactory` | [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4]› |
`observableFactory` | [Selector4](_functions_.md#selector4)‹TResource1, TResource2, TResource3, TResource4, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **TResource4**, **TResource5**, **T**>(`resourceFactory`: [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4, TResource5]›, `observableFactory`: [Selector5](_functions_.md#selector5)‹TResource1, TResource2, TResource3, TResource4, TResource5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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
`resourceFactory` | [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4, TResource5]› |
`observableFactory` | [Selector5](_functions_.md#selector5)‹TResource1, TResource2, TResource3, TResource4, TResource5, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **using**<**TResource**, **T**>(`resourceFactory`: [Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), TResource | TResource[]›, `observableFactory`: function): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)[] | [DisposableLike](../interfaces/_disposable_.disposablelike.md)*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *[Operator](_functions_.md#operator)‹[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), TResource | TResource[]›*

▪ **observableFactory**: *function*

▸ (...`resources`: TResource[]): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`...resources` | TResource[] |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **T**>(`other`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `selector`: [Selector2](_functions_.md#selector2)‹TA, TB, T›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

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
`selector` | [Selector2](_functions_.md#selector2)‹TA, TB, T› |   |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

___

###  zip

▸ **zip**<**TA**, **TB**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›], `selector`: [Selector2](_functions_.md#selector2)‹TA, TB, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›] |
`selector` | [Selector2](_functions_.md#selector2)‹TA, TB, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›], `selector`: [Selector3](_functions_.md#selector3)‹TA, TB, TC, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›] |
`selector` | [Selector3](_functions_.md#selector3)‹TA, TB, TC, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›], `selector`: [Selector4](_functions_.md#selector4)‹TA, TB, TC, TD, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›] |
`selector` | [Selector4](_functions_.md#selector4)‹TA, TB, TC, TD, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›], `selector`: [Selector5](_functions_.md#selector5)‹TA, TB, TC, TD, TE, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›] |
`selector` | [Selector5](_functions_.md#selector5)‹TA, TB, TC, TD, TE, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›], `selector`: [Selector6](_functions_.md#selector6)‹TA, TB, TC, TD, TE, TF, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›] |
`selector` | [Selector6](_functions_.md#selector6)‹TA, TB, TC, TD, TE, TF, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›], `selector`: [Selector7](_functions_.md#selector7)‹TA, TB, TC, TD, TE, TF, TG, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›] |
`selector` | [Selector7](_functions_.md#selector7)‹TA, TB, TC, TD, TE, TF, TG, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›], `selector`: [Selector8](_functions_.md#selector8)‹TA, TB, TC, TD, TE, TF, TG, TH, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›] |
`selector` | [Selector8](_functions_.md#selector8)‹TA, TB, TC, TD, TE, TF, TG, TH, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**, **T**>(`observables`: [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI›], `selector`: [Selector9](_functions_.md#selector9)‹TA, TB, TC, TD, TE, TF, TG, TH, TI, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observables` | [[ObservableLike](../interfaces/_observable_.observablelike.md)‹TA›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TC›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TD›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TE›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TF›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TG›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TH›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TI›] |
`selector` | [Selector9](_functions_.md#selector9)‹TA, TB, TC, TD, TE, TF, TG, TH, TI, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

___

### `Const` zipWith

▸ **zipWith**<**TA**, **TB**, **T**>(`snd`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `selector`: [Selector2](_functions_.md#selector2)‹TA, TB, T›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB› |
`selector` | [Selector2](_functions_.md#selector2)‹TA, TB, T› |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

___

### `Const` zipWithLatestFrom

▸ **zipWithLatestFrom**<**TA**, **TB**, **T**>(`other`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹TB›, `selector`: [Selector2](_functions_.md#selector2)‹TA, TB, T›): *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*

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
`selector` | [Selector2](_functions_.md#selector2)‹TA, TB, T› |   |

**Returns:** *[ObservableOperator](_observable_.md#observableoperator)‹TA, T›*
