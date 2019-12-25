[@reactive-js/observable](README.md)

# @reactive-js/observable

## Index

### Enumerations

* [ThrottleMode](enums/throttlemode.md)

### Interfaces

* [ObservableOperatorLike](interfaces/observableoperatorlike.md)
* [SubscriberOperatorLike](interfaces/subscriberoperatorlike.md)

### Functions

* [buffer](README.md#const-buffer)
* [concatAll](README.md#const-concatall)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [endWith](README.md#endwith)
* [exhaust](README.md#const-exhaust)
* [ignoreElements](README.md#const-ignoreelements)
* [keep](README.md#const-keep)
* [lift](README.md#const-lift)
* [map](README.md#const-map)
* [mergeAll](README.md#const-mergeall)
* [observe](README.md#const-observe)
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
* [takeFirst](README.md#const-takefirst)
* [takeLast](README.md#const-takelast)
* [takeWhile](README.md#const-takewhile)
* [throttle](README.md#const-throttle)
* [timeout](README.md#const-timeout)
* [toArray](README.md#const-toarray)
* [toIterable](README.md#const-toiterable)
* [toPromise](README.md#const-topromise)
* [toValue](README.md#const-tovalue)
* [using](README.md#using)
* [withLatestFrom](README.md#const-withlatestfrom)

## Functions

### `Const` buffer

▸ **buffer**<**T**>(`duration`: function | number, `maxBufferSize`: number): *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, keyof T[]›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`duration` | function &#124; number | - |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[ObservableOperatorLike](interfaces/observableoperatorlike.md)‹T, keyof T[]›*

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
