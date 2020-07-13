[reactive-js](../README.md) › ["functions"](_functions_.md)

# Module: "functions"

## Index

### Type aliases

* [Comparator](_functions_.md#comparator)
* [Equality](_functions_.md#equality)
* [Factory](_functions_.md#factory)
* [Function1](_functions_.md#function1)
* [Function2](_functions_.md#function2)
* [Function3](_functions_.md#function3)
* [Function4](_functions_.md#function4)
* [Function5](_functions_.md#function5)
* [Function6](_functions_.md#function6)
* [Function7](_functions_.md#function7)
* [Function8](_functions_.md#function8)
* [Function9](_functions_.md#function9)
* [Predicate](_functions_.md#predicate)
* [Reducer](_functions_.md#reducer)
* [SideEffect](_functions_.md#sideeffect)
* [SideEffect1](_functions_.md#sideeffect1)
* [SideEffect2](_functions_.md#sideeffect2)
* [SideEffect3](_functions_.md#sideeffect3)
* [SideEffect4](_functions_.md#sideeffect4)
* [SideEffect5](_functions_.md#sideeffect5)
* [SideEffect6](_functions_.md#sideeffect6)
* [SideEffect7](_functions_.md#sideeffect7)
* [TypePredicate](_functions_.md#typepredicate)
* [Updater](_functions_.md#updater)

### Functions

* [alwaysFalse](_functions_.md#const-alwaysfalse)
* [alwaysTrue](_functions_.md#const-alwaystrue)
* [arrayEquality](_functions_.md#const-arrayequality)
* [callWith](_functions_.md#callwith)
* [compose](_functions_.md#compose)
* [composeWith](_functions_.md#const-composewith)
* [decrement](_functions_.md#const-decrement)
* [decrementBy](_functions_.md#const-decrementby)
* [defer](_functions_.md#defer)
* [flip](_functions_.md#flip)
* [identity](_functions_.md#const-identity)
* [ignore](_functions_.md#const-ignore)
* [increment](_functions_.md#const-increment)
* [incrementBy](_functions_.md#const-incrementby)
* [isEqualTo](_functions_.md#const-isequalto)
* [isEven](_functions_.md#const-iseven)
* [isOdd](_functions_.md#const-isodd)
* [negate](_functions_.md#const-negate)
* [pipe](_functions_.md#pipe)
* [raise](_functions_.md#const-raise)
* [returns](_functions_.md#const-returns)
* [strictEquality](_functions_.md#const-strictequality)
* [sum](_functions_.md#const-sum)
* [updaterReducer](_functions_.md#const-updaterreducer)

## Type aliases

###  Comparator

Ƭ **Comparator**: *function*

Compare two values to determine their relative ordering.

**`returns`** A signed number indicating the relative order of `a` and `b`:
  - If less than 0, `a` is less `b`.
  - If 0, `a` equals `b`.
  - If greater than 0, `a` is greater than `b`.

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

Compare two values for equality.

**`returns`** true if `a` is equals to `b`, otherwise false

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

A function that returns instances of type `T`.

#### Type declaration:

▸ (): *T*

___

###  Function1

Ƭ **Function1**: *function*

A one argument function that returns a value of type `T`.

#### Type declaration:

▸ (`a`: TA): *T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

###  Function2

Ƭ **Function2**: *function*

A two argument function that returns a value of type `T`.

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

A three argument function that returns a value of type `T`.

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

A four argument function that returns a value of type `T`.

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

A five argument function that returns a value of type `T`.

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

A six argument function that returns a value of type `T`.

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

A seven argument function that returns a value of type `T`.

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

An eight argument function that returns a value of type `T`.

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

A nine argument function that returns a value of type `T`.

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

###  Predicate

Ƭ **Predicate**: *function*

A one argument predicate function.

#### Type declaration:

▸ (`a`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |

___

###  Reducer

Ƭ **Reducer**: *function*

A pure function that takes the current accumulator and next value,
returning the next accumulated value.

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

A function that takes no arguments and performs a side-effect.

#### Type declaration:

▸ (): *void*

___

###  SideEffect1

Ƭ **SideEffect1**: *function*

A function that takes one argument and performs a side-effect.

#### Type declaration:

▸ (`a`: TA): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

###  SideEffect2

Ƭ **SideEffect2**: *function*

A function that takes two arguments and performs a side-effect.

#### Type declaration:

▸ (`a`: TA, `b`: TB): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

___

###  SideEffect3

Ƭ **SideEffect3**: *function*

A function that takes three arguments and performs a side-effect.

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

___

###  SideEffect4

Ƭ **SideEffect4**: *function*

A function that takes four arguments and performs a side-effect.

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

___

###  SideEffect5

Ƭ **SideEffect5**: *function*

A function that takes five arguments and performs a side-effect.

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

___

###  SideEffect6

Ƭ **SideEffect6**: *function*

A function that takes six arguments and performs a side-effect.

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): *void*

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

###  SideEffect7

Ƭ **SideEffect7**: *function*

A function that takes seven arguments and performs a side-effect.

#### Type declaration:

▸ (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG): *void*

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

###  TypePredicate

Ƭ **TypePredicate**: *function*

A type guard function that performs a runtime check
guaranteeing `v` is of type `TB`.

**`returns`** `true` if v is an instance of type `TB`, otherwise false.

#### Type declaration:

▸ (`v`: TA): *v is TB*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TA |

___

###  Updater

Ƭ **Updater**: *function*

Computes a new value of type `T` from the previous value of type `T`.

#### Type declaration:

▸ (`prev`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`prev` | T |

## Functions

### `Const` alwaysFalse

▸ **alwaysFalse**(...`_args`: unknown[]): *boolean*

A function that always returns `false`.

**Parameters:**

Name | Type |
------ | ------ |
`..._args` | unknown[] |

**Returns:** *boolean*

___

### `Const` alwaysTrue

▸ **alwaysTrue**(...`_args`: unknown[]): *boolean*

A function that always returns `true`.

**Parameters:**

Name | Type |
------ | ------ |
`..._args` | unknown[] |

**Returns:** *boolean*

___

### `Const` arrayEquality

▸ **arrayEquality**‹**T**›(`valuesEquality`: [Equality](_functions_.md#equality)‹T›): *[Equality](_functions_.md#equality)‹keyof T[]›*

Returns an equality function that compares two readonly arrays for equality,
comparing their values using `valuesEquality`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`valuesEquality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[Equality](_functions_.md#equality)‹keyof T[]›*

___

###  callWith

▸ **callWith**‹**T**›(): *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹T›, T›*

A function operator that invokes a function with a given list of arguments.

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[Factory](_functions_.md#factory)‹T›, T›*

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

▸ **callWith**‹**TA**, **T**›(`a`: TA): *[Function1](_functions_.md#function1)‹[Function1](_functions_.md#function1)‹TA, T›, T›*

A function operator that invokes a function with a given list of arguments.

**Type parameters:**

▪ **TA**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** *[Function1](_functions_.md#function1)‹[Function1](_functions_.md#function1)‹TA, T›, T›*

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

▸ **callWith**‹**TA**, **TB**, **T**›(`a`: TA, `b`: TB): *[Function1](_functions_.md#function1)‹[Function2](_functions_.md#function2)‹TA, TB, T›, T›*

A function operator that invokes a function with a given list of arguments.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** *[Function1](_functions_.md#function1)‹[Function2](_functions_.md#function2)‹TA, TB, T›, T›*

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

▸ **callWith**‹**TA**, **TB**, **TC**, **T**›(`a`: TA, `b`: TB, `c`: TC): *[Function1](_functions_.md#function1)‹[Function3](_functions_.md#function3)‹TA, TB, TC, T›, T›*

A function operator that invokes a function with a given list of arguments.

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

**Returns:** *[Function1](_functions_.md#function1)‹[Function3](_functions_.md#function3)‹TA, TB, TC, T›, T›*

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

▸ **callWith**‹**TA**, **TB**, **TC**, **TD**, **T**›(`a`: TA, `b`: TB, `c`: TC, `d`: TD): *[Function1](_functions_.md#function1)‹[Function4](_functions_.md#function4)‹TA, TB, TC, TD, T›, T›*

A function operator that invokes a function with a given list of arguments.

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

**Returns:** *[Function1](_functions_.md#function1)‹[Function4](_functions_.md#function4)‹TA, TB, TC, TD, T›, T›*

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

___

###  compose

▸ **compose**‹**T**, **A**, **B**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›): *[Function1](_functions_.md#function1)‹T, B›*

Composes a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |

**Returns:** *[Function1](_functions_.md#function1)‹T, B›*

▸ **compose**‹**T**, **A**, **B**, **C**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›): *[Function1](_functions_.md#function1)‹T, C›*

Composes a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |

**Returns:** *[Function1](_functions_.md#function1)‹T, C›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›): *[Function1](_functions_.md#function1)‹T, D›*

Composes a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |

**Returns:** *[Function1](_functions_.md#function1)‹T, D›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**, **E**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›): *[Function1](_functions_.md#function1)‹T, E›*

Composes a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |

**Returns:** *[Function1](_functions_.md#function1)‹T, E›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›): *[Function1](_functions_.md#function1)‹T, F›*

Composes a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |

**Returns:** *[Function1](_functions_.md#function1)‹T, F›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›): *[Function1](_functions_.md#function1)‹T, G›*

Composes a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |

**Returns:** *[Function1](_functions_.md#function1)‹T, G›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›): *[Function1](_functions_.md#function1)‹T, H›*

Composes a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |

**Returns:** *[Function1](_functions_.md#function1)‹T, H›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›): *[Function1](_functions_.md#function1)‹T, I›*

Composes a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |

**Returns:** *[Function1](_functions_.md#function1)‹T, I›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›): *[Function1](_functions_.md#function1)‹T, J›*

Composes a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |

**Returns:** *[Function1](_functions_.md#function1)‹T, J›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›, `op11`: [Function1](_functions_.md#function1)‹J, K›): *[Function1](_functions_.md#function1)‹T, K›*

Composes a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |
`op11` | [Function1](_functions_.md#function1)‹J, K› |

**Returns:** *[Function1](_functions_.md#function1)‹T, K›*

▸ **compose**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**›(`op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›, `op11`: [Function1](_functions_.md#function1)‹J, K›, `op12`: [Function1](_functions_.md#function1)‹K, L›): *[Function1](_functions_.md#function1)‹T, L›*

Composes a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |
`op11` | [Function1](_functions_.md#function1)‹J, K› |
`op12` | [Function1](_functions_.md#function1)‹K, L› |

**Returns:** *[Function1](_functions_.md#function1)‹T, L›*

___

### `Const` composeWith

▸ **composeWith**‹**T**, **A**, **B**›(`op2`: [Function1](_functions_.md#function1)‹A, B›): *[Function1](_functions_.md#function1)‹[Function1](_functions_.md#function1)‹T, A›, [Function1](_functions_.md#function1)‹T, B››*

Returns a function that composes its operator with `op2`.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op2` | [Function1](_functions_.md#function1)‹A, B› |

**Returns:** *[Function1](_functions_.md#function1)‹[Function1](_functions_.md#function1)‹T, A›, [Function1](_functions_.md#function1)‹T, B››*

___

### `Const` decrement

▸ **decrement**(`x`: number): *number*

An updater function that returns the result of decrementing `x`.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

___

### `Const` decrementBy

▸ **decrementBy**(`decr`: number): *[Updater](_functions_.md#updater)‹number›*

Returns a function that decrements a number `x` by the value `decr`.

**Parameters:**

Name | Type |
------ | ------ |
`decr` | number |

**Returns:** *[Updater](_functions_.md#updater)‹number›*

___

###  defer

▸ **defer**‹**T**, **A**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›): *[Factory](_functions_.md#factory)‹A›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function1](_functions_.md#function1)‹T, A› |

**Returns:** *[Factory](_functions_.md#factory)‹A›*

▸ **defer**‹**T**, **A**, **B**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›): *[Factory](_functions_.md#factory)‹B›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |

**Returns:** *[Factory](_functions_.md#factory)‹B›*

▸ **defer**‹**T**, **A**, **B**, **C**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›): *[Factory](_functions_.md#factory)‹C›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |

**Returns:** *[Factory](_functions_.md#factory)‹C›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›): *[Factory](_functions_.md#factory)‹D›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |

**Returns:** *[Factory](_functions_.md#factory)‹D›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**, **E**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›): *[Factory](_functions_.md#factory)‹E›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |

**Returns:** *[Factory](_functions_.md#factory)‹E›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›): *[Factory](_functions_.md#factory)‹F›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |

**Returns:** *[Factory](_functions_.md#factory)‹F›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›): *[Factory](_functions_.md#factory)‹G›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |

**Returns:** *[Factory](_functions_.md#factory)‹G›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›): *[Factory](_functions_.md#factory)‹H›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |

**Returns:** *[Factory](_functions_.md#factory)‹H›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›): *[Factory](_functions_.md#factory)‹I›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |

**Returns:** *[Factory](_functions_.md#factory)‹I›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›): *[Factory](_functions_.md#factory)‹J›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |

**Returns:** *[Factory](_functions_.md#factory)‹J›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›, `op11`: [Function1](_functions_.md#function1)‹J, K›): *[Factory](_functions_.md#factory)‹K›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |
`op11` | [Function1](_functions_.md#function1)‹J, K› |

**Returns:** *[Factory](_functions_.md#factory)‹K›*

▸ **defer**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›, `op11`: [Function1](_functions_.md#function1)‹J, K›, `op12`: [Function1](_functions_.md#function1)‹K, L›): *[Factory](_functions_.md#factory)‹L›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |
`op11` | [Function1](_functions_.md#function1)‹J, K› |
`op12` | [Function1](_functions_.md#function1)‹K, L› |

**Returns:** *[Factory](_functions_.md#factory)‹L›*

▸ **defer**(`source`: unknown, ...`operators`: [Function1](_functions_.md#function1)‹any, unknown›[]): *[Factory](_functions_.md#factory)‹unknown›*

Returns a `Factory` function that defers the evaluation of piping
`source` through the provided operators.

**Parameters:**

Name | Type |
------ | ------ |
`source` | unknown |
`...operators` | [Function1](_functions_.md#function1)‹any, unknown›[] |

**Returns:** *[Factory](_functions_.md#factory)‹unknown›*

___

###  flip

▸ **flip**‹**TA**, **TB**, **T**›(`f`: [Function2](_functions_.md#function2)‹TA, TB, T›): *[Function2](_functions_.md#function2)‹TB, TA, T›*

Returns a function that flips the order of arguments passed to `f`.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Function2](_functions_.md#function2)‹TA, TB, T› |

**Returns:** *[Function2](_functions_.md#function2)‹TB, TA, T›*

▸ **flip**‹**TA**, **TB**, **TC**, **T**›(`f`: [Function3](_functions_.md#function3)‹TA, TB, TC, T›): *[Function3](_functions_.md#function3)‹TC, TB, TA, T›*

Returns a function that flips the order of arguments passed to `f`.

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

▸ **identity**‹**T**›(`v`: T): *T*

The identity function.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *T*

`v`

___

### `Const` ignore

▸ **ignore**(...`_args`: unknown[]): *any*

A function that always returns `undefined`.

**Parameters:**

Name | Type |
------ | ------ |
`..._args` | unknown[] |

**Returns:** *any*

___

### `Const` increment

▸ **increment**(`x`: number): *number*

An updater function that returns the result of incrementing `x`.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

___

### `Const` incrementBy

▸ **incrementBy**(`incr`: number): *[Updater](_functions_.md#updater)‹number›*

Returns a function that increments a number `x` by the value `incr`.

**Parameters:**

Name | Type |
------ | ------ |
`incr` | number |

**Returns:** *[Updater](_functions_.md#updater)‹number›*

___

### `Const` isEqualTo

▸ **isEqualTo**‹**T**›(`b`: T, `equality`: [Equality](_functions_.md#equality)‹T›): *[Predicate](_functions_.md#predicate)‹T›*

Returns a predicate function comparing its argument to `b` using the
provided `equality` function.

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

Returns `true` if `x` is an even number, otherwise `false`.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *boolean*

___

### `Const` isOdd

▸ **isOdd**(`x`: number): *boolean*

Returns `true` if `x` is an odd number, otherwise `false`.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *boolean*

___

### `Const` negate

▸ **negate**(`v`: boolean): *boolean*

Applies logical negation to the value `v`.

**Parameters:**

Name | Type |
------ | ------ |
`v` | boolean |

**Returns:** *boolean*

___

###  pipe

▸ **pipe**‹**T**, **A**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›): *A*

Pipes `source` through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function1](_functions_.md#function1)‹T, A› |

**Returns:** *A*

▸ **pipe**‹**T**, **A**, **B**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›): *B*

Pipes `source` through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |

**Returns:** *B*

▸ **pipe**‹**T**, **A**, **B**, **C**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›): *C*

Pipes `source` through a series of unary functions.

**Type parameters:**

▪ **T**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`src` | T |
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |

**Returns:** *C*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›): *D*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |

**Returns:** *D*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**, **E**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›): *E*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |

**Returns:** *E*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›): *F*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |

**Returns:** *F*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›): *G*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |

**Returns:** *G*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›): *H*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |

**Returns:** *H*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›): *I*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |

**Returns:** *I*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›): *J*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |

**Returns:** *J*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›, `op11`: [Function1](_functions_.md#function1)‹J, K›): *K*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |
`op11` | [Function1](_functions_.md#function1)‹J, K› |

**Returns:** *K*

▸ **pipe**‹**T**, **A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**, **L**›(`src`: T, `op1`: [Function1](_functions_.md#function1)‹T, A›, `op2`: [Function1](_functions_.md#function1)‹A, B›, `op3`: [Function1](_functions_.md#function1)‹B, C›, `op4`: [Function1](_functions_.md#function1)‹C, D›, `op5`: [Function1](_functions_.md#function1)‹D, E›, `op6`: [Function1](_functions_.md#function1)‹E, F›, `op7`: [Function1](_functions_.md#function1)‹F, G›, `op8`: [Function1](_functions_.md#function1)‹G, H›, `op9`: [Function1](_functions_.md#function1)‹H, I›, `op10`: [Function1](_functions_.md#function1)‹I, J›, `op11`: [Function1](_functions_.md#function1)‹J, K›, `op12`: [Function1](_functions_.md#function1)‹K, L›): *L*

Pipes `source` through a series of unary functions.

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
`op1` | [Function1](_functions_.md#function1)‹T, A› |
`op2` | [Function1](_functions_.md#function1)‹A, B› |
`op3` | [Function1](_functions_.md#function1)‹B, C› |
`op4` | [Function1](_functions_.md#function1)‹C, D› |
`op5` | [Function1](_functions_.md#function1)‹D, E› |
`op6` | [Function1](_functions_.md#function1)‹E, F› |
`op7` | [Function1](_functions_.md#function1)‹F, G› |
`op8` | [Function1](_functions_.md#function1)‹G, H› |
`op9` | [Function1](_functions_.md#function1)‹H, I› |
`op10` | [Function1](_functions_.md#function1)‹I, J› |
`op11` | [Function1](_functions_.md#function1)‹J, K› |
`op12` | [Function1](_functions_.md#function1)‹K, L› |

**Returns:** *L*

▸ **pipe**(`source`: unknown, ...`operators`: [Function1](_functions_.md#function1)‹any, unknown›[]): *unknown*

Pipes `source` through a series of unary functions.

**Parameters:**

Name | Type |
------ | ------ |
`source` | unknown |
`...operators` | [Function1](_functions_.md#function1)‹any, unknown›[] |

**Returns:** *unknown*

___

### `Const` raise

▸ **raise**‹**T**›(`message?`: string): *T*

Throws a javascript error using the provided message.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`message?` | string |

**Returns:** *T*

___

### `Const` returns

▸ **returns**‹**T**›(`v`: T): *function*

Returns a function that takes an arbitrary number of arguments and always returns `v`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *function*

▸ (...`_args`: unknown[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`..._args` | unknown[] |

___

### `Const` strictEquality

▸ **strictEquality**‹**T**›(`a`: T, `b`: T): *boolean*

The javascript strict equality function.

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

A function that returns the result of summing
it's arguments.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | number[] |

**Returns:** *number*

___

### `Const` updaterReducer

▸ **updaterReducer**‹**T**›(`acc`: T, `updater`: [Updater](_functions_.md#updater)‹T›): *T*

A `Reducer` functions that applies `updater` to `acc` to compute the next
accumulator value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |
`updater` | [Updater](_functions_.md#updater)‹T› |

**Returns:** *T*
