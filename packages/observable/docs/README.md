[@reactive-js/observable](README.md)

# @reactive-js/observable

## Index

### Enumerations

* [ThrottleMode](enums/throttlemode.md)

### Classes

* [AbstractDelegatingSubscriber](classes/abstractdelegatingsubscriber.md)

### Interfaces

* [MulticastObservableLike](interfaces/multicastobservablelike.md)
* [ObservableLike](interfaces/observablelike.md)
* [ObserverLike](interfaces/observerlike.md)
* [SafeSubscriberLike](interfaces/safesubscriberlike.md)
* [SubjectLike](interfaces/subjectlike.md)
* [SubscriberLike](interfaces/subscriberlike.md)

### Type aliases

* [ObservableOperator](README.md#observableoperator)
* [SubscriberOperator](README.md#subscriberoperator)

### Variables

* [assertSubscriberNotifyInContinuation](README.md#const-assertsubscribernotifyincontinuation)
* [timeoutError](README.md#const-timeouterror)

### Functions

* [await_](README.md#const-await_)
* [buffer](README.md#buffer)
* [catchError](README.md#const-catcherror)
* [combineLatest](README.md#combinelatest)
* [compute](README.md#const-compute)
* [concat](README.md#concat)
* [concatAll](README.md#const-concatall)
* [concatMap](README.md#const-concatmap)
* [contains](README.md#const-contains)
* [createObservable](README.md#const-createobservable)
* [createSubject](README.md#const-createsubject)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [empty](README.md#empty)
* [endWith](README.md#endwith)
* [every](README.md#const-every)
* [exhaust](README.md#const-exhaust)
* [exhaustMap](README.md#const-exhaustmap)
* [forEach](README.md#const-foreach)
* [fromArray](README.md#fromarray)
* [fromIterable](README.md#fromiterable)
* [fromIterator](README.md#fromiterator)
* [fromPromise](README.md#const-frompromise)
* [fromScheduledValues](README.md#fromscheduledvalues)
* [generate](README.md#generate)
* [ignoreElements](README.md#const-ignoreelements)
* [keep](README.md#const-keep)
* [keepType](README.md#const-keeptype)
* [lift](README.md#lift)
* [map](README.md#const-map)
* [mapTo](README.md#const-mapto)
* [merge](README.md#merge)
* [mergeAll](README.md#const-mergeall)
* [mergeMap](README.md#const-mergemap)
* [never](README.md#const-never)
* [none](README.md#const-none)
* [observe](README.md#observe)
* [ofValue](README.md#ofvalue)
* [onDispose](README.md#const-ondispose)
* [onError](README.md#const-onerror)
* [onNotify](README.md#const-onnotify)
* [onSubscribe](README.md#const-onsubscribe)
* [publish](README.md#const-publish)
* [reduce](README.md#const-reduce)
* [repeat](README.md#repeat)
* [retry](README.md#retry)
* [scan](README.md#const-scan)
* [scanAsync](README.md#const-scanasync)
* [share](README.md#const-share)
* [skipFirst](README.md#const-skipfirst)
* [some](README.md#const-some)
* [startWith](README.md#startwith)
* [subscribe](README.md#const-subscribe)
* [subscribeOn](README.md#const-subscribeon)
* [switchAll](README.md#const-switchall)
* [switchMap](README.md#const-switchmap)
* [takeFirst](README.md#const-takefirst)
* [takeLast](README.md#const-takelast)
* [takeWhile](README.md#const-takewhile)
* [throttle](README.md#throttle)
* [throwIfEmpty](README.md#const-throwifempty)
* [throws](README.md#const-throws)
* [timeout](README.md#timeout)
* [toArray](README.md#const-toarray)
* [toEnumerable](README.md#const-toenumerable)
* [toIterable](README.md#const-toiterable)
* [toPromise](README.md#const-topromise)
* [toSafeSubscriber](README.md#const-tosafesubscriber)
* [toValue](README.md#const-tovalue)
* [using](README.md#using)
* [withLatestFrom](README.md#const-withlatestfrom)
* [zip](README.md#zip)

## Type aliases

###  ObservableOperator

Ƭ **ObservableOperator**: *function*

A function which converts an ObservableLike<A> to an ObservableLike<B>.

#### Type declaration:

▸ (`observable`: [ObservableLike](interfaces/observablelike.md)‹A›): *[ObservableLike](interfaces/observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](interfaces/observablelike.md)‹A› |

___

###  SubscriberOperator

Ƭ **SubscriberOperator**: *function*

A function which transforms a `SubscriberLike<B>` to a `SubscriberLike<A>`.

#### Type declaration:

▸ (`observable`: [SubscriberLike](interfaces/subscriberlike.md)‹B›): *[SubscriberLike](interfaces/subscriberlike.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [SubscriberLike](interfaces/subscriberlike.md)‹B› |

## Variables

### `Const` assertSubscriberNotifyInContinuation

• **assertSubscriberNotifyInContinuation**: *assertSubscriberNotifyInContinuationProduction* =  _assertSubscriberNotifyInContinuation

___

### `Const` timeoutError

• **timeoutError**: *unique symbol* =  Symbol("TimeoutError")

Symbol thrown when the timeout operator times out

## Functions

### `Const` await_

▸ **await_**<**TA**, **TB**>(`mapper`: function): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`a`: TA): *[ObservableLike](interfaces/observablelike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** *function*

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

###  buffer

▸ **buffer**<**T**>(`options`: object): *[ObservableOperator](README.md#observableoperator)‹T, keyof T[]›*

Returns an `ObservableLike` which buffers items produced by the source until either the
number of items reaches the specified maximum buffer size or the duration time expires.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | object |  {} | A configuration object that specifies an optional `duration` function or time in ms, and an optional `maxBufferSize`.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, keyof T[]›*

___

### `Const` catchError

▸ **catchError**<**T**>(`onError`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` which catches errors produced by the source and either continues with
the `ObservableLike` returned from the `onError` callback or swallows the error if
void is returned.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onError**: *function*

a function that takes source error and either returns an `ObservableLike`
to continue with or void if the error should be propagated.

▸ (`error`: unknown): *[ObservableLike](interfaces/observablelike.md)‹T› | void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | unknown |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

###  combineLatest

▸ **combineLatest**<**TA**, **TB**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Returns an `ObservableLike` that combines the latest values from
multiple sources using the specified `selector` function.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›, [ObservableLike](interfaces/observablelike.md)‹TH›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›, [ObservableLike](interfaces/observablelike.md)‹TH›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |
`h` | TH |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›, [ObservableLike](interfaces/observablelike.md)‹TH›, [ObservableLike](interfaces/observablelike.md)‹TI›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›, [ObservableLike](interfaces/observablelike.md)‹TH›, [ObservableLike](interfaces/observablelike.md)‹TI›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH, `i`: TI): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |
`h` | TH |
`i` | TI |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` compute

▸ **compute**<**T**>(`valueFactory`: function, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **valueFactory**: *function*

▸ (): *T*

▪`Default value`  **delay**: *number*= 0

The delay before emitting the value.

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  concat

▸ **concat**<**T**>(`fst`: [ObservableLike](interfaces/observablelike.md)‹T›, `snd`: [ObservableLike](interfaces/observablelike.md)‹T›, ...`tail`: Array‹[ObservableLike](interfaces/observablelike.md)‹T››): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` which emits all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [ObservableLike](interfaces/observablelike.md)‹T› |
`snd` | [ObservableLike](interfaces/observablelike.md)‹T› |
`...tail` | Array‹[ObservableLike](interfaces/observablelike.md)‹T›› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` concatAll

▸ **concatAll**<**T**>(`maxBufferSize`: number): *[ObservableOperator](README.md#observableoperator)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order
`ObservableLike` by concatenating the inner sources in order.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER | The number of source observables that may be queued before dropping previous observables.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` concatMap

▸ **concatMap**<**TA**, **TB**>(`mapper`: function, `maxBufferSize?`: undefined | number): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`a`: TA): *[ObservableLike](interfaces/observablelike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

▪`Optional`  **maxBufferSize**: *undefined | number*

**Returns:** *function*

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` contains

▸ **contains**<**T**>(`value`: T, `equals`: function): *function*

Returns an `ObservableLike` that emits a single `true` value if the source
emits any item equal to `value`, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **value**: *T*

▪`Default value`  **equals**: *function*=  referenceEquals

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *function*

▸ (`observable`: [ObservableLike](interfaces/observablelike.md)‹A›): *[ObservableLike](interfaces/observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](interfaces/observablelike.md)‹A› |

___

### `Const` createObservable

▸ **createObservable**<**T**>(`onSubscribe`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Factory for safely creating new `ObservableLike` instances. The onSubscribe function
is called with a `SafeSubscriberLike` that may be notified from any context.

Note, implementations should not do significant blocking work in
the onSubscribe function.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onSubscribe**: *function*

▸ (`subscriber`: [SafeSubscriberLike](interfaces/safesubscriberlike.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [SafeSubscriberLike](interfaces/safesubscriberlike.md)‹T› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` createSubject

▸ **createSubject**<**T**>(`scheduler`: SchedulerLike, `replayCount`: number): *[SubjectLike](interfaces/subjectlike.md)‹T›*

Returns a new `SubjectLike` instance.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`scheduler` | SchedulerLike | - | The scheduler that should be used by sources to notify the `SubjectLike` instance. |
`replayCount` | number | 0 | The number of events that should be replayed when the `SubjectLike` instance is subscribed to.  |

**Returns:** *[SubjectLike](interfaces/subjectlike.md)‹T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **equals**: *function*=  referenceEquality

Optional equality function that is used to compare
if an item is distinct from the previous item.

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

###  empty

▸ **empty**<**T**>(`delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 0 |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits items from the source,
concatenated with the values specified as arguments.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` every

▸ **every**<**T**>(`predicate`: function): *[ObservableOperator](README.md#observableoperator)‹T, boolean›*

Returns an `ObservableLike` that emits a single `true` value if the predicate is satisfied for
every value produced by the source, or if the source is empty, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, boolean›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *function*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
by dropping inner sources while the previous inner source
has not yet been disposed.

**Type parameters:**

▪ **T**

**Returns:** *function*

▸ (`observable`: [ObservableLike](interfaces/observablelike.md)‹A›): *[ObservableLike](interfaces/observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](interfaces/observablelike.md)‹A› |

___

### `Const` exhaustMap

▸ **exhaustMap**<**TA**, **TB**>(`mapper`: function): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`a`: TA): *[ObservableLike](interfaces/observablelike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** *function*

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` forEach

▸ **forEach**<**T**>(`onNotify`: function, `schedulerFactory`: function): *Operator‹[ObservableLike](interfaces/observablelike.md)‹T›, void›*

Synchronously subscribes to the source using a `VirtualTimeSchedulerLike` scheduler,
invoking the onNotify callback for each item emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNotify**: *function*

callback to invoke for each item emitted by the source.

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

▪`Default value`  **schedulerFactory**: *function*=  createVirtualTimeScheduler

▸ (): *VirtualTimeSchedulerLike*

**Returns:** *Operator‹[ObservableLike](interfaces/observablelike.md)‹T›, void›*

___

###  fromArray

▸ **fromArray**<**T**>(`values`: keyof T[], `options`: object): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
An optional `startIndex` in the array maybe specified,

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`values` | keyof T[] | - | The array. |
`options` | object |  {} | Config object that specifies an optional `delay` between emitted items and an optional `startIndex` into the array.  |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterable` with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`iterable` | Iterable‹T› | - | - |
`delay` | number | 0 | The requested delay between emitted items by the observable.  |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromIterator

▸ **fromIterator**<**T**>(`iterator`: Iterator‹T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterator` with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`iterator` | Iterator‹T› | - | - |
`delay` | number | 0 | The requested delay between emitted items by the observable.  |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` fromPromise

▸ **fromPromise**<**T**>(`factory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Converts a `Promise` to an `ObservableLike`. The provided promise factory
is invoked for each subscriber to the observable.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

Factory function to create a new `Promise` instance.

▸ (): *Promise‹T›*

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromScheduledValues

▸ **fromScheduledValues**<**T**>(`value`: [number, T], ...`values`: Array‹[number, T]›): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` from a series of [delay, value] tuples.
The delay is relative to the current time.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [number, T] |
`...values` | Array‹[number, T]› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

the generator function.

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *function*

Factory function used to generate the initial accumulator.

▸ (): *T*

▪`Default value`  **delay**: *number*= 0

The requested delay between emitted items by the observable.

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *function*

Returns an `ObservableLike` that ignores all items emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *function*

▸ (`observable`: [ObservableLike](interfaces/observablelike.md)‹A›): *[ObservableLike](interfaces/observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](interfaces/observablelike.md)‹A› |

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that only emits items produced by the
source that satisfy the specified predicate.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: function): *[ObservableOperator](README.md#observableoperator)‹TA, TB›*

Returns an `ObservableLike` that only emits items from the
source that satisfy the specified type predicate.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`data`: unknown): *data is TB*

**Parameters:**

Name | Type |
------ | ------ |
`data` | unknown |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹TA, TB›*

___

###  lift

▸ **lift**<**TA**, **TB**>(`operator`: [SubscriberOperator](README.md#subscriberoperator)‹TA, TB›, `operatorIsSynchronous`: boolean): *[ObservableOperator](README.md#observableoperator)‹TA, TB›*

Creates a new `ObservableLike` which applies the provided the operator function to
subscriber when the source is subscribed to.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`operator` | [SubscriberOperator](README.md#subscriberoperator)‹TA, TB› | - | The operator function to apply.  |
`operatorIsSynchronous` | boolean | false | - |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[ObservableOperator](README.md#observableoperator)‹TA, TB›*

Returns an `ObservableLike` that applies the `mapper` function to each
value emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

The map function to apply each value. Must be a pure function.

▸ (`data`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TA |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹TA, TB›*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`value`: TB): *[ObservableOperator](README.md#observableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`value` | TB |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹TA, TB›*

___

###  merge

▸ **merge**<**T**>(`fst`: [ObservableLike](interfaces/observablelike.md)‹T›, `snd`: [ObservableLike](interfaces/observablelike.md)‹T›, ...`tail`: Array‹[ObservableLike](interfaces/observablelike.md)‹T››): *[ObservableLike](interfaces/observablelike.md)‹T›*

 Creates an `ObservableLike` which concurrently emits values from the sources.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [ObservableLike](interfaces/observablelike.md)‹T› |
`snd` | [ObservableLike](interfaces/observablelike.md)‹T› |
`...tail` | Array‹[ObservableLike](interfaces/observablelike.md)‹T›› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` mergeAll

▸ **mergeAll**<**T**>(`options`: object): *[ObservableOperator](README.md#observableoperator)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
which concurrently delivers values emitted by the inner sources.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | object |  {} | Optional configuration object. The `maxBufferSize` property specifies how many source observables may be queued before dropping previous observables. The `maxConcurrency` property specifies the maximum number of inner observables that may be subscribed to concurrently.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` mergeMap

▸ **mergeMap**<**TA**, **TB**>(`mapper`: function, `options`: object): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`a`: TA): *[ObservableLike](interfaces/observablelike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

▪`Default value`  **options**: *object*=  {}

**Returns:** *function*

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` never

▸ **never**<**T**>(): *[ObservableLike](interfaces/observablelike.md)‹T›*

Returna an `ObservableLike` instance that emits no items and never disposes its subscriber.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` none

▸ **none**<**T**>(`predicate`: function): *[ObservableOperator](README.md#observableoperator)‹T, boolean›*

Returns an `ObservableLike` that emits a single `true` value if the predicate does not satisfy
every value produced by the source, or if the source is empty, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, boolean›*

___

###  observe

▸ **observe**<**T**>(`observer`: [ObserverLike](interfaces/observerlike.md)‹T›): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an observable that forwards notifications to the provided observer.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [ObserverLike](interfaces/observerlike.md)‹T› | The observer that observes notifications.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

###  ofValue

▸ **ofValue**<**T**>(`value`: T, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | T | - | The value to emit. |
`delay` | number | 0 | The delay before emitting the value.  |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` onDispose

▸ **onDispose**<**T**>(`onDispose`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an observable that forwards dispose notifications to the provided `onDispose` function.

The function that is invoked when the observable subscription is disposed.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onDispose**: *function*

▸ (`err?`: Exception): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | Exception |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` onError

▸ **onError**<**T**>(`onError`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that forwards error notifications to the provided `onError` function.

The function that is invoked when the observable subscription is disposed with an error.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onError**: *function*

▸ (`err`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` onNotify

▸ **onNotify**<**T**>(`onNotify`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.

The function that is invoked when the observable source produces values.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNotify**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` onSubscribe

▸ **onSubscribe**<**T**>(`f`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Executes a side-effect when the observable is subscribed.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (): *void*

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` publish

▸ **publish**<**T**>(`scheduler`: SchedulerLike, `replayCount`: number): *Operator‹[ObservableLike](interfaces/observablelike.md)‹T›, [MulticastObservableLike](interfaces/multicastobservablelike.md)‹T››*

Returns a `MulticastObservableLike` backed by a single subscription to the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`scheduler` | SchedulerLike | - | A `SchedulerLike` that is used to subscribe to the source observable. |
`replayCount` | number | 0 | The number of events that should be replayed when the `MulticastObservableLike` is subscribed to.  |

**Returns:** *Operator‹[ObservableLike](interfaces/observablelike.md)‹T›, [MulticastObservableLike](interfaces/multicastobservablelike.md)‹T››*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: function, `initialValue`: function): *[ObservableOperator](README.md#observableoperator)‹T, TAcc›*

Returns an `ObservableLike` that applies an accumulator function
over the source, returning the accumulated result when the subscription is disposed.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

The accumulator function called on each source value.

▸ (`acc`: TAcc, `next`: T): *TAcc*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

The initial accumulation value.

▸ (): *TAcc*

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, TAcc›*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that applies the predicate function each time the source
completes to determine if the subscription should be renewed.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function to apply.

▸ (`count`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

▸ **repeat**<**T**>(`count`: number): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that repeats the source count times.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number |   |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

▸ **repeat**<**T**>(): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that continually repeats the source.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

###  retry

▸ **retry**<**T**>(): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

▸ **retry**<**T**>(`predicate`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

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

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: function, `initialValue`: function): *[ObservableOperator](README.md#observableoperator)‹T, TAcc›*

Returns an `ObservableLike` that applies an accumulator function over the source,
and emits each intermediate result.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **scanner**: *function*

The accumulator function called on each source value.

▸ (`acc`: TAcc, `next`: T): *TAcc*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

The initial accumulation value.

▸ (): *TAcc*

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, TAcc›*

___

### `Const` scanAsync

▸ **scanAsync**<**T**, **TAcc**>(`scanner`: function, `initialValue`: function): *[ObservableOperator](README.md#observableoperator)‹T, TAcc›*

Returns the `ObservableLike` that applies an asynchronous accumulator function
over the source, and emits each intermediate result.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **scanner**: *function*

The accumulator function called on each source value.

▸ (`acc`: TAcc, `next`: T): *[ObservableLike](interfaces/observablelike.md)‹TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

The initial accumulation value.

▸ (): *TAcc*

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, TAcc›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | SchedulerLike | A `SchedulerLike` that is used to subscribe to the source. |
`replayCount?` | undefined &#124; number | The number of events that should be replayed when the `ObservableLike` is subscribed to.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that skips the first count items emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The number of items emitted by source that should be skipped.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` some

▸ **some**<**T**>(`predicate`: function): *[ObservableOperator](README.md#observableoperator)‹T, boolean›*

Returns an `ObservableLike` that emits a single `true` value if the source
emits any items which satisfy the predicate, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, boolean›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits the values specified as arguments,
concatenated with items from the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` subscribe

▸ **subscribe**<**T**>(`scheduler`: SchedulerLike): *Operator‹[ObservableLike](interfaces/observablelike.md)‹T›, DisposableLike›*

Safely subscribes to an `ObservableLike` with a `SubscriberLike` instance
using the provided scheduler. The returned `DisposableLike`
may used to cancel the subscription.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | SchedulerLike | The SchedulerLike instance that should be used by the source to notify it's subscriber.  |

**Returns:** *Operator‹[ObservableLike](interfaces/observablelike.md)‹T›, DisposableLike›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**T**>(`scheduler`: SchedulerLike): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | SchedulerLike | `SchedulerLike` instance to use when subscribing to the source.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` switchAll

▸ **switchAll**<**T**>(): *function*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
values only from the most recent source.

**Type parameters:**

▪ **T**

**Returns:** *function*

▸ (`observable`: [ObservableLike](interfaces/observablelike.md)‹A›): *[ObservableLike](interfaces/observablelike.md)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](interfaces/observablelike.md)‹A› |

___

### `Const` switchMap

▸ **switchMap**<**TA**, **TB**>(`mapper`: function): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`a`: TA): *[ObservableLike](interfaces/observablelike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** *function*

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that only emits the first `count` values emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that only emits the last `count` items emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

###  throttle

▸ **throttle**<**T**>(`duration`: function, `mode?`: [ThrottleMode](enums/throttlemode.md)): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **duration**: *function*

Selector function that is used to determine the silence duration in between emitted values.

▸ (`next`: T): *[ObservableLike](interfaces/observablelike.md)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

▪`Optional`  **mode**: *[ThrottleMode](enums/throttlemode.md)*

The throttle mode.

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

▸ **throttle**<**T**>(`duration`: number, `mode?`: [ThrottleMode](enums/throttlemode.md)): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | number | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
`mode?` | [ThrottleMode](enums/throttlemode.md) | The throttle mode.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` throwIfEmpty

▸ **throwIfEmpty**<**T**>(`factory`: function): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that emits an error if the source completes without emitting a value.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

A factory function invoked to produce the error to be thrown.

▸ (): *unknown*

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` throws

▸ **throws**<**T**>(`errorFactory`: function, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **errorFactory**: *function*

▸ (): *unknown*

▪`Default value`  **delay**: *number*= 0

The delay before disposing the subscription.

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  timeout

▸ **timeout**<**T**>(`duration`: number): *[ObservableOperator](README.md#observableoperator)‹T, T›*

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | number | Time in ms within which the source must emit values.  |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

▸ **timeout**<**T**>(`duration`: [ObservableLike](interfaces/observablelike.md)‹unknown›): *[ObservableOperator](README.md#observableoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | [ObservableLike](interfaces/observablelike.md)‹unknown› |   |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹T, T›*

___

### `Const` toArray

▸ **toArray**<**T**>(`schedulerFactory`: function): *function*

Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, accumulating all
values emitted by `source` into an array.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **schedulerFactory**: *function*=  createVirtualTimeScheduler

▸ (): *VirtualTimeSchedulerLike*

**Returns:** *function*

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` toEnumerable

▸ **toEnumerable**<**T**>(`observable`: [ObservableLike](interfaces/observablelike.md)‹T›): *EnumerableLike‹void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](interfaces/observablelike.md)‹T› |

**Returns:** *EnumerableLike‹void, T›*

___

### `Const` toIterable

▸ **toIterable**<**T**>(`source`: [ObservableLike](interfaces/observablelike.md)‹T›): *Iterable‹T›*

Converts an `ObservableLike` into an `Iterable`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`source` | [ObservableLike](interfaces/observablelike.md)‹T› |

**Returns:** *Iterable‹T›*

___

### `Const` toPromise

▸ **toPromise**<**T**>(`scheduler`: SchedulerLike): *Operator‹[ObservableLike](interfaces/observablelike.md)‹T›, Promise‹T››*

Returns a Promise that completes with the last value produced by
the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | SchedulerLike | The scheduler upon which to subscribe to the source.  |

**Returns:** *Operator‹[ObservableLike](interfaces/observablelike.md)‹T›, Promise‹T››*

___

### `Const` toSafeSubscriber

▸ **toSafeSubscriber**<**T**>(`subscriber`: [SubscriberLike](interfaces/subscriberlike.md)‹T›): *[SafeSubscriberLike](interfaces/safesubscriberlike.md)‹T›*

Returns a `SafeSubscriberLike` that delegates to the provided subscriber.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subscriber` | [SubscriberLike](interfaces/subscriberlike.md)‹T› | The `SubscriberLike` instance to wrap in a `SafeSubscriberLike`.  |

**Returns:** *[SafeSubscriberLike](interfaces/safesubscriberlike.md)‹T›*

___

### `Const` toValue

▸ **toValue**(`schedulerFactory`: function): *(Anonymous function)*

Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, returning
the last value produced.

**Parameters:**

▪`Default value`  **schedulerFactory**: *function*=  createVirtualTimeScheduler

▸ (): *VirtualTimeSchedulerLike*

**Returns:** *(Anonymous function)*

___

###  using

▸ **using**<**TResource**, **T**>(`resourceFactory`: function, `observableFactory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource**: *DisposableLike*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *function*

▸ (`scheduler`: SchedulerLike): *TResource*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

▪ **observableFactory**: *function*

▸ (`resource`: TResource): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`resource` | TResource |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **T**>(`resourceFactory`: function, `observableFactory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *DisposableLike*

▪ **TResource2**: *DisposableLike*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *function*

▸ (`scheduler`: SchedulerLike): *[TResource1, TResource2]*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

▪ **observableFactory**: *function*

▸ (`r1`: TResource1, `r2`: TResource2): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | TResource1 |
`r2` | TResource2 |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **T**>(`resourceFactory`: function, `observableFactory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *DisposableLike*

▪ **TResource2**: *DisposableLike*

▪ **TResource3**: *DisposableLike*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *function*

▸ (`scheduler`: SchedulerLike): *[TResource1, TResource2, TResource3]*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

▪ **observableFactory**: *function*

▸ (`r1`: TResource1, `r2`: TResource2, `r3`: TResource3): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | TResource1 |
`r2` | TResource2 |
`r3` | TResource3 |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **TResource4**, **T**>(`resourceFactory`: function, `observableFactory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *DisposableLike*

▪ **TResource2**: *DisposableLike*

▪ **TResource3**: *DisposableLike*

▪ **TResource4**: *DisposableLike*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *function*

▸ (`scheduler`: SchedulerLike): *[TResource1, TResource2, TResource3, TResource4]*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

▪ **observableFactory**: *function*

▸ (`r1`: TResource1, `r2`: TResource2, `r3`: TResource3, `r4`: TResource4): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | TResource1 |
`r2` | TResource2 |
`r3` | TResource3 |
`r4` | TResource4 |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **TResource4**, **TResource5**, **T**>(`resourceFactory`: function, `observableFactory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` that uses one or more resources which
will be disposed when the ObservableLike disposes it's only subscription.

**Type parameters:**

▪ **TResource1**: *DisposableLike*

▪ **TResource2**: *DisposableLike*

▪ **TResource3**: *DisposableLike*

▪ **TResource4**: *DisposableLike*

▪ **TResource5**: *DisposableLike*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *function*

▸ (`scheduler`: SchedulerLike): *[TResource1, TResource2, TResource3, TResource4, TResource5]*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

▪ **observableFactory**: *function*

▸ (`r1`: TResource1, `r2`: TResource2, `r3`: TResource3, `r4`: TResource5): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | TResource1 |
`r2` | TResource2 |
`r3` | TResource3 |
`r4` | TResource5 |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **TC**>(`other`: [ObservableLike](interfaces/observablelike.md)‹TB›, `selector`: function): *[ObservableOperator](README.md#observableoperator)‹TA, TC›*

Returns an `ObservableLike` which combines the source with
the latest value from another `ObservableLike`.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

▪ **other**: *[ObservableLike](interfaces/observablelike.md)‹TB›*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB): *TC*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[ObservableOperator](README.md#observableoperator)‹TA, TC›*

___

###  zip

▸ **zip**<**TA**, **TB**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›, [ObservableLike](interfaces/observablelike.md)‹TH›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›, [ObservableLike](interfaces/observablelike.md)‹TH›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |
`h` | TH |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›, [ObservableLike](interfaces/observablelike.md)‹TH›, [ObservableLike](interfaces/observablelike.md)‹TI›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▪ **observables**: *[[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›, [ObservableLike](interfaces/observablelike.md)‹TC›, [ObservableLike](interfaces/observablelike.md)‹TD›, [ObservableLike](interfaces/observablelike.md)‹TE›, [ObservableLike](interfaces/observablelike.md)‹TF›, [ObservableLike](interfaces/observablelike.md)‹TG›, [ObservableLike](interfaces/observablelike.md)‹TH›, [ObservableLike](interfaces/observablelike.md)‹TI›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH, `i`: TI): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |
`h` | TH |
`i` | TI |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*
