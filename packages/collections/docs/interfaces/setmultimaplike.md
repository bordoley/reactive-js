
# Interface: SetMultimapLike <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

* **SetMultimapLike**

## Index

### Properties

* [count](setmultimaplike.md#count)
* [values](setmultimaplike.md#values)

### Methods

* [add](setmultimaplike.md#add)
* [clear](setmultimaplike.md#clear)
* [get](setmultimaplike.md#get)
* [remove](setmultimaplike.md#remove)
* [removeAll](setmultimaplike.md#removeall)

## Properties

###  count

• **count**: *number*

___

###  values

• **values**: *EnumerableLike‹V›*

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
