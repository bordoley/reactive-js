[@reactive-js/enumerable](README.md)

# @reactive-js/enumerable

## Index

### Interfaces

* [EnumerableLike](interfaces/enumerablelike.md)
* [EnumeratorLike](interfaces/enumeratorlike.md)

### Functions

* [fromIterable](README.md#const-fromiterable)
* [fromIterator](README.md#const-fromiterator)
* [toIterable](README.md#const-toiterable)

## Functions

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[EnumerableLike](interfaces/enumerablelike.md)‹void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹void, T›*

___

### `Const` fromIterator

▸ **fromIterator**<**T**>(`f`: function): *[EnumerableLike](interfaces/enumerablelike.md)‹void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (): *Iterator‹T›*

**Returns:** *[EnumerableLike](interfaces/enumerablelike.md)‹void, T›*

___

### `Const` toIterable

▸ **toIterable**<**T**>(`source`: [EnumerableLike](interfaces/enumerablelike.md)‹void, T›): *Iterable‹T›*

Converts an `EnumerableLike` into an `Iterable`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`source` | [EnumerableLike](interfaces/enumerablelike.md)‹void, T› |

**Returns:** *Iterable‹T›*
