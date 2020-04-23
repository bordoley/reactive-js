
# Interface: SetMultimapLike <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

  ↳ [KeyedCollection](keyedcollection.md)‹K, V›

  ↳ **SetMultimapLike**

## Index

### Properties

* [count](setmultimaplike.md#count)
* [keys](setmultimaplike.md#keys)
* [values](setmultimaplike.md#values)

### Methods

* [add](setmultimaplike.md#add)
* [clear](setmultimaplike.md#clear)
* [enumerate](setmultimaplike.md#enumerate)
* [get](setmultimaplike.md#get)
* [remove](setmultimaplike.md#remove)
* [removeAll](setmultimaplike.md#removeall)

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

▸ **enumerate**(): *EnumeratorLike‹[K, V]›*

*Inherited from void*

**Returns:** *EnumeratorLike‹[K, V]›*

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
