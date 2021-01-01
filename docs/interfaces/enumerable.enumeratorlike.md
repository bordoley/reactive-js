[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

Inteface that enables iteration over a collection.

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **EnumeratorLike**

## Index

### Properties

* [current](enumerable.enumeratorlike.md#current)
* [hasCurrent](enumerable.enumeratorlike.md#hascurrent)

### Methods

* [move](enumerable.enumeratorlike.md#move)

## Properties

### current

• `Readonly` **current**: T

The current item, if present, at the current position of the enumerator.

___

### hasCurrent

• `Readonly` **hasCurrent**: *boolean*

`true` if the current the enumerator has a current value, otherwise `false`.

## Methods

### move

▸ **move**(): *boolean*

Advances the enumerator to the next item.

**Returns:** *boolean*

`true` if the enumerator was successfully advanced to the next item, otherwise `false`.
