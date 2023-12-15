[Reactive-JS](../README.md) / [collections](../modules/collections.md) / DictionaryLike

# Interface: DictionaryLike<TKey, T\>

[collections](../modules/collections.md).DictionaryLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |
| `T` | `unknown` |

## Hierarchy

- [`AssociativeLike`](collections.AssociativeLike.md)<`TKey`, [`Optional`](../modules/functions.md#optional)<`T`\>\>

  ↳ **`DictionaryLike`**

## Table of contents

### Methods

- [[EnumerableLike\_enumerate]](collections.DictionaryLike.md#[enumerablelike_enumerate])
- [[iterator]](collections.DictionaryLike.md#[iterator])

## Methods

### [EnumerableLike\_enumerate]

▸ **[EnumerableLike_enumerate]**(): [`EnumeratorLike`](collections.EnumeratorLike.md)<`T`\>

#### Returns

[`EnumeratorLike`](collections.EnumeratorLike.md)<`T`\>

#### Overrides

AssociativeLike.\_\_@EnumerableLike\_enumerate@24316

___

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Overrides

AssociativeLike.\_\_@iterator@85
