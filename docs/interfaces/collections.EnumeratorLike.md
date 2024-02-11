[Reactive-JS](../README.md) / [collections](../modules/collections.md) / EnumeratorLike

# Interface: EnumeratorLike\<T\>

[collections](../modules/collections.md).EnumeratorLike

An interactive mutable enumerator that can be used to iterate
over an underlying source of data.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [[EnumeratorLike\_current]](collections.EnumeratorLike.md#[enumeratorlike_current])
- [[EnumeratorLike\_hasCurrent]](collections.EnumeratorLike.md#[enumeratorlike_hascurrent])
- [[EnumeratorLike\_isCompleted]](collections.EnumeratorLike.md#[enumeratorlike_iscompleted])

### Methods

- [[EnumeratorLike\_move]](collections.EnumeratorLike.md#[enumeratorlike_move])

## Properties

### [EnumeratorLike\_current]

• `Readonly` **[EnumeratorLike\_current]**: `T`

Returns the element if present.

___

### [EnumeratorLike\_hasCurrent]

• `Readonly` **[EnumeratorLike\_hasCurrent]**: `boolean`

Indicates if the `EnumeratorLike` has a current value.

___

### [EnumeratorLike\_isCompleted]

• `Readonly` **[EnumeratorLike\_isCompleted]**: `boolean`

Indicates if the `EnumeratorLike` is completed.

## Methods

### [EnumeratorLike\_move]

▸ **[EnumeratorLike_move]**(): `boolean`

Advances the enumerator to the next value, if present.

#### Returns

`boolean`

true if successful, otherwise false.
