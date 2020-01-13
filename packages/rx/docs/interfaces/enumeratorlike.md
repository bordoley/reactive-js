[@reactive-js/rx](../README.md) › [EnumeratorLike](enumeratorlike.md)

# Interface: EnumeratorLike <**TReq, T**>

## Type parameters

▪ **TReq**

▪ **T**

## Hierarchy

* DisposableLike

  ↳ **EnumeratorLike**

## Index

### Properties

* [current](enumeratorlike.md#current)
* [hasCurrent](enumeratorlike.md#hascurrent)

### Methods

* [moveNext](enumeratorlike.md#movenext)

## Properties

###  current

• **current**: *T*

The current item, if present, at the current position of the enumerator.

___

###  hasCurrent

• **hasCurrent**: *boolean*

`true` if the current the enumerator has a current value, otherwise `false`.

## Methods

###  moveNext

▸ **moveNext**(`req`: TReq): *boolean*

Advances the enumerator to the next item.

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

**Returns:** *boolean*

`true` if the enumerator was successfully advanced to the next item, otherwise `false`.
