[Reactive-JS](../README.md) / util/functions

# Module: util/functions

## Table of contents

### Type Aliases

- [Comparator](util_functions.md#comparator)
- [Constructor](util_functions.md#constructor)
- [Constructor1](util_functions.md#constructor1)
- [Constructor2](util_functions.md#constructor2)
- [Constructor3](util_functions.md#constructor3)
- [Constructor4](util_functions.md#constructor4)
- [ConstructorOf](util_functions.md#constructorof)
- [Equality](util_functions.md#equality)
- [Factory](util_functions.md#factory)
- [Function1](util_functions.md#function1)
- [Function2](util_functions.md#function2)
- [Function3](util_functions.md#function3)
- [Function4](util_functions.md#function4)
- [Function5](util_functions.md#function5)
- [Function6](util_functions.md#function6)
- [Function7](util_functions.md#function7)
- [Function8](util_functions.md#function8)
- [Function9](util_functions.md#function9)
- [Identity](util_functions.md#identity)
- [Predicate](util_functions.md#predicate)
- [Reducer](util_functions.md#reducer)
- [SideEffect](util_functions.md#sideeffect)
- [SideEffect1](util_functions.md#sideeffect1)
- [SideEffect2](util_functions.md#sideeffect2)
- [SideEffect3](util_functions.md#sideeffect3)
- [SideEffect4](util_functions.md#sideeffect4)
- [SideEffect5](util_functions.md#sideeffect5)
- [SideEffect6](util_functions.md#sideeffect6)
- [SideEffect7](util_functions.md#sideeffect7)
- [TypePredicate](util_functions.md#typepredicate)
- [Updater](util_functions.md#updater)

### Functions

- [alwaysFalse](util_functions.md#alwaysfalse)
- [alwaysTrue](util_functions.md#alwaystrue)
- [arrayEquality](util_functions.md#arrayequality)
- [callWith](util_functions.md#callwith)
- [compose](util_functions.md#compose)
- [decrement](util_functions.md#decrement)
- [decrementBy](util_functions.md#decrementby)
- [flip](util_functions.md#flip)
- [floor](util_functions.md#floor)
- [getLength](util_functions.md#getlength)
- [identity](util_functions.md#identity-1)
- [ignore](util_functions.md#ignore)
- [increment](util_functions.md#increment)
- [incrementBy](util_functions.md#incrementby)
- [instanceFactory](util_functions.md#instancefactory)
- [isEmpty](util_functions.md#isempty)
- [isEqualTo](util_functions.md#isequalto)
- [isEven](util_functions.md#iseven)
- [isOdd](util_functions.md#isodd)
- [max](util_functions.md#max)
- [min](util_functions.md#min)
- [negate](util_functions.md#negate)
- [newInstance](util_functions.md#newinstance)
- [newInstanceWith](util_functions.md#newinstancewith)
- [pipe](util_functions.md#pipe)
- [pipeLazy](util_functions.md#pipelazy)
- [pipeUnsafe](util_functions.md#pipeunsafe)
- [raise](util_functions.md#raise)
- [returns](util_functions.md#returns)
- [strictEquality](util_functions.md#strictequality)
- [sum](util_functions.md#sum)
- [updateReducer](util_functions.md#updatereducer)

## Type Aliases

### Comparator

Ƭ **Comparator**<`T`\>: [`Function2`](util_functions.md#function2)<`T`, `T`, `number`\>

Compare two values to determine their relative ordering.

**`returns`** A signed number indicating the relative order of `a` and `b`:
  - If less than 0, `a` is less `b`.
  - If 0, `a` equals `b`.
  - If greater than 0, `a` is greater than `b`.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Constructor

Ƭ **Constructor**<`T`\>: () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• ()

___

### Constructor1

Ƭ **Constructor1**<`TA`, `T`\>: (`a`: `TA`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `T` |

#### Type declaration

• (`a`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |

___

### Constructor2

Ƭ **Constructor2**<`TA`, `TB`, `T`\>: (`a`: `TA`, `b`: `TB`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Type declaration

• (`a`, `b`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |

___

### Constructor3

Ƭ **Constructor3**<`TA`, `TB`, `TC`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Type declaration

• (`a`, `b`, `c`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

___

### Constructor4

Ƭ **Constructor4**<`TA`, `TB`, `TC`, `TD`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `T` |

#### Type declaration

• (`a`, `b`, `c`, `d`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

___

### ConstructorOf

Ƭ **ConstructorOf**<`T`\>: (...`args`: readonly `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | readonly `any`[] |

___

### Equality

Ƭ **Equality**<`T`\>: [`Function2`](util_functions.md#function2)<`T`, `T`, `boolean`\>

Compare two values for equality.

**`returns`** true if `a` is equals to `b`, otherwise false

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Factory

Ƭ **Factory**<`T`\>: () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `T`

##### Returns

`T`

___

### Function1

Ƭ **Function1**<`TA`, `T`\>: (`a`: `TA`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `T` |

#### Type declaration

▸ (`a`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |

##### Returns

`T`

___

### Function2

Ƭ **Function2**<`TA`, `TB`, `T`\>: (`a`: `TA`, `b`: `TB`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Type declaration

▸ (`a`, `b`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |

##### Returns

`T`

___

### Function3

Ƭ **Function3**<`TA`, `TB`, `TC`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Type declaration

▸ (`a`, `b`, `c`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

##### Returns

`T`

___

### Function4

Ƭ **Function4**<`TA`, `TB`, `TC`, `TD`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `T` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

##### Returns

`T`

___

### Function5

Ƭ **Function5**<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`, `e`: `TE`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `T` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

##### Returns

`T`

___

### Function6

Ƭ **Function6**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`, `e`: `TE`, `f`: `TF`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `T` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

##### Returns

`T`

___

### Function7

Ƭ **Function7**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`, `e`: `TE`, `f`: `TF`, `g`: `TG`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `T` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |
| `g` | `TG` |

##### Returns

`T`

___

### Function8

Ƭ **Function8**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`, `e`: `TE`, `f`: `TF`, `g`: `TG`, `h`: `TH`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `T` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |
| `g` | `TG` |
| `h` | `TH` |

##### Returns

`T`

___

### Function9

Ƭ **Function9**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`, `T`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`, `e`: `TE`, `f`: `TF`, `g`: `TG`, `h`: `TH`, `i`: `TI`) => `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |
| `T` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |
| `g` | `TG` |
| `h` | `TH` |
| `i` | `TI` |

##### Returns

`T`

___

### Identity

Ƭ **Identity**<`T`\>: [`Function1`](util_functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Predicate

Ƭ **Predicate**<`T`\>: [`Function1`](util_functions.md#function1)<`T`, `boolean`\>

A one argument predicate function.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Reducer

Ƭ **Reducer**<`T`, `TAcc`\>: [`Function2`](util_functions.md#function2)<`TAcc`, `T`, `TAcc`\>

A pure function that takes the current accumulator and next value,
returning the next accumulated value.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

___

### SideEffect

Ƭ **SideEffect**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### SideEffect1

Ƭ **SideEffect1**<`TA`\>: (`a`: `TA`) => `void`

#### Type parameters

| Name |
| :------ |
| `TA` |

#### Type declaration

▸ (`a`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |

##### Returns

`void`

___

### SideEffect2

Ƭ **SideEffect2**<`TA`, `TB`\>: (`a`: `TA`, `b`: `TB`) => `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Type declaration

▸ (`a`, `b`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |

##### Returns

`void`

___

### SideEffect3

Ƭ **SideEffect3**<`TA`, `TB`, `TC`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`) => `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Type declaration

▸ (`a`, `b`, `c`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

##### Returns

`void`

___

### SideEffect4

Ƭ **SideEffect4**<`TA`, `TB`, `TC`, `TD`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`) => `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

##### Returns

`void`

___

### SideEffect5

Ƭ **SideEffect5**<`TA`, `TB`, `TC`, `TD`, `TE`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`, `e`: `TE`) => `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

##### Returns

`void`

___

### SideEffect6

Ƭ **SideEffect6**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`, `e`: `TE`, `f`: `TF`) => `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

##### Returns

`void`

___

### SideEffect7

Ƭ **SideEffect7**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>: (`a`: `TA`, `b`: `TB`, `c`: `TC`, `d`: `TD`, `e`: `TE`, `f`: `TF`, `g`: `TG`) => `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |
| `g` | `TG` |

##### Returns

`void`

___

### TypePredicate

Ƭ **TypePredicate**<`TA`, `TB`\>: (`v`: `TA`) => v is TB

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | extends `TA` |

#### Type declaration

▸ (`v`): v is TB

A type guard function that performs a runtime check
guaranteeing `v` is of type `TB`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `TA` |

##### Returns

v is TB

`true` if v is an instance of type `TB`, otherwise false.

___

### Updater

Ƭ **Updater**<`T`\>: [`Function1`](util_functions.md#function1)<`T`, `T`\>

Computes a new value of type `T` from the previous value of type `T`.

#### Type parameters

| Name |
| :------ |
| `T` |

## Functions

### alwaysFalse

▸ **alwaysFalse**(...`_args`): `boolean`

A function that always returns `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `unknown`[] |

#### Returns

`boolean`

___

### alwaysTrue

▸ **alwaysTrue**(...`_args`): `boolean`

A function that always returns `true`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `unknown`[] |

#### Returns

`boolean`

___

### arrayEquality

▸ **arrayEquality**<`T`\>(`valuesEquality?`): [`Equality`](util_functions.md#equality)<readonly `T`[]\>

Returns an equality function that compares two readonly arrays for equality,
comparing their values using `valuesEquality`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuesEquality?` | [`Equality`](util_functions.md#equality)<`T`\> |

#### Returns

[`Equality`](util_functions.md#equality)<readonly `T`[]\>

___

### callWith

▸ **callWith**<`T`\>(): [`Function1`](util_functions.md#function1)<[`Factory`](util_functions.md#factory)<`T`\>, `T`\>

A function operator that invokes a function with a given list of arguments.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Factory`](util_functions.md#factory)<`T`\>, `T`\>

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

▸ **callWith**<`TA`, `T`\>(`a`): [`Function1`](util_functions.md#function1)<[`Function1`](util_functions.md#function1)<`TA`, `T`\>, `T`\>

A function operator that invokes a function with a given list of arguments.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Function1`](util_functions.md#function1)<`TA`, `T`\>, `T`\>

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

▸ **callWith**<`TA`, `TB`, `T`\>(`a`, `b`): [`Function1`](util_functions.md#function1)<[`Function2`](util_functions.md#function2)<`TA`, `TB`, `T`\>, `T`\>

A function operator that invokes a function with a given list of arguments.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Function2`](util_functions.md#function2)<`TA`, `TB`, `T`\>, `T`\>

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

▸ **callWith**<`TA`, `TB`, `TC`, `T`\>(`a`, `b`, `c`): [`Function1`](util_functions.md#function1)<[`Function3`](util_functions.md#function3)<`TA`, `TB`, `TC`, `T`\>, `T`\>

A function operator that invokes a function with a given list of arguments.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Function3`](util_functions.md#function3)<`TA`, `TB`, `TC`, `T`\>, `T`\>

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

▸ **callWith**<`TA`, `TB`, `TC`, `TD`, `T`\>(`a`, `b`, `c`, `d`): [`Function1`](util_functions.md#function1)<[`Function4`](util_functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\>, `T`\>

A function operator that invokes a function with a given list of arguments.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Function4`](util_functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\>, `T`\>

A function that takes a function `f` as an argument
and invokes it with the provided arguments, returning the result.

___

### compose

▸ **compose**<`T`, `A`, `B`\>(`op1`, `op2`): [`Function1`](util_functions.md#function1)<`T`, `B`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `B`\>

▸ **compose**<`T`, `A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`Function1`](util_functions.md#function1)<`T`, `C`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `C`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`Function1`](util_functions.md#function1)<`T`, `D`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `D`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`Function1`](util_functions.md#function1)<`T`, `E`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `E`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Function1`](util_functions.md#function1)<`T`, `F`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `F`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Function1`](util_functions.md#function1)<`T`, `G`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `G`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Function1`](util_functions.md#function1)<`T`, `H`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `H`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Function1`](util_functions.md#function1)<`T`, `I`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `I`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Function1`](util_functions.md#function1)<`T`, `J`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `J`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Function1`](util_functions.md#function1)<`T`, `K`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](util_functions.md#function1)<`J`, `K`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `K`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`Function1`](util_functions.md#function1)<`T`, `L`\>

Composes a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](util_functions.md#function1)<`J`, `K`\> |
| `op12` | [`Function1`](util_functions.md#function1)<`K`, `L`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`T`, `L`\>

___

### decrement

▸ **decrement**(`x`): `number`

An updater function that returns the result of decrementing `x`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

___

### decrementBy

▸ **decrementBy**(`decr`): [`Updater`](util_functions.md#updater)<`number`\>

Returns a function that decrements a number `x` by the value `decr`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `decr` | `number` |

#### Returns

[`Updater`](util_functions.md#updater)<`number`\>

___

### flip

▸ **flip**<`TA`, `TB`, `T`\>(`f`): [`Function2`](util_functions.md#function2)<`TB`, `TA`, `T`\>

Returns a function that flips the order of arguments passed to `f`.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](util_functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function2`](util_functions.md#function2)<`TB`, `TA`, `T`\>

▸ **flip**<`TA`, `TB`, `TC`, `T`\>(`f`): [`Function3`](util_functions.md#function3)<`TC`, `TB`, `TA`, `T`\>

Returns a function that flips the order of arguments passed to `f`.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function3`](util_functions.md#function3)<`TA`, `TB`, `TC`, `T`\> |

#### Returns

[`Function3`](util_functions.md#function3)<`TC`, `TB`, `TA`, `T`\>

___

### floor

▸ **floor**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

___

### getLength

▸ **getLength**(`arr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string` \| readonly `unknown`[] |

#### Returns

`number`

___

### identity

▸ **identity**<`T`\>(`v`): `T`

The identity function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`T`

`v`

___

### ignore

▸ **ignore**(...`_args`): `void`

A function that always returns `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `unknown`[] |

#### Returns

`void`

___

### increment

▸ **increment**(`x`): `number`

An updater function that returns the result of incrementing `x`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

___

### incrementBy

▸ **incrementBy**(`incr`): [`Updater`](util_functions.md#updater)<`number`\>

Returns a function that increments a number `x` by the value `incr`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `incr` | `number` |

#### Returns

[`Updater`](util_functions.md#updater)<`number`\>

___

### instanceFactory

▸ **instanceFactory**<`T`\>(): [`Function1`](util_functions.md#function1)<[`Constructor`](util_functions.md#constructor)<`T`\>, [`Factory`](util_functions.md#factory)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor`](util_functions.md#constructor)<`T`\>, [`Factory`](util_functions.md#factory)<`T`\>\>

▸ **instanceFactory**<`T`, `TA`\>(): [`Function1`](util_functions.md#function1)<[`Constructor1`](util_functions.md#constructor1)<`TA`, `T`\>, [`Function1`](util_functions.md#function1)<`TA`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor1`](util_functions.md#constructor1)<`TA`, `T`\>, [`Function1`](util_functions.md#function1)<`TA`, `T`\>\>

▸ **instanceFactory**<`T`, `TA`, `TB`\>(): [`Function1`](util_functions.md#function1)<[`Constructor2`](util_functions.md#constructor2)<`TA`, `TB`, `T`\>, [`Function2`](util_functions.md#function2)<`TA`, `TB`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor2`](util_functions.md#constructor2)<`TA`, `TB`, `T`\>, [`Function2`](util_functions.md#function2)<`TA`, `TB`, `T`\>\>

▸ **instanceFactory**<`T`, `TA`, `TB`, `TC`\>(): [`Function1`](util_functions.md#function1)<[`Constructor3`](util_functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\>, [`Function3`](util_functions.md#function3)<`TA`, `TB`, `TC`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor3`](util_functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\>, [`Function3`](util_functions.md#function3)<`TA`, `TB`, `TC`, `T`\>\>

___

### isEmpty

▸ **isEmpty**(`arr`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string` \| readonly `unknown`[] |

#### Returns

`boolean`

___

### isEqualTo

▸ **isEqualTo**<`T`\>(`b`, `options?`): [`Predicate`](util_functions.md#predicate)<`T`\>

Returns a predicate function comparing its argument to `b` using the
provided `equality` function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](util_functions.md#equality)<`T`\> |

#### Returns

[`Predicate`](util_functions.md#predicate)<`T`\>

___

### isEven

▸ **isEven**(`x`): `boolean`

Returns `true` if `x` is an even number, otherwise `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`boolean`

___

### isOdd

▸ **isOdd**(`x`): `boolean`

Returns `true` if `x` is an odd number, otherwise `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`boolean`

___

### max

▸ **max**(...`values`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `number`[] |

#### Returns

`number`

___

### min

▸ **min**(...`values`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `number`[] |

#### Returns

`number`

___

### negate

▸ **negate**(`v`): `boolean`

Applies logical negation to the value `v`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`boolean`

___

### newInstance

▸ **newInstance**<`T`\>(`Constructor`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | [`Constructor`](util_functions.md#constructor)<`T`\> |

#### Returns

`T`

▸ **newInstance**<`T`, `TA`\>(`Constructor`, `a`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | [`Constructor1`](util_functions.md#constructor1)<`TA`, `T`\> |
| `a` | `TA` |

#### Returns

`T`

▸ **newInstance**<`T`, `TA`, `TB`\>(`Constructor`, `a`, `b`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | [`Constructor2`](util_functions.md#constructor2)<`TA`, `TB`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`T`

▸ **newInstance**<`T`, `TA`, `TB`, `TC`\>(`Constructor`, `a`, `b`, `c`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | [`Constructor3`](util_functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`T`

▸ **newInstance**<`T`, `TA`, `TB`, `TC`, `TD`\>(`Constructor`, `a`, `b`, `c`, `d`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | [`Constructor4`](util_functions.md#constructor4)<`TA`, `TB`, `TC`, `TD`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`T`

___

### newInstanceWith

▸ **newInstanceWith**<`T`\>(): [`Function1`](util_functions.md#function1)<[`Constructor`](util_functions.md#constructor)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor`](util_functions.md#constructor)<`T`\>, `T`\>

▸ **newInstanceWith**<`T`, `TA`\>(`a`): [`Function1`](util_functions.md#function1)<[`Constructor1`](util_functions.md#constructor1)<`TA`, `T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor1`](util_functions.md#constructor1)<`TA`, `T`\>, `T`\>

▸ **newInstanceWith**<`T`, `TA`, `TB`\>(`a`, `b`): [`Function1`](util_functions.md#function1)<[`Constructor2`](util_functions.md#constructor2)<`TA`, `TB`, `T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor2`](util_functions.md#constructor2)<`TA`, `TB`, `T`\>, `T`\>

▸ **newInstanceWith**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](util_functions.md#function1)<[`Constructor3`](util_functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor3`](util_functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\>, `T`\>

▸ **newInstanceWith**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](util_functions.md#function1)<[`Constructor4`](util_functions.md#constructor4)<`TA`, `TB`, `TC`, `TD`, `T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

[`Function1`](util_functions.md#function1)<[`Constructor4`](util_functions.md#constructor4)<`TA`, `TB`, `TC`, `TD`, `T`\>, `T`\>

___

### pipe

▸ **pipe**<`T`, `A`\>(`src`, `op1`): `A`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |

#### Returns

`A`

▸ **pipe**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): `B`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |

#### Returns

`B`

▸ **pipe**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): `C`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |

#### Returns

`C`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): `D`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |

#### Returns

`D`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): `E`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |

#### Returns

`E`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): `F`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |

#### Returns

`F`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): `G`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |

#### Returns

`G`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): `H`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |

#### Returns

`H`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): `I`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |

#### Returns

`I`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): `J`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |

#### Returns

`J`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): `K`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](util_functions.md#function1)<`J`, `K`\> |

#### Returns

`K`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): `L`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](util_functions.md#function1)<`J`, `K`\> |
| `op12` | [`Function1`](util_functions.md#function1)<`K`, `L`\> |

#### Returns

`L`

___

### pipeLazy

▸ **pipeLazy**<`T`, `A`\>(`src`, `op1`): [`Factory`](util_functions.md#factory)<`A`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`A`\>

▸ **pipeLazy**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): [`Factory`](util_functions.md#factory)<`B`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`B`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): [`Factory`](util_functions.md#factory)<`C`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`C`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): [`Factory`](util_functions.md#factory)<`D`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`D`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): [`Factory`](util_functions.md#factory)<`E`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`E`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Factory`](util_functions.md#factory)<`F`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`F`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Factory`](util_functions.md#factory)<`G`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`G`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Factory`](util_functions.md#factory)<`H`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`H`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Factory`](util_functions.md#factory)<`I`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`I`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Factory`](util_functions.md#factory)<`J`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`J`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Factory`](util_functions.md#factory)<`K`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](util_functions.md#function1)<`J`, `K`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`K`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`Factory`](util_functions.md#factory)<`L`\>

Returns a `Factory` function that pipes the `source` through the provided operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](util_functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](util_functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](util_functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](util_functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](util_functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](util_functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](util_functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](util_functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](util_functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](util_functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](util_functions.md#function1)<`J`, `K`\> |
| `op12` | [`Function1`](util_functions.md#function1)<`K`, `L`\> |

#### Returns

[`Factory`](util_functions.md#factory)<`L`\>

___

### pipeUnsafe

▸ **pipeUnsafe**(`source`, ...`operators`): `unknown`

Pipes `source` through a series of unary functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `unknown` |
| `...operators` | [`Function1`](util_functions.md#function1)<`any`, `any`\>[] |

#### Returns

`unknown`

___

### raise

▸ **raise**<`T`\>(`message?`): `T`

Throws a javascript error using the provided message.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `unknown` |

#### Returns

`T`

___

### returns

▸ **returns**<`T`\>(`v`): (...`_args`: `unknown`[]) => `T`

Returns a function that takes an arbitrary number of arguments and always returns `v`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`fn`

▸ (...`_args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `unknown`[] |

##### Returns

`T`

___

### strictEquality

▸ **strictEquality**<`T`\>(`a`, `b`): `boolean`

The javascript strict equality function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

#### Returns

`boolean`

___

### sum

▸ **sum**(...`args`): `number`

A function that returns the result of summing
it's arguments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `number`[] |

#### Returns

`number`

___

### updateReducer

▸ **updateReducer**<`T`\>(`acc`, `updater`): `T`

A `Reducer` functions that applies `updater` to `acc` to compute the next
accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `T` |
| `updater` | [`Updater`](util_functions.md#updater)<`T`\> |

#### Returns

`T`
