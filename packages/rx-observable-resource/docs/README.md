[@reactive-js/rx-observable-resource](README.md)

# @reactive-js/rx-observable-resource

## Index

### Interfaces

* [ObservableResourceOperator](interfaces/observableresourceoperator.md)

### Functions

* [lift](README.md#const-lift)
* [pipe](README.md#pipe)

## Functions

### `Const` lift

▸ **lift**<**A**, **B**>(`operator`: ObservableOperator‹A, B›): *[ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | ObservableOperator‹A, B› |

**Returns:** *[ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›): *ObservableResourceLike‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |

**Returns:** *ObservableResourceLike‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›): *ObservableResourceLike‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |

**Returns:** *ObservableResourceLike‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›): *ObservableResourceLike‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |

**Returns:** *ObservableResourceLike‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›): *ObservableResourceLike‹D›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |

**Returns:** *ObservableResourceLike‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›): *ObservableResourceLike‹E›*

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
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |

**Returns:** *ObservableResourceLike‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›, `op6`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F›): *ObservableResourceLike‹F›*

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
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |
`op6` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F› |

**Returns:** *ObservableResourceLike‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›, `op6`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F›, `op7`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G›): *ObservableResourceLike‹G›*

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
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |
`op6` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F› |
`op7` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G› |

**Returns:** *ObservableResourceLike‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›, `op6`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F›, `op7`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G›, `op8`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹G, H›): *ObservableResourceLike‹H›*

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
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |
`op6` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F› |
`op7` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G› |
`op8` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹G, H› |

**Returns:** *ObservableResourceLike‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: ObservableResourceLike‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›, `op6`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F›, `op7`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G›, `op8`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹G, H›, `op9`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹H, I›): *ObservableResourceLike‹I›*

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
`src` | ObservableResourceLike‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |
`op6` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F› |
`op7` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G› |
`op8` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹G, H› |
`op9` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹H, I› |

**Returns:** *ObservableResourceLike‹I›*
