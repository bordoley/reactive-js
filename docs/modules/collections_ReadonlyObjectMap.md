[Reactive-JS](../README.md) / collections/ReadonlyObjectMap

# Module: collections/ReadonlyObjectMap

## Table of contents

### Collection Interfaces

- [ReadonlyObjectMapCollection](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)

### Other Interfaces

- [ReadonlyObjectMapModule](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md)

### Type Aliases

- [Signature](collections_ReadonlyObjectMap.md#signature)
- [TKeyBase](collections_ReadonlyObjectMap.md#tkeybase)
- [Type](collections_ReadonlyObjectMap.md#type)

### Constructor Functions

- [empty](collections_ReadonlyObjectMap.md#empty)

## Type Aliases

### Signature

Ƭ **Signature**: [`ReadonlyArrayModule`](../interfaces/collections_ReadonlyArray.ReadonlyArrayModule.md)

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)\>

___

### Type

Ƭ **Type**<`TKey`\>: [`ReadonlyObjectMapCollection`](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)<`TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `string` = `symbol` \| `string` |

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): readonly `T`[]

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

readonly `T`[]
