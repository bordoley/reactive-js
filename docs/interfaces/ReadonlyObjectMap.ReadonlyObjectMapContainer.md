[Reactive-JS](../README.md) / [ReadonlyObjectMap](../modules/ReadonlyObjectMap.md) / ReadonlyObjectMapContainer

# Interface: ReadonlyObjectMapContainer<TKey\>

[ReadonlyObjectMap](../modules/ReadonlyObjectMap.md).ReadonlyObjectMapContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `number` \| `string` = `symbol` \| `number` \| `string` |

## Hierarchy

- [`KeyedContainer`](types.KeyedContainer.md)

  ↳ **`ReadonlyObjectMapContainer`**

## Table of contents

### Properties

- [[\_\_\_Container\_type]](ReadonlyObjectMap.ReadonlyObjectMapContainer.md#[___container_type])
- [[\_\_\_KeyedContainer\_TKey]](ReadonlyObjectMap.ReadonlyObjectMapContainer.md#[___keyedcontainer_tkey])

## Properties

### [\_\_\_Container\_type]

• `Optional` `Readonly` **[\_\_\_Container\_type]**: [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey` & {}, `unknown`\>

#### Overrides

[KeyedContainer](types.KeyedContainer.md).[[___Container_type]](types.KeyedContainer.md#[___container_type])

___

### [\_\_\_KeyedContainer\_TKey]

• `Optional` `Readonly` **[\_\_\_KeyedContainer\_TKey]**: `TKey`

#### Overrides

[KeyedContainer](types.KeyedContainer.md).[[___KeyedContainer_TKey]](types.KeyedContainer.md#[___keyedcontainer_tkey])
