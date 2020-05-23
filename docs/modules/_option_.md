[reactive-js](../README.md) › ["option"](_option_.md)

# Module: "option"

## Index

### Type aliases

* [Option](_option_.md#option)

### Variables

* [none](_option_.md#const-none)

### Functions

* [isNone](_option_.md#const-isnone)
* [isSome](_option_.md#const-issome)
* [orCompute](_option_.md#const-orcompute)

## Type aliases

###  Option

Ƭ **Option**: *T | undefined*

Represents an unboxed value of type T or undefined.

## Variables

### `Const` none

• **none**: *any* = undefined

An alias for undefined.

## Functions

### `Const` isNone

▸ **isNone**<**T**>(`option`: [Option](_option_.md#option)‹T›): *option is undefined*

Returns true if `option` is `none`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |

**Returns:** *option is undefined*

___

### `Const` isSome

▸ **isSome**<**T**>(`option`: [Option](_option_.md#option)‹T›): *option is T*

Returns true if `option` is not `none`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`option` | [Option](_option_.md#option)‹T› |

**Returns:** *option is T*

___

### `Const` orCompute

▸ **orCompute**<**T**>(`compute`: [Factory](_functions_.md#factory)‹T›): *[Function1](_functions_.md#function1)‹[Option](_option_.md#option)‹T›, T›*

Returns a function that takes an `Option<T>`, returning it's value
if not `none`, otherwise returns the result of invoking the function `compute`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`compute` | [Factory](_functions_.md#factory)‹T› |

**Returns:** *[Function1](_functions_.md#function1)‹[Option](_option_.md#option)‹T›, T›*
