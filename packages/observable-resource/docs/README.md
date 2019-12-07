[@reactive-js/observable-resource](README.md)

# @reactive-js/observable-resource

## Index

### Functions

* [concatAll](README.md#const-concatall)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [endWith](README.md#const-endwith)
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

▸ **concatAll**<**T**>(`maxBufferSize`: number): *ObservableResourceOperator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *ObservableResourceOperator‹ObservableLike‹T›, T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals?`: undefined | function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`equals?` | undefined &#124; function |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *ObservableResourceOperator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *ObservableResourceOperator‹ObservableLike‹T›, T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *ObservableResourceOperator‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *ObservableResourceOperator‹TA, TB›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` lift

▸ **lift**<**A**, **B**>(`operator`: ObservableOperator‹A, B›): *ObservableResourceOperator‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | ObservableOperator‹A, B› |

**Returns:** *ObservableResourceOperator‹A, B›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *ObservableResourceOperator‹TA, TB›*

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

**Returns:** *ObservableResourceOperator‹TA, TB›*

___

### `Const` mergeAll

▸ **mergeAll**<**T**>(`options?`: undefined | object): *ObservableResourceOperator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *ObservableResourceOperator‹ObservableLike‹T›, T›*

___

### `Const` observe

▸ **observe**<**T**>(`observer`: ObserverLike‹T›): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` onComplete

▸ **onComplete**<**T**>(`onComplete`: function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onComplete**: *function*

▸ (`err?`: ErrorLike): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | ErrorLike |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` onError

▸ **onError**<**T**>(`onError`: function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onError**: *function*

▸ (`err`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` onNext

▸ **onNext**<**T**>(`onNext`: function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNext**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *ObservableResourceOperator‹T, T›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›): *ObservableResourceLike‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |

**Returns:** *ObservableResourceLike‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›, `op2`: ObservableResourceOperator‹A, B›): *ObservableResourceLike‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |
`op2` | ObservableResourceOperator‹A, B› |

**Returns:** *ObservableResourceLike‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›, `op2`: ObservableResourceOperator‹A, B›, `op3`: ObservableResourceOperator‹B, C›): *ObservableResourceLike‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |
`op2` | ObservableResourceOperator‹A, B› |
`op3` | ObservableResourceOperator‹B, C› |

**Returns:** *ObservableResourceLike‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›, `op2`: ObservableResourceOperator‹A, B›, `op3`: ObservableResourceOperator‹B, C›, `op4`: ObservableResourceOperator‹C, D›): *ObservableResourceLike‹D›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |
`op2` | ObservableResourceOperator‹A, B› |
`op3` | ObservableResourceOperator‹B, C› |
`op4` | ObservableResourceOperator‹C, D› |

**Returns:** *ObservableResourceLike‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›, `op2`: ObservableResourceOperator‹A, B›, `op3`: ObservableResourceOperator‹B, C›, `op4`: ObservableResourceOperator‹C, D›, `op5`: ObservableResourceOperator‹D, E›): *ObservableResourceLike‹E›*

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
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |
`op2` | ObservableResourceOperator‹A, B› |
`op3` | ObservableResourceOperator‹B, C› |
`op4` | ObservableResourceOperator‹C, D› |
`op5` | ObservableResourceOperator‹D, E› |

**Returns:** *ObservableResourceLike‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›, `op2`: ObservableResourceOperator‹A, B›, `op3`: ObservableResourceOperator‹B, C›, `op4`: ObservableResourceOperator‹C, D›, `op5`: ObservableResourceOperator‹D, E›, `op6`: ObservableResourceOperator‹E, F›): *ObservableResourceLike‹F›*

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
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |
`op2` | ObservableResourceOperator‹A, B› |
`op3` | ObservableResourceOperator‹B, C› |
`op4` | ObservableResourceOperator‹C, D› |
`op5` | ObservableResourceOperator‹D, E› |
`op6` | ObservableResourceOperator‹E, F› |

**Returns:** *ObservableResourceLike‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›, `op2`: ObservableResourceOperator‹A, B›, `op3`: ObservableResourceOperator‹B, C›, `op4`: ObservableResourceOperator‹C, D›, `op5`: ObservableResourceOperator‹D, E›, `op6`: ObservableResourceOperator‹E, F›, `op7`: ObservableResourceOperator‹F, G›): *ObservableResourceLike‹G›*

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
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |
`op2` | ObservableResourceOperator‹A, B› |
`op3` | ObservableResourceOperator‹B, C› |
`op4` | ObservableResourceOperator‹C, D› |
`op5` | ObservableResourceOperator‹D, E› |
`op6` | ObservableResourceOperator‹E, F› |
`op7` | ObservableResourceOperator‹F, G› |

**Returns:** *ObservableResourceLike‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›, `op2`: ObservableResourceOperator‹A, B›, `op3`: ObservableResourceOperator‹B, C›, `op4`: ObservableResourceOperator‹C, D›, `op5`: ObservableResourceOperator‹D, E›, `op6`: ObservableResourceOperator‹E, F›, `op7`: ObservableResourceOperator‹F, G›, `op8`: ObservableResourceOperator‹G, H›): *ObservableResourceLike‹H›*

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
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |
`op2` | ObservableResourceOperator‹A, B› |
`op3` | ObservableResourceOperator‹B, C› |
`op4` | ObservableResourceOperator‹C, D› |
`op5` | ObservableResourceOperator‹D, E› |
`op6` | ObservableResourceOperator‹E, F› |
`op7` | ObservableResourceOperator‹F, G› |
`op8` | ObservableResourceOperator‹G, H› |

**Returns:** *ObservableResourceLike‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: ObservableResourceLike‹T›, `op1`: ObservableResourceOperator‹T, A›, `op2`: ObservableResourceOperator‹A, B›, `op3`: ObservableResourceOperator‹B, C›, `op4`: ObservableResourceOperator‹C, D›, `op5`: ObservableResourceOperator‹D, E›, `op6`: ObservableResourceOperator‹E, F›, `op7`: ObservableResourceOperator‹F, G›, `op8`: ObservableResourceOperator‹G, H›, `op9`: ObservableResourceOperator‹H, I›): *ObservableResourceLike‹I›*

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
`src` | ObservableResourceLike‹T› |
`op1` | ObservableResourceOperator‹T, A› |
`op2` | ObservableResourceOperator‹A, B› |
`op3` | ObservableResourceOperator‹B, C› |
`op4` | ObservableResourceOperator‹C, D› |
`op5` | ObservableResourceOperator‹D, E› |
`op6` | ObservableResourceOperator‹E, F› |
`op7` | ObservableResourceOperator‹F, G› |
`op8` | ObservableResourceOperator‹G, H› |
`op9` | ObservableResourceOperator‹H, I› |

**Returns:** *ObservableResourceLike‹I›*

___

### `Const` repeat

▸ **repeat**<**T**>(`predicate?`: function | number): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | function &#124; number |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` retry

▸ **retry**<**T**>(`predicate?`: undefined | function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | undefined &#124; function |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: function, `initialValue`: TAcc): *ObservableResourceOperator‹T, TAcc›*

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

**Returns:** *ObservableResourceOperator‹T, TAcc›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**T**>(`scheduler`: SchedulerLike): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` switchAll

▸ **switchAll**<**T**>(): *ObservableResourceOperator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *ObservableResourceOperator‹ObservableLike‹T›, T›*

___

### `Const` take

▸ **take**<**T**>(`count`: number): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` throttle

▸ **throttle**<**T**>(`durationSelector`: function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` throttleFirst

▸ **throttleFirst**<**T**>(`durationSelector`: function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` throttleFirstTime

▸ **throttleFirstTime**<**T**>(`duration`: number): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` throttleLast

▸ **throttleLast**<**T**>(`durationSelector`: function): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` throttleLastTime

▸ **throttleLastTime**<**T**>(`duration`: number): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` throttleTime

▸ **throttleTime**<**T**>(`duration`: number): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` timeout

▸ **timeout**<**T**>(`duration`: number): *ObservableResourceOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *ObservableResourceOperator‹T, T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *ObservableResourceOperator‹TA, TC›*

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

**Returns:** *ObservableResourceOperator‹TA, TC›*
