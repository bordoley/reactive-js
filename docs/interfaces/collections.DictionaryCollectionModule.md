[Reactive-JS](../README.md) / [collections](../modules/collections.md) / DictionaryCollectionModule

# Interface: DictionaryCollectionModule<C\>

[collections](../modules/collections.md).DictionaryCollectionModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedCollection`](collections.KeyedCollection.md) |

## Hierarchy

- [`KeyedCollectionModule`](collections.KeyedCollectionModule.md)<`C`\>

  ↳ **`DictionaryCollectionModule`**

## Table of contents

### Methods

- [empty](collections.DictionaryCollectionModule.md#empty)
- [entries](collections.DictionaryCollectionModule.md#entries)
- [fromEntries](collections.DictionaryCollectionModule.md#fromentries)
- [keySet](collections.DictionaryCollectionModule.md#keyset)
- [keys](collections.DictionaryCollectionModule.md#keys)
- [map](collections.DictionaryCollectionModule.md#map)
- [reduce](collections.DictionaryCollectionModule.md#reduce)
- [toDictionary](collections.DictionaryCollectionModule.md#todictionary)
- [toReadonlyMap](collections.DictionaryCollectionModule.md#toreadonlymap)
- [values](collections.DictionaryCollectionModule.md#values)

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

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[empty](collections.KeyedCollectionModule.md#empty)

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

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[entries](collections.KeyedCollectionModule.md#entries)

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>, [`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>, [`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `T`, `TKey`\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[keySet](collections.KeyedCollectionModule.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `unknown`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedCollectionOf`](../modules/collections.md#keyedcollectionof)<`C`, `unknown`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[keys](collections.KeyedCollectionModule.md#keys)

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

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[map](collections.KeyedCollectionModule.md#map)

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

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[reduce](collections.KeyedCollectionModule.md#reduce)

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

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[toDictionary](collections.KeyedCollectionModule.md#todictionary)

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

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[toReadonlyMap](collections.KeyedCollectionModule.md#toreadonlymap)

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

#### Inherited from

[KeyedCollectionModule](collections.KeyedCollectionModule.md).[values](collections.KeyedCollectionModule.md#values)
