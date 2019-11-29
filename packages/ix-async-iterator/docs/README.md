[@reactive-js/ix-async-iterator](README.md)

# @reactive-js/ix-async-iterator

## Index

### Interfaces

* [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)

### Functions

* [lift](README.md#const-lift)
* [liftReq](README.md#const-liftreq)
* [pipe](README.md#pipe)

## Functions

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
