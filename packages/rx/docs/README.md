[@reactive-js/rx](README.md)

# @reactive-js/rx

## Index

### Enumerations

* [ThrottleMode](enums/throttlemode.md)

### Classes

* [AbstractDelegatingSubscriber](classes/abstractdelegatingsubscriber.md)

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
* [repeat](README.md#const-repeat)
* [retry](README.md#const-retry)
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
* [throttle](README.md#const-throttle)
* [throwIfEmpty](README.md#const-throwifempty)
* [throws](README.md#const-throws)
* [timeout](README.md#const-timeout)
* [toArray](README.md#const-toarray)
* [toEnumerable](README.md#const-toenumerable)
* [toPromise](README.md#const-topromise)
* [toValue](README.md#const-tovalue)
* [using](README.md#using)
* [withLatestFrom](README.md#const-withlatestfrom)
* [zip](README.md#zip)

## Functions

###  buffer

▸ **buffer**<**T**>(`options`: object): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, keyof T[]›*

Buffer items produced by the source observable until either the number of item reaches the
specified maximum buffer size or the duration time expires.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | object |  {} | a configuration object that specifies an optional `duration` function or time in ms, and an optional `maxBufferSize`.  |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, keyof T[]›*

___

### `Const` catchError

▸ **catchError**<**T**>(`onError`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Catches errors produced by source the observable and either continues with
the observable returned from the `onError` callback or propagates the error if
void is returned.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onError**: *function*

a function that takes source error and either returns an observable
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

Returns an observable that combines the latest values from multiple observables using the specified `selector` function.

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

Returns an observable that combines the latest values from multiple observables using the specified `selector` function.

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

Returns an observable that combines the latest values from multiple observables using the specified `selector` function.

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

Returns an observable that combines the latest values from multiple observables using the specified `selector` function.

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

Returns an observable that combines the latest values from multiple observables using the specified `selector` function.

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

Returns an observable that combines the latest values from multiple observables using the specified `selector` function.

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

Returns an observable that combines the latest values from multiple observables using the specified `selector` function.

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

Returns an observable that combines the latest values from multiple observables using the specified `selector` function.

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

Creates an observable which emits all values from each given observable sequentially.

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

Creates an observable which emits all values from each given observable sequentially.

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

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` contains

▸ **contains**<**T**>(`value`: T, `equals`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

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

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`scheduler` | SchedulerLike | - |
`replayCount` | number | 0 |

**Returns:** *[SubjectLike](interfaces/subjectlike.md)‹T›*

___

### `Const` defer

▸ **defer**<**T**>(`factory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Creates an observable that when subscribed to calls the `factory` function
to make a new observable for each new `SubscriberLike`.

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

Returns an observable that emits all items emitted by the source that
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

Returns an observable that emits the items from the source observable,
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

Returns an observable that emits a single true value if the predicate is satisfied for
every value produced, or if the observable is empty, otherwise false.

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

▸ **forEach**<**T**>(`onNotify`: function, `schedulerFactory`: function): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, void›*

Synchronously subscribes to the observable using a `VirtualTimeSchedulerLike` scheduler,
invoking the onNotify callback for each emitted item from the source. Throws an error
if the source is disposed with an error.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNotify**: *function*

callback to invoke for each emitted item from the source.

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

▪`Default value`  **schedulerFactory**: *function*=  createVirtualTimeScheduler

optional factory function to create a virtual time scheduler.

▸ (): *VirtualTimeSchedulerLike*

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

Creates an `ObservableLIke` from the given array with a specified `delay` between emitted items.
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

▸ **fromEnumerator**<**T**>(`enumerator`: [EnumeratorLike](interfaces/enumeratorlike.md)‹T›): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | [EnumeratorLike](interfaces/enumeratorlike.md)‹T› |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **fromEnumerator**<**T**>(`enumerator`: [EnumeratorLike](interfaces/enumeratorlike.md)‹T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | [EnumeratorLike](interfaces/enumeratorlike.md)‹T› |
`delay` | number |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`delay` | number |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromIterator

▸ **fromIterator**<**T**>(`iterator`: Iterator‹T›): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | Iterator‹T› |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **fromIterator**<**T**>(`iterator`: Iterator‹T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | Iterator‹T› |
`delay` | number |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` fromPromise

▸ **fromPromise**<**T**>(`factory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

▸ (): *Promise‹T›*

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

###  fromScheduledValues

▸ **fromScheduledValues**<**T**>(`value`: [number, T], ...`values`: Array‹[number, T]›): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *function*

▸ (): *T*

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **generate**<**T**>(`generator`: function, `initialValue`: function, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *function*

▸ (): *T*

▪ **delay**: *number*

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

###  lift

▸ **lift**<**TA**, **TB**>(`operator`: [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)‹TA, TB›): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)‹TA, TB› |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`data`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TA |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

___

###  merge

▸ **merge**<**T**>(`fst`: [ObservableLike](interfaces/observablelike.md)‹T›, `snd`: [ObservableLike](interfaces/observablelike.md)‹T›, ...`tail`: Array‹[ObservableLike](interfaces/observablelike.md)‹T››): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object |  {} |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` never

▸ **never**<**T**>(): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

___

### `Const` none

▸ **none**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

Returns an observable that emits a single true value if the predicate does not satisfy
every value produced, or if the observable is empty, otherwise false.

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

Returns a ObservableOperatorLike which forwards notifications to the provided observer.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [ObserverLike](interfaces/observerlike.md)‹T› |   |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

###  ofValue

▸ **ofValue**<**T**>(`value`: T): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

▸ **ofValue**<**T**>(`value`: T, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`delay` | number |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` onDispose

▸ **onDispose**<**T**>(`onDispose`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`scheduler` | SchedulerLike | - |
`replayCount` | number | 0 |

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, [MulticastObservableLike](interfaces/multicastobservablelike.md)‹T››*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: function, `initialValue`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: T): *TAcc*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

▸ (): *TAcc*

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

___

### `Const` repeat

▸ **repeat**<**T**>(`predicate?`: function | number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | function &#124; number |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` retry

▸ **retry**<**T**>(`predicate?`: undefined | function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | undefined &#124; function |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: function, `initialValue`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **scanner**: *function*

▸ (`acc`: TAcc, `next`: T): *TAcc*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

▸ (): *TAcc*

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

___

### `Const` scanAsync

▸ **scanAsync**<**T**, **TAcc**>(`scanner`: function, `initialValue`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **scanner**: *function*

▸ (`acc`: TAcc, `next`: T): *[ObservableLike](interfaces/observablelike.md)‹TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

▸ (): *TAcc*

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, TAcc›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` some

▸ **some**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, boolean›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

Safely subscribes an ObservableLike to a SubscriberLike,
using the provided scheduler. The returned DisposableLike
may used to cancel the subscription.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, DisposableLike›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**T**>(`scheduler`: SchedulerLike): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` switchAll

▸ **switchAll**<**T**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` throttle

▸ **throttle**<**T**>(`duration`: function | number, `mode`: [ThrottleMode](enums/throttlemode.md)): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`duration` | function &#124; number | - |
`mode` | [ThrottleMode](enums/throttlemode.md) |  ThrottleMode.Interval |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` throwIfEmpty

▸ **throwIfEmpty**<**T**>(`factory`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

▸ (): *unknown*

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` throws

▸ **throws**<**T**>(`cause`: unknown, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`cause` | unknown | - |
`delay` | number | 0 |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` timeout

▸ **timeout**<**T**>(`duration`: number | [ObservableLike](interfaces/observablelike.md)‹unknown›): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number &#124; [ObservableLike](interfaces/observablelike.md)‹unknown› |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` toArray

▸ **toArray**<**T**>(`schedulerFactory?`: undefined | function): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, keyof T[]›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`schedulerFactory?` | undefined &#124; function |

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, keyof T[]›*

___

### `Const` toEnumerable

▸ **toEnumerable**<**T**>(): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, [EnumerableLike](interfaces/enumerablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, [EnumerableLike](interfaces/enumerablelike.md)‹T››*

___

### `Const` toPromise

▸ **toPromise**<**T**>(`scheduler`: SchedulerLike): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, Promise‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, Promise‹T››*

___

### `Const` toValue

▸ **toValue**<**T**>(`schedulerFactory`: function): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **schedulerFactory**: *function*=  createVirtualTimeScheduler

▸ (): *VirtualTimeSchedulerLike*

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, T›*

___

###  using

▸ **using**<**TResource**, **T**>(`resourceFactory`: function, `observableFactory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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
