[Reactive-JS](../README.md) / [collections/ReadonlyArray](../modules/collections_ReadonlyArray.md) / ReadonlyArrayModule

# Interface: ReadonlyArrayModule

[collections/ReadonlyArray](../modules/collections_ReadonlyArray.md).ReadonlyArrayModule

## Hierarchy

- [`KeyedCollectionModule`](collections.KeyedCollectionModule.md)<[`ReadonlyArrayCollection`](collections_ReadonlyArray.ReadonlyArrayCollection.md)\>

  ↳ **`ReadonlyArrayModule`**

## Table of contents

### Methods

- [entries](collections_ReadonlyArray.ReadonlyArrayModule.md#entries)
- [slice](collections_ReadonlyArray.ReadonlyArrayModule.md#slice)
- [values](collections_ReadonlyArray.ReadonlyArrayModule.md#values)

## Methods

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Overrides

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[entries](collections.KeyedCollectionModule.md#entries)

___

### slice

▸ **slice**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### values

▸ **values**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Overrides

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[values](collections.KeyedCollectionModule.md#values)
