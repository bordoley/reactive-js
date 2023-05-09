[Reactive-JS](../README.md) / [types](../modules/types.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[types](../modules/types.md).EnumeratorLike

An interactive mutable enumerator that can be used to iterate
over an underlying source of data.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [[\_\_\_EnumeratorLike\_current]](types.EnumeratorLike.md#[___enumeratorlike_current])
- [[\_\_\_EnumeratorLike\_hasCurrent]](types.EnumeratorLike.md#[___enumeratorlike_hascurrent])

### Methods

- [[\_\_\_EnumeratorLike\_move]](types.EnumeratorLike.md#[___enumeratorlike_move])

## Properties

### [\_\_\_EnumeratorLike\_current]

• `Readonly` **[\_\_\_EnumeratorLike\_current]**: `T`

Returns the element if present.

___

### [\_\_\_EnumeratorLike\_hasCurrent]

• `Readonly` **[\_\_\_EnumeratorLike\_hasCurrent]**: `boolean`

Indicates if the `EnumeratorLike` has a current value.

## Methods

### [\_\_\_EnumeratorLike\_move]

▸ **[___EnumeratorLike_move]**(): `boolean`

Advances the enumerator to the next value, if present.

#### Returns

`boolean`

true if successful, otherwise false.
