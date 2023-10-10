[Reactive-JS](../README.md) / [collections/ReadonlyMap](../modules/collections_ReadonlyMap.md) / ReadonlyMapModule

# Interface: ReadonlyMapModule

[collections/ReadonlyMap](../modules/collections_ReadonlyMap.md).ReadonlyMapModule

## Hierarchy

- [`DictionaryModule`](collections.DictionaryModule.md)<[`Type`](../modules/collections_ReadonlyMap.md#type)\>

  ↳ **`ReadonlyMapModule`**

## Table of contents

### Constructor Methods

- [empty](collections_ReadonlyMap.ReadonlyMapModule.md#empty)

### Operator Methods

- [map](collections_ReadonlyMap.ReadonlyMapModule.md#map)

### Other Methods

- [fromEntries](collections_ReadonlyMap.ReadonlyMapModule.md#fromentries)

### Transform Methods

- [entries](collections_ReadonlyMap.ReadonlyMapModule.md#entries)
- [keySet](collections_ReadonlyMap.ReadonlyMapModule.md#keyset)
- [keys](collections_ReadonlyMap.ReadonlyMapModule.md#keys)
- [reduce](collections_ReadonlyMap.ReadonlyMapModule.md#reduce)
- [toDictionary](collections_ReadonlyMap.ReadonlyMapModule.md#todictionary)
- [toReadonlyMap](collections_ReadonlyMap.ReadonlyMapModule.md#toreadonlymap)
- [values](collections_ReadonlyMap.ReadonlyMapModule.md#values)

## Constructor Methods

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

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[empty](collections.DictionaryModule.md#empty)

___

## Operator Methods

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](../modules/collections.md#collectionoperator)<[`Type`](../modules/collections_ReadonlyMap.md#type)<`unknown`\>, `TA`, `TB`, `TKey`\>

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
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`CollectionOperator`](../modules/collections.md#collectionoperator)<[`Type`](../modules/collections_ReadonlyMap.md#type)<`unknown`\>, `TA`, `TB`, `TKey`\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[map](collections.DictionaryModule.md#map)

___

## Other Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>, `ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>, `ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[fromEntries](collections.DictionaryModule.md#fromentries)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[entries](collections.DictionaryModule.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[keySet](collections.DictionaryModule.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `unknown`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `unknown`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TKey`\>\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[keys](collections.DictionaryModule.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `TAcc`\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[reduce](collections.DictionaryModule.md#reduce)

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[toDictionary](collections.DictionaryModule.md#todictionary)

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[toReadonlyMap](collections.DictionaryModule.md#toreadonlymap)

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`NonNullable`<`TKey`\>, `T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Inherited from

[DictionaryModule](collections.DictionaryModule.md).[values](collections.DictionaryModule.md#values)
