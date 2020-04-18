[@reactive-js/reactive-cache - v0.0.33](../README.md) › [ReactiveCacheLike](reactivecachelike.md)

# Interface: ReactiveCacheLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* DisposableLike

  ↳ **ReactiveCacheLike**

## Index

### Methods

* [get](reactivecachelike.md#get)
* [set](reactivecachelike.md#set)

## Methods

###  get

▸ **get**(`key`: string): *Option‹ObservableLike‹T››*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Option‹ObservableLike‹T››*

___

###  set

▸ **set**(`key`: string, `value`: ObservableLike‹T›): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | ObservableLike‹T› |

**Returns:** *ObservableLike‹T›*
