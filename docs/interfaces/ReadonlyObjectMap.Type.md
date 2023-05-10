[Reactive-JS](../README.md) / [ReadonlyObjectMap](../modules/ReadonlyObjectMap.md) / Type

# Interface: Type<TKey\>

[ReadonlyObjectMap](../modules/ReadonlyObjectMap.md).Type

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `number` \| `string` = `symbol` \| `number` \| `string` |

## Hierarchy

- [`KeyedContainer`](types.KeyedContainer.md)

  ↳ **`Type`**

## Table of contents

### Properties

- [[\_\_\_Container\_T]](ReadonlyObjectMap.Type.md#[___container_t])
- [[\_\_\_Container\_type]](ReadonlyObjectMap.Type.md#[___container_type])
- [[\_\_\_KeyedContainer\_TKey]](ReadonlyObjectMap.Type.md#[___keyedcontainer_tkey])

## Properties

### [\_\_\_Container\_T]

• `Optional` `Readonly` **[\_\_\_Container\_T]**: `unknown`

#### Inherited from

[KeyedContainer](types.KeyedContainer.md).[[___Container_T]](types.KeyedContainer.md#[___container_t])

___

### [\_\_\_Container\_type]

• `Optional` `Readonly` **[\_\_\_Container\_type]**: [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey` & {}, `unknown`\>

#### Overrides

[KeyedContainer](types.KeyedContainer.md).[[___Container_type]](types.KeyedContainer.md#[___container_type])

___

### [\_\_\_KeyedContainer\_TKey]

• `Optional` `Readonly` **[\_\_\_KeyedContainer\_TKey]**: `TKey`

#### Overrides

[KeyedContainer](types.KeyedContainer.md).[[___KeyedContainer_TKey]](types.KeyedContainer.md#[___keyedcontainer_tkey])
