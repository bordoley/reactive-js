[Reactive-JS](../README.md) / [collections](../modules/collections.md) / DictionaryLike

# Interface: DictionaryLike<TKey, T\>

[collections](../modules/collections.md).DictionaryLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |
| `T` | `unknown` |

## Hierarchy

- [`AssociativeCollectionLike`](collections.AssociativeCollectionLike.md)<`TKey`, [`Optional`](../modules/functions.md#optional)<`T`\>\>

- [`Collection`](collections.Collection.md)<`T`\>

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

AssociativeCollectionLike.\_\_@EnumerableLike\_enumerate@24266

___

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Overrides

AssociativeCollectionLike.\_\_@iterator@85
