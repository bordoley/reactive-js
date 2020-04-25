[@reactive-js/core - v0.0.37](../README.md) › ["collections"](../modules/_collections_.md) › [KeyedQueueLike](_collections_.keyedqueuelike.md)

# Interface: KeyedQueueLike <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

* KeyedCollection‹K, V›

  ↳ **KeyedQueueLike**

## Index

### Properties

* [count](_collections_.keyedqueuelike.md#count)
* [keys](_collections_.keyedqueuelike.md#keys)
* [values](_collections_.keyedqueuelike.md#values)

### Methods

* [clear](_collections_.keyedqueuelike.md#clear)
* [enumerate](_collections_.keyedqueuelike.md#enumerate)
* [peek](_collections_.keyedqueuelike.md#peek)
* [pop](_collections_.keyedqueuelike.md#pop)
* [push](_collections_.keyedqueuelike.md#push)

## Properties

###  count

• **count**: *number*

*Inherited from [KeyedQueueLike](_collections_.keyedqueuelike.md).[count](_collections_.keyedqueuelike.md#count)*

___

###  keys

• **keys**: *[EnumerableLike](_enumerable_.enumerablelike.md)‹K›*

*Inherited from [KeyedQueueLike](_collections_.keyedqueuelike.md).[keys](_collections_.keyedqueuelike.md#keys)*

___

###  values

• **values**: *[EnumerableLike](_enumerable_.enumerablelike.md)‹V›*

*Inherited from [KeyedQueueLike](_collections_.keyedqueuelike.md).[values](_collections_.keyedqueuelike.md#values)*

## Methods

###  clear

▸ **clear**(): *void*

**Returns:** *void*

___

###  enumerate

▸ **enumerate**(): *[EnumeratorLike](_enumerable_.enumeratorlike.md)‹[K, V]›*

*Inherited from [KeyedQueueLike](_collections_.keyedqueuelike.md).[enumerate](_collections_.keyedqueuelike.md#enumerate)*

Returns an `EnumeratorLike` to iterate through the source.

**Returns:** *[EnumeratorLike](_enumerable_.enumeratorlike.md)‹[K, V]›*

___

###  peek

▸ **peek**(`key`: K): *[Option](../modules/_option_.md#option)‹V›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *[Option](../modules/_option_.md#option)‹V›*

___

###  pop

▸ **pop**(`key`: K): *[Option](../modules/_option_.md#option)‹V›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *[Option](../modules/_option_.md#option)‹V›*

___

###  push

▸ **push**(`key`: K, `value`: V): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *void*
