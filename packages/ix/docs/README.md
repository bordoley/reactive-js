[@reactive-js/ix](README.md)

# @reactive-js/ix

## Index

### Interfaces

* [AsyncIterableLike](interfaces/asynciterablelike.md)
* [AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)
* [AsyncIteratorLike](interfaces/asynciteratorlike.md)
* [AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)
* [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)
* [AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)
* [StateStoreResourceLike](interfaces/statestoreresourcelike.md)
* [StateUpdaterLike](interfaces/stateupdaterlike.md)

### Type aliases

* [StateStoreLike](README.md#statestorelike)

### Functions

* [createAsyncIteratorResource](README.md#const-createasynciteratorresource)
* [createPersistentStateStore](README.md#const-createpersistentstatestore)
* [createReducerStore](README.md#const-createreducerstore)
* [createStateStore](README.md#const-createstatestore)
* [empty](README.md#const-empty)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [generate](README.md#const-generate)
* [identity](README.md#const-identity)
* [lift](README.md#lift)
* [liftReq](README.md#liftreq)
* [reduceAsync](README.md#const-reduceasync)

## Type aliases

###  StateStoreLike

Ƭ **StateStoreLike**: *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

**`noinheritdoc`** 

## Functions

### `Const` createAsyncIteratorResource

▸ **createAsyncIteratorResource**<**TReq**, **T**>(`operator`: ObservableOperatorLike‹TReq, T›, `scheduler`: SchedulerLike, `replayCount`: number): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`operator` | ObservableOperatorLike‹TReq, T› | - |
`scheduler` | SchedulerLike | - |
`replayCount` | number | 0 |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*

___

### `Const` createPersistentStateStore

▸ **createPersistentStateStore**<**T**>(`persistentStore`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹T, T›, `initialState`: T, `scheduler`: SchedulerLike, `equals?`: undefined | function): *[StateStoreResourceLike](interfaces/statestoreresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`persistentStore` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹T, T› |
`initialState` | T |
`scheduler` | SchedulerLike |
`equals?` | undefined &#124; function |

**Returns:** *[StateStoreResourceLike](interfaces/statestoreresourcelike.md)‹T›*

___

### `Const` createReducerStore

▸ **createReducerStore**<**TAction**, **T**>(`initialStateFactory`: function, `reducer`: function, `equals?`: undefined | function): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹TAction, T›*

**Type parameters:**

▪ **TAction**

▪ **T**

**Parameters:**

▪ **initialStateFactory**: *function*

▸ (): *T*

▪ **reducer**: *function*

▸ (`state`: T, `action`: TAction): *T*

**Parameters:**

Name | Type |
------ | ------ |
`state` | T |
`action` | TAction |

▪`Optional`  **equals**: *undefined | function*

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹TAction, T›*

___

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: function, `equals?`: undefined | function): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

___

### `Const` empty

▸ **empty**<**TReq**, **T**>(): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹TReq, T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`values` | keyof T[] |

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

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

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

___

### `Const` identity

▸ **identity**<**T**>(): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹T, T›*

___

###  lift

▸ **lift**<**TReq**, **TA**, **TB**>(`op1`: ObservableOperatorLike‹TA, TB›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | ObservableOperatorLike‹TA, TB› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TB›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TC›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | ObservableOperatorLike‹TA, TB› |
`op2` | ObservableOperatorLike‹TB, TC› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TC›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TD›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | ObservableOperatorLike‹TA, TB› |
`op2` | ObservableOperatorLike‹TB, TC› |
`op3` | ObservableOperatorLike‹TC, TD› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TD›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TE›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | ObservableOperatorLike‹TA, TB› |
`op2` | ObservableOperatorLike‹TB, TC› |
`op3` | ObservableOperatorLike‹TC, TD› |
`op4` | ObservableOperatorLike‹TD, TE› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TE›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›, `op5`: ObservableOperatorLike‹TE, TF›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TF›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | ObservableOperatorLike‹TA, TB› |
`op2` | ObservableOperatorLike‹TB, TC› |
`op3` | ObservableOperatorLike‹TC, TD› |
`op4` | ObservableOperatorLike‹TD, TE› |
`op5` | ObservableOperatorLike‹TE, TF› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TF›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›, `op5`: ObservableOperatorLike‹TE, TF›, `op6`: ObservableOperatorLike‹TF, TG›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TG›*

**Type parameters:**

▪ **TReq**

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
`op1` | ObservableOperatorLike‹TA, TB› |
`op2` | ObservableOperatorLike‹TB, TC› |
`op3` | ObservableOperatorLike‹TC, TD› |
`op4` | ObservableOperatorLike‹TD, TE› |
`op5` | ObservableOperatorLike‹TE, TF› |
`op6` | ObservableOperatorLike‹TF, TG› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TG›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›, `op5`: ObservableOperatorLike‹TE, TF›, `op6`: ObservableOperatorLike‹TF, TG›, `op7`: ObservableOperatorLike‹TG, TH›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TH›*

**Type parameters:**

▪ **TReq**

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
`op1` | ObservableOperatorLike‹TA, TB› |
`op2` | ObservableOperatorLike‹TB, TC› |
`op3` | ObservableOperatorLike‹TC, TD› |
`op4` | ObservableOperatorLike‹TD, TE› |
`op5` | ObservableOperatorLike‹TE, TF› |
`op6` | ObservableOperatorLike‹TF, TG› |
`op7` | ObservableOperatorLike‹TG, TH› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TH›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›, `op5`: ObservableOperatorLike‹TE, TF›, `op6`: ObservableOperatorLike‹TF, TG›, `op7`: ObservableOperatorLike‹TG, TH›, `op8`: ObservableOperatorLike‹TH, TI›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TI›*

**Type parameters:**

▪ **TReq**

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
`op1` | ObservableOperatorLike‹TA, TB› |
`op2` | ObservableOperatorLike‹TB, TC› |
`op3` | ObservableOperatorLike‹TC, TD› |
`op4` | ObservableOperatorLike‹TD, TE› |
`op5` | ObservableOperatorLike‹TE, TF› |
`op6` | ObservableOperatorLike‹TF, TG› |
`op7` | ObservableOperatorLike‹TG, TH› |
`op8` | ObservableOperatorLike‹TH, TI› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TI›*

___

###  liftReq

▸ **liftReq**<**TReqA**, **TReqB**, **T**>(`op1`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqB, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqB, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **T**>(`op1`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncIteratorRequestOperatorLike‹TReqB, TReqC›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqC, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncIteratorRequestOperatorLike‹TReqB, TReqC› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqC, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **T**>(`op1`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncIteratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncIteratorRequestOperatorLike‹TReqC, TReqD›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqD, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **TReqD**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncIteratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncIteratorRequestOperatorLike‹TReqC, TReqD› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqD, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **T**>(`op1`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncIteratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncIteratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncIteratorRequestOperatorLike‹TReqD, TReqE›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqE, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **TReqD**

▪ **TReqE**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncIteratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncIteratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncIteratorRequestOperatorLike‹TReqD, TReqE› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqE, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **TReqF**, **T**>(`op1`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncIteratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncIteratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncIteratorRequestOperatorLike‹TReqD, TReqE›, `op5`: AsyncIteratorRequestOperatorLike‹TReqE, TReqF›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqF, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **TReqD**

▪ **TReqE**

▪ **TReqF**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncIteratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncIteratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncIteratorRequestOperatorLike‹TReqD, TReqE› |
`op5` | AsyncIteratorRequestOperatorLike‹TReqE, TReqF› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqF, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **TReqF**, **TReqG**, **T**>(`op1`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncIteratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncIteratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncIteratorRequestOperatorLike‹TReqD, TReqE›, `op5`: AsyncIteratorRequestOperatorLike‹TReqE, TReqF›, `op6`: AsyncIteratorRequestOperatorLike‹TReqF, TReqG›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqG, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **TReqD**

▪ **TReqE**

▪ **TReqF**

▪ **TReqG**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncIteratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncIteratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncIteratorRequestOperatorLike‹TReqD, TReqE› |
`op5` | AsyncIteratorRequestOperatorLike‹TReqE, TReqF› |
`op6` | AsyncIteratorRequestOperatorLike‹TReqF, TReqG› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqG, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **TReqF**, **TReqG**, **TReqH**, **T**>(`op1`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncIteratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncIteratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncIteratorRequestOperatorLike‹TReqD, TReqE›, `op5`: AsyncIteratorRequestOperatorLike‹TReqE, TReqF›, `op6`: AsyncIteratorRequestOperatorLike‹TReqF, TReqG›, `op7`: AsyncIteratorRequestOperatorLike‹TReqG, TReqH›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqH, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **TReqD**

▪ **TReqE**

▪ **TReqF**

▪ **TReqG**

▪ **TReqH**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncIteratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncIteratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncIteratorRequestOperatorLike‹TReqD, TReqE› |
`op5` | AsyncIteratorRequestOperatorLike‹TReqE, TReqF› |
`op6` | AsyncIteratorRequestOperatorLike‹TReqF, TReqG› |
`op7` | AsyncIteratorRequestOperatorLike‹TReqG, TReqH› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqH, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **TReqF**, **TReqG**, **TReqH**, **TReqI**, **T**>(`op1`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncIteratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncIteratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncIteratorRequestOperatorLike‹TReqD, TReqE›, `op5`: AsyncIteratorRequestOperatorLike‹TReqE, TReqF›, `op6`: AsyncIteratorRequestOperatorLike‹TReqF, TReqG›, `op7`: AsyncIteratorRequestOperatorLike‹TReqG, TReqH›, `op8`: AsyncIteratorRequestOperatorLike‹TReqH, TReqI›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqI, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **TReqD**

▪ **TReqE**

▪ **TReqF**

▪ **TReqG**

▪ **TReqH**

▪ **TReqI**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncIteratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncIteratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncIteratorRequestOperatorLike‹TReqD, TReqE› |
`op5` | AsyncIteratorRequestOperatorLike‹TReqE, TReqF› |
`op6` | AsyncIteratorRequestOperatorLike‹TReqF, TReqG› |
`op7` | AsyncIteratorRequestOperatorLike‹TReqG, TReqH› |
`op8` | AsyncIteratorRequestOperatorLike‹TReqH, TReqI› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqI, T›*

___

### `Const` reduceAsync

▸ **reduceAsync**<**TReq**, **TSrc**, **TAcc**>(`reducer`: function, `initial`: function, `scheduler`: SchedulerLike): *OperatorLike‹[AsyncIterableLike](interfaces/asynciterablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

**Type parameters:**

▪ **TReq**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *ObservableLike‹ReduceRequestLike‹TReq, TAcc››*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *ReduceRequestLike‹TReq, TAcc›*

▪ **scheduler**: *SchedulerLike*

**Returns:** *OperatorLike‹[AsyncIterableLike](interfaces/asynciterablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*
