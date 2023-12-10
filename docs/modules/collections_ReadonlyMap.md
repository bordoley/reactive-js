[Reactive-JS](../README.md) / collections/ReadonlyMap

# Module: collections/ReadonlyMap

## Table of contents

### Collection Interfaces

- [ReadonlyMapCollection](../interfaces/collections_ReadonlyMap.ReadonlyMapCollection.md)

### Type Aliases

- [Signature](collections_ReadonlyMap.md#signature)
- [TKeyBase](collections_ReadonlyMap.md#tkeybase)
- [Type](collections_ReadonlyMap.md#type)

### Constructor Functions

- [empty](collections_ReadonlyMap.md#empty)

### Operator Functions

- [map](collections_ReadonlyMap.md#map)

### Other Functions

- [fromEntries](collections_ReadonlyMap.md#fromentries)

### Transform Functions

- [entries](collections_ReadonlyMap.md#entries)
- [keySet](collections_ReadonlyMap.md#keyset)
- [keys](collections_ReadonlyMap.md#keys)
- [reduce](collections_ReadonlyMap.md#reduce)
- [toDictionary](collections_ReadonlyMap.md#todictionary)
- [toReadonlyMap](collections_ReadonlyMap.md#toreadonlymap)
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

## Constructor Functions

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

## Operator Functions

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](collections.md#collectionoperator)<[`Type`](collections_ReadonlyMap.md#type)<`unknown`\>, `TA`, `TB`, `TKey`\>

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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`CollectionOperator`](collections.md#collectionoperator)<[`Type`](collections_ReadonlyMap.md#type)<`unknown`\>, `TA`, `TB`, `TKey`\>

___

## Other Functions

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

## Transform Functions

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

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>
