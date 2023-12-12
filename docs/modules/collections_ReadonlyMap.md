[Reactive-JS](../README.md) / collections/ReadonlyMap

# Module: collections/ReadonlyMap

## Table of contents

### Interfaces

- [ReadonlyMapCollection](../interfaces/collections_ReadonlyMap.ReadonlyMapCollection.md)

### Type Aliases

- [Signature](collections_ReadonlyMap.md#signature)
- [TKeyBase](collections_ReadonlyMap.md#tkeybase)
- [Type](collections_ReadonlyMap.md#type)

### Functions

- [empty](collections_ReadonlyMap.md#empty)
- [entries](collections_ReadonlyMap.md#entries)
- [forEach](collections_ReadonlyMap.md#foreach)
- [fromEntries](collections_ReadonlyMap.md#fromentries)
- [keep](collections_ReadonlyMap.md#keep)
- [keySet](collections_ReadonlyMap.md#keyset)
- [keys](collections_ReadonlyMap.md#keys)
- [map](collections_ReadonlyMap.md#map)
- [reduce](collections_ReadonlyMap.md#reduce)
- [toDictionary](collections_ReadonlyMap.md#todictionary)
- [toReadonlyMap](collections_ReadonlyMap.md#toreadonlymap)
- [union](collections_ReadonlyMap.md#union)
- [values](collections_ReadonlyMap.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`DictionaryCollectionModule`](../interfaces/collections.DictionaryCollectionModule.md)<[`Type`](collections_ReadonlyMap.md#type)\>

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyMap.md#type)\>

___

### Type

Ƭ **Type**<`TKey`\>: [`ReadonlyMapCollection`](../interfaces/collections_ReadonlyMap.ReadonlyMapCollection.md)<`TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |

## Functions

### empty

▸ **empty**<`T`, `TKey`\>(): `ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>

___

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`selector`): [`SideEffect1`](functions.md#sideeffect1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>, `ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>, `ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`Type`](collections_ReadonlyMap.md#type)<`unknown`\>, `T`, `T`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`Type`](collections_ReadonlyMap.md#type)<`unknown`\>, `T`, `T`, `TKey`\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`Type`](collections_ReadonlyMap.md#type)<`unknown`\>, `TA`, `TB`, `TKey`\>

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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`Type`](collections_ReadonlyMap.md#type)<`unknown`\>, `TA`, `TB`, `TKey`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### union

▸ **union**<`TKey`, `T`\>(`m2`): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m2` | `ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>
