[@reactive-js/ix-async-iterator](README.md)

# @reactive-js/ix-async-iterator

## Index

### Interfaces

* [AsyncIteratorLike](interfaces/asynciteratorlike.md)
* [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)

### Functions

* [lift](README.md#const-lift)
* [pipe](README.md#pipe)

## Functions

### `Const` lift

▸ **lift**<**TReq**, **T**, **TReqA**, **TA**>(`operator?`: ObservableOperator‹T, TA›, `mapper?`: undefined | function): *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReqA, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TReqA**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`operator?` | ObservableOperator‹T, TA› |
`mapper?` | undefined &#124; function |

**Returns:** *[AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReq, T, TReqA, TA›*

___

###  pipe

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqA, TA›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqA, TA›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqB, TB›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqB, TB›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqC, TC›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqC, TC›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqD, TD›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqD, TD›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqE, TE›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqE, TE›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqF, TF›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqF, TF›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqG, TG›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqG, TG›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG›, `op8`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqG, TG, TReqH, TH›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqH, TH›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG› |
`op8` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqG, TG, TReqH, TH› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqH, TH›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**, **TReqI**, **TI**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG›, `op8`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqG, TG, TReqH, TH›, `op9`: [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqH, TH, TReqI, TI›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqI, TI›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqF, TF, TReqG, TG› |
`op8` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqG, TG, TReqH, TH› |
`op9` | [AsyncIteratorOperator](interfaces/asynciteratoroperator.md)‹TReqH, TH, TReqI, TI› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReqI, TI›*
