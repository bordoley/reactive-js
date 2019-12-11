[@reactive-js/async-iterator](README.md)

# @reactive-js/async-iterator

## Index

### Interfaces

* [AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)

### Functions

* [lift](README.md#const-lift)
* [liftReq](README.md#const-liftreq)

## Functions

### `Const` lift

▸ **lift**<**TReq**, **T**, **TA**>(`operator`: OperatorLike‹ObservableLike‹T›, MulticastObservableLike‹TA››): *[AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)‹TReq, T, TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | OperatorLike‹ObservableLike‹T›, MulticastObservableLike‹TA›› |

**Returns:** *[AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)‹TReq, T, TReq, TA›*

___

### `Const` liftReq

▸ **liftReq**<**TReq**, **T**, **TReqA**>(`operator`: function): *[AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)‹TReq, T, TReqA, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TReqA**

**Parameters:**

▪ **operator**: *function*

▸ (`dispatcher`: function): *function*

**Parameters:**

▪ **dispatcher**: *function*

▸ (`req`: TReq): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

▸ (`ref`: TReqA): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | TReqA |

**Returns:** *[AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)‹TReq, T, TReqA, T›*
