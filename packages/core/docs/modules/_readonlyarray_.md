[@reactive-js/core - v0.0.40](../README.md) › ["readonlyArray"](_readonlyarray_.md)

# Module: "readonlyArray"

## Index

### Type aliases

* [ReadonlyArrayOperator](_readonlyarray_.md#readonlyarrayoperator)

### Functions

* [everySatisfy](_readonlyarray_.md#const-everysatisfy)
* [fromObject](_readonlyarray_.md#const-fromobject)
* [join](_readonlyarray_.md#const-join)
* [keep](_readonlyarray_.md#const-keep)
* [length](_readonlyarray_.md#const-length)
* [map](_readonlyarray_.md#const-map)
* [reduce](_readonlyarray_.md#const-reduce)
* [reduceRight](_readonlyarray_.md#const-reduceright)

## Type aliases

###  ReadonlyArrayOperator

Ƭ **ReadonlyArrayOperator**: *[Function1](_functions_.md#function1)‹keyof TA[], keyof TB[]›*

## Functions

### `Const` everySatisfy

▸ **everySatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Function1](_functions_.md#function1)‹keyof T[], boolean›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], boolean›*

___

### `Const` fromObject

▸ **fromObject**<**T**>(): *[Function1](_functions_.md#function1)‹object, keyof [string, T][]›*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹object, keyof [string, T][]›*

___

### `Const` join

▸ **join**(`separator?`: string): *[Function1](_functions_.md#function1)‹keyof string[], string›*

**Parameters:**

Name | Type |
------ | ------ |
`separator?` | string |

**Returns:** *[Function1](_functions_.md#function1)‹keyof string[], string›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[ReadonlyArrayOperator](_readonlyarray_.md#readonlyarrayoperator)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[ReadonlyArrayOperator](_readonlyarray_.md#readonlyarrayoperator)‹T, T›*

___

### `Const` length

▸ **length**(`arr`: keyof unknown[]): *number*

**Parameters:**

Name | Type |
------ | ------ |
`arr` | keyof unknown[] |

**Returns:** *number*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function1](_functions_.md#function1)‹TA, TB›): *[ReadonlyArrayOperator](_readonlyarray_.md#readonlyarrayoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function1](_functions_.md#function1)‹TA, TB› |

**Returns:** *[ReadonlyArrayOperator](_readonlyarray_.md#readonlyarrayoperator)‹TA, TB›*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[Function1](_functions_.md#function1)‹keyof T[], TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], TAcc›*

___

### `Const` reduceRight

▸ **reduceRight**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[Function1](_functions_.md#function1)‹keyof T[], TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], TAcc›*
