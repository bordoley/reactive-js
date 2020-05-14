[@reactive-js/core - v0.0.37](../README.md) › ["functions"](_functions_.md)

# Module: "functions"

## Index

### Type aliases

* [Comparator](_functions_.md#comparator)
* [Equality](_functions_.md#equality)
* [Factory](_functions_.md#factory)
* [Function](_functions_.md#function)
* [Function2](_functions_.md#function2)
* [Function3](_functions_.md#function3)
* [Function4](_functions_.md#function4)
* [Function5](_functions_.md#function5)
* [Function6](_functions_.md#function6)
* [Function7](_functions_.md#function7)
* [Function8](_functions_.md#function8)
* [Function9](_functions_.md#function9)
* [Generator](_functions_.md#generator)
* [Predicate](_functions_.md#predicate)
* [Reducer](_functions_.md#reducer)
* [SideEffect](_functions_.md#sideeffect)
* [SideEffect1](_functions_.md#sideeffect1)
* [SideEffect2](_functions_.md#sideeffect2)
* [TypePredicate](_functions_.md#typepredicate)

### Variables

* [alwaysFalse](_functions_.md#const-alwaysfalse)
* [alwaysTrue](_functions_.md#const-alwaystrue)
* [ignore](_functions_.md#const-ignore)

### Functions

* [arrayEquality](_functions_.md#const-arrayequality)
* [bind](_functions_.md#bind)
* [callWith](_functions_.md#callwith)
* [compose](_functions_.md#compose)
* [decrement](_functions_.md#const-decrement)
* [decrementBy](_functions_.md#const-decrementby)
* [defer](_functions_.md#defer)
* [flip](_functions_.md#flip)
* [identity](_functions_.md#const-identity)
* [increment](_functions_.md#const-increment)
* [incrementBy](_functions_.md#const-incrementby)
* [isEqualTo](_functions_.md#const-isequalto)
* [isEven](_functions_.md#const-iseven)
* [isOdd](_functions_.md#const-isodd)
* [negate](_functions_.md#const-negate)
* [pipe](_functions_.md#pipe)
* [returns](_functions_.md#const-returns)
* [strictEquality](_functions_.md#const-strictequality)
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

###  Function

Ƭ **Function**: *function*

#### Type declaration:

▸ (`a`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

###  Function2

Ƭ **Function2**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

___

###  Function3

Ƭ **Function3**: *function*

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

___

###  Function4

Ƭ **Function4**: *function*

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

###  Function5

Ƭ **Function5**: *function*

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

###  Function6

Ƭ **Function6**: *function*

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

###  Function7

Ƭ **Function7**: *function*

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

###  Function8

Ƭ **Function8**: *function*

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

###  Function9

Ƭ **Function9**: *function*

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

###  Generator

Ƭ **Generator**: *function*

#### Type declaration:

▸ (`prev`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`prev` | T |

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

___

###  TypePredicate

Ƭ **TypePredicate**: *function*

#### Type declaration:

▸ (`v`: TA): *v is TB*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TA |

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

### `Const` arrayEquality

▸ **arrayEquality**<**T**>(`valuesEquality`: [Equality](_functions_.md#equality)‹T›): *[Equality](_functions_.md#equality)‹keyof T[]›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`valuesEquality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[Equality](_functions_.md#equality)‹keyof T[]›*

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

▸ **bind**<**TA**, **T**>(`op`: [Function](_functions_.md#function)‹TA, T›, `a`: TA): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op` | [Function](_functions_.md#function)‹TA, T› |
`a` | TA |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **T**>(`func`: [Function2](_functions_.md#function2)‹TA, TB, T›, `a`: TA, `b`: TB): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | [Function2](_functions_.md#function2)‹TA, TB, T› |
`a` | TA |
`b` | TB |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **T**>(`func`: [Function3](_functions_.md#function3)‹TA, TB, TC, T›, `a`: TA, `b`: TB, `c`: TC): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | [Function3](_functions_.md#function3)‹TA, TB, TC, T› |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **TD**, **T**>(`func`: [Function4](_functions_.md#function4)‹TA, TB, TC, TD, T›, `a`: TA, `b`: TB, `c`: TC, `d`: TD): *[Factory](_functions_.md#factory)‹T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | [Function4](_functions_.md#function4)‹TA, TB, TC, TD, T› |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **TD**, **TE**, **T**>(`func`: [Function5](_functions_.md#function5)‹TA, TB, TC, TD, TE, T›, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): *[Factory](_functions_.md#factory)‹T›*

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
`func` | [Function5](_functions_.md#function5)‹TA, TB, TC, TD, TE, T› |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **T**>(`func`: [Function6](_functions_.md#function6)‹TA, TB, TC, TD, TE, TF, T›, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): *[Factory](_functions_.md#factory)‹T›*

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
`func` | [Function6](_functions_.md#function6)‹TA, TB, TC, TD, TE, TF, T› |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

▸ **bind**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **T**>(`func`: [Function7](_functions_.md#function7)‹TA, TB, TC, TD, TE, TF, TG, T›, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG): *[Factory](_functions_.md#factory)‹T›*

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
`func` | [Function7](_functions_.md#function7)‹TA, TB, TC, TD, TE, TF, TG, T› |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |
`g` | TG |

**Returns:** *[Factory](_functions_.md#factory)‹T›*

___

###  callWith

▸ **callWith**<**T**>(): *[Function](_functions_.md#function)‹[Factory](_functions_.md#factory)‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[Function](_functions_.md#function)‹[Factory](_functions_.md#factory)‹T›, T›*

▸ **callWith**<**TA**, **T**>(`a`: TA): *[Function](_functions_.md#function)‹[Function](_functions_.md#function)‹TA, T›, T›*

**Type parameters:**

▪ **TA**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** *[Function](_functions_.md#function)‹[Function](_functions_.md#function)‹TA, T›, T›*

▸ **callWith**<**TA**, **TB**, **T**>(`a`: TA, `b`: TB): *[Function](_functions_.md#function)‹[Function2](_functions_.md#function2)‹TA, TB, T›, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[Function](_functions_.md#function)‹[Function2](_functions_.md#function2)‹TA, TB, T›, T›*

▸ **callWith**<**TA**, **TB**, **TC**, **T**>(`a`: TA, `b`: TB, `c`: TC): *[Function](_functions_.md#function)‹[Function3](_functions_.md#function3)‹TA, TB, TC, T›, T›*

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

**Returns:** *[Function](_functions_.md#function)‹[Function3](_functions_.md#function3)‹TA, TB, TC, T›, T›*

▸ **callWith**<**TA**, **TB**, **TC**, **TD**, **T**>(`a`: TA, `b`: TB, `c`: TC, `d`: TD): *[Function](_functions_.md#function)‹[Function4](_functions_.md#function4)‹TA, TB, TC, TD, T›, T›*

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

**Returns:** *[Function](_functions_.md#function)‹[Function4](_functions_.md#function4)‹TA, TB, TC, TD, T›, T›*

___

###  compose

▸ **compose**<**T**, **A**, **B**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›): *[Function](_functions_.md#function)‹T, B›*

composes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |

**Returns:** *[Function](_functions_.md#function)‹T, B›*

▸ **compose**<**T**, **A**, **B**, **C**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›): *[Function](_functions_.md#function)‹T, C›*

composes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |

**Returns:** *[Function](_functions_.md#function)‹T, C›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›): *[Function](_functions_.md#function)‹T, D›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |

**Returns:** *[Function](_functions_.md#function)‹T, D›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›): *[Function](_functions_.md#function)‹T, E›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |

**Returns:** *[Function](_functions_.md#function)‹T, E›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›): *[Function](_functions_.md#function)‹T, F›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |

**Returns:** *[Function](_functions_.md#function)‹T, F›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›): *[Function](_functions_.md#function)‹T, G›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |

**Returns:** *[Function](_functions_.md#function)‹T, G›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›): *[Function](_functions_.md#function)‹T, H›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |

**Returns:** *[Function](_functions_.md#function)‹T, H›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›): *[Function](_functions_.md#function)‹T, I›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |

**Returns:** *[Function](_functions_.md#function)‹T, I›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›): *[Function](_functions_.md#function)‹T, J›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |

**Returns:** *[Function](_functions_.md#function)‹T, J›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›, `op11`: [Function](_functions_.md#function)‹J, K›): *[Function](_functions_.md#function)‹T, K›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |
`op11` | [Function](_functions_.md#function)‹J, K› |

**Returns:** *[Function](_functions_.md#function)‹T, K›*

▸ **compose**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**>(`op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›, `op11`: [Function](_functions_.md#function)‹J, K›, `op12`: [Function](_functions_.md#function)‹K, L›): *[Function](_functions_.md#function)‹T, L›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |
`op11` | [Function](_functions_.md#function)‹J, K› |
`op12` | [Function](_functions_.md#function)‹K, L› |

**Returns:** *[Function](_functions_.md#function)‹T, L›*

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

▸ **decrementBy**(`decr`: number): *[Generator](_functions_.md#generator)‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`decr` | number |

**Returns:** *[Generator](_functions_.md#generator)‹number›*

___

###  defer

▸ **defer**<**T**, **A**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›): *[Factory](_functions_.md#factory)‹A›*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function](_functions_.md#function)‹T, A› |

**Returns:** *[Factory](_functions_.md#factory)‹A›*

▸ **defer**<**T**, **A**, **B**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›): *[Factory](_functions_.md#factory)‹B›*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |

**Returns:** *[Factory](_functions_.md#factory)‹B›*

▸ **defer**<**T**, **A**, **B**, **C**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›): *[Factory](_functions_.md#factory)‹C›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |

**Returns:** *[Factory](_functions_.md#factory)‹C›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›): *[Factory](_functions_.md#factory)‹D›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |

**Returns:** *[Factory](_functions_.md#factory)‹D›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›): *[Factory](_functions_.md#factory)‹E›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |

**Returns:** *[Factory](_functions_.md#factory)‹E›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›): *[Factory](_functions_.md#factory)‹F›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |

**Returns:** *[Factory](_functions_.md#factory)‹F›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›): *[Factory](_functions_.md#factory)‹G›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |

**Returns:** *[Factory](_functions_.md#factory)‹G›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›): *[Factory](_functions_.md#factory)‹H›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |

**Returns:** *[Factory](_functions_.md#factory)‹H›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›): *[Factory](_functions_.md#factory)‹I›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |

**Returns:** *[Factory](_functions_.md#factory)‹I›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›): *[Factory](_functions_.md#factory)‹J›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |

**Returns:** *[Factory](_functions_.md#factory)‹J›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›, `op11`: [Function](_functions_.md#function)‹J, K›): *[Factory](_functions_.md#factory)‹K›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |
`op11` | [Function](_functions_.md#function)‹J, K› |

**Returns:** *[Factory](_functions_.md#factory)‹K›*

▸ **defer**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›, `op11`: [Function](_functions_.md#function)‹J, K›, `op12`: [Function](_functions_.md#function)‹K, L›): *[Factory](_functions_.md#factory)‹L›*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |
`op11` | [Function](_functions_.md#function)‹J, K› |
`op12` | [Function](_functions_.md#function)‹K, L› |

**Returns:** *[Factory](_functions_.md#factory)‹L›*

▸ **defer**(`source`: unknown, ...`operators`: [Function](_functions_.md#function)‹any, unknown›[]): *[Factory](_functions_.md#factory)‹unknown›*

Pipes the source value through a series of unary functions.

**Parameters:**

Name | Type |
------ | ------ |
`source` | unknown |
`...operators` | [Function](_functions_.md#function)‹any, unknown›[] |

**Returns:** *[Factory](_functions_.md#factory)‹unknown›*

___

###  flip

▸ **flip**<**TA**, **TB**, **T**>(`f`: [Function2](_functions_.md#function2)‹TA, TB, T›): *[Function2](_functions_.md#function2)‹TB, TA, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Function2](_functions_.md#function2)‹TA, TB, T› |

**Returns:** *[Function2](_functions_.md#function2)‹TB, TA, T›*

▸ **flip**<**TA**, **TB**, **TC**, **T**>(`f`: [Function3](_functions_.md#function3)‹TA, TB, TC, T›): *[Function3](_functions_.md#function3)‹TC, TB, TA, T›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Function3](_functions_.md#function3)‹TA, TB, TC, T› |

**Returns:** *[Function3](_functions_.md#function3)‹TC, TB, TA, T›*

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

▸ **incrementBy**(`incr`: number): *[Generator](_functions_.md#generator)‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`incr` | number |

**Returns:** *[Generator](_functions_.md#generator)‹number›*

___

### `Const` isEqualTo

▸ **isEqualTo**<**T**>(`b`: T, `equality`: [Equality](_functions_.md#equality)‹T›): *[Predicate](_functions_.md#predicate)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`b` | T | - |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[Predicate](_functions_.md#predicate)‹T›*

___

### `Const` isEven

▸ **isEven**(`x`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *boolean*

___

### `Const` isOdd

▸ **isOdd**(`x`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *boolean*

___

### `Const` negate

▸ **negate**(`v`: boolean): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | boolean |

**Returns:** *boolean*

___

###  pipe

▸ **pipe**<**T**, **A**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›): *A*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function](_functions_.md#function)‹T, A› |

**Returns:** *A*

▸ **pipe**<**T**, **A**, **B**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›): *B*

Pipes the source value through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |

**Returns:** *B*

▸ **pipe**<**T**, **A**, **B**, **C**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›): *C*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |

**Returns:** *C*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›): *D*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |

**Returns:** *D*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›): *E*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |

**Returns:** *E*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›): *F*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |

**Returns:** *F*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›): *G*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |

**Returns:** *G*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›): *H*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |

**Returns:** *H*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›): *I*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |

**Returns:** *I*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›): *J*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |

**Returns:** *J*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›, `op11`: [Function](_functions_.md#function)‹J, K›): *K*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |
`op11` | [Function](_functions_.md#function)‹J, K› |

**Returns:** *K*

▸ **pipe**<**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**>(`src`: T, `op1`: [Function](_functions_.md#function)‹T, A›, `op2`: [Function](_functions_.md#function)‹A, B›, `op3`: [Function](_functions_.md#function)‹B, C›, `op4`: [Function](_functions_.md#function)‹C, D›, `op5`: [Function](_functions_.md#function)‹D, E›, `op6`: [Function](_functions_.md#function)‹E, F›, `op7`: [Function](_functions_.md#function)‹F, G›, `op8`: [Function](_functions_.md#function)‹G, H›, `op9`: [Function](_functions_.md#function)‹H, I›, `op10`: [Function](_functions_.md#function)‹I, J›, `op11`: [Function](_functions_.md#function)‹J, K›, `op12`: [Function](_functions_.md#function)‹K, L›): *L*

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
`op1` | [Function](_functions_.md#function)‹T, A› |
`op2` | [Function](_functions_.md#function)‹A, B› |
`op3` | [Function](_functions_.md#function)‹B, C› |
`op4` | [Function](_functions_.md#function)‹C, D› |
`op5` | [Function](_functions_.md#function)‹D, E› |
`op6` | [Function](_functions_.md#function)‹E, F› |
`op7` | [Function](_functions_.md#function)‹F, G› |
`op8` | [Function](_functions_.md#function)‹G, H› |
`op9` | [Function](_functions_.md#function)‹H, I› |
`op10` | [Function](_functions_.md#function)‹I, J› |
`op11` | [Function](_functions_.md#function)‹J, K› |
`op12` | [Function](_functions_.md#function)‹K, L› |

**Returns:** *L*

▸ **pipe**(`source`: unknown, ...`operators`: [Function](_functions_.md#function)‹any, unknown›[]): *unknown*

Pipes the source value through a series of unary functions.

**Parameters:**

Name | Type |
------ | ------ |
`source` | unknown |
`...operators` | [Function](_functions_.md#function)‹any, unknown›[] |

**Returns:** *unknown*

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

### `Const` strictEquality

▸ **strictEquality**<**T**>(`a`: T, `b`: T): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *boolean*

___

### `Const` sum

▸ **sum**(...`args`: number[]): *number*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | number[] |

**Returns:** *number*
