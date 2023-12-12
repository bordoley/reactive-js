[Reactive-JS](../README.md) / collections/ReadonlyArray

# Module: collections/ReadonlyArray

## Table of contents

### Interfaces

- [ReadonlyArrayCollection](../interfaces/collections_ReadonlyArray.ReadonlyArrayCollection.md)

### Type Aliases

- [Signature](collections_ReadonlyArray.md#signature)
- [TKeyBase](collections_ReadonlyArray.md#tkeybase)
- [Type](collections_ReadonlyArray.md#type)

### Functions

- [empty](collections_ReadonlyArray.md#empty)
- [entries](collections_ReadonlyArray.md#entries)
- [forEach](collections_ReadonlyArray.md#foreach)
- [keep](collections_ReadonlyArray.md#keep)
- [keySet](collections_ReadonlyArray.md#keyset)
- [keys](collections_ReadonlyArray.md#keys)
- [map](collections_ReadonlyArray.md#map)
- [reduce](collections_ReadonlyArray.md#reduce)
- [toDictionary](collections_ReadonlyArray.md#todictionary)
- [toIndexed](collections_ReadonlyArray.md#toindexed)
- [toReadonlyArray](collections_ReadonlyArray.md#toreadonlyarray)
- [toReadonlyMap](collections_ReadonlyArray.md#toreadonlymap)
- [values](collections_ReadonlyArray.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`IndexedCollectionModule`](../interfaces/collections.IndexedCollectionModule.md)<[`Type`](collections_ReadonlyArray.md#type)\>

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyArray.md#type)\>

___

### Type

Ƭ **Type**: [`ReadonlyArrayCollection`](../interfaces/collections_ReadonlyArray.ReadonlyArrayCollection.md)

## Functions

### empty

▸ **empty**<`T`, `TKey`\>(): readonly `T`[]

Return an Collection that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

readonly `T`[]

___

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`selector`): [`SideEffect1`](functions.md#sideeffect1)<readonly `T`[]\>

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

[`SideEffect1`](functions.md#sideeffect1)<readonly `T`[]\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`ReadonlyArrayCollection`](../interfaces/collections_ReadonlyArray.ReadonlyArrayCollection.md), `T`, `T`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`ReadonlyArrayCollection`](../interfaces/collections_ReadonlyArray.ReadonlyArrayCollection.md), `T`, `T`, `TKey`\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<readonly `unknown`[], `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `unknown`[], `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<readonly `unknown`[], [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `unknown`[], [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TKey`\>\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`ReadonlyArrayCollection`](../interfaces/collections_ReadonlyArray.ReadonlyArrayCollection.md), `TA`, `TB`, `TKey`\>

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

[`KeyedCollectionOperator`](collections.md#keyedcollectionoperator)<[`ReadonlyArrayCollection`](../interfaces/collections_ReadonlyArray.ReadonlyArrayCollection.md), `TA`, `TB`, `TKey`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

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

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toIndexed

▸ **toIndexed**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`IndexedLike`](../interfaces/collections.IndexedLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

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

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `ReadonlyMap`<`TKey`, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>
