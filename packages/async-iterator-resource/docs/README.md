[@reactive-js/async-iterator-resource](README.md)

# @reactive-js/async-iterator-resource

## Index

### Interfaces

* [AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)

### Functions

* [concatAll](README.md#const-concatall)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [endWith](README.md#const-endwith)
* [exhaust](README.md#const-exhaust)
* [ignoreElements](README.md#const-ignoreelements)
* [keep](README.md#const-keep)
* [lift](README.md#const-lift)
* [liftReq](README.md#const-liftreq)
* [map](README.md#const-map)
* [mergeAll](README.md#const-mergeall)
* [observe](README.md#const-observe)
* [onComplete](README.md#const-oncomplete)
* [onError](README.md#const-onerror)
* [onNext](README.md#const-onnext)
* [repeat](README.md#const-repeat)
* [retry](README.md#const-retry)
* [scan](README.md#const-scan)
* [share](README.md#const-share)
* [startWith](README.md#const-startwith)
* [subscribeOn](README.md#const-subscribeon)
* [switchAll](README.md#const-switchall)
* [take](README.md#const-take)
* [takeLast](README.md#const-takelast)
* [takeWhile](README.md#const-takewhile)
* [throttle](README.md#const-throttle)
* [throttleFirst](README.md#const-throttlefirst)
* [throttleFirstTime](README.md#const-throttlefirsttime)
* [throttleLast](README.md#const-throttlelast)
* [throttleLastTime](README.md#const-throttlelasttime)
* [throttleTime](README.md#const-throttletime)
* [timeout](README.md#const-timeout)
* [withLatestFrom](README.md#const-withlatestfrom)

## Functions

### `Const` concatAll

▸ **concatAll**<**TReq**, **T**>(`maxBufferSize`: number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**TReq**, **T**>(`equals?`: undefined | function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`equals?` | undefined &#124; function |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` endWith

▸ **endWith**<**TReq**, **T**>(`value`: T, ...`values`: T[]): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` exhaust

▸ **exhaust**<**TReq**, **T**>(): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TReq**, **TA**, **TB**>(): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, TA, TReq, TB›*

___

### `Const` keep

▸ **keep**<**TReq**, **T**>(`predicate`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **T**, **TA**>(`operator`: ObservableOperatorLike‹T, TA›): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | ObservableOperatorLike‹T, TA› |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, TA›*

___

### `Const` liftReq

▸ **liftReq**<**TReq**, **T**, **TReqA**>(`operator`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReqA, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TReqA**

**Parameters:**

▪ **operator**: *function*

▸ (`dispatcher`: function): *function*

**Parameters:**

▪ **dispatcher**: *function*

▸ (`req`: TReq): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

▸ (`ref`: TReqA): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | TReqA |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReqA, T›*

___

### `Const` map

▸ **map**<**TReq**, **TA**, **TB**>(`mapper`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`data`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TA |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, TA, TReq, TB›*

___

### `Const` mergeAll

▸ **mergeAll**<**TReq**, **T**>(`options?`: undefined | object): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` observe

▸ **observe**<**TReq**, **T**>(`observer`: ObserverLike‹T›): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` onComplete

▸ **onComplete**<**TReq**, **T**>(`onComplete`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **onComplete**: *function*

▸ (`err?`: ErrorLike): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | ErrorLike |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` onError

▸ **onError**<**TReq**, **T**>(`onError`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **onError**: *function*

▸ (`err`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` onNext

▸ **onNext**<**TReq**, **T**>(`onNext`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **onNext**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` repeat

▸ **repeat**<**TReq**, **T**>(`predicate?`: function | number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | function &#124; number |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` retry

▸ **retry**<**TReq**, **T**>(`predicate?`: undefined | function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | undefined &#124; function |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` scan

▸ **scan**<**TReq**, **T**, **TAcc**>(`scanner`: function, `initialValue`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, TAcc›*

**Type parameters:**

▪ **TReq**

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

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, TAcc›*

___

### `Const` share

▸ **share**<**TReq**, **T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` startWith

▸ **startWith**<**TReq**, **T**>(`value`: T, ...`values`: T[]): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**TReq**, **T**>(`scheduler`: SchedulerLike): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` switchAll

▸ **switchAll**<**TReq**, **T**>(): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` take

▸ **take**<**TReq**, **T**>(`count`: number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` takeLast

▸ **takeLast**<**TReq**, **T**>(`count`: number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**TReq**, **T**>(`predicate`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` throttle

▸ **throttle**<**TReq**, **T**>(`durationSelector`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` throttleFirst

▸ **throttleFirst**<**TReq**, **T**>(`durationSelector`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` throttleFirstTime

▸ **throttleFirstTime**<**TReq**, **T**>(`duration`: number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` throttleLast

▸ **throttleLast**<**TReq**, **T**>(`durationSelector`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` throttleLastTime

▸ **throttleLastTime**<**TReq**, **T**>(`duration`: number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` throttleTime

▸ **throttleTime**<**TReq**, **T**>(`duration`: number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` timeout

▸ **timeout**<**TReq**, **T**>(`duration`: number): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TReq**, **TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, TA, TReq, TC›*

**Type parameters:**

▪ **TReq**

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

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, TA, TReq, TC›*
