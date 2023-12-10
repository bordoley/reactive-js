[Reactive-JS](../README.md) / [collections/ReadonlyObjectMap](../modules/collections_ReadonlyObjectMap.md) / ReadonlyObjectMapCollection

# Interface: ReadonlyObjectMapCollection<TKey\>

[collections/ReadonlyObjectMap](../modules/collections_ReadonlyObjectMap.md).ReadonlyObjectMapCollection

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `string` = `symbol` \| `string` |

## Hierarchy

- [`KeyedCollection`](collections.KeyedCollection.md)<`TKey`\>

  ↳ **`ReadonlyObjectMapCollection`**

## Table of contents

### Properties

- [[KeyedCollection\_TKey]](collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md#[keyedcollection_tkey])
- [[KeyedCollection\_type]](collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md#[keyedcollection_type])

## Properties

### [KeyedCollection\_TKey]

• `Optional` `Readonly` **[KeyedCollection\_TKey]**: `TKey`

#### Overrides

[KeyedCollection](collections.KeyedCollection.md).[[KeyedCollection_TKey]](collections.KeyedCollection.md#[keyedcollection_tkey])

___

### [KeyedCollection\_type]

• `Optional` `Readonly` **[KeyedCollection\_type]**: [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`TKey` & {}, `unknown`\>

#### Overrides

[KeyedCollection](collections.KeyedCollection.md).[[KeyedCollection_type]](collections.KeyedCollection.md#[keyedcollection_type])
