[@reactive-js/core - v0.0.40](../README.md) › ["enumerable"](../modules/_enumerable_.md) › [EnumeratorLike](_enumerable_.enumeratorlike.md)

# Interface: EnumeratorLike <**T**>

Inteface that enables iteration over a collection.

## Type parameters

▪ **T**

## Hierarchy

* **EnumeratorLike**

## Index

### Properties

* [current](_enumerable_.enumeratorlike.md#current)
* [hasCurrent](_enumerable_.enumeratorlike.md#hascurrent)

### Methods

* [move](_enumerable_.enumeratorlike.md#move)

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
