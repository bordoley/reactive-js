
# Interface: KeyedQueueLike <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

  ↳ [KeyedCollection](keyedcollection.md)‹K, V›

  ↳ **KeyedQueueLike**

## Index

### Properties

* [count](keyedqueuelike.md#count)
* [keys](keyedqueuelike.md#keys)
* [values](keyedqueuelike.md#values)

### Methods

* [clear](keyedqueuelike.md#clear)
* [enumerate](keyedqueuelike.md#enumerate)
* [peek](keyedqueuelike.md#peek)
* [pop](keyedqueuelike.md#pop)
* [push](keyedqueuelike.md#push)

## Properties

###  count

• **count**: *number*

*Inherited from [KeyedCollection](keyedcollection.md).[count](keyedcollection.md#count)*

___

###  keys

• **keys**: *EnumerableLike‹K›*

*Inherited from [KeyedEnumerableLike](keyedenumerablelike.md).[keys](keyedenumerablelike.md#keys)*

___

###  values

• **values**: *EnumerableLike‹V›*

*Inherited from [KeyedEnumerableLike](keyedenumerablelike.md).[values](keyedenumerablelike.md#values)*

## Methods

###  clear

▸ **clear**(): *void*

**Returns:** *void*

___

###  enumerate

▸ **enumerate**(): *EnumeratorLike‹[K, V]›*

*Inherited from void*

**Returns:** *EnumeratorLike‹[K, V]›*

___

###  peek

▸ **peek**(`key`: K): *Option‹V›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *Option‹V›*

___

###  pop

▸ **pop**(`key`: K): *Option‹V›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *Option‹V›*

___

###  push

▸ **push**(`key`: K, `value`: V): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *void*
