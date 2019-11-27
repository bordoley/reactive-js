[@reactive-js/rx-observable](README.md)

# @reactive-js/rx-observable

## Index

### Interfaces

* [ObservableLike](interfaces/observablelike.md)
* [ObservableOperator](interfaces/observableoperator.md)

### Functions

* [connect](README.md#const-connect)
* [create](README.md#const-create)
* [lift](README.md#const-lift)
* [observe](README.md#const-observe)
* [pipe](README.md#pipe)

## Functions

### `Const` connect

▸ **connect**<**T**>(`observable`: [ObservableLike](interfaces/observablelike.md)‹T›, `scheduler?`: SchedulerLike): *DisposableLike*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](interfaces/observablelike.md)‹T› |
`scheduler?` | SchedulerLike |

**Returns:** *DisposableLike*

___

### `Const` create

▸ **create**<**T**>(`onSubscribe`: function, `priority?`: undefined | number): *[ObservableLike](interfaces/observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onSubscribe**: *function*

▸ (`observer`: ObserverLike‹T›): *DisposableOrTeardown | void*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

▪`Optional`  **priority**: *undefined | number*

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: SubscriberOperator‹TA, TB›): *[ObservableOperator](interfaces/observableoperator.md)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | SubscriberOperator‹TA, TB› |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹TA, TB›*

___

### `Const` observe

▸ **observe**<**T**>(`observer`: ObserverLike‹T›): *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *[ObservableOperator](interfaces/observableoperator.md)‹T, T›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›): *[ObservableLike](interfaces/observablelike.md)‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›): *[ObservableLike](interfaces/observablelike.md)‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›): *[ObservableLike](interfaces/observablelike.md)‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›): *[ObservableLike](interfaces/observablelike.md)‹D›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›): *[ObservableLike](interfaces/observablelike.md)‹E›*

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
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›, `op6`: [ObservableOperator](interfaces/observableoperator.md)‹E, F›): *[ObservableLike](interfaces/observablelike.md)‹F›*

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
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |
`op6` | [ObservableOperator](interfaces/observableoperator.md)‹E, F› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›, `op6`: [ObservableOperator](interfaces/observableoperator.md)‹E, F›, `op7`: [ObservableOperator](interfaces/observableoperator.md)‹F, G›): *[ObservableLike](interfaces/observablelike.md)‹G›*

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
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |
`op6` | [ObservableOperator](interfaces/observableoperator.md)‹E, F› |
`op7` | [ObservableOperator](interfaces/observableoperator.md)‹F, G› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›, `op6`: [ObservableOperator](interfaces/observableoperator.md)‹E, F›, `op7`: [ObservableOperator](interfaces/observableoperator.md)‹F, G›, `op8`: [ObservableOperator](interfaces/observableoperator.md)‹G, H›): *[ObservableLike](interfaces/observablelike.md)‹H›*

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
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |
`op6` | [ObservableOperator](interfaces/observableoperator.md)‹E, F› |
`op7` | [ObservableOperator](interfaces/observableoperator.md)‹F, G› |
`op8` | [ObservableOperator](interfaces/observableoperator.md)‹G, H› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: [ObservableOperator](interfaces/observableoperator.md)‹T, A›, `op2`: [ObservableOperator](interfaces/observableoperator.md)‹A, B›, `op3`: [ObservableOperator](interfaces/observableoperator.md)‹B, C›, `op4`: [ObservableOperator](interfaces/observableoperator.md)‹C, D›, `op5`: [ObservableOperator](interfaces/observableoperator.md)‹D, E›, `op6`: [ObservableOperator](interfaces/observableoperator.md)‹E, F›, `op7`: [ObservableOperator](interfaces/observableoperator.md)‹F, G›, `op8`: [ObservableOperator](interfaces/observableoperator.md)‹G, H›, `op9`: [ObservableOperator](interfaces/observableoperator.md)‹H, I›): *[ObservableLike](interfaces/observablelike.md)‹I›*

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
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | [ObservableOperator](interfaces/observableoperator.md)‹T, A› |
`op2` | [ObservableOperator](interfaces/observableoperator.md)‹A, B› |
`op3` | [ObservableOperator](interfaces/observableoperator.md)‹B, C› |
`op4` | [ObservableOperator](interfaces/observableoperator.md)‹C, D› |
`op5` | [ObservableOperator](interfaces/observableoperator.md)‹D, E› |
`op6` | [ObservableOperator](interfaces/observableoperator.md)‹E, F› |
`op7` | [ObservableOperator](interfaces/observableoperator.md)‹F, G› |
`op8` | [ObservableOperator](interfaces/observableoperator.md)‹G, H› |
`op9` | [ObservableOperator](interfaces/observableoperator.md)‹H, I› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹I›*
