[Reactive-JS](../README.md) / collections/IndexedCollection

# Module: collections/IndexedCollection

## Table of contents

### Collection Interfaces

- [IndexedCollectionCollection](../interfaces/collections_IndexedCollection.IndexedCollectionCollection.md)

### Module Interfaces

- [IndexedCollectionModule](../interfaces/collections_IndexedCollection.IndexedCollectionModule.md)

### Type Aliases

- [Signature](collections_IndexedCollection.md#signature)
- [TKeyBase](collections_IndexedCollection.md#tkeybase)
- [Type](collections_IndexedCollection.md#type)

### Other Functions

- [empty](collections_IndexedCollection.md#empty)
- [entries](collections_IndexedCollection.md#entries)
- [keySet](collections_IndexedCollection.md#keyset)
- [keys](collections_IndexedCollection.md#keys)
- [map](collections_IndexedCollection.md#map)
- [reduce](collections_IndexedCollection.md#reduce)
- [toDictionary](collections_IndexedCollection.md#todictionary)
- [toIndexedCollection](collections_IndexedCollection.md#toindexedcollection)
- [toReadonlyArray](collections_IndexedCollection.md#toreadonlyarray)
- [values](collections_IndexedCollection.md#values)

### Transform Functions

- [toReadonlyMap](collections_IndexedCollection.md#toreadonlymap)

## Type Aliases

### Signature

Ƭ **Signature**: [`IndexedCollectionModule`](../interfaces/collections_IndexedCollection.IndexedCollectionModule.md)

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](collections.md#keyof)<[`Type`](collections_IndexedCollection.md#type)\>

___

### Type

Ƭ **Type**: [`IndexedCollectionCollection`](../interfaces/collections_IndexedCollection.IndexedCollectionCollection.md)

## Other Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>

___

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`unknown`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](collections.md#collectionoperator)<[`IndexedCollectionCollection`](../interfaces/collections_IndexedCollection.IndexedCollectionCollection.md), `TA`, `TB`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> |

#### Returns

[`CollectionOperator`](collections.md#collectionoperator)<[`IndexedCollectionCollection`](../interfaces/collections_IndexedCollection.IndexedCollectionCollection.md), `TA`, `TB`, `TKey`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toIndexedCollection

▸ **toIndexedCollection**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, [`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, [`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, readonly `T`[]\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, readonly `T`[]\>

___

### values

▸ **values**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

___

## Transform Functions

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>, `ReadonlyMap`<`TKey`, `T`\>\>
