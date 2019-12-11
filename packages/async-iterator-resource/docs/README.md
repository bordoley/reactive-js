[@reactive-js/async-iterator-resource](README.md)

# @reactive-js/async-iterator-resource

## Index

### Interfaces

* [AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)

### Functions

* [lift](README.md#const-lift)
* [liftReq](README.md#const-liftreq)

## Functions

### `Const` lift

▸ **lift**<**TReq**, **T**, **TA**>(`operator`: OperatorLike‹ObservableLike‹T›, MulticastObservableLike‹TA››): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | OperatorLike‹ObservableLike‹T›, MulticastObservableLike‹TA›› |

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReq, TA›*

___

### `Const` liftReq

▸ **liftReq**<**TReq**, **T**, **TReqA**>(`operator`: function): *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReqA, T›*

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

**Returns:** *[AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)‹TReq, T, TReqA, T›*
