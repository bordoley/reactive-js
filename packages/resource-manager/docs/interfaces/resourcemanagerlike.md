[@reactive-js/resource-manager - v0.0.35](../README.md) › [ResourceManagerLike](resourcemanagerlike.md)

# Interface: ResourceManagerLike <**TResource**>

## Type parameters

▪ **TResource**

## Hierarchy

* DisposableLike

  ↳ **ResourceManagerLike**

## Index

### Properties

* [count](resourcemanagerlike.md#count)
* [isDisposed](resourcemanagerlike.md#isdisposed)

### Methods

* [add](resourcemanagerlike.md#add)
* [dispose](resourcemanagerlike.md#dispose)
* [get](resourcemanagerlike.md#get)

## Properties

###  count

• **count**: *number*

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from void*

## Methods

###  add

▸ **add**(`disposable`: DisposableLike | function): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableLike &#124; function |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: Exception): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Exception |

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *ObservableLike‹TResource›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *ObservableLike‹TResource›*
