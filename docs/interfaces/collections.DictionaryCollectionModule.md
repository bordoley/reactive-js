[Reactive-JS](../README.md) / [collections](../modules/collections.md) / DictionaryCollectionModule

# Interface: DictionaryCollectionModule<C\>

[collections](../modules/collections.md).DictionaryCollectionModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Collection`](collections.Collection.md) |

## Hierarchy

- [`CollectionModule`](collections.CollectionModule.md)<`C`\>

  ↳ **`DictionaryCollectionModule`**

  ↳↳ [`ReadonlyMapModule`](collections_ReadonlyMap.ReadonlyMapModule.md)

  ↳↳ [`ReadonlyObjectMapModule`](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md)

## Table of contents

### Constructor Methods

- [empty](collections.DictionaryCollectionModule.md#empty)

### Operator Methods

- [map](collections.DictionaryCollectionModule.md#map)

### Other Methods

- [fromEntries](collections.DictionaryCollectionModule.md#fromentries)

### Transform Methods

- [entries](collections.DictionaryCollectionModule.md#entries)
- [keySet](collections.DictionaryCollectionModule.md#keyset)
- [keys](collections.DictionaryCollectionModule.md#keys)
- [reduce](collections.DictionaryCollectionModule.md#reduce)
- [toDictionary](collections.DictionaryCollectionModule.md#todictionary)
- [toReadonlyMap](collections.DictionaryCollectionModule.md#toreadonlymap)
- [values](collections.DictionaryCollectionModule.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[empty](collections.CollectionModule.md#empty)

___

## Operator Methods

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](../modules/collections.md#collectionoperator)<`C`, `TA`, `TB`, `TKey`\>

Returns a CollectionOperator that applies the `selector` function to each
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

[`CollectionOperator`](../modules/collections.md#collectionoperator)<`C`, `TA`, `TB`, `TKey`\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[map](collections.CollectionModule.md#map)

___

## Other Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>, [`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>, [`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>\>

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[entries](collections.CollectionModule.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[keySet](collections.CollectionModule.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `unknown`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `unknown`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[keys](collections.CollectionModule.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, `TAcc`\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[reduce](collections.CollectionModule.md#reduce)

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[toDictionary](collections.CollectionModule.md#todictionary)

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[toReadonlyMap](collections.CollectionModule.md#toreadonlymap)

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`CollectionOf`](../modules/collections.md#collectionof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Inherited from

[CollectionModule](collections.CollectionModule.md).[values](collections.CollectionModule.md#values)
