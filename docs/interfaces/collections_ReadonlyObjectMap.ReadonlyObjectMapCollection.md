[Reactive-JS](../README.md) / [collections/ReadonlyObjectMap](../modules/collections_ReadonlyObjectMap.md) / ReadonlyObjectMapCollection

# Interface: ReadonlyObjectMapCollection<TKey\>

[collections/ReadonlyObjectMap](../modules/collections_ReadonlyObjectMap.md).ReadonlyObjectMapCollection

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `string` = `symbol` \| `string` |

## Hierarchy

- [`Collection`](collections.Collection.md)<`TKey`\>

  ↳ **`ReadonlyObjectMapCollection`**

## Table of contents

### Properties

- [[Collection\_TKey]](collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md#[collection_tkey])
- [[Collection\_type]](collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md#[collection_type])

## Properties

### [Collection\_TKey]

• `Optional` `Readonly` **[Collection\_TKey]**: `TKey`

#### Overrides

[Collection](collections.Collection.md).[[Collection_TKey]](collections.Collection.md#[collection_tkey])

___

### [Collection\_type]

• `Optional` `Readonly` **[Collection\_type]**: [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`TKey` & {}, `unknown`\>

#### Overrides

[Collection](collections.Collection.md).[[Collection_type]](collections.Collection.md#[collection_type])
