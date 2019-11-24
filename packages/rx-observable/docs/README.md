[@reactive-js/rx-observable](README.md)

# @reactive-js/rx-observable

## Index

### Interfaces

* [ObservableLike](interfaces/observablelike.md)

### Functions

* [connect](README.md#const-connect)
* [create](README.md#const-create)
* [lift](README.md#lift)

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

###  lift

▸ **lift**<**T**, **A**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›): *[ObservableLike](interfaces/observablelike.md)‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | Operator‹T, A› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹A›*

▸ **lift**<**T**, **A**, **B**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›, `op2`: Operator‹A, B›): *[ObservableLike](interfaces/observablelike.md)‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | Operator‹T, A› |
`op2` | Operator‹A, B› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹B›*

▸ **lift**<**T**, **A**, **B**, **C**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›, `op2`: Operator‹A, B›, `op3`: Operator‹B, C›): *[ObservableLike](interfaces/observablelike.md)‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableLike](interfaces/observablelike.md)‹T› |
`op1` | Operator‹T, A› |
`op2` | Operator‹A, B› |
`op3` | Operator‹B, C› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹C›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›, `op2`: Operator‹A, B›, `op3`: Operator‹B, C›, `op4`: Operator‹C, D›): *[ObservableLike](interfaces/observablelike.md)‹D›*

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
`op1` | Operator‹T, A› |
`op2` | Operator‹A, B› |
`op3` | Operator‹B, C› |
`op4` | Operator‹C, D› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹D›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›, `op2`: Operator‹A, B›, `op3`: Operator‹B, C›, `op4`: Operator‹C, D›, `op5`: Operator‹D, E›): *[ObservableLike](interfaces/observablelike.md)‹E›*

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
`op1` | Operator‹T, A› |
`op2` | Operator‹A, B› |
`op3` | Operator‹B, C› |
`op4` | Operator‹C, D› |
`op5` | Operator‹D, E› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹E›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›, `op2`: Operator‹A, B›, `op3`: Operator‹B, C›, `op4`: Operator‹C, D›, `op5`: Operator‹D, E›, `op6`: Operator‹E, F›): *[ObservableLike](interfaces/observablelike.md)‹F›*

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
`op1` | Operator‹T, A› |
`op2` | Operator‹A, B› |
`op3` | Operator‹B, C› |
`op4` | Operator‹C, D› |
`op5` | Operator‹D, E› |
`op6` | Operator‹E, F› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹F›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›, `op2`: Operator‹A, B›, `op3`: Operator‹B, C›, `op4`: Operator‹C, D›, `op5`: Operator‹D, E›, `op6`: Operator‹E, F›, `op7`: Operator‹F, G›): *[ObservableLike](interfaces/observablelike.md)‹G›*

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
`op1` | Operator‹T, A› |
`op2` | Operator‹A, B› |
`op3` | Operator‹B, C› |
`op4` | Operator‹C, D› |
`op5` | Operator‹D, E› |
`op6` | Operator‹E, F› |
`op7` | Operator‹F, G› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹G›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›, `op2`: Operator‹A, B›, `op3`: Operator‹B, C›, `op4`: Operator‹C, D›, `op5`: Operator‹D, E›, `op6`: Operator‹E, F›, `op7`: Operator‹F, G›, `op8`: Operator‹G, H›): *[ObservableLike](interfaces/observablelike.md)‹H›*

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
`op1` | Operator‹T, A› |
`op2` | Operator‹A, B› |
`op3` | Operator‹B, C› |
`op4` | Operator‹C, D› |
`op5` | Operator‹D, E› |
`op6` | Operator‹E, F› |
`op7` | Operator‹F, G› |
`op8` | Operator‹G, H› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹H›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: [ObservableLike](interfaces/observablelike.md)‹T›, `op1`: Operator‹T, A›, `op2`: Operator‹A, B›, `op3`: Operator‹B, C›, `op4`: Operator‹C, D›, `op5`: Operator‹D, E›, `op6`: Operator‹E, F›, `op7`: Operator‹F, G›, `op8`: Operator‹G, H›, `op9`: Operator‹H, I›): *[ObservableLike](interfaces/observablelike.md)‹I›*

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
`op1` | Operator‹T, A› |
`op2` | Operator‹A, B› |
`op3` | Operator‹B, C› |
`op4` | Operator‹C, D› |
`op5` | Operator‹D, E› |
`op6` | Operator‹E, F› |
`op7` | Operator‹F, G› |
`op8` | Operator‹G, H› |
`op9` | Operator‹H, I› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹I›*
