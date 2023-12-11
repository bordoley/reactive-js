[Reactive-JS](../README.md) / [collections](../modules/collections.md) / KeyedCollectionModule

# Interface: KeyedCollectionModule<C\>

[collections](../modules/collections.md).KeyedCollectionModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedCollection`](collections.KeyedCollection.md) |

## Hierarchy

- **`KeyedCollectionModule`**

  ↳ [`IndexedCollectionModule`](collections.IndexedCollectionModule.md)

  ↳ [`DictionaryCollectionModule`](collections.DictionaryCollectionModule.md)

## Table of contents

### Methods

- [empty](collections.KeyedCollectionModule.md#empty)
- [entries](collections.KeyedCollectionModule.md#entries)
- [keySet](collections.KeyedCollectionModule.md#keyset)
- [keys](collections.KeyedCollectionModule.md#keys)
- [map](collections.KeyedCollectionModule.md#map)
- [reduce](collections.KeyedCollectionModule.md#reduce)
- [toDictionary](collections.KeyedCollectionModule.md#todictionary)
- [toReadonlyMap](collections.KeyedCollectionModule.md#toreadonlymap)
- [values](collections.KeyedCollectionModule.md#values)

## Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>

___

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `unknown`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `unknown`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedCollectionOperator`](../modules/collections.md#keyedcollectionoperator)<`C`, `TA`, `TB`, `TKey`\>

Returns a KeyedCollectionOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedCollectionOperator`](../modules/collections.md#keyedcollectionoperator)<`C`, `TA`, `TB`, `TKey`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>
