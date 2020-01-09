[@reactive-js/pipe](README.md)

# @reactive-js/pipe

## Index

### Interfaces

* [OperatorLike](interfaces/operatorlike.md)

### Functions

* [pipe](README.md#pipe)

## Functions

###  pipe

▸ **pipe**<**T**, **A**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›): *A*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |

**Returns:** *A*

▸ **pipe**<**T**, **A**, **B**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›, `op2`: [OperatorLike](interfaces/operatorlike.md)‹A, B›): *B*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |
`op2` | [OperatorLike](interfaces/operatorlike.md)‹A, B› |

**Returns:** *B*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›, `op2`: [OperatorLike](interfaces/operatorlike.md)‹A, B›, `op3`: [OperatorLike](interfaces/operatorlike.md)‹B, C›): *C*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |
`op2` | [OperatorLike](interfaces/operatorlike.md)‹A, B› |
`op3` | [OperatorLike](interfaces/operatorlike.md)‹B, C› |

**Returns:** *C*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›, `op2`: [OperatorLike](interfaces/operatorlike.md)‹A, B›, `op3`: [OperatorLike](interfaces/operatorlike.md)‹B, C›, `op4`: [OperatorLike](interfaces/operatorlike.md)‹C, D›): *D*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |
`op2` | [OperatorLike](interfaces/operatorlike.md)‹A, B› |
`op3` | [OperatorLike](interfaces/operatorlike.md)‹B, C› |
`op4` | [OperatorLike](interfaces/operatorlike.md)‹C, D› |

**Returns:** *D*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›, `op2`: [OperatorLike](interfaces/operatorlike.md)‹A, B›, `op3`: [OperatorLike](interfaces/operatorlike.md)‹B, C›, `op4`: [OperatorLike](interfaces/operatorlike.md)‹C, D›, `op5`: [OperatorLike](interfaces/operatorlike.md)‹D, E›): *E*

Pipes the source value through a series of unary functions.

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
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |
`op2` | [OperatorLike](interfaces/operatorlike.md)‹A, B› |
`op3` | [OperatorLike](interfaces/operatorlike.md)‹B, C› |
`op4` | [OperatorLike](interfaces/operatorlike.md)‹C, D› |
`op5` | [OperatorLike](interfaces/operatorlike.md)‹D, E› |

**Returns:** *E*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›, `op2`: [OperatorLike](interfaces/operatorlike.md)‹A, B›, `op3`: [OperatorLike](interfaces/operatorlike.md)‹B, C›, `op4`: [OperatorLike](interfaces/operatorlike.md)‹C, D›, `op5`: [OperatorLike](interfaces/operatorlike.md)‹D, E›, `op6`: [OperatorLike](interfaces/operatorlike.md)‹E, F›): *F*

Pipes the source value through a series of unary functions.

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
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |
`op2` | [OperatorLike](interfaces/operatorlike.md)‹A, B› |
`op3` | [OperatorLike](interfaces/operatorlike.md)‹B, C› |
`op4` | [OperatorLike](interfaces/operatorlike.md)‹C, D› |
`op5` | [OperatorLike](interfaces/operatorlike.md)‹D, E› |
`op6` | [OperatorLike](interfaces/operatorlike.md)‹E, F› |

**Returns:** *F*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›, `op2`: [OperatorLike](interfaces/operatorlike.md)‹A, B›, `op3`: [OperatorLike](interfaces/operatorlike.md)‹B, C›, `op4`: [OperatorLike](interfaces/operatorlike.md)‹C, D›, `op5`: [OperatorLike](interfaces/operatorlike.md)‹D, E›, `op6`: [OperatorLike](interfaces/operatorlike.md)‹E, F›, `op7`: [OperatorLike](interfaces/operatorlike.md)‹F, G›): *G*

Pipes the source value through a series of unary functions.

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
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |
`op2` | [OperatorLike](interfaces/operatorlike.md)‹A, B› |
`op3` | [OperatorLike](interfaces/operatorlike.md)‹B, C› |
`op4` | [OperatorLike](interfaces/operatorlike.md)‹C, D› |
`op5` | [OperatorLike](interfaces/operatorlike.md)‹D, E› |
`op6` | [OperatorLike](interfaces/operatorlike.md)‹E, F› |
`op7` | [OperatorLike](interfaces/operatorlike.md)‹F, G› |

**Returns:** *G*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›, `op2`: [OperatorLike](interfaces/operatorlike.md)‹A, B›, `op3`: [OperatorLike](interfaces/operatorlike.md)‹B, C›, `op4`: [OperatorLike](interfaces/operatorlike.md)‹C, D›, `op5`: [OperatorLike](interfaces/operatorlike.md)‹D, E›, `op6`: [OperatorLike](interfaces/operatorlike.md)‹E, F›, `op7`: [OperatorLike](interfaces/operatorlike.md)‹F, G›, `op8`: [OperatorLike](interfaces/operatorlike.md)‹G, H›): *H*

Pipes the source value through a series of unary functions.

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
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |
`op2` | [OperatorLike](interfaces/operatorlike.md)‹A, B› |
`op3` | [OperatorLike](interfaces/operatorlike.md)‹B, C› |
`op4` | [OperatorLike](interfaces/operatorlike.md)‹C, D› |
`op5` | [OperatorLike](interfaces/operatorlike.md)‹D, E› |
`op6` | [OperatorLike](interfaces/operatorlike.md)‹E, F› |
`op7` | [OperatorLike](interfaces/operatorlike.md)‹F, G› |
`op8` | [OperatorLike](interfaces/operatorlike.md)‹G, H› |

**Returns:** *H*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: T, `op1`: [OperatorLike](interfaces/operatorlike.md)‹T, A›, `op2`: [OperatorLike](interfaces/operatorlike.md)‹A, B›, `op3`: [OperatorLike](interfaces/operatorlike.md)‹B, C›, `op4`: [OperatorLike](interfaces/operatorlike.md)‹C, D›, `op5`: [OperatorLike](interfaces/operatorlike.md)‹D, E›, `op6`: [OperatorLike](interfaces/operatorlike.md)‹E, F›, `op7`: [OperatorLike](interfaces/operatorlike.md)‹F, G›, `op8`: [OperatorLike](interfaces/operatorlike.md)‹G, H›, `op9`: [OperatorLike](interfaces/operatorlike.md)‹H, I›): *I*

Pipes the source value through a series of unary functions.

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
`src` | T |
`op1` | [OperatorLike](interfaces/operatorlike.md)‹T, A› |
`op2` | [OperatorLike](interfaces/operatorlike.md)‹A, B› |
`op3` | [OperatorLike](interfaces/operatorlike.md)‹B, C› |
`op4` | [OperatorLike](interfaces/operatorlike.md)‹C, D› |
`op5` | [OperatorLike](interfaces/operatorlike.md)‹D, E› |
`op6` | [OperatorLike](interfaces/operatorlike.md)‹E, F› |
`op7` | [OperatorLike](interfaces/operatorlike.md)‹F, G› |
`op8` | [OperatorLike](interfaces/operatorlike.md)‹G, H› |
`op9` | [OperatorLike](interfaces/operatorlike.md)‹H, I› |

**Returns:** *I*
