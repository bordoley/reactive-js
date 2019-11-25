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

▸ **lift**<**TReq**, **T**, **TA**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TA›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TB›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TC›*

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
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TC›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TD›*

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
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TD›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TE›*

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
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TE›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›, `op6`: SubscriberOperator‹TE, TF›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TF›*

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
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |
`op6` | SubscriberOperator‹TE, TF› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TF›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›, `op6`: SubscriberOperator‹TE, TF›, `op7`: SubscriberOperator‹TF, TG›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TG›*

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
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |
`op6` | SubscriberOperator‹TE, TF› |
`op7` | SubscriberOperator‹TF, TG› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TG›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›, `op6`: SubscriberOperator‹TE, TF›, `op7`: SubscriberOperator‹TF, TG›, `op8`: SubscriberOperator‹TG, TH›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TH›*

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
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |
`op6` | SubscriberOperator‹TE, TF› |
`op7` | SubscriberOperator‹TF, TG› |
`op8` | SubscriberOperator‹TG, TH› |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TH›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`src`: [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›, `op6`: SubscriberOperator‹TE, TF›, `op7`: SubscriberOperator‹TF, TG›, `op8`: SubscriberOperator‹TG, TH›, `op9`: SubscriberOperator‹TH, TI›): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, TI›*

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
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |
`op6` | SubscriberOperator‹TE, TF› |
`op7` | SubscriberOperator‹TF, TG› |
`op8` | SubscriberOperator‹TG, TH› |
`op9` | SubscriberOperator‹TH, TI› |

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
