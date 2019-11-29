[@reactive-js/rx-subscriber](README.md)

# @reactive-js/rx-subscriber

## Index

### Classes

* [DelegatingSubscriber](classes/delegatingsubscriber.md)

### Interfaces

* [ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)
* [SubscriberLike](interfaces/subscriberlike.md)
* [SubscriberOperator](interfaces/subscriberoperator.md)

### Functions

* [createAutoDisposing](README.md#const-createautodisposing)
* [pipe](README.md#pipe)
* [toSafeObserver](README.md#const-tosafeobserver)

## Functions

### `Const` createAutoDisposing

▸ **createAutoDisposing**<**T**>(`scheduler`: SchedulerLike, `subscription`: DisposableLike): *[ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)‹T›*

Returns a new subscriber which disposes it's underlying subscription when completed.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | SchedulerLike | - |
`subscription` | DisposableLike |   |

**Returns:** *[ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)‹T›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›): *[SubscriberLike](interfaces/subscriberlike.md)‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›, `op2`: [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B›): *[SubscriberLike](interfaces/subscriberlike.md)‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |
`op2` | [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›, `op2`: [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B›, `op3`: [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C›): *[SubscriberLike](interfaces/subscriberlike.md)‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |
`op2` | [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B› |
`op3` | [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›, `op2`: [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B›, `op3`: [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C›, `op4`: [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D›): *[SubscriberLike](interfaces/subscriberlike.md)‹D›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |
`op2` | [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B› |
`op3` | [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C› |
`op4` | [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›, `op2`: [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B›, `op3`: [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C›, `op4`: [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D›, `op5`: [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E›): *[SubscriberLike](interfaces/subscriberlike.md)‹E›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |
`op2` | [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B› |
`op3` | [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C› |
`op4` | [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D› |
`op5` | [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›, `op2`: [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B›, `op3`: [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C›, `op4`: [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D›, `op5`: [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E›, `op6`: [SubscriberOperator](interfaces/subscriberoperator.md)‹E, F›): *[SubscriberLike](interfaces/subscriberlike.md)‹F›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |
`op2` | [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B› |
`op3` | [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C› |
`op4` | [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D› |
`op5` | [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E› |
`op6` | [SubscriberOperator](interfaces/subscriberoperator.md)‹E, F› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›, `op2`: [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B›, `op3`: [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C›, `op4`: [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D›, `op5`: [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E›, `op6`: [SubscriberOperator](interfaces/subscriberoperator.md)‹E, F›, `op7`: [SubscriberOperator](interfaces/subscriberoperator.md)‹F, G›): *[SubscriberLike](interfaces/subscriberlike.md)‹G›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |
`op2` | [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B› |
`op3` | [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C› |
`op4` | [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D› |
`op5` | [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E› |
`op6` | [SubscriberOperator](interfaces/subscriberoperator.md)‹E, F› |
`op7` | [SubscriberOperator](interfaces/subscriberoperator.md)‹F, G› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›, `op2`: [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B›, `op3`: [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C›, `op4`: [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D›, `op5`: [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E›, `op6`: [SubscriberOperator](interfaces/subscriberoperator.md)‹E, F›, `op7`: [SubscriberOperator](interfaces/subscriberoperator.md)‹F, G›, `op8`: [SubscriberOperator](interfaces/subscriberoperator.md)‹G, H›): *[SubscriberLike](interfaces/subscriberlike.md)‹H›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |
`op2` | [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B› |
`op3` | [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C› |
`op4` | [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D› |
`op5` | [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E› |
`op6` | [SubscriberOperator](interfaces/subscriberoperator.md)‹E, F› |
`op7` | [SubscriberOperator](interfaces/subscriberoperator.md)‹F, G› |
`op8` | [SubscriberOperator](interfaces/subscriberoperator.md)‹G, H› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A›, `op2`: [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B›, `op3`: [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C›, `op4`: [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D›, `op5`: [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E›, `op6`: [SubscriberOperator](interfaces/subscriberoperator.md)‹E, F›, `op7`: [SubscriberOperator](interfaces/subscriberoperator.md)‹F, G›, `op8`: [SubscriberOperator](interfaces/subscriberoperator.md)‹G, H›, `op9`: [SubscriberOperator](interfaces/subscriberoperator.md)‹H, I›): *[SubscriberLike](interfaces/subscriberlike.md)‹I›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [SubscriberOperator](interfaces/subscriberoperator.md)‹T, A› |
`op2` | [SubscriberOperator](interfaces/subscriberoperator.md)‹A, B› |
`op3` | [SubscriberOperator](interfaces/subscriberoperator.md)‹B, C› |
`op4` | [SubscriberOperator](interfaces/subscriberoperator.md)‹C, D› |
`op5` | [SubscriberOperator](interfaces/subscriberoperator.md)‹D, E› |
`op6` | [SubscriberOperator](interfaces/subscriberoperator.md)‹E, F› |
`op7` | [SubscriberOperator](interfaces/subscriberoperator.md)‹F, G› |
`op8` | [SubscriberOperator](interfaces/subscriberoperator.md)‹G, H› |
`op9` | [SubscriberOperator](interfaces/subscriberoperator.md)‹H, I› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹I›*

___

### `Const` toSafeObserver

▸ **toSafeObserver**<**T**>(`subscriber`: [SubscriberLike](interfaces/subscriberlike.md)‹T›): *ObserverLike‹T›*

Returns an observer that may be safely notified from any context.
The underlying implementation queues notifications and notifies
the subscriber on it's scheduler.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subscriber` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |   |

**Returns:** *ObserverLike‹T›*
