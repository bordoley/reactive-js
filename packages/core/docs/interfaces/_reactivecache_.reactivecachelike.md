[@reactive-js/core - v0.0.37](../README.md) › ["reactiveCache"](../modules/_reactivecache_.md) › [ReactiveCacheLike](_reactivecache_.reactivecachelike.md)

# Interface: ReactiveCacheLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **ReactiveCacheLike**

## Index

### Methods

* [get](_reactivecache_.reactivecachelike.md#get)
* [set](_reactivecache_.reactivecachelike.md#set)

## Methods

###  get

▸ **get**(`key`: string): *[Option](../modules/_option_.md#option)‹[ObservableLike](_observable_.observablelike.md)‹T››*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[Option](../modules/_option_.md#option)‹[ObservableLike](_observable_.observablelike.md)‹T››*

___

###  set

▸ **set**(`key`: string, `value`: [ObservableLike](_observable_.observablelike.md)‹T›): *[ObservableLike](_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [ObservableLike](_observable_.observablelike.md)‹T› |

**Returns:** *[ObservableLike](_observable_.observablelike.md)‹T›*
