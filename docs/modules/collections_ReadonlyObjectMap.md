[Reactive-JS](../README.md) / collections/ReadonlyObjectMap

# Module: collections/ReadonlyObjectMap

## Table of contents

### Interfaces

- [ReadonlyObjectMapCollection](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)

### Type Aliases

- [Signature](collections_ReadonlyObjectMap.md#signature)
- [TKeyBase](collections_ReadonlyObjectMap.md#tkeybase)
- [Type](collections_ReadonlyObjectMap.md#type)

### Functions

- [empty](collections_ReadonlyObjectMap.md#empty)
- [entries](collections_ReadonlyObjectMap.md#entries)
- [forEach](collections_ReadonlyObjectMap.md#foreach)
- [fromEntries](collections_ReadonlyObjectMap.md#fromentries)
- [keySet](collections_ReadonlyObjectMap.md#keyset)
- [keys](collections_ReadonlyObjectMap.md#keys)
- [map](collections_ReadonlyObjectMap.md#map)
- [reduce](collections_ReadonlyObjectMap.md#reduce)
- [toDictionary](collections_ReadonlyObjectMap.md#todictionary)
- [toReadonlyMap](collections_ReadonlyObjectMap.md#toreadonlymap)
- [values](collections_ReadonlyObjectMap.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`DictionaryCollectionModule`](../interfaces/collections.DictionaryCollectionModule.md)<[`Type`](collections_ReadonlyObjectMap.md#type)\>

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

## Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

___

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`selector`): [`SideEffect1`](functions.md#sideeffect1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>, [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>, [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>, `TA`, `TB`, `TKey`\>

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
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>, `TA`, `TB`, `TKey`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>
