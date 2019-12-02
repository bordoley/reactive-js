[@reactive-js/rx-observable](README.md)

# @reactive-js/rx-observable

## Index

### Classes

* [DelegatingSubscriber](classes/delegatingsubscriber.md)

### Interfaces

* [ObservableOperator](interfaces/observableoperator.md)
* [SubscriberOperator](interfaces/subscriberoperator.md)

### Functions

* [combineLatest](README.md#combinelatest)
* [concat](README.md#concat)
* [concatAll](README.md#const-concatall)
* [connect](README.md#const-connect)
* [createObservable](README.md#const-createobservable)
* [createSubject](README.md#const-createsubject)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [empty](README.md#const-empty)
* [exhaust](README.md#const-exhaust)
* [fromArray](README.md#const-fromarray)
* [fromPromiseFactory](README.md#const-frompromisefactory)
* [fromScheduledValues](README.md#const-fromscheduledvalues)
* [generate](README.md#const-generate)
* [ignoreElements](README.md#const-ignoreelements)
* [keep](README.md#const-keep)
* [lift](README.md#const-lift)
* [map](README.md#const-map)
* [merge](README.md#merge)
* [mergeAll](README.md#const-mergeall)
* [never](README.md#const-never)
* [observe](README.md#const-observe)
* [ofValue](README.md#const-ofvalue)
* [onComplete](README.md#const-oncomplete)
* [onError](README.md#const-onerror)
* [onNext](README.md#const-onnext)
* [pipe](README.md#pipe)
* [repeat](README.md#const-repeat)
* [retry](README.md#const-retry)
* [scan](README.md#const-scan)
* [share](README.md#const-share)
* [startWith](README.md#startwith)
* [subscribeOn](README.md#const-subscribeon)
* [switchAll](README.md#const-switchall)
* [take](README.md#const-take)
* [takeLast](README.md#const-takelast)
* [takeWhile](README.md#const-takewhile)
* [throws](README.md#const-throws)
* [toPromise](README.md#const-topromise)
* [withLatestFrom](README.md#const-withlatestfrom)

## Functions

###  combineLatest

▸ **combineLatest**<**TA**, **TB**>(`obs1`: ObservableLike‹TA›, `obs2`: ObservableLike‹TB›): *ObservableLike‹[TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`obs1` | ObservableLike‹TA› |
`obs2` | ObservableLike‹TB› |

**Returns:** *ObservableLike‹[TA, TB]›*

▸ **combineLatest**<**TA**, **TB**, **TC**>(`obs1`: ObservableLike‹TA›, `obs2`: ObservableLike‹TB›, `obs3`: ObservableLike‹TC›): *ObservableLike‹[TA, TB, TC]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`obs1` | ObservableLike‹TA› |
`obs2` | ObservableLike‹TB› |
`obs3` | ObservableLike‹TC› |

**Returns:** *ObservableLike‹[TA, TB, TC]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**>(`obs1`: ObservableLike‹TA›, `obs2`: ObservableLike‹TB›, `obs3`: ObservableLike‹TC›, `obs4`: ObservableLike‹TD›): *ObservableLike‹[TA, TB, TC, TD]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`obs1` | ObservableLike‹TA› |
`obs2` | ObservableLike‹TB› |
`obs3` | ObservableLike‹TC› |
`obs4` | ObservableLike‹TD› |

**Returns:** *ObservableLike‹[TA, TB, TC, TD]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**>(`obs1`: ObservableLike‹TA›, `obs2`: ObservableLike‹TB›, `obs3`: ObservableLike‹TC›, `obs4`: ObservableLike‹TD›, `obs5`: ObservableLike‹TE›): *ObservableLike‹[TA, TB, TC, TD, TE]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`obs1` | ObservableLike‹TA› |
`obs2` | ObservableLike‹TB› |
`obs3` | ObservableLike‹TC› |
`obs4` | ObservableLike‹TD› |
`obs5` | ObservableLike‹TE› |

**Returns:** *ObservableLike‹[TA, TB, TC, TD, TE]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`obs1`: ObservableLike‹TA›, `obs2`: ObservableLike‹TB›, `obs3`: ObservableLike‹TC›, `obs4`: ObservableLike‹TD›, `obs5`: ObservableLike‹TE›, `obs6`: ObservableLike‹TF›): *ObservableLike‹[TA, TB, TC, TD, TE, TF]›*

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
`obs1` | ObservableLike‹TA› |
`obs2` | ObservableLike‹TB› |
`obs3` | ObservableLike‹TC› |
`obs4` | ObservableLike‹TD› |
`obs5` | ObservableLike‹TE› |
`obs6` | ObservableLike‹TF› |

**Returns:** *ObservableLike‹[TA, TB, TC, TD, TE, TF]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`obs1`: ObservableLike‹TA›, `obs2`: ObservableLike‹TB›, `obs3`: ObservableLike‹TC›, `obs4`: ObservableLike‹TD›, `obs5`: ObservableLike‹TE›, `obs6`: ObservableLike‹TF›, `obs7`: ObservableLike‹TG›): *ObservableLike‹[TA, TB, TC, TD, TE, TF, TG]›*

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
`obs1` | ObservableLike‹TA› |
`obs2` | ObservableLike‹TB› |
`obs3` | ObservableLike‹TC› |
`obs4` | ObservableLike‹TD› |
`obs5` | ObservableLike‹TE› |
`obs6` | ObservableLike‹TF› |
`obs7` | ObservableLike‹TG› |

**Returns:** *ObservableLike‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`obs1`: ObservableLike‹TA›, `obs2`: ObservableLike‹TB›, `obs3`: ObservableLike‹TC›, `obs4`: ObservableLike‹TD›, `obs5`: ObservableLike‹TE›, `obs6`: ObservableLike‹TF›, `obs7`: ObservableLike‹TG›, `obs8`: ObservableLike‹TH›): *ObservableLike‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

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
`obs1` | ObservableLike‹TA› |
`obs2` | ObservableLike‹TB› |
`obs3` | ObservableLike‹TC› |
`obs4` | ObservableLike‹TD› |
`obs5` | ObservableLike‹TE› |
`obs6` | ObservableLike‹TF› |
`obs7` | ObservableLike‹TG› |
`obs8` | ObservableLike‹TH› |

**Returns:** *ObservableLike‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **combineLatest**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`obs1`: ObservableLike‹TA›, `obs2`: ObservableLike‹TB›, `obs3`: ObservableLike‹TC›, `obs4`: ObservableLike‹TD›, `obs5`: ObservableLike‹TE›, `obs6`: ObservableLike‹TF›, `obs7`: ObservableLike‹TG›, `obs8`: ObservableLike‹TH›, `obs9`: ObservableLike‹TI›): *ObservableLike‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

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
`obs1` | ObservableLike‹TA› |
`obs2` | ObservableLike‹TB› |
`obs3` | ObservableLike‹TC› |
`obs4` | ObservableLike‹TD› |
`obs5` | ObservableLike‹TE› |
`obs6` | ObservableLike‹TF› |
`obs7` | ObservableLike‹TG› |
`obs8` | ObservableLike‹TH› |
`obs9` | ObservableLike‹TI› |

**Returns:** *ObservableLike‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

###  concat

▸ **concat**<**T**>(`fst`: ObservableLike‹T›, `snd`: ObservableLike‹T›, ...`tail`: Array‹ObservableLike‹T››): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | ObservableLike‹T› |
`snd` | ObservableLike‹T› |
`...tail` | Array‹ObservableLike‹T›› |

**Returns:** *ObservableLike‹T›*

___

### `Const` concatAll

▸ **concatAll**<**T**>(`maxBufferSize`: number): *[ObservableOperator](interfaces/observableoperator.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹ObservableLike‹T›, T›*

___

### `Const` connect

▸ **connect**<**T**>(`observable`: ObservableLike‹T›, `scheduler`: SchedulerLike): *DisposableLike*

Safely connects an ObservableLike to a SubscriberLike,
using the provided scheduler. The returned DisposableLike
may used to cancel the subscription.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | ObservableLike‹T› |
`scheduler` | SchedulerLike |

**Returns:** *DisposableLike*

___

### `Const` createObservable

▸ **createObservable**<**T**>(`onSubscribe`: function): *ObservableLike‹T›*

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

▸ (`observer`: ObserverLike‹T›): *DisposableOrTeardown | void*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *ObservableLike‹T›*

___

### `Const` createSubject

▸ **createSubject**<**T**>(`replayCount`: number): *SubjectResourceLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`replayCount` | number | 0 |

**Returns:** *SubjectResourceLike‹T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals?`: undefined | function): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`equals?` | undefined &#124; function |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` empty

▸ **empty**<**T**>(`delay?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`delay?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *[ObservableOperator](interfaces/observableoperator.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹ObservableLike‹T›, T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: ReadonlyArray‹T›, `delay`: number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | ReadonlyArray‹T› | - |
`delay` | number | 0 |

**Returns:** *ObservableLike‹T›*

___

### `Const` fromPromiseFactory

▸ **fromPromiseFactory**<**T**>(`factory`: function): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

▸ (): *Promise‹T›*

**Returns:** *ObservableLike‹T›*

___

### `Const` fromScheduledValues

▸ **fromScheduledValues**<**T**>(`value`: [number | undefined, T], ...`values`: Array‹[number | undefined, T]›): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [number &#124; undefined, T] |
`...values` | Array‹[number &#124; undefined, T]› |

**Returns:** *ObservableLike‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: T, `delay`: number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *T*

▪`Default value`  **delay**: *number*= 0

**Returns:** *ObservableLike‹T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *[ObservableOperator](interfaces/observableoperator.md)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹TA, TB›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [SubscriberOperator](interfaces/subscriberoperator.md)‹TA, TB›): *[ObservableOperator](interfaces/observableoperator.md)‹TA, TB›*

Converts a SubscriberOperator to an ObservableOperator.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operator` | [SubscriberOperator](interfaces/subscriberoperator.md)‹TA, TB› |   |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[ObservableOperator](interfaces/observableoperator.md)‹TA, TB›*

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

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹TA, TB›*

___

###  merge

▸ **merge**<**T**>(`fst`: ObservableLike‹T›, `snd`: ObservableLike‹T›, ...`tail`: Array‹ObservableLike‹T››): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | ObservableLike‹T› |
`snd` | ObservableLike‹T› |
`...tail` | Array‹ObservableLike‹T›› |

**Returns:** *ObservableLike‹T›*

___

### `Const` mergeAll

▸ **mergeAll**<**T**>(`options?`: undefined | object): *[ObservableOperator](interfaces/observableoperator.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹ObservableLike‹T›, T›*

___

### `Const` never

▸ **never**<**T**>(): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Returns:** *ObservableLike‹T›*

___

### `Const` observe

▸ **observe**<**T**>(`observer`: ObserverLike‹T›): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

Returns a ObservableOperator which forwards notifications to the provided observer.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | ObserverLike‹T› |   |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T, `delay?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`delay?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` onComplete

▸ **onComplete**<**T**>(`onComplete`: function): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onComplete**: *function*

▸ (`err?`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | Error |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` onError

▸ **onError**<**T**>(`onError`: function): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onError**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` onNext

▸ **onNext**<**T**>(`onNext`: function): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNext**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›): *ObservableLike‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |

**Returns:** *ObservableLike‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›): *ObservableLike‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |

**Returns:** *ObservableLike‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›): *ObservableLike‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |

**Returns:** *ObservableLike‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›): *ObservableLike‹D›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |

**Returns:** *ObservableLike‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›): *ObservableLike‹E›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |

**Returns:** *ObservableLike‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›, `op6`: [ObservableOperator](interfaces/observableoperator.md)‹E, F›): *ObservableLike‹F›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |
`op6` | [ObservableOperator](interfaces/observableoperator.md)‹E, F› |

**Returns:** *ObservableLike‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›, `op6`: [ObservableOperator](interfaces/observableoperator.md)‹E, F›, `op7`: [ObservableOperator](interfaces/observableoperator.md)‹F, G›): *ObservableLike‹G›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |
`op6` | [ObservableOperator](interfaces/observableoperator.md)‹E, F› |
`op7` | [ObservableOperator](interfaces/observableoperator.md)‹F, G› |

**Returns:** *ObservableLike‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›, `op6`: [ObservableOperator](interfaces/observableoperator.md)‹E, F›, `op7`: [ObservableOperator](interfaces/observableoperator.md)‹F, G›, `op8`: [ObservableOperator](interfaces/observableoperator.md)‹G, H›): *ObservableLike‹H›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |
`op6` | [ObservableOperator](interfaces/observableoperator.md)‹E, F› |
`op7` | [ObservableOperator](interfaces/observableoperator.md)‹F, G› |
`op8` | [ObservableOperator](interfaces/observableoperator.md)‹G, H› |

**Returns:** *ObservableLike‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: ObservableLike‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›, `op6`: [ObservableOperator](interfaces/observableoperator.md)‹E, F›, `op7`: [ObservableOperator](interfaces/observableoperator.md)‹F, G›, `op8`: [ObservableOperator](interfaces/observableoperator.md)‹G, H›, `op9`: [ObservableOperator](interfaces/observableoperator.md)‹H, I›): *ObservableLike‹I›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |
`op6` | [ObservableOperator](interfaces/observableoperator.md)‹E, F› |
`op7` | [ObservableOperator](interfaces/observableoperator.md)‹F, G› |
`op8` | [ObservableOperator](interfaces/observableoperator.md)‹G, H› |
`op9` | [ObservableOperator](interfaces/observableoperator.md)‹H, I› |

**Returns:** *ObservableLike‹I›*

___

### `Const` repeat

▸ **repeat**<**T**>(`predicate`: function): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **predicate**: *function*=  alwaysTrue

▸ (): *boolean*

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` retry

▸ **retry**<**T**>(`predicate`: function): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **predicate**: *function*=  alwaysTrue1

▸ (`error`: Error): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: function, `initialValue`: TAcc): *[ObservableOperator](interfaces/observableoperator.md)‹T, TAcc›*

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

▪ **initialValue**: *TAcc*

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, TAcc›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**T**>(`scheduler`: SchedulerLike): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` switchAll

▸ **switchAll**<**T**>(): *[ObservableOperator](interfaces/observableoperator.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹ObservableLike‹T›, T›*

___

### `Const` take

▸ **take**<**T**>(`count`: number): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: function): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

### `Const` throws

▸ **throws**<**T**>(`error`: Error, `delay?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`delay?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` toPromise

▸ **toPromise**<**T**>(`observable`: ObservableLike‹T›, `scheduler`: SchedulerLike): *Promise‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | ObservableLike‹T› |
`scheduler` | SchedulerLike |

**Returns:** *Promise‹T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *[ObservableOperator](interfaces/observableoperator.md)‹TA, TC›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

▪ **other**: *ObservableLike‹TB›*

▪ **selector**: *function*

▸ (`a`: TA, `b`: TB): *TC*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹TA, TC›*
