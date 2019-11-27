[@reactive-js/rx-observable-resource](README.md)

# @reactive-js/rx-observable-resource

## Index

### Interfaces

* [ObservableResourceLike](interfaces/observableresourcelike.md)
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

▸ **pipe**<**T**, **A**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹D›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹E›*

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
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›, `op6`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹F›*

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
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |
`op6` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›, `op6`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F›, `op7`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹G›*

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
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |
`op6` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F› |
`op7` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›, `op6`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F›, `op7`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G›, `op8`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹G, H›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹H›*

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
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |
`op6` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F› |
`op7` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G› |
`op8` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹G, H› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A›, `op2`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B›, `op3`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C›, `op4`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D›, `op5`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E›, `op6`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F›, `op7`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G›, `op8`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹G, H›, `op9`: [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹H, I›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹I›*

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
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹T, A› |
`op2` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹A, B› |
`op3` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹B, C› |
`op4` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹C, D› |
`op5` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹D, E› |
`op6` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹E, F› |
`op7` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹F, G› |
`op8` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹G, H› |
`op9` | [ObservableResourceOperator](interfaces/observableresourceoperator.md)‹H, I› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹I›*
