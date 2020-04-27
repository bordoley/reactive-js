[@reactive-js/core - v0.0.37](../README.md) › ["parserCombinators"](../modules/_parsercombinators_.md) › [CharStreamLike](_parsercombinators_.charstreamlike.md)

# Interface: CharStreamLike

## Hierarchy

* [EnumeratorLike](_enumerable_.enumeratorlike.md)‹[CharCode](../modules/_parsercombinators_.md#charcode)›

  ↳ **CharStreamLike**

## Index

### Properties

* [current](_parsercombinators_.charstreamlike.md#current)
* [hasCurrent](_parsercombinators_.charstreamlike.md#hascurrent)
* [index](_parsercombinators_.charstreamlike.md#index)
* [src](_parsercombinators_.charstreamlike.md#src)

### Methods

* [move](_parsercombinators_.charstreamlike.md#move)

## Properties

###  current

• **current**: *[CharCode](../modules/_parsercombinators_.md#charcode)*

*Inherited from [EnumeratorLike](_enumerable_.enumeratorlike.md).[current](_enumerable_.enumeratorlike.md#current)*

The current item, if present, at the current position of the enumerator.

___

###  hasCurrent

• **hasCurrent**: *boolean*

*Inherited from [EnumeratorLike](_enumerable_.enumeratorlike.md).[hasCurrent](_enumerable_.enumeratorlike.md#hascurrent)*

`true` if the current the enumerator has a current value, otherwise `false`.

___

###  index

• **index**: *number*

___

###  src

• **src**: *string*

## Methods

###  move

▸ **move**(): *boolean*

*Inherited from [EnumeratorLike](_enumerable_.enumeratorlike.md).[move](_enumerable_.enumeratorlike.md#move)*

Advances the enumerator to the next item.

**Returns:** *boolean*

`true` if the enumerator was successfully advanced to the next item, otherwise `false`.
