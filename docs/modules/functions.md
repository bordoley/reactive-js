[Reactive-JS](../README.md) / functions

# Module: functions

## Index

### Type aliases

* [Comparator](functions.md#comparator)
* [Equality](functions.md#equality)
* [Factory](functions.md#factory)
* [Function1](functions.md#function1)
* [Function2](functions.md#function2)
* [Function3](functions.md#function3)
* [Function4](functions.md#function4)
* [Function5](functions.md#function5)
* [Function6](functions.md#function6)
* [Function7](functions.md#function7)
* [Function8](functions.md#function8)
* [Function9](functions.md#function9)
* [Predicate](functions.md#predicate)
* [Reducer](functions.md#reducer)
* [SideEffect](functions.md#sideeffect)
* [SideEffect1](functions.md#sideeffect1)
* [SideEffect2](functions.md#sideeffect2)
* [SideEffect3](functions.md#sideeffect3)
* [SideEffect4](functions.md#sideeffect4)
* [SideEffect5](functions.md#sideeffect5)
* [SideEffect6](functions.md#sideeffect6)
* [SideEffect7](functions.md#sideeffect7)
* [TypePredicate](functions.md#typepredicate)
* [Updater](functions.md#updater)

### Functions

* [alwaysFalse](functions.md#alwaysfalse)
* [alwaysTrue](functions.md#alwaystrue)
* [arrayEquality](functions.md#arrayequality)
* [callWith](functions.md#callwith)
* [compose](functions.md#compose)
* [composeWith](functions.md#composewith)
* [decrement](functions.md#decrement)
* [decrementBy](functions.md#decrementby)
* [defer](functions.md#defer)
* [flip](functions.md#flip)
* [identity](functions.md#identity)
* [ignore](functions.md#ignore)
* [increment](functions.md#increment)
* [incrementBy](functions.md#incrementby)
* [isEqualTo](functions.md#isequalto)
* [isEven](functions.md#iseven)
* [isOdd](functions.md#isodd)
* [negate](functions.md#negate)
* [pipe](functions.md#pipe)
* [raise](functions.md#raise)
* [returns](functions.md#returns)
* [strictEquality](functions.md#strictequality)
* [sum](functions.md#sum)
* [updaterReducer](functions.md#updaterreducer)

## Type aliases

### Comparator

Ƭ **Comparator**<T\>: (`a`: T, `b`: T) => *number*

Compare two values to determine their relative ordering.

**`returns`** A signed number indicating the relative order of `a` and `b`:
  - If less than 0, `a` is less `b`.
  - If 0, `a` equals `b`.
  - If greater than 0, `a` is greater than `b`.

#### Type parameters:

Name |
------ |
`T` |

___

### Equality

Ƭ **Equality**<T\>: (`a`: T, `b`: T) => *boolean*

Compare two values for equality.

**`returns`** true if `a` is equals to `b`, otherwise false

#### Type parameters:

Name |
------ |
`T` |

___

### Factory

Ƭ **Factory**<T\>: () => T

A function that returns instances of type `T`.

#### Type parameters:

Name |
------ |
`T` |

___

### Function1

Ƭ **Function1**<TA, T\>: (`a`: TA) => T

A one argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`T` |

___

### Function2

Ƭ **Function2**<TA, TB, T\>: (`a`: TA, `b`: TB) => T

A two argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`T` |

___

### Function3

Ƭ **Function3**<TA, TB, TC, T\>: (`a`: TA, `b`: TB, `c`: TC) => T

A three argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`T` |

___

### Function4

Ƭ **Function4**<TA, TB, TC, TD, T\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD) => T

A four argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`T` |

___

### Function5

Ƭ **Function5**<TA, TB, TC, TD, TE, T\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE) => T

A five argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`T` |

___

### Function6

Ƭ **Function6**<TA, TB, TC, TD, TE, TF, T\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF) => T

A six argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`T` |

___

### Function7

Ƭ **Function7**<TA, TB, TC, TD, TE, TF, TG, T\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG) => T

A seven argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`T` |

___

### Function8

Ƭ **Function8**<TA, TB, TC, TD, TE, TF, TG, TH, T\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH) => T

An eight argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |
`T` |

___

### Function9

Ƭ **Function9**<TA, TB, TC, TD, TE, TF, TG, TH, TI, T\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG, `h`: TH, `i`: TI) => T

A nine argument function that returns a value of type `T`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |
`TI` |
`T` |

___

### Predicate

Ƭ **Predicate**<T\>: (`a`: T) => *boolean*

A one argument predicate function.

#### Type parameters:

Name |
------ |
`T` |

___

### Reducer

Ƭ **Reducer**<T, TAcc\>: (`acc`: TAcc, `next`: T) => TAcc

A pure function that takes the current accumulator and next value,
returning the next accumulated value.

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

___

### SideEffect

Ƭ **SideEffect**: () => *void*

A function that takes no arguments and performs a side-effect.

___

### SideEffect1

Ƭ **SideEffect1**<TA\>: (`a`: TA) => *void*

A function that takes one argument and performs a side-effect.

#### Type parameters:

Name |
------ |
`TA` |

___

### SideEffect2

Ƭ **SideEffect2**<TA, TB\>: (`a`: TA, `b`: TB) => *void*

A function that takes two arguments and performs a side-effect.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

___

### SideEffect3

Ƭ **SideEffect3**<TA, TB, TC\>: (`a`: TA, `b`: TB, `c`: TC) => *void*

A function that takes three arguments and performs a side-effect.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |

___

### SideEffect4

Ƭ **SideEffect4**<TA, TB, TC, TD\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD) => *void*

A function that takes four arguments and performs a side-effect.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |

___

### SideEffect5

Ƭ **SideEffect5**<TA, TB, TC, TD, TE\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE) => *void*

A function that takes five arguments and performs a side-effect.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |

___

### SideEffect6

Ƭ **SideEffect6**<TA, TB, TC, TD, TE, TF\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF) => *void*

A function that takes six arguments and performs a side-effect.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |

___

### SideEffect7

Ƭ **SideEffect7**<TA, TB, TC, TD, TE, TF, TG\>: (`a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF, `g`: TG) => *void*

A function that takes seven arguments and performs a side-effect.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |

___

### TypePredicate

Ƭ **TypePredicate**<TA, TB\>: (`v`: TA) => v is TB

A type guard function that performs a runtime check
guaranteeing `v` is of type `TB`.

**`returns`** `true` if v is an instance of type `TB`, otherwise false.

#### Type parameters:

Name | Type |
------ | ------ |
`TA` | - |
`TB` | TA |

___

### Updater

Ƭ **Updater**<T\>: (`prev`: T) => T

Computes a new value of type `T` from the previous value of type `T`.

#### Type parameters:

Name |
------ |
`T` |

## Functions

### alwaysFalse

▸ `Const`**alwaysFalse**(...`_args`: *unknown*[]): *boolean*

A function that always returns `false`.

#### Parameters:

Name | Type |
------ | ------ |
`..._args` | *unknown*[] |

**Returns:** *boolean*

___

### alwaysTrue

▸ `Const`**alwaysTrue**(...`_args`: *unknown*[]): *boolean*

A function that always returns `true`.

#### Parameters:

Name | Type |
------ | ------ |
`..._args` | *unknown*[] |

**Returns:** *boolean*

___

### arrayEquality

▸ `Const`**arrayEquality**<T\>(`valuesEquality?`: [*Equality*](functions.md#equality)<T\>): [*Equality*](functions.md#equality)<readonly T[]\>

Returns an equality function that compares two readonly arrays for equality,
comparing their values using `valuesEquality`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`valuesEquality?` | [*Equality*](functions.md#equality)<T\> |

**Returns:** [*Equality*](functions.md#equality)<readonly T[]\>

___

### callWith

▸ **callWith**<T\>(): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<T\>, T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<T\>, T\>

▸ **callWith**<TA, T\>(`a`: TA): [*Function1*](functions.md#function1)<[*Function1*](functions.md#function1)<TA, T\>, T\>

#### Type parameters:

Name |
------ |
`TA` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | TA |

**Returns:** [*Function1*](functions.md#function1)<[*Function1*](functions.md#function1)<TA, T\>, T\>

▸ **callWith**<TA, TB, T\>(`a`: TA, `b`: TB): [*Function1*](functions.md#function1)<[*Function2*](functions.md#function2)<TA, TB, T\>, T\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |

**Returns:** [*Function1*](functions.md#function1)<[*Function2*](functions.md#function2)<TA, TB, T\>, T\>

▸ **callWith**<TA, TB, TC, T\>(`a`: TA, `b`: TB, `c`: TC): [*Function1*](functions.md#function1)<[*Function3*](functions.md#function3)<TA, TB, TC, T\>, T\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** [*Function1*](functions.md#function1)<[*Function3*](functions.md#function3)<TA, TB, TC, T\>, T\>

▸ **callWith**<TA, TB, TC, TD, T\>(`a`: TA, `b`: TB, `c`: TC, `d`: TD): [*Function1*](functions.md#function1)<[*Function4*](functions.md#function4)<TA, TB, TC, TD, T\>, T\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** [*Function1*](functions.md#function1)<[*Function4*](functions.md#function4)<TA, TB, TC, TD, T\>, T\>

___

### compose

▸ **compose**<T, A, B\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>): [*Function1*](functions.md#function1)<T, B\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |

**Returns:** [*Function1*](functions.md#function1)<T, B\>

▸ **compose**<T, A, B, C\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>): [*Function1*](functions.md#function1)<T, C\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |

**Returns:** [*Function1*](functions.md#function1)<T, C\>

▸ **compose**<T, A, B, C, D\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>): [*Function1*](functions.md#function1)<T, D\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |

**Returns:** [*Function1*](functions.md#function1)<T, D\>

▸ **compose**<T, A, B, C, D, E\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>): [*Function1*](functions.md#function1)<T, E\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |

**Returns:** [*Function1*](functions.md#function1)<T, E\>

▸ **compose**<T, A, B, C, D, E, F\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>): [*Function1*](functions.md#function1)<T, F\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |

**Returns:** [*Function1*](functions.md#function1)<T, F\>

▸ **compose**<T, A, B, C, D, E, F, G\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>): [*Function1*](functions.md#function1)<T, G\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |

**Returns:** [*Function1*](functions.md#function1)<T, G\>

▸ **compose**<T, A, B, C, D, E, F, G, H\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>): [*Function1*](functions.md#function1)<T, H\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |

**Returns:** [*Function1*](functions.md#function1)<T, H\>

▸ **compose**<T, A, B, C, D, E, F, G, H, I\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>): [*Function1*](functions.md#function1)<T, I\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |

**Returns:** [*Function1*](functions.md#function1)<T, I\>

▸ **compose**<T, A, B, C, D, E, F, G, H, I, J\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>): [*Function1*](functions.md#function1)<T, J\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |

**Returns:** [*Function1*](functions.md#function1)<T, J\>

▸ **compose**<T, A, B, C, D, E, F, G, H, I, J, K\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>, `op11`: [*Function1*](functions.md#function1)<J, K\>): [*Function1*](functions.md#function1)<T, K\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |
`K` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |
`op11` | [*Function1*](functions.md#function1)<J, K\> |

**Returns:** [*Function1*](functions.md#function1)<T, K\>

▸ **compose**<T, A, B, C, D, E, F, G, H, I, J, K, L\>(`op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>, `op11`: [*Function1*](functions.md#function1)<J, K\>, `op12`: [*Function1*](functions.md#function1)<K, L\>): [*Function1*](functions.md#function1)<T, L\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |
`K` |
`L` |

#### Parameters:

Name | Type |
------ | ------ |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |
`op11` | [*Function1*](functions.md#function1)<J, K\> |
`op12` | [*Function1*](functions.md#function1)<K, L\> |

**Returns:** [*Function1*](functions.md#function1)<T, L\>

___

### composeWith

▸ `Const`**composeWith**<T, A, B\>(`op2`: [*Function1*](functions.md#function1)<A, B\>): [*Function1*](functions.md#function1)<[*Function1*](functions.md#function1)<T, A\>, [*Function1*](functions.md#function1)<T, B\>\>

Returns a function that composes its operator with `op2`.

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |

#### Parameters:

Name | Type |
------ | ------ |
`op2` | [*Function1*](functions.md#function1)<A, B\> |

**Returns:** [*Function1*](functions.md#function1)<[*Function1*](functions.md#function1)<T, A\>, [*Function1*](functions.md#function1)<T, B\>\>

___

### decrement

▸ `Const`**decrement**(`x`: *number*): *number*

An updater function that returns the result of decrementing `x`.

#### Parameters:

Name | Type |
------ | ------ |
`x` | *number* |

**Returns:** *number*

___

### decrementBy

▸ `Const`**decrementBy**(`decr`: *number*): [*Updater*](functions.md#updater)<*number*\>

Returns a function that decrements a number `x` by the value `decr`.

#### Parameters:

Name | Type |
------ | ------ |
`decr` | *number* |

**Returns:** [*Updater*](functions.md#updater)<*number*\>

___

### defer

▸ **defer**<T, A\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>): [*Factory*](functions.md#factory)<A\>

#### Type parameters:

Name |
------ |
`T` |
`A` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |

**Returns:** [*Factory*](functions.md#factory)<A\>

▸ **defer**<T, A, B\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>): [*Factory*](functions.md#factory)<B\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |

**Returns:** [*Factory*](functions.md#factory)<B\>

▸ **defer**<T, A, B, C\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>): [*Factory*](functions.md#factory)<C\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |

**Returns:** [*Factory*](functions.md#factory)<C\>

▸ **defer**<T, A, B, C, D\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>): [*Factory*](functions.md#factory)<D\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |

**Returns:** [*Factory*](functions.md#factory)<D\>

▸ **defer**<T, A, B, C, D, E\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>): [*Factory*](functions.md#factory)<E\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |

**Returns:** [*Factory*](functions.md#factory)<E\>

▸ **defer**<T, A, B, C, D, E, F\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>): [*Factory*](functions.md#factory)<F\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |

**Returns:** [*Factory*](functions.md#factory)<F\>

▸ **defer**<T, A, B, C, D, E, F, G\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>): [*Factory*](functions.md#factory)<G\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |

**Returns:** [*Factory*](functions.md#factory)<G\>

▸ **defer**<T, A, B, C, D, E, F, G, H\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>): [*Factory*](functions.md#factory)<H\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |

**Returns:** [*Factory*](functions.md#factory)<H\>

▸ **defer**<T, A, B, C, D, E, F, G, H, I\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>): [*Factory*](functions.md#factory)<I\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |

**Returns:** [*Factory*](functions.md#factory)<I\>

▸ **defer**<T, A, B, C, D, E, F, G, H, I, J\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>): [*Factory*](functions.md#factory)<J\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |

**Returns:** [*Factory*](functions.md#factory)<J\>

▸ **defer**<T, A, B, C, D, E, F, G, H, I, J, K\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>, `op11`: [*Function1*](functions.md#function1)<J, K\>): [*Factory*](functions.md#factory)<K\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |
`K` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |
`op11` | [*Function1*](functions.md#function1)<J, K\> |

**Returns:** [*Factory*](functions.md#factory)<K\>

▸ **defer**<T, A, B, C, D, E, F, G, H, I, J, K, L\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>, `op11`: [*Function1*](functions.md#function1)<J, K\>, `op12`: [*Function1*](functions.md#function1)<K, L\>): [*Factory*](functions.md#factory)<L\>

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |
`K` |
`L` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |
`op11` | [*Function1*](functions.md#function1)<J, K\> |
`op12` | [*Function1*](functions.md#function1)<K, L\> |

**Returns:** [*Factory*](functions.md#factory)<L\>

▸ **defer**(`source`: *unknown*, ...`operators`: [*Function1*](functions.md#function1)<*any*, *unknown*\>[]): [*Factory*](functions.md#factory)<*unknown*\>

#### Parameters:

Name | Type |
------ | ------ |
`source` | *unknown* |
`...operators` | [*Function1*](functions.md#function1)<*any*, *unknown*\>[] |

**Returns:** [*Factory*](functions.md#factory)<*unknown*\>

___

### flip

▸ **flip**<TA, TB, T\>(`f`: [*Function2*](functions.md#function2)<TA, TB, T\>): [*Function2*](functions.md#function2)<TB, TA, T\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`f` | [*Function2*](functions.md#function2)<TA, TB, T\> |

**Returns:** [*Function2*](functions.md#function2)<TB, TA, T\>

▸ **flip**<TA, TB, TC, T\>(`f`: [*Function3*](functions.md#function3)<TA, TB, TC, T\>): [*Function3*](functions.md#function3)<TC, TB, TA, T\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`f` | [*Function3*](functions.md#function3)<TA, TB, TC, T\> |

**Returns:** [*Function3*](functions.md#function3)<TC, TB, TA, T\>

___

### identity

▸ `Const`**identity**<T\>(`v`: T): T

The identity function.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`v` | T |

**Returns:** T

`v`

___

### ignore

▸ `Const`**ignore**(...`_args`: *unknown*[]): *void*

A function that always returns `undefined`.

#### Parameters:

Name | Type |
------ | ------ |
`..._args` | *unknown*[] |

**Returns:** *void*

___

### increment

▸ `Const`**increment**(`x`: *number*): *number*

An updater function that returns the result of incrementing `x`.

#### Parameters:

Name | Type |
------ | ------ |
`x` | *number* |

**Returns:** *number*

___

### incrementBy

▸ `Const`**incrementBy**(`incr`: *number*): [*Updater*](functions.md#updater)<*number*\>

Returns a function that increments a number `x` by the value `incr`.

#### Parameters:

Name | Type |
------ | ------ |
`incr` | *number* |

**Returns:** [*Updater*](functions.md#updater)<*number*\>

___

### isEqualTo

▸ `Const`**isEqualTo**<T\>(`b`: T, `equality?`: [*Equality*](functions.md#equality)<T\>): [*Predicate*](functions.md#predicate)<T\>

Returns a predicate function comparing its argument to `b` using the
provided `equality` function.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`b` | T |
`equality?` | [*Equality*](functions.md#equality)<T\> |

**Returns:** [*Predicate*](functions.md#predicate)<T\>

___

### isEven

▸ `Const`**isEven**(`x`: *number*): *boolean*

Returns `true` if `x` is an even number, otherwise `false`.

#### Parameters:

Name | Type |
------ | ------ |
`x` | *number* |

**Returns:** *boolean*

___

### isOdd

▸ `Const`**isOdd**(`x`: *number*): *boolean*

Returns `true` if `x` is an odd number, otherwise `false`.

#### Parameters:

Name | Type |
------ | ------ |
`x` | *number* |

**Returns:** *boolean*

___

### negate

▸ `Const`**negate**(`v`: *boolean*): *boolean*

Applies logical negation to the value `v`.

#### Parameters:

Name | Type |
------ | ------ |
`v` | *boolean* |

**Returns:** *boolean*

___

### pipe

▸ **pipe**<T, A\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>): A

#### Type parameters:

Name |
------ |
`T` |
`A` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |

**Returns:** A

▸ **pipe**<T, A, B\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>): B

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |

**Returns:** B

▸ **pipe**<T, A, B, C\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>): C

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |

**Returns:** C

▸ **pipe**<T, A, B, C, D\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>): D

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |

**Returns:** D

▸ **pipe**<T, A, B, C, D, E\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>): E

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |

**Returns:** E

▸ **pipe**<T, A, B, C, D, E, F\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>): F

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |

**Returns:** F

▸ **pipe**<T, A, B, C, D, E, F, G\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>): G

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |

**Returns:** G

▸ **pipe**<T, A, B, C, D, E, F, G, H\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>): H

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |

**Returns:** H

▸ **pipe**<T, A, B, C, D, E, F, G, H, I\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>): I

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |

**Returns:** I

▸ **pipe**<T, A, B, C, D, E, F, G, H, I, J\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>): J

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |

**Returns:** J

▸ **pipe**<T, A, B, C, D, E, F, G, H, I, J, K\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>, `op11`: [*Function1*](functions.md#function1)<J, K\>): K

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |
`K` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |
`op11` | [*Function1*](functions.md#function1)<J, K\> |

**Returns:** K

▸ **pipe**<T, A, B, C, D, E, F, G, H, I, J, K, L\>(`src`: T, `op1`: [*Function1*](functions.md#function1)<T, A\>, `op2`: [*Function1*](functions.md#function1)<A, B\>, `op3`: [*Function1*](functions.md#function1)<B, C\>, `op4`: [*Function1*](functions.md#function1)<C, D\>, `op5`: [*Function1*](functions.md#function1)<D, E\>, `op6`: [*Function1*](functions.md#function1)<E, F\>, `op7`: [*Function1*](functions.md#function1)<F, G\>, `op8`: [*Function1*](functions.md#function1)<G, H\>, `op9`: [*Function1*](functions.md#function1)<H, I\>, `op10`: [*Function1*](functions.md#function1)<I, J\>, `op11`: [*Function1*](functions.md#function1)<J, K\>, `op12`: [*Function1*](functions.md#function1)<K, L\>): L

#### Type parameters:

Name |
------ |
`T` |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |
`J` |
`K` |
`L` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | T |
`op1` | [*Function1*](functions.md#function1)<T, A\> |
`op2` | [*Function1*](functions.md#function1)<A, B\> |
`op3` | [*Function1*](functions.md#function1)<B, C\> |
`op4` | [*Function1*](functions.md#function1)<C, D\> |
`op5` | [*Function1*](functions.md#function1)<D, E\> |
`op6` | [*Function1*](functions.md#function1)<E, F\> |
`op7` | [*Function1*](functions.md#function1)<F, G\> |
`op8` | [*Function1*](functions.md#function1)<G, H\> |
`op9` | [*Function1*](functions.md#function1)<H, I\> |
`op10` | [*Function1*](functions.md#function1)<I, J\> |
`op11` | [*Function1*](functions.md#function1)<J, K\> |
`op12` | [*Function1*](functions.md#function1)<K, L\> |

**Returns:** L

▸ **pipe**(`source`: *unknown*, ...`operators`: [*Function1*](functions.md#function1)<*any*, *unknown*\>[]): *unknown*

#### Parameters:

Name | Type |
------ | ------ |
`source` | *unknown* |
`...operators` | [*Function1*](functions.md#function1)<*any*, *unknown*\>[] |

**Returns:** *unknown*

___

### raise

▸ `Const`**raise**<T\>(`message?`: *unknown*): T

Throws a javascript error using the provided message.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`message?` | *unknown* |

**Returns:** T

___

### returns

▸ `Const`**returns**<T\>(`v`: T): function

Returns a function that takes an arbitrary number of arguments and always returns `v`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`v` | T |

**Returns:** function

___

### strictEquality

▸ `Const`**strictEquality**<T\>(`a`: T, `b`: T): *boolean*

The javascript strict equality function.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *boolean*

___

### sum

▸ `Const`**sum**(...`args`: *number*[]): *number*

A function that returns the result of summing
it's arguments.

#### Parameters:

Name | Type |
------ | ------ |
`...args` | *number*[] |

**Returns:** *number*

___

### updaterReducer

▸ `Const`**updaterReducer**<T\>(`acc`: T, `updater`: [*Updater*](functions.md#updater)<T\>): T

A `Reducer` functions that applies `updater` to `acc` to compute the next
accumulator value.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`acc` | T |
`updater` | [*Updater*](functions.md#updater)<T\> |

**Returns:** T
