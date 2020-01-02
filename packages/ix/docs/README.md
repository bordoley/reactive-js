[@reactive-js/ix](README.md)

# @reactive-js/ix

## Index

### Interfaces

* [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)
* [AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)
* [AsyncEnumeratorLike](interfaces/asyncenumeratorlike.md)
* [AsyncEnumeratorResourceLike](interfaces/asyncenumeratorresourcelike.md)
* [StateUpdaterLike](interfaces/stateupdaterlike.md)

### Variables

* [disposedAsyncEnumeratorResource](README.md#const-disposedasyncenumeratorresource)

### Functions

* [createActionReducerAsyncEnumerable](README.md#const-createactionreducerasyncenumerable)
* [createAsyncEnumeratorResource](README.md#const-createasyncenumeratorresource)
* [createStateUpdaterAsyncEnumerable](README.md#const-createstateupdaterasyncenumerable)
* [empty](README.md#const-empty)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [generate](README.md#const-generate)
* [identity](README.md#const-identity)
* [lift](README.md#lift)
* [liftReq](README.md#liftreq)
* [scanAsync](README.md#const-scanasync)
* [toStateUpdaterAsyncEnumerable](README.md#const-tostateupdaterasyncenumerable)

## Variables

### `Const` disposedAsyncEnumeratorResource

• **disposedAsyncEnumeratorResource**: *[AsyncEnumeratorResourceLike](interfaces/asyncenumeratorresourcelike.md)‹unknown, any›* =  _disposed

## Functions

### `Const` createActionReducerAsyncEnumerable

▸ **createActionReducerAsyncEnumerable**<**TAction**, **T**>(`reducer`: function, `initialStateFactory`: function, `equals?`: undefined | function): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TAction, T›*

**Type parameters:**

▪ **TAction**

▪ **T**

**Parameters:**

▪ **reducer**: *function*

▸ (`state`: T, `action`: TAction): *T*

**Parameters:**

Name | Type |
------ | ------ |
`state` | T |
`action` | TAction |

▪ **initialStateFactory**: *function*

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TAction, T›*

___

### `Const` createAsyncEnumeratorResource

▸ **createAsyncEnumeratorResource**<**TReq**, **T**>(`operator`: ObservableOperatorLike‹TReq, T›, `scheduler`: SchedulerLike, `replayCount`: number): *[AsyncEnumeratorResourceLike](interfaces/asyncenumeratorresourcelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`operator` | ObservableOperatorLike‹TReq, T› | - |
`scheduler` | SchedulerLike | - |
`replayCount` | number | 0 |

**Returns:** *[AsyncEnumeratorResourceLike](interfaces/asyncenumeratorresourcelike.md)‹TReq, T›*

___

### `Const` createStateUpdaterAsyncEnumerable

▸ **createStateUpdaterAsyncEnumerable**<**T**>(`initialState`: function, `equals?`: undefined | function): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

___

### `Const` empty

▸ **empty**<**TReq**, **T**>(): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`values` | keyof T[] |

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

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

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

___

### `Const` identity

▸ **identity**<**T**>(): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹T, T›*

___

###  lift

▸ **lift**<**TReq**, **TA**, **TB**>(`op1`: ObservableOperatorLike‹TA, TB›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | ObservableOperatorLike‹TA, TB› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TB›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TC›*

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

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TC›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TD›*

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

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TD›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TE›*

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

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TE›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›, `op5`: ObservableOperatorLike‹TE, TF›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TF›*

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

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TF›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›, `op5`: ObservableOperatorLike‹TE, TF›, `op6`: ObservableOperatorLike‹TF, TG›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TG›*

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

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TG›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›, `op5`: ObservableOperatorLike‹TE, TF›, `op6`: ObservableOperatorLike‹TF, TG›, `op7`: ObservableOperatorLike‹TG, TH›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TH›*

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

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TH›*

▸ **lift**<**TReq**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`op1`: ObservableOperatorLike‹TA, TB›, `op2`: ObservableOperatorLike‹TB, TC›, `op3`: ObservableOperatorLike‹TC, TD›, `op4`: ObservableOperatorLike‹TD, TE›, `op5`: ObservableOperatorLike‹TE, TF›, `op6`: ObservableOperatorLike‹TF, TG›, `op7`: ObservableOperatorLike‹TG, TH›, `op8`: ObservableOperatorLike‹TH, TI›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TI›*

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

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TI›*

___

###  liftReq

▸ **liftReq**<**TReqA**, **TReqB**, **T**>(`op1`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqB, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqB, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **T**>(`op1`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqC, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqC, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **T**>(`op1`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqD, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **TReqC**

▪ **TReqD**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqD, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **T**>(`op1`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqE, T›*

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
`op1` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqE, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **TReqF**, **T**>(`op1`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE›, `op5`: AsyncEnumeratorRequestOperatorLike‹TReqE, TReqF›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqF, T›*

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
`op1` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE› |
`op5` | AsyncEnumeratorRequestOperatorLike‹TReqE, TReqF› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqF, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **TReqF**, **TReqG**, **T**>(`op1`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE›, `op5`: AsyncEnumeratorRequestOperatorLike‹TReqE, TReqF›, `op6`: AsyncEnumeratorRequestOperatorLike‹TReqF, TReqG›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqG, T›*

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
`op1` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE› |
`op5` | AsyncEnumeratorRequestOperatorLike‹TReqE, TReqF› |
`op6` | AsyncEnumeratorRequestOperatorLike‹TReqF, TReqG› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqG, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **TReqF**, **TReqG**, **TReqH**, **T**>(`op1`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE›, `op5`: AsyncEnumeratorRequestOperatorLike‹TReqE, TReqF›, `op6`: AsyncEnumeratorRequestOperatorLike‹TReqF, TReqG›, `op7`: AsyncEnumeratorRequestOperatorLike‹TReqG, TReqH›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqH, T›*

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
`op1` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE› |
`op5` | AsyncEnumeratorRequestOperatorLike‹TReqE, TReqF› |
`op6` | AsyncEnumeratorRequestOperatorLike‹TReqF, TReqG› |
`op7` | AsyncEnumeratorRequestOperatorLike‹TReqG, TReqH› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqH, T›*

▸ **liftReq**<**TReqA**, **TReqB**, **TReqC**, **TReqD**, **TReqE**, **TReqF**, **TReqG**, **TReqH**, **TReqI**, **T**>(`op1`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›, `op2`: AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC›, `op3`: AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD›, `op4`: AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE›, `op5`: AsyncEnumeratorRequestOperatorLike‹TReqE, TReqF›, `op6`: AsyncEnumeratorRequestOperatorLike‹TReqF, TReqG›, `op7`: AsyncEnumeratorRequestOperatorLike‹TReqG, TReqH›, `op8`: AsyncEnumeratorRequestOperatorLike‹TReqH, TReqI›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqI, T›*

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
`op1` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |
`op2` | AsyncEnumeratorRequestOperatorLike‹TReqB, TReqC› |
`op3` | AsyncEnumeratorRequestOperatorLike‹TReqC, TReqD› |
`op4` | AsyncEnumeratorRequestOperatorLike‹TReqD, TReqE› |
`op5` | AsyncEnumeratorRequestOperatorLike‹TReqE, TReqF› |
`op6` | AsyncEnumeratorRequestOperatorLike‹TReqF, TReqG› |
`op7` | AsyncEnumeratorRequestOperatorLike‹TReqG, TReqH› |
`op8` | AsyncEnumeratorRequestOperatorLike‹TReqH, TReqI› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqI, T›*

___

### `Const` scanAsync

▸ **scanAsync**<**TReq**, **TSrc**, **TAcc**>(`reducer`: function, `initial`: function, `scheduler`: SchedulerLike): *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

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

**Returns:** *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

___

### `Const` toStateUpdaterAsyncEnumerable

▸ **toStateUpdaterAsyncEnumerable**<**T**>(`initialState`: function, `equals?`: undefined | function): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹T, T, [StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹T, T, [StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*
