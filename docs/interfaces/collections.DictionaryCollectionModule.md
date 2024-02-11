[Reactive-JS](../README.md) / [collections](../modules/collections.md) / DictionaryCollectionModule

# Interface: DictionaryCollectionModule\<C\>

[collections](../modules/collections.md).DictionaryCollectionModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Collection`](collections.Collection.md) |

## Hierarchy

- [`CollectionModule`](collections.CollectionModule.md)\<`C`\>

  ↳ **`DictionaryCollectionModule`**

## Table of contents

### Methods

- [fromEntries](collections.DictionaryCollectionModule.md#fromentries)
- [union](collections.DictionaryCollectionModule.md#union)

## Methods

### fromEntries

▸ **fromEntries**\<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)\<[`EnumerableLike`](collections.EnumerableLike.md)\<[`Tuple2`](../modules/functions.md#tuple2)\<`TKey`, `T`\>\>, [`CollectionOf`](../modules/collections.md#collectionof)\<`C`, `T`, `TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`EnumerableLike`](collections.EnumerableLike.md)\<[`Tuple2`](../modules/functions.md#tuple2)\<`TKey`, `T`\>\>, [`CollectionOf`](../modules/collections.md#collectionof)\<`C`, `T`, `TKey`\>\>

___

### union

▸ **union**\<`TKey`, `T`\>(`m2`): [`Function1`](../modules/functions.md#function1)\<[`CollectionOf`](../modules/collections.md#collectionof)\<`C`, `T`, `TKey`\>, [`CollectionOf`](../modules/collections.md#collectionof)\<`C`, `T`, `TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m2` | [`CollectionOf`](../modules/collections.md#collectionof)\<`C`, `T`, `TKey`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`CollectionOf`](../modules/collections.md#collectionof)\<`C`, `T`, `TKey`\>, [`CollectionOf`](../modules/collections.md#collectionof)\<`C`, `T`, `TKey`\>\>
