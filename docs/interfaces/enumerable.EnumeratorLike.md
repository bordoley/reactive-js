[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[enumerable](../modules/enumerable.md).EnumeratorLike

Inteface that enables iteration over a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [current](enumerable.EnumeratorLike.md#current)
- [hasCurrent](enumerable.EnumeratorLike.md#hascurrent)

### Methods

- [move](enumerable.EnumeratorLike.md#move)

## Properties

### current

• `Readonly` **current**: `T`

The current item, if present, at the current position of the enumerator.

___

### hasCurrent

• `Readonly` **hasCurrent**: `boolean`

`true` if the current the enumerator has a current value, otherwise `false`.

## Methods

### move

▸ **move**(): `boolean`

Advances the enumerator to the next item.

#### Returns

`boolean`

`true` if the enumerator was successfully advanced to the next item, otherwise `false`.
