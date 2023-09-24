[Reactive-JS](../README.md) / [utils](../modules/utils.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[utils](../modules/utils.md).EnumeratorLike

An interactive mutable enumerator that can be used to iterate
over an underlying source of data.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`EnumeratorLike`**

## Table of contents

### Properties

- [[EnumeratorLike\_current]](utils.EnumeratorLike.md#[enumeratorlike_current])
- [[EnumeratorLike\_hasCurrent]](utils.EnumeratorLike.md#[enumeratorlike_hascurrent])
- [[EnumeratorLike\_isCompleted]](utils.EnumeratorLike.md#[enumeratorlike_iscompleted])

### Methods

- [[EnumeratorLike\_move]](utils.EnumeratorLike.md#[enumeratorlike_move])

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
