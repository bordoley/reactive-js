[@reactive-js/rx](README.md)

# @reactive-js/rx

## Index

### Enumerations

* [ThrottleMode](enums/throttlemode.md)

### Classes

* [AbstractDelegatingSubscriber](classes/abstractdelegatingsubscriber.md)
* [AbstractSubscriber](classes/abstractsubscriber.md)

### Interfaces

* [EnumerableLike](interfaces/enumerablelike.md)
* [EnumerableOperatorLike](interfaces/enumerableoperatorlike.md)
* [EnumeratorLike](interfaces/enumeratorlike.md)
* [MulticastObservableLike](interfaces/multicastobservablelike.md)
* [ObservableLike](interfaces/observablelike.md)
* [ObservableOperatorLike](interfaces/observableoperatorlike.md)
* [ObserverLike](interfaces/observerlike.md)
* [SafeSubscriberLike](interfaces/safesubscriberlike.md)
* [SubjectLike](interfaces/subjectlike.md)
* [SubscriberLike](interfaces/subscriberlike.md)
* [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)

### Functions

* [buffer](README.md#buffer)
* [catchError](README.md#const-catcherror)
* [combineLatest](README.md#combinelatest)
* [concat](README.md#concat)
* [concatAll](README.md#const-concatall)
* [contains](README.md#const-contains)
* [createObservable](README.md#const-createobservable)
* [createSubject](README.md#const-createsubject)
* [defer](README.md#const-defer)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [empty](README.md#empty)
* [endWith](README.md#endwith)
* [every](README.md#const-every)
* [exhaust](README.md#const-exhaust)
* [flatten](README.md#const-flatten)
* [forEach](README.md#const-foreach)
* [fromArray](README.md#fromarray)
* [fromEnumerator](README.md#fromenumerator)
* [fromIterable](README.md#fromiterable)
* [fromIterator](README.md#fromiterator)
* [fromPromise](README.md#const-frompromise)
* [fromScheduledValues](README.md#fromscheduledvalues)
* [generate](README.md#generate)
* [ignoreElements](README.md#const-ignoreelements)
* [keep](README.md#const-keep)
* [lift](README.md#lift)
* [map](README.md#const-map)
* [merge](README.md#merge)
* [mergeAll](README.md#const-mergeall)
* [never](README.md#const-never)
* [none](README.md#const-none)
* [observe](README.md#observe)
* [ofValue](README.md#ofvalue)
* [onDispose](README.md#const-ondispose)
* [onError](README.md#const-onerror)
* [onNotify](README.md#const-onnotify)
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
* [takeFirst](README.md#const-takefirst)
* [takeLast](README.md#const-takelast)
* [takeWhile](README.md#const-takewhile)
* [throttle](README.md#throttle)
* [throwIfEmpty](README.md#const-throwifempty)
* [throws](README.md#const-throws)
* [timeout](README.md#timeout)
* [toArray](README.md#const-toarray)
* [toEnumerable](README.md#const-toenumerable)
* [toPromise](README.md#const-topromise)
* [toSafeSubscriber](README.md#const-tosafesubscriber)
* [toValue](README.md#const-tovalue)
* [using](README.md#using)
* [withLatestFrom](README.md#const-withlatestfrom)
* [zip](README.md#zip)

## Functions

###  buffer

▸ **buffer**<**T**>(`options`: object): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, keyof T[]›*

Returns an `ObservableLike` which buffers items produced by the source until either the
number of items reaches the specified maximum buffer size or the duration time expires.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | object |  {} | A configuration object that specifies an optional `duration` function or time in ms, and an optional `maxBufferSize`.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, keyof T[]›*

___

### `Const` catchError

▸ **catchError**<**T**>(`onError`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` which catches errors produced by the source and either continues with
the `ObservableLike` returned from the `onError` callback or propagates the error if
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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

###  concat

▸ **concat**<**T**>(`fst`: [EnumerableLike](interfaces/enumerablelike.md)‹T›, `snd`: [EnumerableLike](interfaces/enumerablelike.md)‹T›, ...`tail`: Array‹[EnumerableLike](interfaces/enumerablelike.md)‹T››): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Creates an `EnumerableLike` which emits all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [EnumerableLike](interfaces/enumerablelike.md)‹T› |
`snd` | [EnumerableLike](interfaces/enumerablelike.md)‹T› |
`...tail` | Array‹[EnumerableLike](interfaces/enumerablelike.md)‹T›› |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

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

▸ **concatAll**<**T**>(`maxBufferSize`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order
`ObservableLike` by concatenating the inner sources in order.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER | The number of source observables that may be queued before dropping previous observables.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` contains

▸ **contains**<**T**>(`value`: T, `equals`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

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

### `Const` defer

▸ **defer**<**T**>(`factory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` that when subscribed to calls the `factory` function
to create a new source instance for each subscriber.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

Factory function to invoke for each `SubscriberLike` that subscribes to the observable.

▸ (): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

###  empty

▸ **empty**<**T**>(): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Return an `EnumerableLike` that emits no items and immediately disposes the subscription.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **empty**<**T**>(`delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that emits items from the source,
concatenated with the values specified as arguments.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` every

▸ **every**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
by dropping inner sources while the previous inner source
has not yet been disposed.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` flatten

▸ **flatten**<**T**>(): *[EnumerableOperatorLike](interfaces/enumerableoperatorlike.md)‹[EnumerableLike](interfaces/enumerablelike.md)‹T›, T›*

Converts a higher-order EnumerableLike into a first-order EnumerableLike
by concatenating the inner Enumerables in order.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableOperatorLike](interfaces/enumerableoperatorlike.md)‹[EnumerableLike](interfaces/enumerablelike.md)‹T›, T›*

___

### `Const` forEach

▸ **forEach**<**T**>(`onNotify`: function): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, void›*

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

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, void›*

___

###  fromArray

▸ **fromArray**<**T**>(`values`: keyof T[], `options?`: undefined | object): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Creates an `EnumerableLike` from the given array, starting at the `startIndex` if specified.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] | The array. |
`options?` | undefined &#124; object | Optional config object that specifies the `startIndex` into the array.  |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **fromArray**<**T**>(`values`: keyof T[], `options`: object): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
An optional `startIndex` in the array maybe specified,

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] | The array. |
`options` | object | Config object that includes a the specified `delay` between emitted items and an optional `startIndex` into the array.  |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromEnumerator

▸ **fromEnumerator**<**T**>(`enumerator`: [EnumeratorLike](interfaces/enumeratorlike.md)‹void, T›): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Creates an `EnumerableLike` backed by the provided `EnumeratorLike`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumerator` | [EnumeratorLike](interfaces/enumeratorlike.md)‹void, T› | The `EnumeratorLike`.  |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **fromEnumerator**<**T**>(`enumerator`: [EnumeratorLike](interfaces/enumeratorlike.md)‹void, T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` backed by the provided `EnumeratorLike`
with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumerator` | [EnumeratorLike](interfaces/enumeratorlike.md)‹void, T› | The `EnumeratorLike`. |
`delay` | number | The requested delay between emitted items by the observable.  |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Creates an `EnumerableLike` which iterates through the values
produced by the provided `Iterable`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterable` with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`delay` | number | The requested delay between emitted items by the observable.  |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromIterator

▸ **fromIterator**<**T**>(`iterator`: Iterator‹T›): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Creates an `EnumerableLike` backed by the provided `Iterator`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterator` | Iterator‹T› | The `Iterator`.  |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **fromIterator**<**T**>(`iterator`: Iterator‹T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` backed by the provided `Iterator`
with a specified `delay` between emitted items.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterator` | Iterator‹T› | - |
`delay` | number | The requested delay between emitted items byt the observable.  |

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

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Generates an `EnumerableLike` sequence from a generator function
that is applied to an accumulator value.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

The generator function.

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *function*

Factory function to generate the initial accumulator.

▸ (): *T*

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

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

▪ **delay**: *number*

The requested delay between emitted items by the observable.

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

Returns an `ObservableLike` that ignores all items emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

###  lift

▸ **lift**<**TA**, **TB**>(`operator`: [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)‹TA, TB›): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

Creates a new `ObservableLike` which applies the provided the operator function to
subscriber when the source is subscribed to.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operator` | [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)‹TA, TB› | The operator function to apply.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

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

▸ **mergeAll**<**T**>(`options`: object): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
which concurrently delivers values emitted by the inner sources.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | object |  {} | Optional configuration object. The `maxBufferSize` property specifies how many source observables may be queued before dropping previous observables. The `maxConcurrency` property specifies the maximum number of inner observables that may be subscribed to concurrently.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` never

▸ **never**<**T**>(): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Returna an `ObservableLike` instance that emits no items and never disposes its subscriber.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

___

### `Const` none

▸ **none**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

___

###  observe

▸ **observe**<**T**>(`observer`: [ObserverLike](interfaces/observerlike.md)‹T›): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an observable that forwards notifications to the provided observer.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [ObserverLike](interfaces/observerlike.md)‹T› | The observer that observes notifications.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

###  ofValue

▸ **ofValue**<**T**>(`value`: T): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Creates an `EnumerableLike` that emits `value` then disposes the subscriber.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to emit.  |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **ofValue**<**T**>(`value`: T, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to emit. |
`delay` | number | The delay before emitting the value.  |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` onDispose

▸ **onDispose**<**T**>(`onDispose`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an observable that forwards dispose notifications to the provided `onDispose` function.

The function that is invoked when the observable subscription is disposed.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onDispose**: *function*

▸ (`err?`: ErrorLike): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | ErrorLike |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` onError

▸ **onError**<**T**>(`onError`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` onNotify

▸ **onNotify**<**T**>(`onNotify`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` publish

▸ **publish**<**T**>(`scheduler`: SchedulerLike, `replayCount`: number): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, [MulticastObservableLike](interfaces/multicastobservablelike.md)‹T››*

Returns a `MulticastObservableLike` backed by a single subscription to the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`scheduler` | SchedulerLike | - | A `SchedulerLike` that is used to subscribe to the source observable. |
`replayCount` | number | 0 | The number of events that should be replayed when the `MulticastObservableLike` is subscribed to.  |

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, [MulticastObservableLike](interfaces/multicastobservablelike.md)‹T››*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: function, `initialValue`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

▸ **repeat**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that repeats the source count times.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number |   |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

▸ **repeat**<**T**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that continually repeats the source.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

###  retry

▸ **retry**<**T**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

▸ **retry**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: function, `initialValue`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

___

### `Const` scanAsync

▸ **scanAsync**<**T**, **TAcc**>(`scanner`: function, `initialValue`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that skips the first count items emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The number of items emitted by source that should be skipped.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` some

▸ **some**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that emits the values specified as arguments,
concatenated with items from the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` subscribe

▸ **subscribe**<**T**>(`scheduler`: SchedulerLike): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, DisposableLike›*

Safely subscribes to an `ObservableLike` with a `SubscriberLike` instance
using the provided scheduler. The returned `DisposableLike`
may used to cancel the subscription.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | SchedulerLike | The SchedulerLike instance that should be used by the source to notify it's subscriber.  |

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, DisposableLike›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**T**>(`scheduler`: SchedulerLike): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | SchedulerLike | `SchedulerLike` instance to use when subscribing to the source.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` switchAll

▸ **switchAll**<**T**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
values only from the most recent source.

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that only emits the first `count` values emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that only emits the last `count` items emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

###  throttle

▸ **throttle**<**T**>(`duration`: function, `mode?`: [ThrottleMode](enums/throttlemode.md)): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

▸ **throttle**<**T**>(`duration`: number, `mode?`: [ThrottleMode](enums/throttlemode.md)): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | number | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
`mode?` | [ThrottleMode](enums/throttlemode.md) | The throttle mode.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` throwIfEmpty

▸ **throwIfEmpty**<**T**>(`factory`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that emits an error if the source completes without emitting a value.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

A factory function invoked to produce the error to be thrown.

▸ (): *unknown*

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` throws

▸ **throws**<**T**>(`factory`: function, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

Factory function to generate the error to emit.

▸ (): *unknown*

▪`Default value`  **delay**: *number*= 0

The delay before disposing the subscription.

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  timeout

▸ **timeout**<**T**>(`duration`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | number | Time in ms within which the source must emit values.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

▸ **timeout**<**T**>(`duration`: [ObservableLike](interfaces/observablelike.md)‹unknown›): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | [ObservableLike](interfaces/observablelike.md)‹unknown› |   |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` toArray

▸ **toArray**<**T**>(): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, keyof T[]›*

Synchronously subscribes to the source using a `VirtualTimeSchedulerLike`, accumulating all
values emitted by the source into an array.

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, keyof T[]›*

___

### `Const` toEnumerable

▸ **toEnumerable**<**T**>(): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, [EnumerableLike](interfaces/enumerablelike.md)‹T››*

Converts an `ObservableLike` source into an `EnumerableLike` source. If the
source itself is `EnumerableLike`, then this function returns the source. Otherwise,
a `VirtualTimeSchedulerLike` is used to enumerate the source. Hence, this function
should not be used with sources that perform I/O such as ones that wrap Promises
or DOM events.

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, [EnumerableLike](interfaces/enumerablelike.md)‹T››*

___

### `Const` toPromise

▸ **toPromise**<**T**>(`scheduler`: SchedulerLike): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, Promise‹T››*

Returns a Promise that completes with the last value produced by
the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | SchedulerLike | The scheduler upon which to subscribe to the source.  |

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, Promise‹T››*

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

▸ **toValue**<**T**>(): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

Synchronously subscribes to the source using a `VirtualTimeSchedulerLike`, returning
the last value produced by the source.

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

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

▸ (): *TResource*

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

▸ (): *[TResource1, TResource2]*

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

▸ (): *[TResource1, TResource2, TResource3]*

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

▸ (): *[TResource1, TResource2, TResource3, TResource4]*

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

▸ (): *[TResource1, TResource2, TResource3, TResource4, TResource5]*

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

▸ **withLatestFrom**<**TA**, **TB**, **TC**>(`other`: [ObservableLike](interfaces/observablelike.md)‹TB›, `selector`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TC›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TC›*

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

▸ **zip**<**TA**, **TB**, **T**>(`observables`: [[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›], `selector`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **T**>(`observables`: [[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›], `selector`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **T**>(`observables`: [[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›], `selector`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

▪ **observables**: *[[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›]*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **T**>(`observables`: [[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›], `selector`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

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

▪ **observables**: *[[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›]*

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

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **T**>(`observables`: [[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›, [EnumerableLike](interfaces/enumerablelike.md)‹TF›], `selector`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

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

▪ **observables**: *[[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›, [EnumerableLike](interfaces/enumerablelike.md)‹TF›]*

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

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **T**>(`observables`: [[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›, [EnumerableLike](interfaces/enumerablelike.md)‹TF›, [EnumerableLike](interfaces/enumerablelike.md)‹TG›], `selector`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

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

▪ **observables**: *[[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›, [EnumerableLike](interfaces/enumerablelike.md)‹TF›, [EnumerableLike](interfaces/enumerablelike.md)‹TG›]*

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

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **T**>(`observables`: [[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›, [EnumerableLike](interfaces/enumerablelike.md)‹TF›, [EnumerableLike](interfaces/enumerablelike.md)‹TG›, [EnumerableLike](interfaces/enumerablelike.md)‹TH›], `selector`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

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

▪ **observables**: *[[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›, [EnumerableLike](interfaces/enumerablelike.md)‹TF›, [EnumerableLike](interfaces/enumerablelike.md)‹TG›, [EnumerableLike](interfaces/enumerablelike.md)‹TH›]*

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

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**, **T**>(`observables`: [[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›, [EnumerableLike](interfaces/enumerablelike.md)‹TF›, [EnumerableLike](interfaces/enumerablelike.md)‹TG›, [EnumerableLike](interfaces/enumerablelike.md)‹TH›, [EnumerableLike](interfaces/enumerablelike.md)‹TI›], `selector`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

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

▪ **observables**: *[[EnumerableLike](interfaces/enumerablelike.md)‹TA›, [EnumerableLike](interfaces/enumerablelike.md)‹TB›, [EnumerableLike](interfaces/enumerablelike.md)‹TC›, [EnumerableLike](interfaces/enumerablelike.md)‹TD›, [EnumerableLike](interfaces/enumerablelike.md)‹TE›, [EnumerableLike](interfaces/enumerablelike.md)‹TF›, [EnumerableLike](interfaces/enumerablelike.md)‹TG›, [EnumerableLike](interfaces/enumerablelike.md)‹TH›, [EnumerableLike](interfaces/enumerablelike.md)‹TI›]*

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

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*
