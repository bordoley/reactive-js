[@reactive-js/ix-async-iterator](README.md)

# @reactive-js/ix-async-iterator

## Index

### Interfaces

* [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)

### Functions

* [concatAll](README.md#const-concatall)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
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

▸ **concatAll**<**TReq**, **T**>(`maxBufferSize`: number): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**TReq**, **T**>(`equals?`: undefined | function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`equals?` | undefined &#124; function |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` exhaust

▸ **exhaust**<**TReq**, **T**>(): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TReq**, **TA**, **TB**>(): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, TA, TReq, TB›*

___

### `Const` keep

▸ **keep**<**TReq**, **T**>(`predicate`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

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

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **T**, **TA**>(`operator`: ObservableOperator‹T, TA›): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | ObservableOperator‹T, TA› |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, TA›*

___

### `Const` liftReq

▸ **liftReq**<**TReq**, **T**, **TReqA**>(`mapper`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReqA, T›*

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

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReqA, T›*

___

### `Const` map

▸ **map**<**TReq**, **TA**, **TB**>(`mapper`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, TA, TReq, TB›*

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

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, TA, TReq, TB›*

___

### `Const` mergeAll

▸ **mergeAll**<**TReq**, **T**>(`options?`: undefined | object): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` observe

▸ **observe**<**TReq**, **T**>(`observer`: ObserverLike‹T›): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` onComplete

▸ **onComplete**<**TReq**, **T**>(`onComplete`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **onComplete**: *function*

▸ (`err?`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | Error |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` onError

▸ **onError**<**TReq**, **T**>(`onError`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **onError**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` onNext

▸ **onNext**<**TReq**, **T**>(`onNext`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

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

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

###  pipe

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›): *AsyncIteratorLike‹TReqA, TA›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |

**Returns:** *AsyncIteratorLike‹TReqA, TA›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›): *AsyncIteratorLike‹TReqB, TB›*

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
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |

**Returns:** *AsyncIteratorLike‹TReqB, TB›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›): *AsyncIteratorLike‹TReqC, TC›*

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
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |

**Returns:** *AsyncIteratorLike‹TReqC, TC›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›): *AsyncIteratorLike‹TReqD, TD›*

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
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |

**Returns:** *AsyncIteratorLike‹TReqD, TD›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›): *AsyncIteratorLike‹TReqE, TE›*

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
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |

**Returns:** *AsyncIteratorLike‹TReqE, TE›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF›): *AsyncIteratorLike‹TReqF, TF›*

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
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF› |

**Returns:** *AsyncIteratorLike‹TReqF, TF›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG›): *AsyncIteratorLike‹TReqG, TG›*

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
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG› |

**Returns:** *AsyncIteratorLike‹TReqG, TG›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG›, `op8`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqG, TG, TReqH, TH›): *AsyncIteratorLike‹TReqH, TH›*

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
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG› |
`op8` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqG, TG, TReqH, TH› |

**Returns:** *AsyncIteratorLike‹TReqH, TH›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**, **TReqI**, **TI**>(`src`: AsyncIteratorLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG›, `op8`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqG, TG, TReqH, TH›, `op9`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqH, TH, TReqI, TI›): *AsyncIteratorLike‹TReqI, TI›*

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
`src` | AsyncIteratorLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG› |
`op8` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqG, TG, TReqH, TH› |
`op9` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqH, TH, TReqI, TI› |

**Returns:** *AsyncIteratorLike‹TReqI, TI›*

___

### `Const` repeat

▸ **repeat**<**TReq**, **T**>(`predicate?`: undefined | function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | undefined &#124; function |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` retry

▸ **retry**<**TReq**, **T**>(`predicate?`: undefined | function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | undefined &#124; function |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` scan

▸ **scan**<**TReq**, **T**, **TAcc**>(`scanner`: function, `initialValue`: TAcc): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, TAcc›*

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

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, TAcc›*

___

### `Const` share

▸ **share**<**TReq**, **T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` startWith

▸ **startWith**<**TReq**, **T**>(`value`: T, ...`values`: T[]): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**TReq**, **T**>(`scheduler`: SchedulerLike): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` switchAll

▸ **switchAll**<**TReq**, **T**>(): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, ObservableLike‹T›, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, ObservableLike‹T›, TReq, T›*

___

### `Const` take

▸ **take**<**TReq**, **T**>(`count`: number): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` takeLast

▸ **takeLast**<**TReq**, **T**>(`count`: number): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**TReq**, **T**>(`predicate`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

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

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` throttle

▸ **throttle**<**TReq**, **T**>(`durationSelector`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` throttleFirst

▸ **throttleFirst**<**TReq**, **T**>(`durationSelector`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` throttleFirstTime

▸ **throttleFirstTime**<**TReq**, **T**>(`duration`: number): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` throttleLast

▸ **throttleLast**<**TReq**, **T**>(`durationSelector`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` throttleLastTime

▸ **throttleLastTime**<**TReq**, **T**>(`duration`: number): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` throttleTime

▸ **throttleTime**<**TReq**, **T**>(`duration`: number): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` timeout

▸ **timeout**<**TReq**, **T**>(`duration`: number): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReq, T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TReq**, **TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, TA, TReq, TC›*

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

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, TA, TReq, TC›*
