[@reactive-js/reactive-cache](../README.md) › [ReactiveCacheLike](reactivecachelike.md)

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

▸ **get**(`key`: string): *ObservableLike‹T› | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *ObservableLike‹T› | undefined*

___

###  set

▸ **set**(`key`: string, `value`: ObservableLike‹T›): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | ObservableLike‹T› |

**Returns:** *ObservableLike‹T›*
