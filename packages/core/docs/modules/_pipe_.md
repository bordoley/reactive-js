[@reactive-js/core - v0.0.37](../README.md) › ["pipe"](_pipe_.md)

# Module: "pipe"

## Index

### Type aliases

* [Operator](_pipe_.md#operator)

### Functions

* [compose](_pipe_.md#compose)
* [pipe](_pipe_.md#pipe)

## Type aliases

###  Operator

Ƭ **Operator**: *function*

A Unary function that transforms a value of type A into a value of type B

#### Type declaration:

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

## Functions

###  compose

▸ **compose**<**T**, **A**, **B**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›): *[Operator](_pipe_.md#operator)‹T, B›*

composes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, B›*

▸ **compose**<**T**, **A**, **B**, **C**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›): *[Operator](_pipe_.md#operator)‹T, C›*

composes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, C›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›): *[Operator](_pipe_.md#operator)‹T, D›*

composes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, D›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›): *[Operator](_pipe_.md#operator)‹T, E›*

composes the source value through a series of unary functions.

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, E›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›): *[Operator](_pipe_.md#operator)‹T, F›*

composes the source value through a series of unary functions.

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, F›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›): *[Operator](_pipe_.md#operator)‹T, G›*

composes the source value through a series of unary functions.

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, G›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›): *[Operator](_pipe_.md#operator)‹T, H›*

composes the source value through a series of unary functions.

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, H›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›, `op9`: [Operator](_pipe_.md#operator)‹H, I›): *[Operator](_pipe_.md#operator)‹T, I›*

composes the source value through a series of unary functions.

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |
`op9` | [Operator](_pipe_.md#operator)‹H, I› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, I›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›, `op9`: [Operator](_pipe_.md#operator)‹H, I›, `op10`: [Operator](_pipe_.md#operator)‹I, J›): *[Operator](_pipe_.md#operator)‹T, J›*

composes the source value through a series of unary functions.

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

▪ **J**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |
`op9` | [Operator](_pipe_.md#operator)‹H, I› |
`op10` | [Operator](_pipe_.md#operator)‹I, J› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, J›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›, `op9`: [Operator](_pipe_.md#operator)‹H, I›, `op10`: [Operator](_pipe_.md#operator)‹I, J›, `op11`: [Operator](_pipe_.md#operator)‹J, K›): *[Operator](_pipe_.md#operator)‹T, K›*

composes the source value through a series of unary functions.

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

▪ **J**

▪ **K**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |
`op9` | [Operator](_pipe_.md#operator)‹H, I› |
`op10` | [Operator](_pipe_.md#operator)‹I, J› |
`op11` | [Operator](_pipe_.md#operator)‹J, K› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, K›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**>(`op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›, `op9`: [Operator](_pipe_.md#operator)‹H, I›, `op10`: [Operator](_pipe_.md#operator)‹I, J›, `op11`: [Operator](_pipe_.md#operator)‹J, K›, `op12`: [Operator](_pipe_.md#operator)‹K, L›): *[Operator](_pipe_.md#operator)‹T, L›*

composes the source value through a series of unary functions.

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

▪ **J**

▪ **K**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |
`op9` | [Operator](_pipe_.md#operator)‹H, I› |
`op10` | [Operator](_pipe_.md#operator)‹I, J› |
`op11` | [Operator](_pipe_.md#operator)‹J, K› |
`op12` | [Operator](_pipe_.md#operator)‹K, L› |

**Returns:** *[Operator](_pipe_.md#operator)‹T, L›*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›): *A*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |

**Returns:** *A*

▸ **pipe**<**T**, **A**, **B**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›): *B*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |

**Returns:** *B*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›): *C*

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |

**Returns:** *C*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›): *D*

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |

**Returns:** *D*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›): *E*

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |

**Returns:** *E*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›): *F*

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |

**Returns:** *F*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›): *G*

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |

**Returns:** *G*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›): *H*

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |

**Returns:** *H*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›, `op9`: [Operator](_pipe_.md#operator)‹H, I›): *I*

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
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |
`op9` | [Operator](_pipe_.md#operator)‹H, I› |

**Returns:** *I*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›, `op9`: [Operator](_pipe_.md#operator)‹H, I›, `op10`: [Operator](_pipe_.md#operator)‹I, J›): *J*

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

▪ **J**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |
`op9` | [Operator](_pipe_.md#operator)‹H, I› |
`op10` | [Operator](_pipe_.md#operator)‹I, J› |

**Returns:** *J*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›, `op9`: [Operator](_pipe_.md#operator)‹H, I›, `op10`: [Operator](_pipe_.md#operator)‹I, J›, `op11`: [Operator](_pipe_.md#operator)‹J, K›): *K*

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

▪ **J**

▪ **K**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |
`op9` | [Operator](_pipe_.md#operator)‹H, I› |
`op10` | [Operator](_pipe_.md#operator)‹I, J› |
`op11` | [Operator](_pipe_.md#operator)‹J, K› |

**Returns:** *K*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**>(`src`: T, `op1`: [Operator](_pipe_.md#operator)‹T, A›, `op2`: [Operator](_pipe_.md#operator)‹A, B›, `op3`: [Operator](_pipe_.md#operator)‹B, C›, `op4`: [Operator](_pipe_.md#operator)‹C, D›, `op5`: [Operator](_pipe_.md#operator)‹D, E›, `op6`: [Operator](_pipe_.md#operator)‹E, F›, `op7`: [Operator](_pipe_.md#operator)‹F, G›, `op8`: [Operator](_pipe_.md#operator)‹G, H›, `op9`: [Operator](_pipe_.md#operator)‹H, I›, `op10`: [Operator](_pipe_.md#operator)‹I, J›, `op11`: [Operator](_pipe_.md#operator)‹J, K›, `op12`: [Operator](_pipe_.md#operator)‹K, L›): *L*

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

▪ **J**

▪ **K**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Operator](_pipe_.md#operator)‹T, A› |
`op2` | [Operator](_pipe_.md#operator)‹A, B› |
`op3` | [Operator](_pipe_.md#operator)‹B, C› |
`op4` | [Operator](_pipe_.md#operator)‹C, D› |
`op5` | [Operator](_pipe_.md#operator)‹D, E› |
`op6` | [Operator](_pipe_.md#operator)‹E, F› |
`op7` | [Operator](_pipe_.md#operator)‹F, G› |
`op8` | [Operator](_pipe_.md#operator)‹G, H› |
`op9` | [Operator](_pipe_.md#operator)‹H, I› |
`op10` | [Operator](_pipe_.md#operator)‹I, J› |
`op11` | [Operator](_pipe_.md#operator)‹J, K› |
`op12` | [Operator](_pipe_.md#operator)‹K, L› |

**Returns:** *L*
