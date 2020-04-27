[@reactive-js/core - v0.0.37](../README.md) › ["enumerable"](_enumerable_.md)

# Module: "enumerable"

## Index

### Interfaces

* [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)
* [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)

### Type aliases

* [EnumerableOperator](_enumerable_.md#enumerableoperator)
* [EnumeratorOperator](_enumerable_.md#enumeratoroperator)

### Functions

* [empty](_enumerable_.md#const-empty)
* [first](_enumerable_.md#const-first)
* [forEach](_enumerable_.md#const-foreach)
* [fromArray](_enumerable_.md#const-fromarray)
* [fromIterable](_enumerable_.md#const-fromiterable)
* [fromIterator](_enumerable_.md#const-fromiterator)
* [keep](_enumerable_.md#const-keep)
* [keepType](_enumerable_.md#const-keeptype)
* [lift](_enumerable_.md#const-lift)
* [map](_enumerable_.md#const-map)
* [reduce](_enumerable_.md#const-reduce)
* [toArray](_enumerable_.md#const-toarray)
* [toIterable](_enumerable_.md#const-toiterable)

## Type aliases

###  EnumerableOperator

Ƭ **EnumerableOperator**: *function*

#### Type declaration:

▸ (`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |

___

###  EnumeratorOperator

Ƭ **EnumeratorOperator**: *function*

#### Type declaration:

▸ (`a`: [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TA›): *[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TA› |

## Functions

### `Const` empty

▸ **empty**<**T**>(): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` first

▸ **first**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[Option](_option_.md#option)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` forEach

▸ **forEach**<**T**>(`f`: function): *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, void›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, void›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`values` | keyof T[] |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` fromIterator

▸ **fromIterator**<**T**, **TReturn**, **TNext**>(`f`: function): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

**Type parameters:**

▪ **T**

▪ **TReturn**

▪ **TNext**

**Parameters:**

▪ **f**: *function*

▸ (): *Iterator‹T, TReturn, TNext›*

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

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

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

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

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [EnumeratorOperator](_enumerable_.md#enumeratoroperator)‹TA, TB›): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [EnumeratorOperator](_enumerable_.md#enumeratoroperator)‹TA, TB› |

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

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

**Returns:** *[EnumerableOperator](_enumerable_.md#enumerableoperator)‹TA, TB›*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: function, `initialValue`: function): *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, TAcc›*

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

**Returns:** *[Operator](_functions_.md#operator)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, TAcc›*

___

### `Const` toArray

▸ **toArray**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *keyof T[]*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *keyof T[]*

___

### `Const` toIterable

▸ **toIterable**<**T**>(`source`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *Iterable‹T›*

Converts an `EnumerableLike` into an `Iterable`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`source` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *Iterable‹T›*
