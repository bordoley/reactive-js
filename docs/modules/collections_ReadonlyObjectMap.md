[Reactive-JS](../README.md) / collections/ReadonlyObjectMap

# Module: collections/ReadonlyObjectMap

## Table of contents

### Interfaces

- [ReadonlyObjectMapCollection](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)

### Type Aliases

- [Signature](collections_ReadonlyObjectMap.md#signature)
- [TKeyBase](collections_ReadonlyObjectMap.md#tkeybase)

### Functions

- [empty](collections_ReadonlyObjectMap.md#empty)
- [entries](collections_ReadonlyObjectMap.md#entries)
- [forEach](collections_ReadonlyObjectMap.md#foreach)
- [fromEntries](collections_ReadonlyObjectMap.md#fromentries)
- [keep](collections_ReadonlyObjectMap.md#keep)
- [keySet](collections_ReadonlyObjectMap.md#keyset)
- [keys](collections_ReadonlyObjectMap.md#keys)
- [map](collections_ReadonlyObjectMap.md#map)
- [reduce](collections_ReadonlyObjectMap.md#reduce)
- [toDictionary](collections_ReadonlyObjectMap.md#todictionary)
- [toReadonlyMap](collections_ReadonlyObjectMap.md#toreadonlymap)
- [union](collections_ReadonlyObjectMap.md#union)
- [values](collections_ReadonlyObjectMap.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`DictionaryCollectionModule`](../interfaces/collections.DictionaryCollectionModule.md)<[`ReadonlyObjectMapCollection`](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)\>

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](collections.md#keyof)<[`ReadonlyObjectMapCollection`](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)\>

## Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` = `string` |

#### Returns

[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>

___

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` = `string` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`selector`): [`SideEffect1`](functions.md#sideeffect1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>, [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>, [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`CollectionOperator`](collections.md#collectionoperator)<[`ReadonlyObjectMapCollection`](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)<`string`\>, `T`, `T`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`CollectionOperator`](collections.md#collectionoperator)<[`ReadonlyObjectMapCollection`](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)<`string`\>, `T`, `T`, `TKey`\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](collections.md#collectionoperator)<[`ReadonlyObjectMapCollection`](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)<`string`\>, `TA`, `TB`, `TKey`\>

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
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`CollectionOperator`](collections.md#collectionoperator)<[`ReadonlyObjectMapCollection`](../interfaces/collections_ReadonlyObjectMap.ReadonlyObjectMapCollection.md)<`string`\>, `TA`, `TB`, `TKey`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### union

▸ **union**<`TKey`, `T`\>(`m2`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m2` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` = `string` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string` & `TKey`, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>
