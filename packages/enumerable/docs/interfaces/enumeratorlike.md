[@reactive-js/enumerable - v0.0.37](../README.md) › [EnumeratorLike](enumeratorlike.md)

# Interface: EnumeratorLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **EnumeratorLike**

## Index

### Properties

* [current](enumeratorlike.md#current)
* [hasCurrent](enumeratorlike.md#hascurrent)

### Methods

* [move](enumeratorlike.md#move)

## Properties

###  current

• **current**: *T*

The current item, if present, at the current position of the enumerator.

___

###  hasCurrent

• **hasCurrent**: *boolean*

`true` if the current the enumerator has a current value, otherwise `false`.

## Methods

###  move

▸ **move**(): *boolean*

Advances the enumerator to the next item.

**Returns:** *boolean*

`true` if the enumerator was successfully advanced to the next item, otherwise `false`.
