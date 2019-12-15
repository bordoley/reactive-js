[@reactive-js/observable](README.md)

# @reactive-js/observable

## Index

### Enumerations

* [ThrottleMode](enums/throttlemode.md)

### Interfaces

* [ObservableOperatorLike](interfaces/observableoperatorlike.md)
* [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)

### Functions

* [combineLatest](README.md#combinelatest)
* [concat](README.md#concat)
* [concatAll](README.md#const-concatall)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [empty](README.md#const-empty)
* [endWith](README.md#endwith)
* [exhaust](README.md#const-exhaust)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [fromPromiseFactory](README.md#const-frompromisefactory)
* [fromScheduledValues](README.md#fromscheduledvalues)
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
* [reduce](README.md#const-reduce)
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
* [throttle](README.md#const-throttle)
* [throws](README.md#const-throws)
* [timeout](README.md#const-timeout)
* [toArray](README.md#const-toarray)
* [toIterable](README.md#const-toiterable)
* [toPromise](README.md#const-topromise)
* [toValue](README.md#const-tovalue)
* [using](README.md#using)
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

▸ **concatAll**<**T**>(`maxBufferSize`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹ObservableLike‹T›, T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals?`: undefined | function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`equals?` | undefined &#124; function |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹ObservableLike‹T›, T›*

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

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›, `delay`: number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | Iterable‹T› | - |
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

###  fromScheduledValues

▸ **fromScheduledValues**<**T**>(`value`: [number, T], ...`values`: Array‹[number, T]›): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [number, T] |
`...values` | Array‹[number, T]› |

**Returns:** *ObservableLike‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function, `delay`: number): *ObservableLike‹T›*

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

**Returns:** *ObservableLike‹T›*

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

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)‹TA, TB›): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TB›*

Converts a SubscriberOperatorLike to an ObservableOperatorLike.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operator` | [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)‹TA, TB› |   |

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

▸ **mergeAll**<**T**>(`options?`: undefined | object): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹ObservableLike‹T›, T›*

___

### `Const` never

▸ **never**<**T**>(): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Returns:** *ObservableLike‹T›*

___

### `Const` observe

▸ **observe**<**T**>(`observer`: ObserverLike‹T›): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

Returns a ObservableOperatorLike which forwards notifications to the provided observer.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | ObserverLike‹T› |   |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

▸ **onComplete**<**T**>(`onComplete`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onComplete**: *function*

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

### `Const` onNext

▸ **onNext**<**T**>(`onNext`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNext**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

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

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *OperatorLike‹ObservableLike‹T›, MulticastObservableLike‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *OperatorLike‹ObservableLike‹T›, MulticastObservableLike‹T››*

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

▸ **switchAll**<**T**>(): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹ObservableLike‹T›, T›*

___

### `Const` take

▸ **take**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

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

### `Const` throws

▸ **throws**<**T**>(`cause`: unknown, `delay?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`cause` | unknown |
`delay?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` timeout

▸ **timeout**<**T**>(`duration`: number | ObservableLike‹unknown›): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number &#124; ObservableLike‹unknown› |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, T›*

___

### `Const` toArray

▸ **toArray**<**T**>(`schedulerFactory?`: undefined | function): *OperatorLike‹ObservableLike‹T›, keyof T[]›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`schedulerFactory?` | undefined &#124; function |

**Returns:** *OperatorLike‹ObservableLike‹T›, keyof T[]›*

___

### `Const` toIterable

▸ **toIterable**<**T**>(`schedulerFactory`: function): *OperatorLike‹ObservableLike‹T›, Iterable‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **schedulerFactory**: *function*=  createSynchronousSchedulerResource

▸ (): *VirtualTimeSchedulerResourceLike*

**Returns:** *OperatorLike‹ObservableLike‹T›, Iterable‹T››*

___

### `Const` toPromise

▸ **toPromise**<**T**>(`scheduler`: SchedulerLike): *OperatorLike‹ObservableLike‹T›, Promise‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *OperatorLike‹ObservableLike‹T›, Promise‹T››*

___

### `Const` toValue

▸ **toValue**<**T**>(`schedulerFactory?`: undefined | function): *OperatorLike‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`schedulerFactory?` | undefined &#124; function |

**Returns:** *OperatorLike‹ObservableLike‹T›, T›*

___

###  using

▸ **using**<**TResource**, **T**>(`resourceFactory`: function, `observableFactory`: function): *ObservableLike‹T›*

**Type parameters:**

▪ **TResource**: *DisposableLike*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *function*

▸ (): *TResource*

▪ **observableFactory**: *function*

▸ (`resource`: TResource): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`resource` | TResource |

**Returns:** *ObservableLike‹T›*

▸ **using**<**TResource1**, **TResource2**, **T**>(`resourceFactory`: function, `observableFactory`: function): *ObservableLike‹T›*

**Type parameters:**

▪ **TResource1**: *DisposableLike*

▪ **TResource2**: *DisposableLike*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *function*

▸ (): *[TResource1, TResource2]*

▪ **observableFactory**: *function*

▸ (`resource`: [TResource1, TResource2]): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`resource` | [TResource1, TResource2] |

**Returns:** *ObservableLike‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **T**>(`resourceFactory`: function, `observableFactory`: function): *ObservableLike‹T›*

**Type parameters:**

▪ **TResource1**: *DisposableLike*

▪ **TResource2**: *DisposableLike*

▪ **TResource3**: *DisposableLike*

▪ **T**

**Parameters:**

▪ **resourceFactory**: *function*

▸ (): *[TResource1, TResource2, TResource3]*

▪ **observableFactory**: *function*

▸ (`resource`: [TResource1, TResource2, TResource3]): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`resource` | [TResource1, TResource2, TResource3] |

**Returns:** *ObservableLike‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **TResource4**, **T**>(`resourceFactory`: function, `observableFactory`: function): *ObservableLike‹T›*

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

▸ (`resource`: [TResource1, TResource2, TResource3, TResource4]): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`resource` | [TResource1, TResource2, TResource3, TResource4] |

**Returns:** *ObservableLike‹T›*

▸ **using**<**TResource1**, **TResource2**, **TResource3**, **TResource4**, **TResource5**, **T**>(`resourceFactory`: function, `observableFactory`: function): *ObservableLike‹T›*

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

▸ (`resource`: [TResource1, TResource2, TResource3, TResource4, TResource5]): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`resource` | [TResource1, TResource2, TResource3, TResource4, TResource5] |

**Returns:** *ObservableLike‹T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TC›*

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

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹TA, TC›*
