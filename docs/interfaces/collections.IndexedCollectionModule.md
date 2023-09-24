[Reactive-JS](../README.md) / [collections](../modules/collections.md) / IndexedCollectionModule

# Interface: IndexedCollectionModule<C\>

[collections](../modules/collections.md).IndexedCollectionModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](collections.Container.md)<`number`\> |

## Hierarchy

- [`CollectionModule`](collections.CollectionModule.md)<`C`\>

  ↳ **`IndexedCollectionModule`**

  ↳↳ [`ReadonlyArrayModule`](collections_ReadonlyArray.ReadonlyArrayModule.md)

## Table of contents

### Transform Methods

- [entries](collections.IndexedCollectionModule.md#entries)
- [toIndexedCollection](collections.IndexedCollectionModule.md#toindexedcollection)
- [toReadonlyArray](collections.IndexedCollectionModule.md#toreadonlyarray)
- [values](collections.IndexedCollectionModule.md#values)

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `Iterator`<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>, `any`, `undefined`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `Iterator`<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>, `any`, `undefined`\>\>

#### Overrides

[CollectionModule](collections.CollectionModule.md).[entries](collections.CollectionModule.md#entries)

___

### toIndexedCollection

▸ **toIndexedCollection**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, [`KeyOf`](../modules/collections.md#keyof)<`C`\>\>, [`IndexedCollectionLike`](collections.IndexedCollectionLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, [`KeyOf`](../modules/collections.md#keyof)<`C`\>\>, [`IndexedCollectionLike`](collections.IndexedCollectionLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, [`KeyOf`](../modules/collections.md#keyof)<`C`\>\>, readonly `T`[]\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, [`KeyOf`](../modules/collections.md#keyof)<`C`\>\>, readonly `T`[]\>

___

### values

▸ **values**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `Iterator`<`T`, `any`, `undefined`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `Iterator`<`T`, `any`, `undefined`\>\>

#### Overrides

[CollectionModule](collections.CollectionModule.md).[values](collections.CollectionModule.md#values)
