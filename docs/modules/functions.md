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
- [Optional](functions.md#optional)
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
- [Tuple1](functions.md#tuple1)
- [Tuple2](functions.md#tuple2)
- [Tuple3](functions.md#tuple3)
- [Tuple4](functions.md#tuple4)
- [Tuple5](functions.md#tuple5)
- [Tuple6](functions.md#tuple6)
- [Tuple7](functions.md#tuple7)
- [Tuple8](functions.md#tuple8)
- [Tuple9](functions.md#tuple9)
- [TypePredicate](functions.md#typepredicate)
- [Updater](functions.md#updater)

### Variables

- [none](functions.md#none)

### Functions

- [alwaysFalse](functions.md#alwaysfalse)
- [alwaysTrue](functions.md#alwaystrue)
- [arrayEquality](functions.md#arrayequality)
- [bind](functions.md#bind)
- [bindMethod](functions.md#bindmethod)
- [call](functions.md#call)
- [compose](functions.md#compose)
- [debug](functions.md#debug)
- [decrement](functions.md#decrement)
- [decrementBy](functions.md#decrementby)
- [error](functions.md#error)
- [greaterThan](functions.md#greaterthan)
- [identity](functions.md#identity)
- [identityLazy](functions.md#identitylazy)
- [ignore](functions.md#ignore)
- [increment](functions.md#increment)
- [incrementBy](functions.md#incrementby)
- [invoke](functions.md#invoke)
- [isEqualTo](functions.md#isequalto)
- [isEven](functions.md#iseven)
- [isFalse](functions.md#isfalse)
- [isFunction](functions.md#isfunction)
- [isNone](functions.md#isnone)
- [isNotEqualTo](functions.md#isnotequalto)
- [isNumber](functions.md#isnumber)
- [isObject](functions.md#isobject)
- [isOdd](functions.md#isodd)
- [isReadonlyArray](functions.md#isreadonlyarray)
- [isSome](functions.md#issome)
- [isString](functions.md#isstring)
- [isTrue](functions.md#istrue)
- [lessThan](functions.md#lessthan)
- [log](functions.md#log)
- [negate](functions.md#negate)
- [newInstance](functions.md#newinstance)
- [partial](functions.md#partial)
- [pick](functions.md#pick)
- [pickUnsafe](functions.md#pickunsafe)
- [pipe](functions.md#pipe)
- [pipeAsync](functions.md#pipeasync)
- [pipeLazy](functions.md#pipelazy)
- [pipeLazyAsync](functions.md#pipelazyasync)
- [pipeSome](functions.md#pipesome)
- [pipeSomeLazy](functions.md#pipesomelazy)
- [pipeUnsafe](functions.md#pipeunsafe)
- [raise](functions.md#raise)
- [raiseError](functions.md#raiseerror)
- [raiseIf](functions.md#raiseif)
- [returns](functions.md#returns)
- [strictEquality](functions.md#strictequality)
- [tuple](functions.md#tuple)

## Type Aliases

### Comparator

Ƭ **Comparator**<`T`\>: [`Function2`](functions.md#function2)<`T`, `T`, `number`\>

Compare two values to determine their relative ordering.

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

Constructor function with 0 arguments.

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

Constructor function with 1 argument.

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

Constructor function with 2 arguments.

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

Constructor function with 3 arguments.

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

Constructor function with 4 arguments.

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

___

### Equality

Ƭ **Equality**<`T`\>: [`Function2`](functions.md#function2)<`T`, `T`, `boolean`\>

Compare two values for equality.

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

A function which instantiates new instances of type `T`.

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

### Optional

Ƭ **Optional**<`T`\>: `T` \| `undefined`

Represents an unboxed value of type T or undefined.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### Predicate

Ƭ **Predicate**<`T`\>: [`Function1`](functions.md#function1)<`T`, `boolean`\>

A one argument predicate function.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Reducer

Ƭ **Reducer**<`T`, `TAcc`\>: [`Function2`](functions.md#function2)<`TAcc`, `T`, `TAcc`\>

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

### Tuple1

Ƭ **Tuple1**<`TA`\>: readonly [`TA`]

#### Type parameters

| Name |
| :------ |
| `TA` |

___

### Tuple2

Ƭ **Tuple2**<`TA`, `TB`\>: readonly [`TA`, `TB`]

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

___

### Tuple3

Ƭ **Tuple3**<`TA`, `TB`, `TC`\>: readonly [`TA`, `TB`, `TC`]

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

___

### Tuple4

Ƭ **Tuple4**<`TA`, `TB`, `TC`, `TD`\>: readonly [`TA`, `TB`, `TC`, `TD`]

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

___

### Tuple5

Ƭ **Tuple5**<`TA`, `TB`, `TC`, `TD`, `TE`\>: readonly [`TA`, `TB`, `TC`, `TD`, `TE`]

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

___

### Tuple6

Ƭ **Tuple6**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>: readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

___

### Tuple7

Ƭ **Tuple7**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>: readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]

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

___

### Tuple8

Ƭ **Tuple8**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>: readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]

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

___

### Tuple9

Ƭ **Tuple9**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>: readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]

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

Ƭ **Updater**<`T`\>: [`Function1`](functions.md#function1)<`T`, `T`\>

Computes a new value of type `T` from the previous value of type `T`.

#### Type parameters

| Name |
| :------ |
| `T` |

## Variables

### none

• `Const` **none**: `Signature`[``"none"``]

An alias for undefined.

## Functions

### alwaysFalse

▸ **alwaysFalse**(`..._args`): `boolean`

A function that always returns `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `unknown`[] |

#### Returns

`boolean`

___

### alwaysTrue

▸ **alwaysTrue**(`..._args`): ``true``

A function that always returns `true`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `unknown`[] |

#### Returns

``true``

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

### bind

▸ **bind**<`F`\>(`f`, `thiz`): `F`

Creates a new function that, when called, calls `f` with its
this keyword set to the provided value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `F` |
| `thiz` | `unknown` |

#### Returns

`F`

___

### bindMethod

▸ **bindMethod**<`T`, `TKey`\>(`thiz`, `key`): `T`[`TKey`]

Creates a new function that, when called, invokes the method
`thiz[key]` with the provided arguments.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`TKey`, (...`args`: `any`[]) => `any`\> |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thiz` | `T` |
| `key` | `TKey` |

#### Returns

`T`[`TKey`]

___

### call

▸ **call**<`TInstance`, `T`\>(`f`, `self`): `T`

Calls the function `f` with a given self value as this and arguments provided individually.

#### Type parameters

| Name |
| :------ |
| `TInstance` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `T` |
| `self` | `TInstance` |

#### Returns

`T`

▸ **call**<`TInstance`, `T`, `TA`\>(`f`, `self`, `a`): `T`

Calls the function `f` with a given self value as this and arguments provided individually.

#### Type parameters

| Name |
| :------ |
| `TInstance` |
| `T` |
| `TA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `TA`) => `T` |
| `self` | `TInstance` |
| `a` | `TA` |

#### Returns

`T`

▸ **call**<`TInstance`, `T`, `TA`, `TB`\>(`f`, `self`, `a`, `b`): `T`

Calls the function `f` with a given self value as this and arguments provided individually.

#### Type parameters

| Name |
| :------ |
| `TInstance` |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `TA`, `b`: `TB`) => `T` |
| `self` | `TInstance` |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`T`

___

### compose

▸ **compose**<`T`, `A`, `B`\>(`op1`, `op2`): [`Function1`](functions.md#function1)<`T`, `B`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `B`\>

▸ **compose**<`T`, `A`, `B`\>(`op1`, `op2`): [`Function1`](functions.md#function1)<`T`, `B`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `B`\>

▸ **compose**<`T`, `A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`Function1`](functions.md#function1)<`T`, `C`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `C`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`Function1`](functions.md#function1)<`T`, `D`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `D`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`Function1`](functions.md#function1)<`T`, `E`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `E`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Function1`](functions.md#function1)<`T`, `F`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `F`\>

▸ **compose**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Function1`](functions.md#function1)<`T`, `G`\>

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

### debug

▸ **debug**<`T`\>(`v`): `T`

Invokes the debugger when compiled in dev mode. In production mode,
is a noop.

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

### error

▸ **error**(`message?`): `Error`

Factory for a javascript Error from an unknown object type.

Returns the provide object if it is an instance of Error,
otherwise a new Error object is created with the provided object as it's cause.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `unknown` |

#### Returns

`Error`

___

### greaterThan

▸ **greaterThan**(`v`): [`Predicate`](functions.md#predicate)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`Predicate`](functions.md#predicate)<`number`\>

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

### identityLazy

▸ **identityLazy**<`T`\>(): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### ignore

▸ **ignore**(`..._args`): `void`

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

### invoke

▸ **invoke**<`T`, `TKey`\>(`method`, `...args`): [`Function1`](functions.md#function1)<`T`, `ReturnType`<`T`[`TKey`]\>\>

Enables invoking a method on an object as a unary function within
a pipeline operation.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`TKey`, (...`args`: `any`[]) => `any`\> |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `TKey` |
| `...args` | `Parameters`<`T`[`TKey`]\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `ReturnType`<`T`[`TKey`]\>\>

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

▸ **isEven**(`a`): `boolean`

Returns `true` if `x` is an even number, otherwise `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`boolean`

___

### isFalse

▸ **isFalse**(`v`): v is false

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

v is false

___

### isFunction

▸ **isFunction**(`f`): f is Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `unknown` |

#### Returns

f is Function

___

### isNone

▸ **isNone**<`T`\>(`option`): option is undefined

Returns true if `option` is `none`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`Optional`](functions.md#optional)<`T`\> |

#### Returns

option is undefined

___

### isNotEqualTo

▸ **isNotEqualTo**<`T`\>(`b`, `options?`): [`Predicate`](functions.md#predicate)<`T`\>

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

### isNumber

▸ **isNumber**(`n`): n is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `unknown` |

#### Returns

n is number

___

### isObject

▸ **isObject**(`o`): o is object

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

#### Returns

o is object

___

### isOdd

▸ **isOdd**(`a`): `boolean`

Predicate that returns `true` if `x` is an odd number, otherwise `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`boolean`

___

### isReadonlyArray

▸ **isReadonlyArray**<`T`\>(`o`): o is readonly T[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

#### Returns

o is readonly T[]

___

### isSome

▸ **isSome**<`T`\>(`v`): v is T

Returns true if `option` is not `none`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Optional`](functions.md#optional)<`T`\> |

#### Returns

v is T

___

### isString

▸ **isString**(`o`): o is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

#### Returns

o is string

___

### isTrue

▸ **isTrue**(`v`): v is true

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

v is true

___

### lessThan

▸ **lessThan**(`v`): [`Predicate`](functions.md#predicate)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`Predicate`](functions.md#predicate)<`number`\>

___

### log

▸ **log**<`T`\>(`v`): `T`

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

### partial

▸ **partial**<`TA`, `TB`, `TOut`\>(`b`): [`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TA`, `TB`, `TOut`\>, [`Function1`](functions.md#function1)<`TA`, `TOut`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `TB` |

#### Returns

[`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TA`, `TB`, `TOut`\>, [`Function1`](functions.md#function1)<`TA`, `TOut`\>\>

▸ **partial**<`TA`, `TB`, `TC`, `TOut`\>(`b`, `c`): [`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `TOut`\>, [`Function1`](functions.md#function1)<`TA`, `TOut`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

[`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `TOut`\>, [`Function1`](functions.md#function1)<`TA`, `TOut`\>\>

▸ **partial**<`TA`, `TB`, `TC`, `TD`, `TOut`\>(`b`, `c`, `d`): [`Function1`](functions.md#function1)<[`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `TOut`\>, [`Function1`](functions.md#function1)<`TA`, `TOut`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

[`Function1`](functions.md#function1)<[`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `TOut`\>, [`Function1`](functions.md#function1)<`TA`, `TOut`\>\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Function1`](functions.md#function1)<`T`, `T`[`TKey`]\>

Returns a function that can be used to pick deeply nested properties
from an Object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Function1`](functions.md#function1)<`T`, `T`[`TKeyA`][`TKeyB`]\>

Returns a function that can be used to pick deeply nested properties
from an Object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Function1`](functions.md#function1)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

Returns a function that can be used to pick deeply nested properties
from an Object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`, `TKeyD`\>(`keyA`, `keyB`, `keyC`, `keyD`): [`Function1`](functions.md#function1)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`][`TKeyD`]\>

Returns a function that can be used to pick deeply nested properties
from an Object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |
| `TKeyD` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |
| `keyD` | `TKeyD` |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`][`TKeyD`]\>

___

### pickUnsafe

▸ **pickUnsafe**<`T`\>(`...keys`): [`Function1`](functions.md#function1)<{}, `T`\>

Type-unsafe variant of `pick`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | (`string` \| `number` \| `symbol`)[] |

#### Returns

[`Function1`](functions.md#function1)<{}, `T`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |

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

___

### pipeAsync

▸ **pipeAsync**<`T`, `A`\>(`src`, `op1`): `Promise`<`A`\>

Pipes the source through a series of async operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |

#### Returns

`Promise`<`A`\>

▸ **pipeAsync**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): `Promise`<`B`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |

#### Returns

`Promise`<`B`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): `Promise`<`C`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |

#### Returns

`Promise`<`C`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): `Promise`<`D`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |

#### Returns

`Promise`<`D`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): `Promise`<`E`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |

#### Returns

`Promise`<`E`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): `Promise`<`F`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |

#### Returns

`Promise`<`F`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): `Promise`<`G`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |

#### Returns

`Promise`<`G`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): `Promise`<`H`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |

#### Returns

`Promise`<`H`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): `Promise`<`I`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I` \| `Promise`<`I`\>\> |

#### Returns

`Promise`<`I`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): `Promise`<`J`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I` \| `Promise`<`I`\>\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J` \| `Promise`<`J`\>\> |

#### Returns

`Promise`<`J`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): `Promise`<`K`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I` \| `Promise`<`I`\>\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J` \| `Promise`<`J`\>\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K` \| `Promise`<`K`\>\> |

#### Returns

`Promise`<`K`\>

▸ **pipeAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): `Promise`<`L`\>

Pipes the source through a series of async operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I` \| `Promise`<`I`\>\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J` \| `Promise`<`J`\>\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K` \| `Promise`<`K`\>\> |
| `op12` | [`Function1`](functions.md#function1)<`K`, `L` \| `Promise`<`L`\>\> |

#### Returns

`Promise`<`L`\>

___

### pipeLazy

▸ **pipeLazy**<`T`, `A`\>(`src`, `op1`): [`Factory`](functions.md#factory)<`A`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |

#### Returns

[`Factory`](functions.md#factory)<`A`\>

▸ **pipeLazy**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): [`Factory`](functions.md#factory)<`B`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

#### Returns

[`Factory`](functions.md#factory)<`B`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): [`Factory`](functions.md#factory)<`C`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |

#### Returns

[`Factory`](functions.md#factory)<`C`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): [`Factory`](functions.md#factory)<`D`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |

#### Returns

[`Factory`](functions.md#factory)<`D`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): [`Factory`](functions.md#factory)<`E`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |

#### Returns

[`Factory`](functions.md#factory)<`E`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Factory`](functions.md#factory)<`F`\>

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |

#### Returns

[`Factory`](functions.md#factory)<`F`\>

▸ **pipeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Factory`](functions.md#factory)<`G`\>

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

___

### pipeLazyAsync

▸ **pipeLazyAsync**<`T`, `A`\>(`src`, `op1`): [`Factory`](functions.md#factory)<`Promise`<`A`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`A`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): [`Factory`](functions.md#factory)<`Promise`<`B`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`B`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): [`Factory`](functions.md#factory)<`Promise`<`C`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`C`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): [`Factory`](functions.md#factory)<`Promise`<`D`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`D`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): [`Factory`](functions.md#factory)<`Promise`<`E`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`E`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Factory`](functions.md#factory)<`Promise`<`F`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`F`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Factory`](functions.md#factory)<`Promise`<`G`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`G`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Factory`](functions.md#factory)<`Promise`<`H`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`H`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Factory`](functions.md#factory)<`Promise`<`I`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I` \| `Promise`<`I`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`I`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Factory`](functions.md#factory)<`Promise`<`J`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I` \| `Promise`<`I`\>\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J` \| `Promise`<`J`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`J`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Factory`](functions.md#factory)<`Promise`<`K`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I` \| `Promise`<`I`\>\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J` \| `Promise`<`J`\>\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K` \| `Promise`<`K`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`K`\>\>

▸ **pipeLazyAsync**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`Factory`](functions.md#factory)<`Promise`<`L`\>\>

Returns a `Factory` function that pipes the source through
 the provided async function operators.

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
| `op1` | [`Function1`](functions.md#function1)<`T`, `A` \| `Promise`<`A`\>\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B` \| `Promise`<`B`\>\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C` \| `Promise`<`C`\>\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D` \| `Promise`<`D`\>\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E` \| `Promise`<`E`\>\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F` \| `Promise`<`F`\>\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G` \| `Promise`<`G`\>\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H` \| `Promise`<`H`\>\> |
| `op9` | [`Function1`](functions.md#function1)<`H`, `I` \| `Promise`<`I`\>\> |
| `op10` | [`Function1`](functions.md#function1)<`I`, `J` \| `Promise`<`J`\>\> |
| `op11` | [`Function1`](functions.md#function1)<`J`, `K` \| `Promise`<`K`\>\> |
| `op12` | [`Function1`](functions.md#function1)<`K`, `L` \| `Promise`<`L`\>\> |

#### Returns

[`Factory`](functions.md#factory)<`Promise`<`L`\>\>

___

### pipeSome

▸ **pipeSome**<`T`, `A`\>(`src`, `op1`): [`Optional`](functions.md#optional)<`A`\>

Pipes `source` through a series of unary functions if it is not undefined.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |

#### Returns

[`Optional`](functions.md#optional)<`A`\>

▸ **pipeSome**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): [`Optional`](functions.md#optional)<`B`\>

Pipes `source` through a series of unary functions if it is not undefined.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

#### Returns

[`Optional`](functions.md#optional)<`B`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): [`Optional`](functions.md#optional)<`C`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |

#### Returns

[`Optional`](functions.md#optional)<`C`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): [`Optional`](functions.md#optional)<`D`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |

#### Returns

[`Optional`](functions.md#optional)<`D`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): [`Optional`](functions.md#optional)<`E`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |

#### Returns

[`Optional`](functions.md#optional)<`E`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Optional`](functions.md#optional)<`F`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |

#### Returns

[`Optional`](functions.md#optional)<`F`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Optional`](functions.md#optional)<`G`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |

#### Returns

[`Optional`](functions.md#optional)<`G`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Optional`](functions.md#optional)<`H`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |
| `op8` | [`Function1`](functions.md#function1)<`G`, `H`\> |

#### Returns

[`Optional`](functions.md#optional)<`H`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Optional`](functions.md#optional)<`I`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

[`Optional`](functions.md#optional)<`I`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Optional`](functions.md#optional)<`J`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

[`Optional`](functions.md#optional)<`J`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Optional`](functions.md#optional)<`K`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

[`Optional`](functions.md#optional)<`K`\>

▸ **pipeSome**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`Optional`](functions.md#optional)<`L`\>

Pipes `source` through a series of unary functions if it is not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

[`Optional`](functions.md#optional)<`L`\>

___

### pipeSomeLazy

▸ **pipeSomeLazy**<`T`, `A`\>(`src`, `op1`): [`Factory`](functions.md#factory)<`A`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |

#### Returns

[`Factory`](functions.md#factory)<`A`\>

▸ **pipeSomeLazy**<`T`, `A`, `B`\>(`src`, `op1`, `op2`): [`Factory`](functions.md#factory)<`B`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |

#### Returns

[`Factory`](functions.md#factory)<`B`\>

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): [`Factory`](functions.md#factory)<`C`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |

#### Returns

[`Factory`](functions.md#factory)<`C`\>

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): [`Factory`](functions.md#factory)<`D`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |

#### Returns

[`Factory`](functions.md#factory)<`D`\>

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): [`Factory`](functions.md#factory)<`E`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |

#### Returns

[`Factory`](functions.md#factory)<`E`\>

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Factory`](functions.md#factory)<`F`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |

#### Returns

[`Factory`](functions.md#factory)<`F`\>

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Factory`](functions.md#factory)<`G`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
| `op1` | [`Function1`](functions.md#function1)<`T`, `A`\> |
| `op2` | [`Function1`](functions.md#function1)<`A`, `B`\> |
| `op3` | [`Function1`](functions.md#function1)<`B`, `C`\> |
| `op4` | [`Function1`](functions.md#function1)<`C`, `D`\> |
| `op5` | [`Function1`](functions.md#function1)<`D`, `E`\> |
| `op6` | [`Function1`](functions.md#function1)<`E`, `F`\> |
| `op7` | [`Function1`](functions.md#function1)<`F`, `G`\> |

#### Returns

[`Factory`](functions.md#factory)<`G`\>

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Factory`](functions.md#factory)<`H`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Factory`](functions.md#factory)<`I`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Factory`](functions.md#factory)<`J`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Factory`](functions.md#factory)<`K`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

▸ **pipeSomeLazy**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`Factory`](functions.md#factory)<`L`\>

Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.

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
| `src` | [`Optional`](functions.md#optional)<`T`\> |
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

___

### pipeUnsafe

▸ **pipeUnsafe**<`T`\>(`source`, `...operators`): `T`

Pipes `source` through a series of unary functions.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `unknown` |
| `...operators` | [`Function1`](functions.md#function1)<`any`, `any`\>[] |

#### Returns

`T`

___

### raise

▸ **raise**<`T`\>(`e?`): `T`

Throws an error, wrapping the provided object in a Javascript Error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `unknown` |

#### Returns

`T`

___

### raiseError

▸ **raiseError**<`T`\>(`e`): `T`

Throws the provided error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`T`

___

### raiseIf

▸ **raiseIf**(`condition`, `message`): `void`

Throws an error with the provided message is the condition is true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `message` | `string` |

#### Returns

`void`

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

▸ (`..._args`): `T`

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

### tuple

▸ **tuple**<`TA`\>(`a`): [`Tuple1`](functions.md#tuple1)<`TA`\>

Typed function for creating tuple instances.

#### Type parameters

| Name |
| :------ |
| `TA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |

#### Returns

[`Tuple1`](functions.md#tuple1)<`TA`\>

▸ **tuple**<`TA`, `TB`\>(`a`, `b`): [`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>

Typed function for creating tuple instances.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>

▸ **tuple**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>

Typed function for creating tuple instances.

#### Type parameters

| Name |
| :------ |
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

[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>

▸ **tuple**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>

Typed function for creating tuple instances.

#### Type parameters

| Name |
| :------ |
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

[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>

▸ **tuple**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>

Typed function for creating tuple instances.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>

▸ **tuple**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>

Typed function for creating tuple instances.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>
