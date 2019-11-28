[@reactive-js/rx-observables](README.md)

# @reactive-js/rx-observables

## Index

### Functions

* [combineLatest](README.md#combinelatest)
* [concat](README.md#concat)
* [concatAll](README.md#const-concatall)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [empty](README.md#const-empty)
* [exhaust](README.md#const-exhaust)
* [fromArray](README.md#const-fromarray)
* [fromPromiseFactory](README.md#const-frompromisefactory)
* [fromScheduledValues](README.md#const-fromscheduledvalues)
* [generate](README.md#const-generate)
* [ignoreElements](README.md#const-ignoreelements)
* [keep](README.md#const-keep)
* [map](README.md#const-map)
* [mapTo](README.md#const-mapto)
* [merge](README.md#merge)
* [mergeAll](README.md#const-mergeall)
* [never](README.md#const-never)
* [ofValue](README.md#const-ofvalue)
* [onComplete](README.md#const-oncomplete)
* [onError](README.md#const-onerror)
* [onNext](README.md#const-onnext)
* [repeat](README.md#const-repeat)
* [retry](README.md#const-retry)
* [scan](README.md#const-scan)
* [share](README.md#const-share)
* [shareReplay](README.md#const-sharereplay)
* [shareReplayLast](README.md#const-sharereplaylast)
* [startWith](README.md#startwith)
* [switchAll](README.md#const-switchall)
* [take](README.md#const-take)
* [takeLast](README.md#const-takelast)
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

▸ **concatAll**<**T**>(`maxBufferSize`: number): *ObservableOperator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *ObservableOperator‹ObservableLike‹T›, T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals?`: undefined | function): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`equals?` | undefined &#124; function |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` empty

▸ **empty**<**T**>(`config?`: undefined | object): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`config?` | undefined &#124; object |

**Returns:** *ObservableLike‹T›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *ObservableOperator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *ObservableOperator‹ObservableLike‹T›, T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: ReadonlyArray‹T›, `config`: object): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | ReadonlyArray‹T› | - |
`config` | object |  {} |

**Returns:** *ObservableLike‹T›*

___

### `Const` fromPromiseFactory

▸ **fromPromiseFactory**<**T**>(`factory`: function, `priority?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

▸ (): *Promise‹T›*

▪`Optional`  **priority**: *undefined | number*

**Returns:** *ObservableLike‹T›*

___

### `Const` fromScheduledValues

▸ **fromScheduledValues**<**T**>(`value`: [number | undefined, number | undefined, T], ...`values`: Array‹[number | undefined, number | undefined, T]›): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [number &#124; undefined, number &#124; undefined, T] |
`...values` | Array‹[number &#124; undefined, number &#124; undefined, T]› |

**Returns:** *ObservableLike‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: T, `config`: object): *ObservableLike‹T›*

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

▪`Default value`  **config**: *object*=  {}

**Returns:** *ObservableLike‹T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *ObservableOperator‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *ObservableOperator‹TA, TB›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *ObservableOperator‹TA, TB›*

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

**Returns:** *ObservableOperator‹TA, TB›*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`value`: TB): *ObservableOperator‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`value` | TB |

**Returns:** *ObservableOperator‹TA, TB›*

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

▸ **mergeAll**<**T**>(`options?`: undefined | object): *ObservableOperator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *ObservableOperator‹ObservableLike‹T›, T›*

___

### `Const` never

▸ **never**<**T**>(): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Returns:** *ObservableLike‹T›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T, `config?`: undefined | object): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`config?` | undefined &#124; object |

**Returns:** *ObservableLike‹T›*

___

### `Const` onComplete

▸ **onComplete**<**T**>(`onComplete`: function): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onComplete**: *function*

▸ (`err?`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | Error |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` onError

▸ **onError**<**T**>(`onError`: function): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onError**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` onNext

▸ **onNext**<**T**>(`onNext`: function): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNext**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` repeat

▸ **repeat**<**T**>(`predicate`: function): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **predicate**: *function*=  alwaysTrue

▸ (): *boolean*

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` retry

▸ **retry**<**T**>(`predicate`: function): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **predicate**: *function*=  alwaysTrue1

▸ (`error`: Error): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: function, `initialValue`: TAcc): *ObservableOperator‹T, TAcc›*

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

**Returns:** *ObservableOperator‹T, TAcc›*

___

### `Const` share

▸ **share**<**T**>(`scheduler?`: SchedulerLike, `priority?`: undefined | number): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler?` | SchedulerLike |
`priority?` | undefined &#124; number |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` shareReplay

▸ **shareReplay**<**T**>(`count`: number, `scheduler?`: SchedulerLike, `priority?`: undefined | number): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`scheduler?` | SchedulerLike |
`priority?` | undefined &#124; number |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` shareReplayLast

▸ **shareReplayLast**<**T**>(`scheduler?`: SchedulerLike, `priority?`: undefined | number): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler?` | SchedulerLike |
`priority?` | undefined &#124; number |

**Returns:** *ObservableOperator‹T, T›*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` switchAll

▸ **switchAll**<**T**>(): *ObservableOperator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *ObservableOperator‹ObservableLike‹T›, T›*

___

### `Const` take

▸ **take**<**T**>(`count`: number): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number, `priority?`: undefined | number): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`priority?` | undefined &#124; number |

**Returns:** *ObservableOperator‹T, T›*

___

### `Const` throws

▸ **throws**<**T**>(`error`: Error, `config?`: undefined | object): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`config?` | undefined &#124; object |

**Returns:** *ObservableLike‹T›*

___

### `Const` toPromise

▸ **toPromise**<**T**>(`observable`: ObservableLike‹T›, `scheduler?`: SchedulerLike): *Promise‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | ObservableLike‹T› |
`scheduler?` | SchedulerLike |

**Returns:** *Promise‹T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *ObservableOperator‹TA, TC›*

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

**Returns:** *ObservableOperator‹TA, TC›*
