[@reactive-js/ix-async-iterator-resource](README.md)

# @reactive-js/ix-async-iterator-resource

## Index

### Interfaces

* [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)
* [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)

### Functions

* [lift](README.md#const-lift)
* [pipe](README.md#pipe)

## Functions

### `Const` lift

▸ **lift**<**TReq**, **T**, **TReqA**, **TA**>(`operator?`: ObservableOperator‹T, TA›, `mapper?`: undefined | function): *[AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReq, T, TReqA, TA›*

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

**Returns:** *[AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReq, T, TReqA, TA›*

___

###  pipe

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqA, TA›*

**Type parameters:**

▪ **TSrcReq**

▪ **TSrc**

▪ **TReqA**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqA, TA›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqB, TB›*

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqB, TB›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqC, TC›*

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqC, TC›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqD, TD›*

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqD, TD›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqE, TE›*

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqE, TE›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqF, TF›*

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqF, TF›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqG, TG›*

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqG, TG›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG›, `op8`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqG, TG, TReqH, TH›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqH, TH›*

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG› |
`op8` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqG, TG, TReqH, TH› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqH, TH›*

▸ **pipe**<**TSrcReq**, **TSrc**, **TReqA**, **TA**, **TReqB**, **TB**, **TReqC**, **TC**, **TReqD**, **TD**, **TReqE**, **TE**, **TReqF**, **TF**, **TReqG**, **TG**, **TReqH**, **TH**, **TReqI**, **TI**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc›, `op1`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA›, `op2`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB›, `op3`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC›, `op4`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD›, `op5`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE›, `op6`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF›, `op7`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG›, `op8`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqG, TG, TReqH, TH›, `op9`: [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqH, TH, TReqI, TI›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqI, TI›*

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, TSrc› |
`op1` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TSrcReq, TSrc, TReqA, TA› |
`op2` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqA, TA, TReqB, TB› |
`op3` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqB, TB, TReqC, TC› |
`op4` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqC, TC, TReqD, TD› |
`op5` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqD, TD, TReqE, TE› |
`op6` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqE, TE, TReqF, TF› |
`op7` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqF, TF, TReqG, TG› |
`op8` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqG, TG, TReqH, TH› |
`op9` | [AsyncIteratorResourceOperator](interfaces/asynciteratorresourceoperator.md)‹TReqH, TH, TReqI, TI› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReqI, TI›*
