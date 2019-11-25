[@reactive-js/rx-observables](README.md)

# @reactive-js/rx-observables

## Index

### Functions

* [combineLatest](README.md#combinelatest)
* [concat](README.md#const-concat)
* [empty](README.md#const-empty)
* [fromArray](README.md#const-fromarray)
* [fromPromiseFactory](README.md#const-frompromisefactory)
* [fromScheduledValues](README.md#const-fromscheduledvalues)
* [generate](README.md#const-generate)
* [merge](README.md#const-merge)
* [never](README.md#const-never)
* [ofValue](README.md#const-ofvalue)
* [repeat](README.md#const-repeat)
* [retry](README.md#const-retry)
* [share](README.md#const-share)
* [shareReplay](README.md#const-sharereplay)
* [shareReplayLast](README.md#const-sharereplaylast)
* [throws](README.md#const-throws)
* [toPromise](README.md#const-topromise)

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

### `Const` concat

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

### `Const` empty

▸ **empty**<**T**>(`delay?`: undefined | number, `priority?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`delay?` | undefined &#124; number |
`priority?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: ReadonlyArray‹T›, `delay`: number, `priority?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | ReadonlyArray‹T› | - |
`delay` | number | 0 |
`priority?` | undefined &#124; number | - |

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

▸ **generate**<**T**>(`generator`: function, `initialValue`: T, `delay`: number, `priority?`: undefined | number): *ObservableLike‹T›*

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

▪`Optional`  **priority**: *undefined | number*

**Returns:** *ObservableLike‹T›*

___

### `Const` merge

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

### `Const` never

▸ **never**<**T**>(): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Returns:** *ObservableLike‹T›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T, `delay?`: undefined | number, `priority?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`delay?` | undefined &#124; number |
`priority?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` repeat

▸ **repeat**<**T**>(`observable`: ObservableLike‹T›, `predicate`: function): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **observable**: *ObservableLike‹T›*

▪`Default value`  **predicate**: *function*=  alwaysTrue

▸ (): *boolean*

**Returns:** *ObservableLike‹T›*

___

### `Const` retry

▸ **retry**<**T**>(`observable`: ObservableLike‹T›, `predicate`: function): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **observable**: *ObservableLike‹T›*

▪`Default value`  **predicate**: *function*=  alwaysTrue1

▸ (`error`: Error): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *ObservableLike‹T›*

___

### `Const` share

▸ **share**<**T**>(`observable`: ObservableLike‹T›, `scheduler?`: SchedulerLike, `priority?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | ObservableLike‹T› |
`scheduler?` | SchedulerLike |
`priority?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` shareReplay

▸ **shareReplay**<**T**>(`observable`: ObservableLike‹T›, `count`: number, `scheduler?`: SchedulerLike, `priority?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | ObservableLike‹T› |
`count` | number |
`scheduler?` | SchedulerLike |
`priority?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` shareReplayLast

▸ **shareReplayLast**<**T**>(`observable`: ObservableLike‹T›, `scheduler?`: SchedulerLike, `priority?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | ObservableLike‹T› |
`scheduler?` | SchedulerLike |
`priority?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` throws

▸ **throws**<**T**>(`error`: Error, `delay?`: undefined | number, `priority?`: undefined | number): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`delay?` | undefined &#124; number |
`priority?` | undefined &#124; number |

**Returns:** *ObservableLike‹T›*

___

### `Const` toPromise

▸ **toPromise**<**T**>(`observable`: ObservableLike‹T›, `scheduler?`: SchedulerLike): *Promise‹unknown›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | ObservableLike‹T› |
`scheduler?` | SchedulerLike |

**Returns:** *Promise‹unknown›*
