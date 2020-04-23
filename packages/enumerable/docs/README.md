[@reactive-js/enumerable - v0.0.37](README.md)

# @reactive-js/enumerable - v0.0.37

## Index

### Interfaces

* [EnumerableLike](interfaces/enumerablelike.md)
* [EnumeratorLike](interfaces/enumeratorlike.md)

### Type aliases

* [EnumerableOperator](README.md#enumerableoperator)
* [EnumeratorOperator](README.md#enumeratoroperator)

### Functions

* [first](README.md#const-first)
* [forEach](README.md#const-foreach)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [fromIterator](README.md#const-fromiterator)
* [keep](README.md#const-keep)
* [keepType](README.md#const-keeptype)
* [lift](README.md#const-lift)
* [map](README.md#const-map)
* [reduce](README.md#const-reduce)
* [toIterable](README.md#const-toiterable)

## Type aliases

###  EnumerableOperator

Ƭ **EnumerableOperator**: *function*

#### Type declaration:

▸ (`a`: [EnumerableLike](interfaces/enumerablelike.md)‹TA›): *[EnumerableLike](interfaces/enumerablelike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](interfaces/enumerablelike.md)‹TA› |

___

###  EnumeratorOperator

Ƭ **EnumeratorOperator**: *function*

#### Type declaration:

▸ (`a`: [EnumeratorLike](interfaces/enumeratorlike.md)‹TA›): *[EnumeratorLike](interfaces/enumeratorlike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumeratorLike](interfaces/enumeratorlike.md)‹TA› |

## Functions

### `Const` first

▸ **first**<**T**>(`enumerable`: [EnumerableLike](interfaces/enumerablelike.md)‹T›): *Option‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [EnumerableLike](interfaces/enumerablelike.md)‹T› |

**Returns:** *Option‹T›*

___

### `Const` forEach

▸ **forEach**<**T**>(`f`: function): *Operator‹[EnumerableLike](interfaces/enumerablelike.md)‹T›, void›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *Operator‹[EnumerableLike](interfaces/enumerablelike.md)‹T›, void›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`values` | keyof T[] |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

___

### `Const` fromIterator

▸ **fromIterator**<**T**, **TReturn**, **TNext**>(`f`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

▪ **TReturn**

▪ **TNext**

**Parameters:**

▪ **f**: *function*

▸ (): *Iterator‹T, TReturn, TNext›*

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹T›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *[EnumerableOperator](README.md#enumerableoperator)‹T, T›*

Returns an `EnumerableLike` that only emits items produced by the
source that satisfy the specified predicate.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`data`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *[EnumerableOperator](README.md#enumerableoperator)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: function): *[EnumerableOperator](README.md#enumerableoperator)‹TA, TB›*

Returns an `EnumerableLike` that only emits items from the
source that satisfy the specified type predicate.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **predicate**: *function*

The predicate function.

▸ (`data`: unknown): *data is TB*

**Parameters:**

Name | Type |
------ | ------ |
`data` | unknown |

**Returns:** *[EnumerableOperator](README.md#enumerableoperator)‹TA, TB›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [EnumeratorOperator](README.md#enumeratoroperator)‹TA, TB›): *[EnumerableOperator](README.md#enumerableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [EnumeratorOperator](README.md#enumeratoroperator)‹TA, TB› |

**Returns:** *[EnumerableOperator](README.md#enumerableoperator)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[EnumerableOperator](README.md#enumerableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`v`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TA |

**Returns:** *[EnumerableOperator](README.md#enumerableoperator)‹TA, TB›*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: function, `initialValue`: function): *Operator‹[EnumerableLike](interfaces/enumerablelike.md)‹T›, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: T): *TAcc*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

▪ **initialValue**: *function*

▸ (): *TAcc*

**Returns:** *Operator‹[EnumerableLike](interfaces/enumerablelike.md)‹T›, TAcc›*

___

### `Const` toIterable

▸ **toIterable**<**T**>(`source`: [EnumerableLike](interfaces/enumerablelike.md)‹T›): *Iterable‹T›*

Converts an `EnumerableLike` into an `Iterable`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`source` | [EnumerableLike](interfaces/enumerablelike.md)‹T› |

**Returns:** *Iterable‹T›*
