[@reactive-js/core - v0.0.37](../README.md) › ["functions"](_functions_.md)

# Module: "functions"

## Index

### Type aliases

* [Operator](_functions_.md#operator)

### Variables

* [alwaysFalse](_functions_.md#const-alwaysfalse)
* [alwaysTrue](_functions_.md#const-alwaystrue)
* [ignore](_functions_.md#const-ignore)

### Functions

* [apply](_functions_.md#apply)
* [arrayEquals](_functions_.md#const-arrayequals)
* [call](_functions_.md#call)
* [compose](_functions_.md#compose)
* [decrement](_functions_.md#const-decrement)
* [identity](_functions_.md#const-identity)
* [increment](_functions_.md#const-increment)
* [pipe](_functions_.md#pipe)
* [referenceEquals](_functions_.md#const-referenceequals)
* [returns](_functions_.md#const-returns)

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

## Variables

### `Const` alwaysFalse

• **alwaysFalse**: *(Anonymous function)* = returns(false)

___

### `Const` alwaysTrue

• **alwaysTrue**: *(Anonymous function)* = returns(true)

___

### `Const` ignore

• **ignore**: *(Anonymous function)* = returns<void>(none)

## Functions

###  apply

▸ **apply**<**T**>(`f`: function): *[Operator](_functions_.md#operator)‹[], T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (): *T*

**Returns:** *[Operator](_functions_.md#operator)‹[], T›*

▸ **apply**<**TA**, **T**>(`f`: function): *[Operator](_functions_.md#operator)‹[TA], T›*

**Type parameters:**

▪ **TA**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`a`: TA): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** *[Operator](_functions_.md#operator)‹[TA], T›*

▸ **apply**<**TA**, **TB**, **T**>(`f`: function): *[Operator](_functions_.md#operator)‹[TA, TB], T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`a`: TA, `b`: TB): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[Operator](_functions_.md#operator)‹[TA, TB], T›*

▸ **apply**<**TA**, **TB**, **TC**, **T**>(`f`: function): *[Operator](_functions_.md#operator)‹[TA, TB, TC], T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`a`: TA, `b`: TB, `c`: TC): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *[Operator](_functions_.md#operator)‹[TA, TB, TC], T›*

___

### `Const` arrayEquals

▸ **arrayEquals**<**T**>(`valuesAreEqual`: function): *(Anonymous function)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **valuesAreEqual**: *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *(Anonymous function)*

___

###  call

▸ **call**<**T**>(): *[Operator](_functions_.md#operator)‹function, T›*

**Type parameters:**

▪ **T**

**Returns:** *[Operator](_functions_.md#operator)‹function, T›*

▸ **call**<**TA**, **T**>(`a`: TA): *[Operator](_functions_.md#operator)‹function, T›*

**Type parameters:**

▪ **TA**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** *[Operator](_functions_.md#operator)‹function, T›*

▸ **call**<**TA**, **TB**, **T**>(`a`: TA, `b`: TB): *[Operator](_functions_.md#operator)‹function, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[Operator](_functions_.md#operator)‹function, T›*

▸ **call**<**TA**, **TB**, **TC**, **T**>(`a`: TA, `b`: TB, `c`: TC): *[Operator](_functions_.md#operator)‹function, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *[Operator](_functions_.md#operator)‹function, T›*

▸ **call**<**TA**, **TB**, **TC**, **TD**, **T**>(`a`: TA, `b`: TB, `c`: TC, `d`: TD): *[Operator](_functions_.md#operator)‹function, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** *[Operator](_functions_.md#operator)‹function, T›*

___

###  compose

▸ **compose**<**T**, **A**, **B**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›): *[Operator](_functions_.md#operator)‹T, B›*

composes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |

**Returns:** *[Operator](_functions_.md#operator)‹T, B›*

▸ **compose**<**T**, **A**, **B**, **C**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›): *[Operator](_functions_.md#operator)‹T, C›*

composes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |

**Returns:** *[Operator](_functions_.md#operator)‹T, C›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›): *[Operator](_functions_.md#operator)‹T, D›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |

**Returns:** *[Operator](_functions_.md#operator)‹T, D›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›): *[Operator](_functions_.md#operator)‹T, E›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |

**Returns:** *[Operator](_functions_.md#operator)‹T, E›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›): *[Operator](_functions_.md#operator)‹T, F›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |

**Returns:** *[Operator](_functions_.md#operator)‹T, F›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›): *[Operator](_functions_.md#operator)‹T, G›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |

**Returns:** *[Operator](_functions_.md#operator)‹T, G›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›): *[Operator](_functions_.md#operator)‹T, H›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |

**Returns:** *[Operator](_functions_.md#operator)‹T, H›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›, `op9`: [Operator](_functions_.md#operator)‹H, I›): *[Operator](_functions_.md#operator)‹T, I›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |
`op9` | [Operator](_functions_.md#operator)‹H, I› |

**Returns:** *[Operator](_functions_.md#operator)‹T, I›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›, `op9`: [Operator](_functions_.md#operator)‹H, I›, `op10`: [Operator](_functions_.md#operator)‹I, J›): *[Operator](_functions_.md#operator)‹T, J›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |
`op9` | [Operator](_functions_.md#operator)‹H, I› |
`op10` | [Operator](_functions_.md#operator)‹I, J› |

**Returns:** *[Operator](_functions_.md#operator)‹T, J›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›, `op9`: [Operator](_functions_.md#operator)‹H, I›, `op10`: [Operator](_functions_.md#operator)‹I, J›, `op11`: [Operator](_functions_.md#operator)‹J, K›): *[Operator](_functions_.md#operator)‹T, K›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |
`op9` | [Operator](_functions_.md#operator)‹H, I› |
`op10` | [Operator](_functions_.md#operator)‹I, J› |
`op11` | [Operator](_functions_.md#operator)‹J, K› |

**Returns:** *[Operator](_functions_.md#operator)‹T, K›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**>(`op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›, `op9`: [Operator](_functions_.md#operator)‹H, I›, `op10`: [Operator](_functions_.md#operator)‹I, J›, `op11`: [Operator](_functions_.md#operator)‹J, K›, `op12`: [Operator](_functions_.md#operator)‹K, L›): *[Operator](_functions_.md#operator)‹T, L›*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |
`op9` | [Operator](_functions_.md#operator)‹H, I› |
`op10` | [Operator](_functions_.md#operator)‹I, J› |
`op11` | [Operator](_functions_.md#operator)‹J, K› |
`op12` | [Operator](_functions_.md#operator)‹K, L› |

**Returns:** *[Operator](_functions_.md#operator)‹T, L›*

___

### `Const` decrement

▸ **decrement**(`x`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

___

### `Const` identity

▸ **identity**<**T**>(`v`: T): *T*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *T*

___

### `Const` increment

▸ **increment**(`x`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›): *A*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Operator](_functions_.md#operator)‹T, A› |

**Returns:** *A*

▸ **pipe**<**T**, **A**, **B**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›): *B*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |

**Returns:** *B*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›): *C*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |

**Returns:** *C*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›): *D*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |

**Returns:** *D*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›): *E*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |

**Returns:** *E*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›): *F*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |

**Returns:** *F*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›): *G*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |

**Returns:** *G*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›): *H*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |

**Returns:** *H*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›, `op9`: [Operator](_functions_.md#operator)‹H, I›): *I*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |
`op9` | [Operator](_functions_.md#operator)‹H, I› |

**Returns:** *I*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›, `op9`: [Operator](_functions_.md#operator)‹H, I›, `op10`: [Operator](_functions_.md#operator)‹I, J›): *J*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |
`op9` | [Operator](_functions_.md#operator)‹H, I› |
`op10` | [Operator](_functions_.md#operator)‹I, J› |

**Returns:** *J*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›, `op9`: [Operator](_functions_.md#operator)‹H, I›, `op10`: [Operator](_functions_.md#operator)‹I, J›, `op11`: [Operator](_functions_.md#operator)‹J, K›): *K*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |
`op9` | [Operator](_functions_.md#operator)‹H, I› |
`op10` | [Operator](_functions_.md#operator)‹I, J› |
`op11` | [Operator](_functions_.md#operator)‹J, K› |

**Returns:** *K*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**>(`src`: T, `op1`: [Operator](_functions_.md#operator)‹T, A›, `op2`: [Operator](_functions_.md#operator)‹A, B›, `op3`: [Operator](_functions_.md#operator)‹B, C›, `op4`: [Operator](_functions_.md#operator)‹C, D›, `op5`: [Operator](_functions_.md#operator)‹D, E›, `op6`: [Operator](_functions_.md#operator)‹E, F›, `op7`: [Operator](_functions_.md#operator)‹F, G›, `op8`: [Operator](_functions_.md#operator)‹G, H›, `op9`: [Operator](_functions_.md#operator)‹H, I›, `op10`: [Operator](_functions_.md#operator)‹I, J›, `op11`: [Operator](_functions_.md#operator)‹J, K›, `op12`: [Operator](_functions_.md#operator)‹K, L›): *L*

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
`op1` | [Operator](_functions_.md#operator)‹T, A› |
`op2` | [Operator](_functions_.md#operator)‹A, B› |
`op3` | [Operator](_functions_.md#operator)‹B, C› |
`op4` | [Operator](_functions_.md#operator)‹C, D› |
`op5` | [Operator](_functions_.md#operator)‹D, E› |
`op6` | [Operator](_functions_.md#operator)‹E, F› |
`op7` | [Operator](_functions_.md#operator)‹F, G› |
`op8` | [Operator](_functions_.md#operator)‹G, H› |
`op9` | [Operator](_functions_.md#operator)‹H, I› |
`op10` | [Operator](_functions_.md#operator)‹I, J› |
`op11` | [Operator](_functions_.md#operator)‹J, K› |
`op12` | [Operator](_functions_.md#operator)‹K, L› |

**Returns:** *L*

▸ **pipe**(`source`: unknown, ...`operators`: [Operator](_functions_.md#operator)‹any, unknown›[]): *unknown*

Pipes the source value through a series of unary functions.

**Parameters:**

Name | Type |
------ | ------ |
`source` | unknown |
`...operators` | [Operator](_functions_.md#operator)‹any, unknown›[] |

**Returns:** *unknown*

___

### `Const` referenceEquals

▸ **referenceEquals**<**T**>(`a`: T, `b`: T): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *boolean*

___

### `Const` returns

▸ **returns**<**T**>(`v`: T): *(Anonymous function)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *(Anonymous function)*
