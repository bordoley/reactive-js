[@reactive-js/ix-async-iterator-resource](README.md)

# @reactive-js/ix-async-iterator-resource

## Index

### Interfaces

* [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)
* [StateUpdater](interfaces/stateupdater.md)

### Functions

* [createEvent](README.md#const-createevent)
* [createStateStore](README.md#const-createstatestore)
* [lift](README.md#const-lift)
* [liftReq](README.md#const-liftreq)
* [pipe](README.md#pipe)

## Functions

### `Const` createEvent

▸ **createEvent**<**T**>(): *AsyncIteratorResourceLike‹T, T›*

**Type parameters:**

▪ **T**

**Returns:** *AsyncIteratorResourceLike‹T, T›*

___

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: T, `scheduler`: SchedulerLike, `equals?`: undefined | function): *AsyncIteratorResourceLike‹[StateUpdater](interfaces/stateupdater.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`initialState` | T |
`scheduler` | SchedulerLike |
`equals?` | undefined &#124; function |

**Returns:** *AsyncIteratorResourceLike‹[StateUpdater](interfaces/stateupdater.md)‹T›, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **T**, **TA**>(`operator`: ObservableOperator‹T, TA›): *[AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReq, T, TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | ObservableOperator‹T, TA› |

**Returns:** *[AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReq, T, TReq, TA›*

___

### `Const` liftReq

▸ **liftReq**<**TReq**, **T**, **TReqA**>(`mapper`: function): *[AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReq, T, TReqA, T›*

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

**Returns:** *[AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReq, T, TReqA, T›*

___

###  pipe

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›): *AsyncIteratorResourceLike‹TReqA, TA›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`src` | AsyncIteratorResourceLike‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |

**Returns:** *AsyncIteratorResourceLike‹TReqA, TA›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›): *AsyncIteratorResourceLike‹TReqB, TB›*

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
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |

**Returns:** *AsyncIteratorResourceLike‹TReqB, TB›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›): *AsyncIteratorResourceLike‹TReqC, TC›*

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
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |

**Returns:** *AsyncIteratorResourceLike‹TReqC, TC›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›): *AsyncIteratorResourceLike‹TReqD, TD›*

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
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |

**Returns:** *AsyncIteratorResourceLike‹TReqD, TD›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›): *AsyncIteratorResourceLike‹TReqE, TE›*

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
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |

**Returns:** *AsyncIteratorResourceLike‹TReqE, TE›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF›): *AsyncIteratorResourceLike‹TReqF, TF›*

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
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF› |

**Returns:** *AsyncIteratorResourceLike‹TReqF, TF›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG›): *AsyncIteratorResourceLike‹TReqG, TG›*

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
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG› |

**Returns:** *AsyncIteratorResourceLike‹TReqG, TG›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG›, `op8`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqG, TG, TReqH, TH›): *AsyncIteratorResourceLike‹TReqH, TH›*

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
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG› |
`op8` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqG, TG, TReqH, TH› |

**Returns:** *AsyncIteratorResourceLike‹TReqH, TH›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**, **TReqI**, **TI**>(`src`: AsyncIteratorResourceLike‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG›, `op8`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqG, TG, TReqH, TH›, `op9`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqH, TH, TReqI, TI›): *AsyncIteratorResourceLike‹TReqI, TI›*

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
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG› |
`op8` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqG, TG, TReqH, TH› |
`op9` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqH, TH, TReqI, TI› |

**Returns:** *AsyncIteratorResourceLike‹TReqI, TI›*
