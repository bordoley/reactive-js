[undefined - vundefined](../README.md) › ["option"](_option_.md)

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

## Variables

### `Const` none

• **none**: *any* = undefined

## Functions

### `Const` isNone

▸ **isNone**<**T**>(`option`: [Option](_option_.md#option)‹T›): *option is undefined*

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

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`compute` | [Factory](_functions_.md#factory)‹T› |

**Returns:** *[Function1](_functions_.md#function1)‹[Option](_option_.md#option)‹T›, T›*
