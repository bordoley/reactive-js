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
- [composeUnsafe](functions.md#composeunsafe)
- [decrement](functions.md#decrement)
- [decrementBy](functions.md#decrementby)
- [error](functions.md#error)
- [errorWithDebugMessage](functions.md#errorwithdebugmessage)
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
- [negate](functions.md#negate)
- [newInstance](functions.md#newinstance)
- [partial](functions.md#partial)
- [pipe](functions.md#pipe)
- [pipeLazy](functions.md#pipelazy)
- [pipeSome](functions.md#pipesome)
- [pipeSomeLazy](functions.md#pipesomelazy)
- [pipeUnsafe](functions.md#pipeunsafe)
- [raise](functions.md#raise)
- [raiseError](functions.md#raiseerror)
- [raiseWithDebugMessage](functions.md#raisewithdebugmessage)
- [returns](functions.md#returns)
- [strictEquality](functions.md#strictequality)
- [unsafeCast](functions.md#unsafecast)

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

• `Const` **none**: `undefined`

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

▸ **alwaysTrue**(`..._args`): `boolean`

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

### bind

▸ **bind**<`F`\>(`f`, `thiz`): `F`

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

### composeUnsafe

▸ **composeUnsafe**(`...operators`): [`Function1`](functions.md#function1)<`any`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...operators` | [`Function1`](functions.md#function1)<`any`, `unknown`\>[] |

#### Returns

[`Function1`](functions.md#function1)<`any`, `unknown`\>

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `unknown` |

#### Returns

`Error`

___

### errorWithDebugMessage

▸ **errorWithDebugMessage**(`message`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Error`

___

### greaterThan

▸ **greaterThan**(`v`): (`x`: `number`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`fn`

▸ (`x`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

##### Returns

`boolean`

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

▸ **identityLazy**<`T`\>(): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

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

▸ **isEven**(`x`): `boolean`

Returns `true` if `x` is an even number, otherwise `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

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

▸ **isOdd**(`x`): `boolean`

Returns `true` if `x` is an odd number, otherwise `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

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

▸ **isSome**<`T`\>(`option`): option is T

Returns true if `option` is not `none`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`Optional`](functions.md#optional)<`T`\> |

#### Returns

option is T

___

### isString

▸ **isString**(`s`): s is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `unknown` |

#### Returns

s is string

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

▸ **lessThan**(`v`): (`x`: `number`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`fn`

▸ (`x`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

##### Returns

`boolean`

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

▸ **pipeUnsafe**(`source`, `...operators`): `unknown`

Pipes `source` through a series of unary functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `unknown` |
| `...operators` | [`Function1`](functions.md#function1)<`any`, `any`\>[] |

#### Returns

`unknown`

___

### raise

▸ **raise**<`T`\>(`e?`): `T`

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

### raiseWithDebugMessage

▸ **raiseWithDebugMessage**<`T`\>(`message`): `T`

Throws a javascript error using the provided message.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

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

### unsafeCast

▸ **unsafeCast**<`T`\>(`_v`): asserts \_v is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_v` | `unknown` |

#### Returns

asserts \_v is T
