[Reactive-JS](../README.md) / collections/Dictionary

# Module: collections/Dictionary

## Table of contents

### Collection Interfaces

- [DictionaryCollection](../interfaces/collections_Dictionary.DictionaryCollection.md)

### Type Aliases

- [Signature](collections_Dictionary.md#signature)
- [TKeyBase](collections_Dictionary.md#tkeybase)
- [Type](collections_Dictionary.md#type)

### Constructor Functions

- [empty](collections_Dictionary.md#empty)

### Operator Functions

- [map](collections_Dictionary.md#map)

### Other Functions

- [fromEntries](collections_Dictionary.md#fromentries)

### Transform Functions

- [entries](collections_Dictionary.md#entries)
- [keys](collections_Dictionary.md#keys)
- [reduce](collections_Dictionary.md#reduce)
- [toDictionary](collections_Dictionary.md#todictionary)
- [toReadonlyMap](collections_Dictionary.md#toreadonlymap)
- [values](collections_Dictionary.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`DictionaryCollectionModule`](../interfaces/collections.DictionaryCollectionModule.md)<[`Type`](collections_Dictionary.md#type)\>

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](collections.md#keyof)<[`Type`](collections_Dictionary.md#type)\>

___

### Type

Ƭ **Type**<`TKey`\>: [`DictionaryCollection`](../interfaces/collections_Dictionary.DictionaryCollection.md)<`TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>

___

## Operator Functions

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](collections.md#collectionoperator)<[`Type`](collections_Dictionary.md#type)<`unknown`\>, `TA`, `TB`, `TKey`\>

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

[`CollectionOperator`](collections.md#collectionoperator)<[`Type`](collections_Dictionary.md#type)<`unknown`\>, `TA`, `TB`, `TKey`\>

___

## Other Functions

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>
