[Reactive-JS](../README.md) / [collections](../modules/collections.md) / IndexedCollectionModule

# Interface: IndexedCollectionModule<C\>

[collections](../modules/collections.md).IndexedCollectionModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Collection`](collections.Collection.md)<`number`\> |

## Hierarchy

- [`CollectionModule`](collections.CollectionModule.md)<`C`\>

  ↳ **`IndexedCollectionModule`**

  ↳↳ [`IndexedCollectionModule`](collections_Indexed.IndexedCollectionModule.md)

  ↳↳ [`ReadonlyArrayModule`](collections_ReadonlyArray.ReadonlyArrayModule.md)

## Table of contents

### Transform Methods

- [entries](collections.IndexedCollectionModule.md#entries)
- [toIndexed](collections.IndexedCollectionModule.md#toindexed)
- [toReadonlyArray](collections.IndexedCollectionModule.md#toreadonlyarray)
- [values](collections.IndexedCollectionModule.md#values)

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Overrides

[CollectionModule](collections.CollectionModule.md).[entries](collections.CollectionModule.md#entries)

___

### toIndexed

▸ **toIndexed**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, [`KeyOf`](../modules/collections.md#keyof)<`C`\>\>, [`IndexedLike`](collections.IndexedLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, [`KeyOf`](../modules/collections.md#keyof)<`C`\>\>, [`IndexedLike`](collections.IndexedLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, [`KeyOf`](../modules/collections.md#keyof)<`C`\>\>, readonly `T`[]\>

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

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, [`KeyOf`](../modules/collections.md#keyof)<`C`\>\>, readonly `T`[]\>

___

### values

▸ **values**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Overrides

[CollectionModule](collections.CollectionModule.md).[values](collections.CollectionModule.md#values)
