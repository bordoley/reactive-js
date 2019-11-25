[@reactive-js/ix-async-iterator](README.md)

# @reactive-js/ix-async-iterator

## Index

### Classes

* [DelegatingAsyncIterator](classes/delegatingasynciterator.md)

### Interfaces

* [AsyncIteratorLike](interfaces/asynciteratorlike.md)

### Functions

* [lift](README.md#lift)
* [map](README.md#const-map)

## Functions

###  lift

▸ **lift**<**TReq**, **T**, **TA**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TA›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TB›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TC›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TC›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TD›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TD›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TE›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TE›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›, `op6`: SubscriberOperator‹TE, TF›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TF›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |
`op6` | SubscriberOperator‹TE, TF› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TF›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›, `op6`: SubscriberOperator‹TE, TF›, `op7`: SubscriberOperator‹TF, TG›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TG›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |
`op6` | SubscriberOperator‹TE, TF› |
`op7` | SubscriberOperator‹TF, TG› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TG›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›, `op6`: SubscriberOperator‹TE, TF›, `op7`: SubscriberOperator‹TF, TG›, `op8`: SubscriberOperator‹TG, TH›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TH›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |
`op6` | SubscriberOperator‹TE, TF› |
`op7` | SubscriberOperator‹TF, TG› |
`op8` | SubscriberOperator‹TG, TH› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TH›*

▸ **lift**<**TReq**, **T**, **TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`src`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›, `op1`: SubscriberOperator‹T, TA›, `op2`: SubscriberOperator‹TA, TB›, `op3`: SubscriberOperator‹TB, TC›, `op4`: SubscriberOperator‹TC, TD›, `op5`: SubscriberOperator‹TD, TE›, `op6`: SubscriberOperator‹TE, TF›, `op7`: SubscriberOperator‹TF, TG›, `op8`: SubscriberOperator‹TG, TH›, `op9`: SubscriberOperator‹TH, TI›): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TI›*

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
`src` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T› |
`op1` | SubscriberOperator‹T, TA› |
`op2` | SubscriberOperator‹TA, TB› |
`op3` | SubscriberOperator‹TB, TC› |
`op4` | SubscriberOperator‹TC, TD› |
`op5` | SubscriberOperator‹TD, TE› |
`op6` | SubscriberOperator‹TE, TF› |
`op7` | SubscriberOperator‹TF, TG› |
`op8` | SubscriberOperator‹TG, TH› |
`op9` | SubscriberOperator‹TH, TI› |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, TI›*

___

### `Const` map

▸ **map**<**TSrcReq**, **TReq**, **T**>(`iterator`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, T›, `mapper`: function): *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›*

**Type parameters:**

▪ **TSrcReq**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **iterator**: *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TSrcReq, T›*

▪ **mapper**: *function*

▸ (`v`: TReq): *TSrcReq*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TReq |

**Returns:** *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹TReq, T›*
