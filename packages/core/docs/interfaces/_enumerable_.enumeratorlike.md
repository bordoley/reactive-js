[@reactive-js/core - v0.0.37](../README.md) › ["enumerable"](../modules/_enumerable_.md) › [EnumeratorLike](_enumerable_.enumeratorlike.md)

# Interface: EnumeratorLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **EnumeratorLike**

  ↳ [CharStreamLike](_parser_combinators_.charstreamlike.md)

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
