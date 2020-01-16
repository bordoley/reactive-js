[@reactive-js/enumerable](../README.md) › [AbstractEnumerator](abstractenumerator.md)

# Class: AbstractEnumerator <**TReq, T**>

## Type parameters

▪ **TReq**

▪ **T**

## Hierarchy

* **AbstractEnumerator**

  ↳ [AbstractDelegatingEnumerator](abstractdelegatingenumerator.md)

## Implements

* [EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, T›

## Index

### Properties

* [add](abstractenumerator.md#add)
* [disposable](abstractenumerator.md#disposable)
* [dispose](abstractenumerator.md#dispose)

### Accessors

* [current](abstractenumerator.md#current)
* [hasCurrent](abstractenumerator.md#hascurrent)
* [isDisposed](abstractenumerator.md#isdisposed)

### Methods

* [move](abstractenumerator.md#abstract-move)

## Properties

###  add

• **add**: *add* =  disposableMixin.add

___

###  disposable

• **disposable**: *DisposableLike‹›* =  createDisposable()

___

###  dispose

• **dispose**: *dispose* =  disposableMixin.dispose

## Accessors

###  current

• **get current**(): *T*

**Returns:** *T*

___

###  hasCurrent

• **get hasCurrent**(): *boolean*

**Returns:** *boolean*

___

###  isDisposed

• **get isDisposed**(): *boolean*

**Returns:** *boolean*

## Methods

### `Abstract` move

▸ **move**(`req`: TReq): *boolean*

*Implementation of [EnumeratorLike](../interfaces/enumeratorlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

**Returns:** *boolean*
