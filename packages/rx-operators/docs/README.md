[@reactive-js/rx-operators](README.md)

# @reactive-js/rx-operators

## Index

### Functions

* [concat](README.md#const-concat)
* [debounceTime](README.md#const-debouncetime)
* [delay](README.md#const-delay)
* [distinctUntilChanged](README.md#const-distinctuntilchanged)
* [exhaust](README.md#const-exhaust)
* [ignoreElements](README.md#const-ignoreelements)
* [keep](README.md#const-keep)
* [map](README.md#const-map)
* [mapTo](README.md#const-mapto)
* [merge](README.md#const-merge)
* [onComplete](README.md#const-oncomplete)
* [onError](README.md#const-onerror)
* [onNext](README.md#const-onnext)
* [scan](README.md#const-scan)
* [switch_](README.md#const-switch_)
* [take](README.md#const-take)
* [takeLast](README.md#const-takelast)
* [withLatestFrom](README.md#const-withlatestfrom)

## Functions

### `Const` concat

▸ **concat**<**T**>(`maxBufferSize`: number): *Operator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxBufferSize` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *Operator‹ObservableLike‹T›, T›*

___

### `Const` debounceTime

▸ **debounceTime**<**T**>(`dueTime`: number, `priority?`: undefined | number): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`dueTime` | number |
`priority?` | undefined &#124; number |

**Returns:** *Operator‹T, T›*

___

### `Const` delay

▸ **delay**<**T**>(`dueTime`: number, `priority?`: undefined | number): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`dueTime` | number |
`priority?` | undefined &#124; number |

**Returns:** *Operator‹T, T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equals`: function): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **equals**: *function*=  referenceEquality

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *Operator‹T, T›*

___

### `Const` exhaust

▸ **exhaust**<**T**>(): *Operator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *Operator‹ObservableLike‹T›, T›*

___

### `Const` ignoreElements

▸ **ignoreElements**<**TA**, **TB**>(): *Operator‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Returns:** *Operator‹TA, TB›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *Operator‹T, T›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *Operator‹TA, TB›*

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

**Returns:** *Operator‹TA, TB›*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`value`: TB): *Operator‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`value` | TB |

**Returns:** *Operator‹TA, TB›*

___

### `Const` merge

▸ **merge**<**T**>(`options`: object): *Operator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object |  {} |

**Returns:** *Operator‹ObservableLike‹T›, T›*

___

### `Const` onComplete

▸ **onComplete**<**T**>(`onComplete`: function): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onComplete**: *function*

▸ (`err?`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | Error |

**Returns:** *Operator‹T, T›*

___

### `Const` onError

▸ **onError**<**T**>(`onError`: function): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onError**: *function*

▸ (`error`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *Operator‹T, T›*

___

### `Const` onNext

▸ **onNext**<**T**>(`onNext`: function): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onNext**: *function*

▸ (`data`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *Operator‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: function, `initialValue`: TAcc): *Operator‹T, TAcc›*

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

**Returns:** *Operator‹T, TAcc›*

___

### `Const` switch_

▸ **switch_**<**T**>(): *Operator‹ObservableLike‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *Operator‹ObservableLike‹T›, T›*

___

### `Const` take

▸ **take**<**T**>(`count`: number): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *Operator‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number, `priority?`: undefined | number): *Operator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`priority?` | undefined &#124; number |

**Returns:** *Operator‹T, T›*

___

### `Const` withLatestFrom

▸ **withLatestFrom**<**TA**, **TB**, **TC**>(`other`: ObservableLike‹TB›, `selector`: function): *Operator‹TA, TC›*

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

**Returns:** *Operator‹TA, TC›*
