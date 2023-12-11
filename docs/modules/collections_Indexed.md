[Reactive-JS](../README.md) / collections/Indexed

# Module: collections/Indexed

## Table of contents

### Interfaces

- [IndexedCollectionCollection](../interfaces/collections_Indexed.IndexedCollectionCollection.md)

### Type Aliases

- [Signature](collections_Indexed.md#signature)
- [TKeyBase](collections_Indexed.md#tkeybase)
- [Type](collections_Indexed.md#type)

### Functions

- [empty](collections_Indexed.md#empty)
- [entries](collections_Indexed.md#entries)
- [forEach](collections_Indexed.md#foreach)
- [keySet](collections_Indexed.md#keyset)
- [keys](collections_Indexed.md#keys)
- [map](collections_Indexed.md#map)
- [reduce](collections_Indexed.md#reduce)
- [toDictionary](collections_Indexed.md#todictionary)
- [toIndexed](collections_Indexed.md#toindexed)
- [toReadonlyArray](collections_Indexed.md#toreadonlyarray)
- [toReadonlyMap](collections_Indexed.md#toreadonlymap)
- [values](collections_Indexed.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`IndexedCollectionModule`](../interfaces/collections.IndexedCollectionModule.md)<[`Type`](collections_Indexed.md#type)\>

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](collections.md#keyof)<[`Type`](collections_Indexed.md#type)\>

___

### Type

Ƭ **Type**: [`IndexedCollectionCollection`](../interfaces/collections_Indexed.IndexedCollectionCollection.md)

## Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>

___

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

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

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`selector`): [`SideEffect1`](functions.md#sideeffect1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`IndexedCollectionCollection`](../interfaces/collections_Indexed.IndexedCollectionCollection.md), `TA`, `TB`, `TKey`\>

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
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`IndexedCollectionCollection`](../interfaces/collections_Indexed.IndexedCollectionCollection.md), `TA`, `TB`, `TKey`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toIndexed

▸ **toIndexed**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, [`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, [`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, readonly `T`[]\>

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

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, readonly `T`[]\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>
