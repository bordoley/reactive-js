[@reactive-js/rx-observable-resource](README.md)

# @reactive-js/rx-observable-resource

## Index

### Interfaces

* [ObservableResourceLike](interfaces/observableresourcelike.md)

### Functions

* [lift](README.md#lift)
* [pipe](README.md#pipe)

## Functions

###  lift

▸ **lift**<**T**, **A**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | SubscriberOperator‹T, A› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹A›*

▸ **lift**<**T**, **A**, **B**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›, `op2`: SubscriberOperator‹A, B›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | SubscriberOperator‹T, A› |
`op2` | SubscriberOperator‹A, B› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹B›*

▸ **lift**<**T**, **A**, **B**, **C**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›, `op2`: SubscriberOperator‹A, B›, `op3`: SubscriberOperator‹B, C›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | SubscriberOperator‹T, A› |
`op2` | SubscriberOperator‹A, B› |
`op3` | SubscriberOperator‹B, C› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹C›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›, `op2`: SubscriberOperator‹A, B›, `op3`: SubscriberOperator‹B, C›, `op4`: SubscriberOperator‹C, D›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹D›*

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
`op1` | SubscriberOperator‹T, A› |
`op2` | SubscriberOperator‹A, B› |
`op3` | SubscriberOperator‹B, C› |
`op4` | SubscriberOperator‹C, D› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹D›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›, `op2`: SubscriberOperator‹A, B›, `op3`: SubscriberOperator‹B, C›, `op4`: SubscriberOperator‹C, D›, `op5`: SubscriberOperator‹D, E›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹E›*

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
`op1` | SubscriberOperator‹T, A› |
`op2` | SubscriberOperator‹A, B› |
`op3` | SubscriberOperator‹B, C› |
`op4` | SubscriberOperator‹C, D› |
`op5` | SubscriberOperator‹D, E› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹E›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›, `op2`: SubscriberOperator‹A, B›, `op3`: SubscriberOperator‹B, C›, `op4`: SubscriberOperator‹C, D›, `op5`: SubscriberOperator‹D, E›, `op6`: SubscriberOperator‹E, F›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹F›*

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
`op1` | SubscriberOperator‹T, A› |
`op2` | SubscriberOperator‹A, B› |
`op3` | SubscriberOperator‹B, C› |
`op4` | SubscriberOperator‹C, D› |
`op5` | SubscriberOperator‹D, E› |
`op6` | SubscriberOperator‹E, F› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹F›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›, `op2`: SubscriberOperator‹A, B›, `op3`: SubscriberOperator‹B, C›, `op4`: SubscriberOperator‹C, D›, `op5`: SubscriberOperator‹D, E›, `op6`: SubscriberOperator‹E, F›, `op7`: SubscriberOperator‹F, G›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹G›*

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
`op1` | SubscriberOperator‹T, A› |
`op2` | SubscriberOperator‹A, B› |
`op3` | SubscriberOperator‹B, C› |
`op4` | SubscriberOperator‹C, D› |
`op5` | SubscriberOperator‹D, E› |
`op6` | SubscriberOperator‹E, F› |
`op7` | SubscriberOperator‹F, G› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹G›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›, `op2`: SubscriberOperator‹A, B›, `op3`: SubscriberOperator‹B, C›, `op4`: SubscriberOperator‹C, D›, `op5`: SubscriberOperator‹D, E›, `op6`: SubscriberOperator‹E, F›, `op7`: SubscriberOperator‹F, G›, `op8`: SubscriberOperator‹G, H›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹H›*

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
`op1` | SubscriberOperator‹T, A› |
`op2` | SubscriberOperator‹A, B› |
`op3` | SubscriberOperator‹B, C› |
`op4` | SubscriberOperator‹C, D› |
`op5` | SubscriberOperator‹D, E› |
`op6` | SubscriberOperator‹E, F› |
`op7` | SubscriberOperator‹F, G› |
`op8` | SubscriberOperator‹G, H› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹H›*

▸ **lift**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: SubscriberOperator‹T, A›, `op2`: SubscriberOperator‹A, B›, `op3`: SubscriberOperator‹B, C›, `op4`: SubscriberOperator‹C, D›, `op5`: SubscriberOperator‹D, E›, `op6`: SubscriberOperator‹E, F›, `op7`: SubscriberOperator‹F, G›, `op8`: SubscriberOperator‹G, H›, `op9`: SubscriberOperator‹H, I›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹I›*

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
`op1` | SubscriberOperator‹T, A› |
`op2` | SubscriberOperator‹A, B› |
`op3` | SubscriberOperator‹B, C› |
`op4` | SubscriberOperator‹C, D› |
`op5` | SubscriberOperator‹D, E› |
`op6` | SubscriberOperator‹E, F› |
`op7` | SubscriberOperator‹F, G› |
`op8` | SubscriberOperator‹G, H› |
`op9` | SubscriberOperator‹H, I› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹I›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹A›*

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | ObservableOperator‹T, A› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹A›*

▸ **pipe**<**T**, **A**, **B**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›, `op2`: ObservableOperator‹A, B›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹B›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | ObservableOperator‹T, A› |
`op2` | ObservableOperator‹A, B› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹B›*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›, `op2`: ObservableOperator‹A, B›, `op3`: ObservableOperator‹B, C›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹C›*

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [ObservableResourceLike](interfaces/observableresourcelike.md)‹T› |
`op1` | ObservableOperator‹T, A› |
`op2` | ObservableOperator‹A, B› |
`op3` | ObservableOperator‹B, C› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹C›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›, `op2`: ObservableOperator‹A, B›, `op3`: ObservableOperator‹B, C›, `op4`: ObservableOperator‹C, D›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹D›*

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
`op1` | ObservableOperator‹T, A› |
`op2` | ObservableOperator‹A, B› |
`op3` | ObservableOperator‹B, C› |
`op4` | ObservableOperator‹C, D› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹D›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›, `op2`: ObservableOperator‹A, B›, `op3`: ObservableOperator‹B, C›, `op4`: ObservableOperator‹C, D›, `op5`: ObservableOperator‹D, E›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹E›*

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
`op1` | ObservableOperator‹T, A› |
`op2` | ObservableOperator‹A, B› |
`op3` | ObservableOperator‹B, C› |
`op4` | ObservableOperator‹C, D› |
`op5` | ObservableOperator‹D, E› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹E›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›, `op2`: ObservableOperator‹A, B›, `op3`: ObservableOperator‹B, C›, `op4`: ObservableOperator‹C, D›, `op5`: ObservableOperator‹D, E›, `op6`: ObservableOperator‹E, F›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹F›*

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
`op1` | ObservableOperator‹T, A› |
`op2` | ObservableOperator‹A, B› |
`op3` | ObservableOperator‹B, C› |
`op4` | ObservableOperator‹C, D› |
`op5` | ObservableOperator‹D, E› |
`op6` | ObservableOperator‹E, F› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹F›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›, `op2`: ObservableOperator‹A, B›, `op3`: ObservableOperator‹B, C›, `op4`: ObservableOperator‹C, D›, `op5`: ObservableOperator‹D, E›, `op6`: ObservableOperator‹E, F›, `op7`: ObservableOperator‹F, G›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹G›*

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
`op1` | ObservableOperator‹T, A› |
`op2` | ObservableOperator‹A, B› |
`op3` | ObservableOperator‹B, C› |
`op4` | ObservableOperator‹C, D› |
`op5` | ObservableOperator‹D, E› |
`op6` | ObservableOperator‹E, F› |
`op7` | ObservableOperator‹F, G› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹G›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›, `op2`: ObservableOperator‹A, B›, `op3`: ObservableOperator‹B, C›, `op4`: ObservableOperator‹C, D›, `op5`: ObservableOperator‹D, E›, `op6`: ObservableOperator‹E, F›, `op7`: ObservableOperator‹F, G›, `op8`: ObservableOperator‹G, H›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹H›*

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
`op1` | ObservableOperator‹T, A› |
`op2` | ObservableOperator‹A, B› |
`op3` | ObservableOperator‹B, C› |
`op4` | ObservableOperator‹C, D› |
`op5` | ObservableOperator‹D, E› |
`op6` | ObservableOperator‹E, F› |
`op7` | ObservableOperator‹F, G› |
`op8` | ObservableOperator‹G, H› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹H›*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: [ObservableResourceLike](interfaces/observableresourcelike.md)‹T›, `op1`: ObservableOperator‹T, A›, `op2`: ObservableOperator‹A, B›, `op3`: ObservableOperator‹B, C›, `op4`: ObservableOperator‹C, D›, `op5`: ObservableOperator‹D, E›, `op6`: ObservableOperator‹E, F›, `op7`: ObservableOperator‹F, G›, `op8`: ObservableOperator‹G, H›, `op9`: ObservableOperator‹H, I›): *[ObservableResourceLike](interfaces/observableresourcelike.md)‹I›*

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
`op1` | ObservableOperator‹T, A› |
`op2` | ObservableOperator‹A, B› |
`op3` | ObservableOperator‹B, C› |
`op4` | ObservableOperator‹C, D› |
`op5` | ObservableOperator‹D, E› |
`op6` | ObservableOperator‹E, F› |
`op7` | ObservableOperator‹F, G› |
`op8` | ObservableOperator‹G, H› |
`op9` | ObservableOperator‹H, I› |

**Returns:** *[ObservableResourceLike](interfaces/observableresourcelike.md)‹I›*
