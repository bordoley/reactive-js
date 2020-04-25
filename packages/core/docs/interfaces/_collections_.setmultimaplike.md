[@reactive-js/core - v0.0.37](../README.md) › ["collections"](../modules/_collections_.md) › [SetMultimapLike](_collections_.setmultimaplike.md)

# Interface: SetMultimapLike <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

* KeyedCollection‹K, V›

  ↳ **SetMultimapLike**

## Index

### Properties

* [count](_collections_.setmultimaplike.md#count)
* [keys](_collections_.setmultimaplike.md#keys)
* [values](_collections_.setmultimaplike.md#values)

### Methods

* [add](_collections_.setmultimaplike.md#add)
* [clear](_collections_.setmultimaplike.md#clear)
* [enumerate](_collections_.setmultimaplike.md#enumerate)
* [get](_collections_.setmultimaplike.md#get)
* [remove](_collections_.setmultimaplike.md#remove)
* [removeAll](_collections_.setmultimaplike.md#removeall)

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

###  add

▸ **add**(`key`: K, `value`: V): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *void*

___

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

###  get

▸ **get**(`key`: K): *ReadonlySet‹V›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *ReadonlySet‹V›*

___

###  remove

▸ **remove**(`key`: K, `value`: V): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *void*

___

###  removeAll

▸ **removeAll**(`key`: K): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *void*
