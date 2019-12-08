[@reactive-js/observable-resource](README.md)

# @reactive-js/observable-resource

## Index

### Interfaces

* [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)

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

▸ **concatAll**<**T**>(`maxBufferSize`: number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹ObservableLike‹T›, T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals?`: undefined | function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`equals?` | undefined &#124; function |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹ObservableLike‹T›, T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹TA, TB›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` lift

▸ **lift**<**A**, **B**>(`operator`: ObservableOperatorLike‹A, B›): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | ObservableOperatorLike‹A, B› |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹TA, TB›*

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

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹TA, TB›*

___

### `Const` mergeAll

▸ **mergeAll**<**T**>(`options?`: undefined | object): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹ObservableLike‹T›, T›*

___

### `Const` observe

▸ **observe**<**T**>(`observer`: ObserverLike‹T›): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` onComplete

▸ **onComplete**<**T**>(`onComplete`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onComplete**: *function*

▸ (`err?`: ErrorLike): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | ErrorLike |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` onError

▸ **onError**<**T**>(`onError`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onError**: *function*

▸ (`err`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` onNext

▸ **onNext**<**T**>(`onNext`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNext**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›): *ObservableResourceLike‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |

**Returns:** *ObservableResourceLike‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›, `op2`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›): *ObservableResourceLike‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |
`op2` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B› |

**Returns:** *ObservableResourceLike‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›, `op2`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›, `op3`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C›): *ObservableResourceLike‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |
`op2` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B› |
`op3` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C› |

**Returns:** *ObservableResourceLike‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›, `op2`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›, `op3`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C›, `op4`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D›): *ObservableResourceLike‹D›*

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
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |
`op2` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B› |
`op3` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C› |
`op4` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D› |

**Returns:** *ObservableResourceLike‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›, `op2`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›, `op3`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C›, `op4`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D›, `op5`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E›): *ObservableResourceLike‹E›*

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
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |
`op2` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B› |
`op3` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C› |
`op4` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D› |
`op5` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E› |

**Returns:** *ObservableResourceLike‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›, `op2`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›, `op3`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C›, `op4`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D›, `op5`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E›, `op6`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹E, F›): *ObservableResourceLike‹F›*

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
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |
`op2` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B› |
`op3` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C› |
`op4` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D› |
`op5` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E› |
`op6` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹E, F› |

**Returns:** *ObservableResourceLike‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›, `op2`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›, `op3`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C›, `op4`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D›, `op5`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E›, `op6`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹E, F›, `op7`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹F, G›): *ObservableResourceLike‹G›*

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
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |
`op2` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B› |
`op3` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C› |
`op4` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D› |
`op5` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E› |
`op6` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹E, F› |
`op7` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹F, G› |

**Returns:** *ObservableResourceLike‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›, `op2`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›, `op3`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C›, `op4`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D›, `op5`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E›, `op6`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹E, F›, `op7`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹F, G›, `op8`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹G, H›): *ObservableResourceLike‹H›*

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
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |
`op2` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B› |
`op3` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C› |
`op4` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D› |
`op5` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E› |
`op6` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹E, F› |
`op7` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹F, G› |
`op8` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹G, H› |

**Returns:** *ObservableResourceLike‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A›, `op2`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B›, `op3`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C›, `op4`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D›, `op5`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E›, `op6`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹E, F›, `op7`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹F, G›, `op8`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹G, H›, `op9`: [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹H, I›): *ObservableResourceLike‹I›*

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
`op1` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, A› |
`op2` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹A, B› |
`op3` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹B, C› |
`op4` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹C, D› |
`op5` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹D, E› |
`op6` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹E, F› |
`op7` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹F, G› |
`op8` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹G, H› |
`op9` | [ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹H, I› |

**Returns:** *ObservableResourceLike‹I›*

___

### `Const` repeat

▸ **repeat**<**T**>(`predicate?`: function | number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | function &#124; number |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` retry

▸ **retry**<**T**>(`predicate?`: undefined | function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate?` | undefined &#124; function |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: function, `initialValue`: TAcc): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, TAcc›*

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

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, TAcc›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` subscribeOn

▸ **subscribeOn**<**T**>(`scheduler`: SchedulerLike): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` switchAll

▸ **switchAll**<**T**>(): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹ObservableLike‹T›, T›*

___

### `Const` take

▸ **take**<**T**>(`count`: number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`next`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` throttle

▸ **throttle**<**T**>(`durationSelector`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` throttleFirst

▸ **throttleFirst**<**T**>(`durationSelector`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` throttleFirstTime

▸ **throttleFirstTime**<**T**>(`duration`: number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` throttleLast

▸ **throttleLast**<**T**>(`durationSelector`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **durationSelector**: *function*

▸ (`next`: T): *ObservableLike‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` throttleLastTime

▸ **throttleLastTime**<**T**>(`duration`: number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` throttleTime

▸ **throttleTime**<**T**>(`duration`: number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` timeout

▸ **timeout**<**T**>(`duration`: number): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`duration` | number |

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹T, T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹TA, TC›*

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

**Returns:** *[ObservableResourceOperatorLike](interfaces/observableresourceoperatorlike.md)‹TA, TC›*
