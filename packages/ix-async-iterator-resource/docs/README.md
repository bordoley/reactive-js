[@reactive-js/ix-async-iterator-resource](README.md)

# @reactive-js/ix-async-iterator-resource

## Index

### Interfaces

* [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)

### Functions

* [lift](README.md#lift)
* [map](README.md#const-map)

## Functions

###  lift

▸ **lift**<**TReq**, **T**, **TA**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TA›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›, `op2`: Operator‹TA, TB›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |
`op2` | Operator‹TA, TB› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TB›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›, `op2`: Operator‹TA, TB›, `op3`: Operator‹TB, TC›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TC›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |
`op2` | Operator‹TA, TB› |
`op3` | Operator‹TB, TC› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TC›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›, `op2`: Operator‹TA, TB›, `op3`: Operator‹TB, TC›, `op4`: Operator‹TC, TD›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TD›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |
`op2` | Operator‹TA, TB› |
`op3` | Operator‹TB, TC› |
`op4` | Operator‹TC, TD› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TD›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›, `op2`: Operator‹TA, TB›, `op3`: Operator‹TB, TC›, `op4`: Operator‹TC, TD›, `op5`: Operator‹TD, TE›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TE›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |
`op2` | Operator‹TA, TB› |
`op3` | Operator‹TB, TC› |
`op4` | Operator‹TC, TD› |
`op5` | Operator‹TD, TE› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TE›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›, `op2`: Operator‹TA, TB›, `op3`: Operator‹TB, TC›, `op4`: Operator‹TC, TD›, `op5`: Operator‹TD, TE›, `op6`: Operator‹TE, TF›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TF›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |
`op2` | Operator‹TA, TB› |
`op3` | Operator‹TB, TC› |
`op4` | Operator‹TC, TD› |
`op5` | Operator‹TD, TE› |
`op6` | Operator‹TE, TF› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TF›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›, `op2`: Operator‹TA, TB›, `op3`: Operator‹TB, TC›, `op4`: Operator‹TC, TD›, `op5`: Operator‹TD, TE›, `op6`: Operator‹TE, TF›, `op7`: Operator‹TF, TG›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TG›*

**Type parameters:**

▪ **TReq**

▪ **T**

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |
`op2` | Operator‹TA, TB› |
`op3` | Operator‹TB, TC› |
`op4` | Operator‹TC, TD› |
`op5` | Operator‹TD, TE› |
`op6` | Operator‹TE, TF› |
`op7` | Operator‹TF, TG› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TG›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›, `op2`: Operator‹TA, TB›, `op3`: Operator‹TB, TC›, `op4`: Operator‹TC, TD›, `op5`: Operator‹TD, TE›, `op6`: Operator‹TE, TF›, `op7`: Operator‹TF, TG›, `op8`: Operator‹TG, TH›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TH›*

**Type parameters:**

▪ **TReq**

▪ **T**

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |
`op2` | Operator‹TA, TB› |
`op3` | Operator‹TB, TC› |
`op4` | Operator‹TC, TD› |
`op5` | Operator‹TD, TE› |
`op6` | Operator‹TE, TF› |
`op7` | Operator‹TF, TG› |
`op8` | Operator‹TG, TH› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TH›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: Operator‹T, TA›, `op2`: Operator‹TA, TB›, `op3`: Operator‹TB, TC›, `op4`: Operator‹TC, TD›, `op5`: Operator‹TD, TE›, `op6`: Operator‹TE, TF›, `op7`: Operator‹TF, TG›, `op8`: Operator‹TG, TH›, `op9`: Operator‹TH, TI›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TI›*

**Type parameters:**

▪ **TReq**

▪ **T**

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
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | Operator‹T, TA› |
`op2` | Operator‹TA, TB› |
`op3` | Operator‹TB, TC› |
`op4` | Operator‹TC, TD› |
`op5` | Operator‹TD, TE› |
`op6` | Operator‹TE, TF› |
`op7` | Operator‹TF, TG› |
`op8` | Operator‹TG, TH› |
`op9` | Operator‹TH, TI› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TI›*

___

### `Const` map

▸ **map**<**TSrcReq**, **TReq**, **T**>(`iterator`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, T›, `mapper`: function): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*

**Type parameters:**

▪ **TSrcReq**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **iterator**: *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TSrcReq, T›*

▪ **mapper**: *function*

▸ (`v`: TReq): *TSrcReq*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TReq |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*
