[Reactive-JS](../README.md) / [collections](../modules/collections.md) / MutableKeyedCollectionLike

# Interface: MutableKeyedCollectionLike<TKey, T\>

[collections](../modules/collections.md).MutableKeyedCollectionLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |
| `T` | `unknown` |

## Hierarchy

- [`KeyedCollectionLike`](collections.KeyedCollectionLike.md)<`TKey`, `T`\>

  ↳ **`MutableKeyedCollectionLike`**

  ↳↳ [`MutableIndexedCollectionLike`](collections.MutableIndexedCollectionLike.md)

## Table of contents

### Methods

- [[KeyedCollectionLike\_get]](collections.MutableKeyedCollectionLike.md#[keyedcollectionlike_get])
- [[MutableKeyedCollectionLike\_set]](collections.MutableKeyedCollectionLike.md#[mutablekeyedcollectionlike_set])

## Methods

### [KeyedCollectionLike\_get]

▸ **[KeyedCollectionLike_get]**(`index`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `TKey` |

#### Returns

`T`

#### Inherited from

[KeyedCollectionLike](collections.KeyedCollectionLike.md).[[KeyedCollectionLike_get]](collections.KeyedCollectionLike.md#[keyedcollectionlike_get])

___

### [MutableKeyedCollectionLike\_set]

▸ **[MutableKeyedCollectionLike_set]**(`key`, `value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |
| `value` | `T` |

#### Returns

`T`
