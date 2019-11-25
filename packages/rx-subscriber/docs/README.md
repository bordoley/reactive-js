[@reactive-js/rx-subscriber](README.md)

# @reactive-js/rx-subscriber

## Index

### Classes

* [DelegatingSubscriber](classes/delegatingsubscriber.md)

### Interfaces

* [ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)
* [Operator](interfaces/operator.md)
* [SubscriberLike](interfaces/subscriberlike.md)

### Functions

* [create](README.md#const-create)
* [observe](README.md#const-observe)
* [pipe](README.md#pipe)
* [toSafeObserver](README.md#const-tosafeobserver)

## Functions

### `Const` create

▸ **create**<**T**>(`scheduler`: SchedulerLike, `subscription`: DisposableLike): *[ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`subscription` | DisposableLike |

**Returns:** *[ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)‹T›*

___

### `Const` observe

▸ **observe**<**T**>(`observer`: ObserverLike‹T›): *[Operator](interfaces/operator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *[Operator](interfaces/operator.md)‹T, T›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›): *[SubscriberLike](interfaces/subscriberlike.md)‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [Operator](interfaces/operator.md)‹T, A› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›, `op2`: [Operator](interfaces/operator.md)‹A, B›): *[SubscriberLike](interfaces/subscriberlike.md)‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [Operator](interfaces/operator.md)‹T, A› |
`op2` | [Operator](interfaces/operator.md)‹A, B› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›, `op2`: [Operator](interfaces/operator.md)‹A, B›, `op3`: [Operator](interfaces/operator.md)‹B, C›): *[SubscriberLike](interfaces/subscriberlike.md)‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`op1` | [Operator](interfaces/operator.md)‹T, A› |
`op2` | [Operator](interfaces/operator.md)‹A, B› |
`op3` | [Operator](interfaces/operator.md)‹B, C› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›, `op2`: [Operator](interfaces/operator.md)‹A, B›, `op3`: [Operator](interfaces/operator.md)‹B, C›, `op4`: [Operator](interfaces/operator.md)‹C, D›): *[SubscriberLike](interfaces/subscriberlike.md)‹D›*

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
`op1` | [Operator](interfaces/operator.md)‹T, A› |
`op2` | [Operator](interfaces/operator.md)‹A, B› |
`op3` | [Operator](interfaces/operator.md)‹B, C› |
`op4` | [Operator](interfaces/operator.md)‹C, D› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›, `op2`: [Operator](interfaces/operator.md)‹A, B›, `op3`: [Operator](interfaces/operator.md)‹B, C›, `op4`: [Operator](interfaces/operator.md)‹C, D›, `op5`: [Operator](interfaces/operator.md)‹D, E›): *[SubscriberLike](interfaces/subscriberlike.md)‹E›*

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
`op1` | [Operator](interfaces/operator.md)‹T, A› |
`op2` | [Operator](interfaces/operator.md)‹A, B› |
`op3` | [Operator](interfaces/operator.md)‹B, C› |
`op4` | [Operator](interfaces/operator.md)‹C, D› |
`op5` | [Operator](interfaces/operator.md)‹D, E› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›, `op2`: [Operator](interfaces/operator.md)‹A, B›, `op3`: [Operator](interfaces/operator.md)‹B, C›, `op4`: [Operator](interfaces/operator.md)‹C, D›, `op5`: [Operator](interfaces/operator.md)‹D, E›, `op6`: [Operator](interfaces/operator.md)‹E, F›): *[SubscriberLike](interfaces/subscriberlike.md)‹F›*

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
`op1` | [Operator](interfaces/operator.md)‹T, A› |
`op2` | [Operator](interfaces/operator.md)‹A, B› |
`op3` | [Operator](interfaces/operator.md)‹B, C› |
`op4` | [Operator](interfaces/operator.md)‹C, D› |
`op5` | [Operator](interfaces/operator.md)‹D, E› |
`op6` | [Operator](interfaces/operator.md)‹E, F› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›, `op2`: [Operator](interfaces/operator.md)‹A, B›, `op3`: [Operator](interfaces/operator.md)‹B, C›, `op4`: [Operator](interfaces/operator.md)‹C, D›, `op5`: [Operator](interfaces/operator.md)‹D, E›, `op6`: [Operator](interfaces/operator.md)‹E, F›, `op7`: [Operator](interfaces/operator.md)‹F, G›): *[SubscriberLike](interfaces/subscriberlike.md)‹G›*

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
`op1` | [Operator](interfaces/operator.md)‹T, A› |
`op2` | [Operator](interfaces/operator.md)‹A, B› |
`op3` | [Operator](interfaces/operator.md)‹B, C› |
`op4` | [Operator](interfaces/operator.md)‹C, D› |
`op5` | [Operator](interfaces/operator.md)‹D, E› |
`op6` | [Operator](interfaces/operator.md)‹E, F› |
`op7` | [Operator](interfaces/operator.md)‹F, G› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›, `op2`: [Operator](interfaces/operator.md)‹A, B›, `op3`: [Operator](interfaces/operator.md)‹B, C›, `op4`: [Operator](interfaces/operator.md)‹C, D›, `op5`: [Operator](interfaces/operator.md)‹D, E›, `op6`: [Operator](interfaces/operator.md)‹E, F›, `op7`: [Operator](interfaces/operator.md)‹F, G›, `op8`: [Operator](interfaces/operator.md)‹G, H›): *[SubscriberLike](interfaces/subscriberlike.md)‹H›*

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
`op1` | [Operator](interfaces/operator.md)‹T, A› |
`op2` | [Operator](interfaces/operator.md)‹A, B› |
`op3` | [Operator](interfaces/operator.md)‹B, C› |
`op4` | [Operator](interfaces/operator.md)‹C, D› |
`op5` | [Operator](interfaces/operator.md)‹D, E› |
`op6` | [Operator](interfaces/operator.md)‹E, F› |
`op7` | [Operator](interfaces/operator.md)‹F, G› |
`op8` | [Operator](interfaces/operator.md)‹G, H› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `op1`: [Operator](interfaces/operator.md)‹T, A›, `op2`: [Operator](interfaces/operator.md)‹A, B›, `op3`: [Operator](interfaces/operator.md)‹B, C›, `op4`: [Operator](interfaces/operator.md)‹C, D›, `op5`: [Operator](interfaces/operator.md)‹D, E›, `op6`: [Operator](interfaces/operator.md)‹E, F›, `op7`: [Operator](interfaces/operator.md)‹F, G›, `op8`: [Operator](interfaces/operator.md)‹G, H›, `op9`: [Operator](interfaces/operator.md)‹H, I›): *[SubscriberLike](interfaces/subscriberlike.md)‹I›*

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
`op1` | [Operator](interfaces/operator.md)‹T, A› |
`op2` | [Operator](interfaces/operator.md)‹A, B› |
`op3` | [Operator](interfaces/operator.md)‹B, C› |
`op4` | [Operator](interfaces/operator.md)‹C, D› |
`op5` | [Operator](interfaces/operator.md)‹D, E› |
`op6` | [Operator](interfaces/operator.md)‹E, F› |
`op7` | [Operator](interfaces/operator.md)‹F, G› |
`op8` | [Operator](interfaces/operator.md)‹G, H› |
`op9` | [Operator](interfaces/operator.md)‹H, I› |

**Returns:** *[SubscriberLike](interfaces/subscriberlike.md)‹I›*

___

### `Const` toSafeObserver

▸ **toSafeObserver**<**T**>(`subscriber`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `priority?`: undefined | number): *ObserverLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`priority?` | undefined &#124; number |

**Returns:** *ObserverLike‹T›*
