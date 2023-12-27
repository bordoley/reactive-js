[Reactive-JS](../README.md) / [collections](../modules/collections.md) / DictionaryLike

# Interface: DictionaryLike<TKey, T\>

[collections](../modules/collections.md).DictionaryLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |
| `T` | `unknown` |

## Hierarchy

- [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

  ↳ **`DictionaryLike`**

## Table of contents

### Properties

- [[DictionaryLike\_count]](collections.DictionaryLike.md#[dictionarylike_count])
- [[DictionaryLike\_keys]](collections.DictionaryLike.md#[dictionarylike_keys])

### Methods

- [[DictionaryLike\_get]](collections.DictionaryLike.md#[dictionarylike_get])

## Properties

### [DictionaryLike\_count]

• `Readonly` **[DictionaryLike\_count]**: `number`

___

### [DictionaryLike\_keys]

• `Readonly` **[DictionaryLike\_keys]**: [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>

## Methods

### [DictionaryLike\_get]

▸ **[DictionaryLike_get]**(`index`): [`Optional`](../modules/functions.md#optional)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `TKey` |

#### Returns

[`Optional`](../modules/functions.md#optional)<`T`\>
