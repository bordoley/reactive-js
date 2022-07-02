[Reactive-JS](../README.md) / functions

# Module: functions

## Table of contents

### Type Aliases

- [Comparator](functions.md#comparator)
- [Constructor](functions.md#constructor)
- [Constructor1](functions.md#constructor1)
- [Constructor2](functions.md#constructor2)
- [Constructor3](functions.md#constructor3)
- [Constructor4](functions.md#constructor4)
- [Equality](functions.md#equality)
- [Factory](functions.md#factory)
- [Function1](functions.md#function1)
- [Function2](functions.md#function2)
- [Function3](functions.md#function3)
- [Function4](functions.md#function4)
- [Function5](functions.md#function5)
- [Function6](functions.md#function6)
- [Function7](functions.md#function7)
- [Function8](functions.md#function8)
- [Function9](functions.md#function9)
- [Predicate](functions.md#predicate)
- [Reducer](functions.md#reducer)
- [SideEffect](functions.md#sideeffect)
- [SideEffect1](functions.md#sideeffect1)
- [SideEffect2](functions.md#sideeffect2)
- [SideEffect3](functions.md#sideeffect3)
- [SideEffect4](functions.md#sideeffect4)
- [SideEffect5](functions.md#sideeffect5)
- [SideEffect6](functions.md#sideeffect6)
- [SideEffect7](functions.md#sideeffect7)
- [TypePredicate](functions.md#typepredicate)
- [Updater](functions.md#updater)

### Functions

- [alwaysFalse](functions.md#alwaysfalse)
- [alwaysTrue](functions.md#alwaystrue)
- [arrayEquality](functions.md#arrayequality)
- [callWith](functions.md#callwith)
- [compose](functions.md#compose)
- [decrement](functions.md#decrement)
- [decrementBy](functions.md#decrementby)
- [flip](functions.md#flip)
- [floor](functions.md#floor)
- [identity](functions.md#identity)
- [ignore](functions.md#ignore)
- [increment](functions.md#increment)
- [incrementBy](functions.md#incrementby)
- [instanceFactory](functions.md#instancefactory)
- [isEmpty](functions.md#isempty)
- [isEqualTo](functions.md#isequalto)
- [isEven](functions.md#iseven)
- [isOdd](functions.md#isodd)
- [length](functions.md#length)
- [max](functions.md#max)
- [min](functions.md#min)
- [negate](functions.md#negate)
- [newInstance](functions.md#newinstance)
- [newInstanceWith](functions.md#newinstancewith)
- [pipe](functions.md#pipe)
- [pipeLazy](functions.md#pipelazy)
- [raise](functions.md#raise)
- [returns](functions.md#returns)
- [strictEquality](functions.md#strictequality)
- [sum](functions.md#sum)
- [updateReducer](functions.md#updatereducer)

## Type Aliases

### Comparator

Ƭ **Comparator**<`T`\>: (`a`: `T`, `b`: `T`) => `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`a`, `b`): `number`

Compare two values to determine their relative ordering.

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`number`

A signed number indicating the relative order of `a` and `b`:
  - If less than 0, `a` is less `b`.
  - If 0, `a` equals `b`.
  - If greater than 0, `a` is greater than `b`.

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

### Equality

Ƭ **Equality**<`T`\>: (`a`: `T`, `b`: `T`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`a`, `b`): `boolean`

Compare two values for equality.

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`boolean`

true if `a` is equals to `b`, otherwise false

___

### Factory

Ƭ **Factory**<`T`\>: () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `T`

A function that returns instances of type `T`.

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

A one argument function that returns a value of type `T`.

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

A two argument function that returns a value of type `T`.

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

A three argument function that returns a value of type `T`.

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

A four argument function that returns a value of type `T`.

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

A five argument function that returns a value of type `T`.

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

A six argument function that returns a value of type `T`.

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

A seven argument function that returns a value of type `T`.

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

An eight argument function that returns a value of type `T`.

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

A nine argument function that returns a value of type `T`.

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

### Predicate

Ƭ **Predicate**<`T`\>: (`a`: `T`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`a`): `boolean`

A one argument predicate function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

##### Returns

`boolean`

___

### Reducer

Ƭ **Reducer**<`T`, `TAcc`\>: (`acc`: `TAcc`, `next`: `T`) => `TAcc`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Type declaration

▸ (`acc`, `next`): `TAcc`

A pure function that takes the current accumulator and next value,
returning the next accumulated value.

##### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `TAcc` |
| `next` | `T` |

##### Returns

`TAcc`

___

### SideEffect

Ƭ **SideEffect**: () => `void`

#### Type declaration

▸ (): `void`

A function that takes no arguments and performs a side-effect.

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

A function that takes one argument and performs a side-effect.

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

A function that takes two arguments and performs a side-effect.

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

A function that takes three arguments and performs a side-effect.

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

A function that takes four arguments and performs a side-effect.

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

A function that takes five arguments and performs a side-effect.

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

A function that takes six arguments and performs a side-effect.

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

A function that takes seven arguments and performs a side-effect.

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

Ƭ **Updater**<`T`\>: (`prev`: `T`) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`prev`): `T`

Computes a new value of type `T` from the previous value of type `T`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `prev` | `T` |

##### Returns

`T`

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

▸ **arrayEquality**<`T`\>(`valuesEquality?`): [`Equality`](functions.md#equality)<readonly `T`[]\>

Returns an equality function that compares two readonly arrays for equality,
comparing their values using `valuesEquality`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuesEquality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`Equality`](functions.md#equality)<readonly `T`[]\>

___

### callWith

▸ **callWith**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, `T`\>

▸ **callWith**<`TA`, `T`\>(`a`): [`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TA`, `T`\>, `T`\>

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

[`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TA`, `T`\>, `T`\>

▸ **callWith**<`TA`, `TB`, `T`\>(`a`, `b`): [`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TA`, `TB`, `T`\>, `T`\>

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

[`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TA`, `TB`, `T`\>, `T`\>

▸ **callWith**<`TA`, `TB`, `TC`, `T`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\>, `T`\>

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

[`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\>, `T`\>

▸ **callWith**<`TA`, `TB`, `TC`, `TD`, `T`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<[`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\>, `T`\>

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

[`Function1`](functions.md#function1)<[`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\>, `T`\>

___

### compose

▸ **compose**<`T`, `A`, `B`\>(`op1`, `op2`): [`Function1`](functions.md#function1)<`T`, `B`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `B`\>

▸ **compose**<`T`, `A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`Function1`](functions.md#function1)<`T`, `C`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `C`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`Function1`](functions.md#function1)<`T`, `D`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `D`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`Function1`](functions.md#function1)<`T`, `E`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `E`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Function1`](functions.md#function1)<`T`, `F`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `F`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Function1`](functions.md#function1)<`T`, `G`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `G`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Function1`](functions.md#function1)<`T`, `H`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `H`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Function1`](functions.md#function1)<`T`, `I`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `I`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Function1`](functions.md#function1)<`T`, `J`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `J`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Function1`](functions.md#function1)<`T`, `K`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `K`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`Function1`](functions.md#function1)<`T`, `L`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K`\> |
| `op12` | [`Function1`](functions.md#function1)<`K`, `L`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `L`\>

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

▸ **decrementBy**(`decr`): [`Updater`](functions.md#updater)<`number`\>

Returns a function that decrements a number `x` by the value `decr`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `decr` | `number` |

#### Returns

[`Updater`](functions.md#updater)<`number`\>

___

### flip

▸ **flip**<`TA`, `TB`, `T`\>(`f`): [`Function2`](functions.md#function2)<`TB`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function2`](functions.md#function2)<`TB`, `TA`, `T`\>

▸ **flip**<`TA`, `TB`, `TC`, `T`\>(`f`): [`Function3`](functions.md#function3)<`TC`, `TB`, `TA`, `T`\>

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
| `f` | [`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\> |

#### Returns

[`Function3`](functions.md#function3)<`TC`, `TB`, `TA`, `T`\>

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

▸ **incrementBy**(`incr`): [`Updater`](functions.md#updater)<`number`\>

Returns a function that increments a number `x` by the value `incr`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `incr` | `number` |

#### Returns

[`Updater`](functions.md#updater)<`number`\>

___

### instanceFactory

▸ **instanceFactory**<`T`\>(`Constructor`): [`Factory`](functions.md#factory)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | [`Constructor`](functions.md#constructor)<`T`\> |

#### Returns

[`Factory`](functions.md#factory)<`T`\>

▸ **instanceFactory**<`T`, `TA`\>(`Constructor`): [`Function1`](functions.md#function1)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | [`Constructor1`](functions.md#constructor1)<`TA`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TA`, `T`\>

▸ **instanceFactory**<`T`, `TA`, `TB`\>(`Constructor`): [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | [`Constructor2`](functions.md#constructor2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function2`](functions.md#function2)<`TA`, `TB`, `T`\>

▸ **instanceFactory**<`T`, `TA`, `TB`, `TC`\>(`Constructor`): [`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\>

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
| `Constructor` | [`Constructor3`](functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\> |

#### Returns

[`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\>

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

▸ **isEqualTo**<`T`\>(`b`, `options?`): [`Predicate`](functions.md#predicate)<`T`\>

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
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`Predicate`](functions.md#predicate)<`T`\>

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

### length

▸ **length**(`arr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string` \| readonly `unknown`[] |

#### Returns

`number`

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
| `Constructor` | [`Constructor`](functions.md#constructor)<`T`\> |

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
| `Constructor` | [`Constructor1`](functions.md#constructor1)<`TA`, `T`\> |
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
| `Constructor` | [`Constructor2`](functions.md#constructor2)<`TA`, `TB`, `T`\> |
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
| `Constructor` | [`Constructor3`](functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\> |
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
| `Constructor` | [`Constructor4`](functions.md#constructor4)<`TA`, `TB`, `TC`, `TD`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`T`

___

### newInstanceWith

▸ **newInstanceWith**<`T`\>(): [`Function1`](functions.md#function1)<[`Constructor`](functions.md#constructor)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Constructor`](functions.md#constructor)<`T`\>, `T`\>

▸ **newInstanceWith**<`T`, `TA`\>(`a`): [`Function1`](functions.md#function1)<[`Constructor1`](functions.md#constructor1)<`TA`, `T`\>, `T`\>

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

[`Function1`](functions.md#function1)<[`Constructor1`](functions.md#constructor1)<`TA`, `T`\>, `T`\>

▸ **newInstanceWith**<`T`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<[`Constructor2`](functions.md#constructor2)<`TA`, `TB`, `T`\>, `T`\>

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

[`Function1`](functions.md#function1)<[`Constructor2`](functions.md#constructor2)<`TA`, `TB`, `T`\>, `T`\>

▸ **newInstanceWith**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<[`Constructor3`](functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\>, `T`\>

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

[`Function1`](functions.md#function1)<[`Constructor3`](functions.md#constructor3)<`TA`, `TB`, `TC`, `T`\>, `T`\>

▸ **newInstanceWith**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<[`Constructor4`](functions.md#constructor4)<`TA`, `TB`, `TC`, `TD`, `T`\>, `T`\>

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

[`Function1`](functions.md#function1)<[`Constructor4`](functions.md#constructor4)<`TA`, `TB`, `TC`, `TD`, `T`\>, `T`\>

___

### pipe

▸ **pipe**<`T`, `A`\>(`src`, `op1`): `A`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |

#### Returns

`A`

▸ **pipe**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): `B`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

#### Returns

`B`

▸ **pipe**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): `C`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |

#### Returns

`C`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): `D`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |

#### Returns

`D`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): `E`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |

#### Returns

`E`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): `F`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |

#### Returns

`F`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): `G`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |

#### Returns

`G`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): `H`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |

#### Returns

`H`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): `I`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |

#### Returns

`I`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): `J`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |

#### Returns

`J`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): `K`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K`\> |

#### Returns

`K`

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): `L`

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K`\> |
| `op12` | [`Function1`](functions.md#function1)<`K`, `L`\> |

#### Returns

`L`

▸ **pipe**(`source`, ...`operators`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `unknown` |
| `...operators` | [`Function1`](functions.md#function1)<`any`, `unknown`\>[] |

#### Returns

`unknown`

___

### pipeLazy

▸ **pipeLazy**<`T`, `A`\>(`src`, `op1`): [`Factory`](functions.md#factory)<`A`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |

#### Returns

[`Factory`](functions.md#factory)<`A`\>

▸ **pipeLazy**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): [`Factory`](functions.md#factory)<`B`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

#### Returns

[`Factory`](functions.md#factory)<`B`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): [`Factory`](functions.md#factory)<`C`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |

#### Returns

[`Factory`](functions.md#factory)<`C`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): [`Factory`](functions.md#factory)<`D`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |

#### Returns

[`Factory`](functions.md#factory)<`D`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): [`Factory`](functions.md#factory)<`E`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |

#### Returns

[`Factory`](functions.md#factory)<`E`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Factory`](functions.md#factory)<`F`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |

#### Returns

[`Factory`](functions.md#factory)<`F`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Factory`](functions.md#factory)<`G`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |

#### Returns

[`Factory`](functions.md#factory)<`G`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Factory`](functions.md#factory)<`H`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |

#### Returns

[`Factory`](functions.md#factory)<`H`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Factory`](functions.md#factory)<`I`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |

#### Returns

[`Factory`](functions.md#factory)<`I`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Factory`](functions.md#factory)<`J`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |

#### Returns

[`Factory`](functions.md#factory)<`J`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Factory`](functions.md#factory)<`K`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K`\> |

#### Returns

[`Factory`](functions.md#factory)<`K`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`Factory`](functions.md#factory)<`L`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I`\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J`\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K`\> |
| `op12` | [`Function1`](functions.md#function1)<`K`, `L`\> |

#### Returns

[`Factory`](functions.md#factory)<`L`\>

▸ **pipeLazy**(`source`, ...`operators`): [`Factory`](functions.md#factory)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `unknown` |
| `...operators` | [`Function1`](functions.md#function1)<`any`, `unknown`\>[] |

#### Returns

[`Factory`](functions.md#factory)<`unknown`\>

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
| `updater` | [`Updater`](functions.md#updater)<`T`\> |

#### Returns

`T`
