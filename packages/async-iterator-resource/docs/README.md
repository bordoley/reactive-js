[@reactive-js/async-iterator-resource](README.md)

# @reactive-js/async-iterator-resource

## Index

### Functions

* [concatAll](README.md#const-concatall)
* [createEventEmitter](README.md#const-createeventemitter)
* [createPersistentStateStore](README.md#const-createpersistentstatestore)
* [createStateStore](README.md#const-createstatestore)
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
* [pipe](README.md#pipe)
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

▸ **concatAll**<**TReq**, **T**>(`maxBufferSize`: number): *AsyncIteratorResourceOperatorLike‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` createEventEmitter

▸ **createEventEmitter**<**T**>(): *EventEmitterResourceLike‹T›*

**Type parameters:**

▪ **T**

**Returns:** *EventEmitterResourceLike‹T›*

___

### `Const` createPersistentStateStore

▸ **createPersistentStateStore**<**T**>(`persistentStore`: AsyncIteratorLike‹T, StateUpdaterLike‹T››, `initialState`: T, `scheduler`: SchedulerLike, `equals?`: undefined | function): *StateStoreResourceLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`persistentStore` | AsyncIteratorLike‹T, StateUpdaterLike‹T›› |
`initialState` | T |
`scheduler` | SchedulerLike |
`equals?` | undefined &#124; function |

**Returns:** *StateStoreResourceLike‹T›*

___

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: T, `scheduler`: SchedulerLike, `equals?`: undefined | function): *StateStoreResourceLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`initialState` | T |
`scheduler` | SchedulerLike |
`equals?` | undefined &#124; function |

**Returns:** *StateStoreResourceLike‹T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**TReq**, **T**>(`equals?`: undefined | function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`equals?` | undefined &#124; function |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` endWith

▸ **endWith**<**TReq**, **T**>(`value`: T, ...`values`: T[]): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` exhaust

▸ **exhaust**<**TReq**, **T**>(): *AsyncIteratorResourceOperatorLike‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TReq**, **TA**, **TB**>(): *AsyncIteratorResourceOperatorLike‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, TA, TReq, TB›*

___

### `Const` keep

▸ **keep**<**TReq**, **T**>(`predicate`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **T**, **TA**>(`operator`: ObservableOperatorLike‹T, TA›): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | ObservableOperatorLike‹T, TA› |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, TA›*

___

### `Const` liftReq

▸ **liftReq**<**TReq**, **T**, **TReqA**>(`mapper`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReqA, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TReqA**

**Parameters:**

▪ **mapper**: *function*

▸ (`req`: TReqA): *TReq*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReqA |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReqA, T›*

___

### `Const` map

▸ **map**<**TReq**, **TA**, **TB**>(`mapper`: function): *AsyncIteratorResourceOperatorLike‹TReq, TA, TReq, TB›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, TA, TReq, TB›*

___

### `Const` mergeAll

▸ **mergeAll**<**TReq**, **T**>(`options?`: undefined | object): *AsyncIteratorResourceOperatorLike‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` observe

▸ **observe**<**TReq**, **T**>(`observer`: ObserverLike‹T›): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` onComplete

▸ **onComplete**<**TReq**, **T**>(`onComplete`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` onError

▸ **onError**<**TReq**, **T**>(`onError`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` onNext

▸ **onNext**<**TReq**, **T**>(`onNext`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

###  pipe

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›): *AsyncIteratorResourceLike‹TReqA, TA›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |

**Returns:** *AsyncIteratorResourceLike‹TReqA, TA›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›, `op2`: AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB›): *AsyncIteratorResourceLike‹TReqB, TB›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

▪ **TReqB**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |
`op2` | AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB› |

**Returns:** *AsyncIteratorResourceLike‹TReqB, TB›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›, `op2`: AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB›, `op3`: AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC›): *AsyncIteratorResourceLike‹TReqC, TC›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

▪ **TReqB**

▪ **TB**

▪ **TReqC**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |
`op2` | AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB› |
`op3` | AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC› |

**Returns:** *AsyncIteratorResourceLike‹TReqC, TC›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›, `op2`: AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB›, `op3`: AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC›, `op4`: AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD›): *AsyncIteratorResourceLike‹TReqD, TD›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

▪ **TReqB**

▪ **TB**

▪ **TReqC**

▪ **TC**

▪ **TReqD**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |
`op2` | AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB› |
`op3` | AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC› |
`op4` | AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD› |

**Returns:** *AsyncIteratorResourceLike‹TReqD, TD›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›, `op2`: AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB›, `op3`: AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC›, `op4`: AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD›, `op5`: AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE›): *AsyncIteratorResourceLike‹TReqE, TE›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

▪ **TReqB**

▪ **TB**

▪ **TReqC**

▪ **TC**

▪ **TReqD**

▪ **TD**

▪ **TReqE**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |
`op2` | AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB› |
`op3` | AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC› |
`op4` | AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD› |
`op5` | AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE› |

**Returns:** *AsyncIteratorResourceLike‹TReqE, TE›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›, `op2`: AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB›, `op3`: AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC›, `op4`: AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD›, `op5`: AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE›, `op6`: AsyncIteratorResourceOperatorLike‹TReqE, TE, TReqF, TF›): *AsyncIteratorResourceLike‹TReqF, TF›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

▪ **TReqB**

▪ **TB**

▪ **TReqC**

▪ **TC**

▪ **TReqD**

▪ **TD**

▪ **TReqE**

▪ **TE**

▪ **TReqF**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |
`op2` | AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB› |
`op3` | AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC› |
`op4` | AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD› |
`op5` | AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE› |
`op6` | AsyncIteratorResourceOperatorLike‹TReqE, TE, TReqF, TF› |

**Returns:** *AsyncIteratorResourceLike‹TReqF, TF›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›, `op2`: AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB›, `op3`: AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC›, `op4`: AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD›, `op5`: AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE›, `op6`: AsyncIteratorResourceOperatorLike‹TReqE, TE, TReqF, TF›, `op7`: AsyncIteratorResourceOperatorLike‹TReqF, TF, TReqG, TG›): *AsyncIteratorResourceLike‹TReqG, TG›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

▪ **TReqB**

▪ **TB**

▪ **TReqC**

▪ **TC**

▪ **TReqD**

▪ **TD**

▪ **TReqE**

▪ **TE**

▪ **TReqF**

▪ **TF**

▪ **TReqG**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |
`op2` | AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB› |
`op3` | AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC› |
`op4` | AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD› |
`op5` | AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE› |
`op6` | AsyncIteratorResourceOperatorLike‹TReqE, TE, TReqF, TF› |
`op7` | AsyncIteratorResourceOperatorLike‹TReqF, TF, TReqG, TG› |

**Returns:** *AsyncIteratorResourceLike‹TReqG, TG›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›, `op2`: AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB›, `op3`: AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC›, `op4`: AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD›, `op5`: AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE›, `op6`: AsyncIteratorResourceOperatorLike‹TReqE, TE, TReqF, TF›, `op7`: AsyncIteratorResourceOperatorLike‹TReqF, TF, TReqG, TG›, `op8`: AsyncIteratorResourceOperatorLike‹TReqG, TG, TReqH, TH›): *AsyncIteratorResourceLike‹TReqH, TH›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

▪ **TReqB**

▪ **TB**

▪ **TReqC**

▪ **TC**

▪ **TReqD**

▪ **TD**

▪ **TReqE**

▪ **TE**

▪ **TReqF**

▪ **TF**

▪ **TReqG**

▪ **TG**

▪ **TReqH**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |
`op2` | AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB› |
`op3` | AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC› |
`op4` | AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD› |
`op5` | AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE› |
`op6` | AsyncIteratorResourceOperatorLike‹TReqE, TE, TReqF, TF› |
`op7` | AsyncIteratorResourceOperatorLike‹TReqF, TF, TReqG, TG› |
`op8` | AsyncIteratorResourceOperatorLike‹TReqG, TG, TReqH, TH› |

**Returns:** *AsyncIteratorResourceLike‹TReqH, TH›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**, **TReqI**, **TI**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA›, `op2`: AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB›, `op3`: AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC›, `op4`: AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD›, `op5`: AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE›, `op6`: AsyncIteratorResourceOperatorLike‹TReqE, TE, TReqF, TF›, `op7`: AsyncIteratorResourceOperatorLike‹TReqF, TF, TReqG, TG›, `op8`: AsyncIteratorResourceOperatorLike‹TReqG, TG, TReqH, TH›, `op9`: AsyncIteratorResourceOperatorLike‹TReqH, TH, TReqI, TI›): *AsyncIteratorResourceLike‹TReqI, TI›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

▪ **TReqB**

▪ **TB**

▪ **TReqC**

▪ **TC**

▪ **TReqD**

▪ **TD**

▪ **TReqE**

▪ **TE**

▪ **TReqF**

▪ **TF**

▪ **TReqG**

▪ **TG**

▪ **TReqH**

▪ **TH**

▪ **TReqI**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | AsyncIteratorResourceOperatorLike‹TSrcReq, TSrc, TReqA, TA› |
`op2` | AsyncIteratorResourceOperatorLike‹TReqA, TA, TReqB, TB› |
`op3` | AsyncIteratorResourceOperatorLike‹TReqB, TB, TReqC, TC› |
`op4` | AsyncIteratorResourceOperatorLike‹TReqC, TC, TReqD, TD› |
`op5` | AsyncIteratorResourceOperatorLike‹TReqD, TD, TReqE, TE› |
`op6` | AsyncIteratorResourceOperatorLike‹TReqE, TE, TReqF, TF› |
`op7` | AsyncIteratorResourceOperatorLike‹TReqF, TF, TReqG, TG› |
`op8` | AsyncIteratorResourceOperatorLike‹TReqG, TG, TReqH, TH› |
`op9` | AsyncIteratorResourceOperatorLike‹TReqH, TH, TReqI, TI› |

**Returns:** *AsyncIteratorResourceLike‹TReqI, TI›*

___

### `Const` repeat

▸ **repeat**<**TReq**, **T**>(`predicate?`: function | number): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | function &#124; number |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` retry

▸ **retry**<**TReq**, **T**>(`predicate?`: undefined | function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | undefined &#124; function |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` scan

▸ **scan**<**TReq**, **T**, **TAcc**>(`scanner`: function, `initialValue`: TAcc): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, TAcc›*

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

▪ **initialValue**: *TAcc*

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, TAcc›*

___

### `Const` share

▸ **share**<**TReq**, **T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` startWith

▸ **startWith**<**TReq**, **T**>(`value`: T, ...`values`: T[]): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**TReq**, **T**>(`scheduler`: SchedulerLike): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` switchAll

▸ **switchAll**<**TReq**, **T**>(): *AsyncIteratorResourceOperatorLike‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` take

▸ **take**<**TReq**, **T**>(`count`: number): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` takeLast

▸ **takeLast**<**TReq**, **T**>(`count`: number): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**TReq**, **T**>(`predicate`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` throttle

▸ **throttle**<**TReq**, **T**>(`durationSelector`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` throttleFirst

▸ **throttleFirst**<**TReq**, **T**>(`durationSelector`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` throttleFirstTime

▸ **throttleFirstTime**<**TReq**, **T**>(`duration`: number): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` throttleLast

▸ **throttleLast**<**TReq**, **T**>(`durationSelector`: function): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` throttleLastTime

▸ **throttleLastTime**<**TReq**, **T**>(`duration`: number): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` throttleTime

▸ **throttleTime**<**TReq**, **T**>(`duration`: number): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` timeout

▸ **timeout**<**TReq**, **T**>(`duration`: number): *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, T, TReq, T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TReq**, **TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *AsyncIteratorResourceOperatorLike‹TReq, TA, TReq, TC›*

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

**Returns:** *AsyncIteratorResourceOperatorLike‹TReq, TA, TReq, TC›*
