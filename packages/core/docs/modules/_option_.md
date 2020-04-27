[@reactive-js/core - v0.0.37](../README.md) › ["option"](_option_.md)

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

▸ **orCompute**<**T**>(`compute`: function): *(Anonymous function)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **compute**: *function*

▸ (): *T*

**Returns:** *(Anonymous function)*
