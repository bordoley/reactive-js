[Reactive-JS](../README.md) / [collections/ReadonlyObjectMap](../modules/collections_ReadonlyObjectMap.md) / ReadonlyObjectMapModule

# Interface: ReadonlyObjectMapModule

[collections/ReadonlyObjectMap](../modules/collections_ReadonlyObjectMap.md).ReadonlyObjectMapModule

## Hierarchy

- [`DictionaryCollectionModule`](collections.DictionaryCollectionModule.md)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)\>

  ↳ **`ReadonlyObjectMapModule`**

## Table of contents

### Constructor Methods

- [empty](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#empty)

### Operator Methods

- [map](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#map)

### Other Methods

- [fromEntries](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#fromentries)

### Transform Methods

- [entries](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#entries)
- [keySet](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#keyset)
- [keys](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#keys)
- [reduce](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#reduce)
- [toDictionary](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#todictionary)
- [toReadonlyMap](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#toreadonlymap)
- [values](collections_ReadonlyObjectMap.ReadonlyObjectMapModule.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[empty](collections.DictionaryCollectionModule.md#empty)

___

## Operator Methods

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](../modules/collections.md#collectionoperator)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>, `TA`, `TB`, `TKey`\>

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
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`CollectionOperator`](../modules/collections.md#collectionoperator)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>, `TA`, `TB`, `TKey`\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[map](collections.DictionaryCollectionModule.md#map)

___

## Other Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>, [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>, [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[fromEntries](collections.DictionaryCollectionModule.md#fromentries)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[entries](collections.DictionaryCollectionModule.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[keySet](collections.DictionaryCollectionModule.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[keys](collections.DictionaryCollectionModule.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[reduce](collections.DictionaryCollectionModule.md#reduce)

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[toDictionary](collections.DictionaryCollectionModule.md#todictionary)

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[toReadonlyMap](collections.DictionaryCollectionModule.md#toreadonlymap)

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> = [`KeyOf`](../modules/collections.md#keyof)<[`Type`](../modules/collections_ReadonlyObjectMap.md#type)<`string` \| `symbol`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Inherited from

[DictionaryCollectionModule](collections.DictionaryCollectionModule.md).[values](collections.DictionaryCollectionModule.md#values)
