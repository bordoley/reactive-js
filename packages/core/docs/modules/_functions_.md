[@reactive-js/core - v0.0.37](../README.md) › ["functions"](_functions_.md)

# Module: "functions"

## Index

### Type aliases

* [Comparator](_functions_.md#comparator)
* [Equality](_functions_.md#equality)
* [Factory](_functions_.md#factory)
* [Generator](_functions_.md#generator)
* [Operator](_functions_.md#operator)
* [Predicate](_functions_.md#predicate)
* [Reducer](_functions_.md#reducer)
* [Selector2](_functions_.md#selector2)
* [Selector3](_functions_.md#selector3)
* [Selector4](_functions_.md#selector4)
* [Selector5](_functions_.md#selector5)
* [Selector6](_functions_.md#selector6)
* [Selector7](_functions_.md#selector7)
* [Selector8](_functions_.md#selector8)
* [Selector9](_functions_.md#selector9)
* [SideEffect](_functions_.md#sideeffect)
* [SideEffect1](_functions_.md#sideeffect1)
* [SideEffect2](_functions_.md#sideeffect2)

### Variables

* [alwaysFalse](_functions_.md#const-alwaysfalse)
* [alwaysTrue](_functions_.md#const-alwaystrue)
* [ignore](_functions_.md#const-ignore)

### Functions

* [arrayEquals](_functions_.md#const-arrayequals)
* [bind](_functions_.md#bind)
* [call](_functions_.md#call)
* [compose](_functions_.md#compose)
* [decrement](_functions_.md#const-decrement)
* [decrementBy](_functions_.md#const-decrementby)
* [identity](_functions_.md#const-identity)
* [increment](_functions_.md#const-increment)
* [incrementBy](_functions_.md#const-incrementby)
* [isReferenceEqualTo](_functions_.md#const-isreferenceequalto)
* [pipe](_functions_.md#pipe)
* [referenceEquals](_functions_.md#const-referenceequals)
* [returns](_functions_.md#const-returns)
* [sum](_functions_.md#const-sum)

## Type aliases

###  Comparator

Ƭ **Comparator**: *function*

#### Type declaration:

▸ (`a`: T, `b`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

___

###  Equality

Ƭ **Equality**: *function*

#### Type declaration:

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

___

###  Factory

Ƭ **Factory**: *function*

#### Type declaration:

▸ (): *T*

___

###  Generator

Ƭ **Generator**: *function*

#### Type declaration:

▸ (`prev`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`prev` | T |

___

###  Operator

Ƭ **Operator**: *function*

#### Type declaration:

▸ (`a`: TA): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

###  Predicate

Ƭ **Predicate**: *function*

#### Type declaration:

▸ (`a`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |

___

###  Reducer

Ƭ **Reducer**: *function*

#### Type declaration:

▸ (`acc`: TAcc, `next`: T): *TAcc*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

___

###  Selector2

Ƭ **Selector2**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

___

###  Selector3

Ƭ **Selector3**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

___

###  Selector4

Ƭ **Selector4**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

___

###  Selector5

Ƭ **Selector5**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

___

###  Selector6

Ƭ **Selector6**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

___

###  Selector7

Ƭ **Selector7**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |

___

###  Selector8

Ƭ **Selector8**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |
`h` | TH |

___

###  Selector9

Ƭ **Selector9**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH, `i`: TI): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |
`h` | TH |
`i` | TI |

___

###  SideEffect

Ƭ **SideEffect**: *function*

#### Type declaration:

▸ (): *void*

___

###  SideEffect1

Ƭ **SideEffect1**: *function*

#### Type declaration:

▸ (`a`: TA): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

###  SideEffect2

Ƭ **SideEffect2**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

## Variables

### `Const` alwaysFalse

• **alwaysFalse**: *(Anonymous function)* = returns(false)

___

### `Const` alwaysTrue

• **alwaysTrue**: *(Anonymous function)* = returns(true)

___

### `Const` ignore

• **ignore**: *(Anonymous function)* = returns<void>(undefined)

## Functions

### `Const` arrayEquals

▸ **arrayEquals**<**T**>(`valuesAreEqual`: [Equality](_functions_.md#equality)‹T›): *(Anonymous function)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`valuesAreEqual` | [Equality](_functions_.md#equality)‹T› |

**Returns:** *(Anonymous function)*

___

###  bind

▸ **bind**<**T**>(`factory`: [Factory](_functions_.md#factory)‹T›): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹T› |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **T**>(`op`: [Operator](_functions_.md#operator)‹TA, T›, `a`: TA): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op` | [Operator](_functions_.md#operator)‹TA, T› |
`a` | TA |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **T**>(`selector`: [Selector2](_functions_.md#selector2)‹TA, TB, T›, `a`: TA, `b`: TB): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selector` | [Selector2](_functions_.md#selector2)‹TA, TB, T› |
`a` | TA |
`b` | TB |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **T**>(`selector`: [Selector3](_functions_.md#selector3)‹TA, TB, TC, T›, `a`: TA, `b`: TB, `c`: TC): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selector` | [Selector3](_functions_.md#selector3)‹TA, TB, TC, T› |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **TD**, **T**>(`selector`: [Selector4](_functions_.md#selector4)‹TA, TB, TC, TD, T›, `a`: TA, `b`: TB, `c`: TC, `d`: TD): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selector` | [Selector4](_functions_.md#selector4)‹TA, TB, TC, TD, T› |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **TD**, **TE**, **T**>(`selector`: [Selector5](_functions_.md#selector5)‹TA, TB, TC, TD, TE, T›, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selector` | [Selector5](_functions_.md#selector5)‹TA, TB, TC, TD, TE, T› |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **T**>(`selector`: [Selector6](_functions_.md#selector6)‹TA, TB, TC, TD, TE, TF, T›, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selector` | [Selector6](_functions_.md#selector6)‹TA, TB, TC, TD, TE, TF, T› |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **T**>(`selector`: [Selector7](_functions_.md#selector7)‹TA, TB, TC, TD, TE, TF, TG, T›, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selector` | [Selector7](_functions_.md#selector7)‹TA, TB, TC, TD, TE, TF, TG, T› |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

___

###  call

▸ **call**<**T**>(): *[Operator](_functions_.md#operator)‹[Factory](_functions_.md#factory)‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[Operator](_functions_.md#operator)‹[Factory](_functions_.md#factory)‹T›, T›*

▸ **call**<**TA**, **T**>(`a`: TA): *[Operator](_functions_.md#operator)‹[Operator](_functions_.md#operator)‹TA, T›, T›*

**Type parameters:**

▪ **TA**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** *[Operator](_functions_.md#operator)‹[Operator](_functions_.md#operator)‹TA, T›, T›*

▸ **call**<**TA**, **TB**, **T**>(`a`: TA, `b`: TB): *[Operator](_functions_.md#operator)‹[Selector2](_functions_.md#selector2)‹TA, TB, T›, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[Operator](_functions_.md#operator)‹[Selector2](_functions_.md#selector2)‹TA, TB, T›, T›*

▸ **call**<**TA**, **TB**, **TC**, **T**>(`a`: TA, `b`: TB, `c`: TC): *[Operator](_functions_.md#operator)‹[Selector3](_functions_.md#selector3)‹TA, TB, TC, T›, T›*

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

**Returns:** *[Operator](_functions_.md#operator)‹[Selector3](_functions_.md#selector3)‹TA, TB, TC, T›, T›*

▸ **call**<**TA**, **TB**, **TC**, **TD**, **T**>(`a`: TA, `b`: TB, `c`: TC, `d`: TD): *[Operator](_functions_.md#operator)‹[Selector4](_functions_.md#selector4)‹TA, TB, TC, TD, T›, T›*

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

**Returns:** *[Operator](_functions_.md#operator)‹[Selector4](_functions_.md#selector4)‹TA, TB, TC, TD, T›, T›*

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

### `Const` decrementBy

▸ **decrementBy**(`decr`: number): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`decr` | number |

**Returns:** *(Anonymous function)*

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

### `Const` incrementBy

▸ **incrementBy**(`incr`: number): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`incr` | number |

**Returns:** *(Anonymous function)*

___

### `Const` isReferenceEqualTo

▸ **isReferenceEqualTo**<**T**>(`b`: T): *[Operator](_functions_.md#operator)‹T, boolean›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`b` | T |

**Returns:** *[Operator](_functions_.md#operator)‹T, boolean›*

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

___

### `Const` sum

▸ **sum**(...`args`: number[]): *number*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | number[] |

**Returns:** *number*
