[@reactive-js/rx](README.md)

# @reactive-js/rx

## Index

### Classes

* [DelegatingSubscriber](classes/delegatingsubscriber.md)

### Interfaces

* [ErrorLike](interfaces/errorlike.md)
* [MulticastObservableLike](interfaces/multicastobservablelike.md)
* [MulticastObservableResourceLike](interfaces/multicastobservableresourcelike.md)
* [ObservableLike](interfaces/observablelike.md)
* [ObservableResourceLike](interfaces/observableresourcelike.md)
* [ObserverLike](interfaces/observerlike.md)
* [SubjectLike](interfaces/subjectlike.md)
* [SubjectResourceLike](interfaces/subjectresourcelike.md)
* [SubscriberLike](interfaces/subscriberlike.md)

### Functions

* [combineLatest](README.md#combinelatest)
* [concat](README.md#concat)
* [createObservable](README.md#const-createobservable)
* [createSubject](README.md#const-createsubject)
* [defer](README.md#const-defer)
* [empty](README.md#const-empty)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [fromPromise](README.md#const-frompromise)
* [fromScheduledValues](README.md#fromscheduledvalues)
* [generate](README.md#const-generate)
* [merge](README.md#merge)
* [never](README.md#const-never)
* [ofValue](README.md#const-ofvalue)
* [subscribe](README.md#const-subscribe)
* [throws](README.md#const-throws)

## Functions

###  combineLatest

▸ **combineLatest**<**TA**, **TB**, **T**>(`observables`: [[ObservableLike](interfaces/observablelike.md)‹TA›, [ObservableLike](interfaces/observablelike.md)‹TB›], `selector`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

▸ **concat**<**T**>(`fst`: [ObservableLike](interfaces/observablelike.md)‹T›, `snd`: [ObservableLike](interfaces/observablelike.md)‹T›, ...`tail`: Array‹[ObservableLike](interfaces/observablelike.md)‹T››): *[ObservableLike](interfaces/observablelike.md)‹T›*

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

### `Const` createObservable

▸ **createObservable**<**T**>(`onSubscribe`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Factory for safely creating new ObservableLikes. The onSubscribe function
is called with an observer which may be notified from any context,
queueing notifications for notification on the underlying SubscriberLike's
scheduler. The onSubscribe function may return a DisposableOrTeardown instance
which will be disposed when the underlying subscription is disposed.

Note, implementations should not do significant blocking work in
the onSubscribe function.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onSubscribe**: *function*

▸ (`observer`: [ObserverLike](interfaces/observerlike.md)‹T›): *DisposableOrTeardown | void*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [ObserverLike](interfaces/observerlike.md)‹T› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` createSubject

▸ **createSubject**<**T**>(`replayCount`: number): *[SubjectResourceLike](interfaces/subjectresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`replayCount` | number | 0 |

**Returns:** *[SubjectResourceLike](interfaces/subjectresourcelike.md)‹T›*

___

### `Const` defer

▸ **defer**<**T**>(`factory`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

▸ (): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` empty

▸ **empty**<**T**>(`delay?`: undefined | number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`delay?` | undefined &#124; number |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[], `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | keyof T[] | - |
`delay` | number | 0 |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›, `delay`: number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
`delay` | number | 0 |

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

### `Const` generate

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

▪`Default value`  **delay**: *number*= 0

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

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

### `Const` never

▸ **never**<**T**>(): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T, `delay?`: undefined | number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`delay?` | undefined &#124; number |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

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
