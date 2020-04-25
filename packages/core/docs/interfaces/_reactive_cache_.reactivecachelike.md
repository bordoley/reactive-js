[@reactive-js/core - v0.0.37](../README.md) › ["reactive-cache"](../modules/_reactive_cache_.md) › [ReactiveCacheLike](_reactive_cache_.reactivecachelike.md)

# Interface: ReactiveCacheLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **ReactiveCacheLike**

## Index

### Methods

* [get](_reactive_cache_.reactivecachelike.md#get)
* [set](_reactive_cache_.reactivecachelike.md#set)

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
