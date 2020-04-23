
# Interface: KeyedQueueLike <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

* **KeyedQueueLike**

## Index

### Properties

* [count](keyedqueuelike.md#count)
* [values](keyedqueuelike.md#values)

### Methods

* [clear](keyedqueuelike.md#clear)
* [peek](keyedqueuelike.md#peek)
* [pop](keyedqueuelike.md#pop)
* [push](keyedqueuelike.md#push)

## Properties

###  count

• **count**: *number*

___

###  values

• **values**: *EnumerableLike‹V›*

## Methods

###  clear

▸ **clear**(): *void*

**Returns:** *void*

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
