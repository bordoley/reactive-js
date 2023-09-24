[Reactive-JS](../README.md) / collections/ReadonlyArray

# Module: collections/ReadonlyArray

## Table of contents

### Container Interfaces

- [ReadonlyArrayContainer](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md)

### Module Interfaces

- [ReadonlyArrayModule](../interfaces/collections_ReadonlyArray.ReadonlyArrayModule.md)

### Type Aliases

- [Signature](collections_ReadonlyArray.md#signature)
- [TKeyBase](collections_ReadonlyArray.md#tkeybase)
- [Type](collections_ReadonlyArray.md#type)

### Constructor Functions

- [empty](collections_ReadonlyArray.md#empty)

### Operator Functions

- [forEach](collections_ReadonlyArray.md#foreach)
- [forEachWithKey](collections_ReadonlyArray.md#foreachwithkey)
- [keep](collections_ReadonlyArray.md#keep)
- [keepWithKey](collections_ReadonlyArray.md#keepwithkey)
- [map](collections_ReadonlyArray.md#map)
- [mapWithKey](collections_ReadonlyArray.md#mapwithkey)

### Transform Functions

- [entries](collections_ReadonlyArray.md#entries)
- [keySet](collections_ReadonlyArray.md#keyset)
- [keys](collections_ReadonlyArray.md#keys)
- [reduce](collections_ReadonlyArray.md#reduce)
- [reduceWithKey](collections_ReadonlyArray.md#reducewithkey)
- [toDictionary](collections_ReadonlyArray.md#todictionary)
- [toIndexedCollection](collections_ReadonlyArray.md#toindexedcollection)
- [toReadonlyArray](collections_ReadonlyArray.md#toreadonlyarray)
- [toReadonlyMap](collections_ReadonlyArray.md#toreadonlymap)
- [values](collections_ReadonlyArray.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`ReadonlyArrayModule`](../interfaces/collections_ReadonlyArray.ReadonlyArrayModule.md)

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](collections.md#keyof)<[`Type`](collections_ReadonlyArray.md#type)\>

___

### Type

Ƭ **Type**: [`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): readonly `T`[]

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

readonly `T`[]

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

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

[`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
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
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`, `TKey`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
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

[`ContainerOperator`](collections.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/collections_ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`, `TKey`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], `Iterator`<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>, `any`, `undefined`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], `Iterator`<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>, `any`, `undefined`\>\>

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

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<readonly `unknown`[], `Iterator`<`TKey`, `any`, `undefined`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `unknown`[], `Iterator`<`TKey`, `any`, `undefined`\>\>

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
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

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

### toIndexedCollection

▸ **toIndexedCollection**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`IndexedCollectionLike`](../interfaces/collections.IndexedCollectionLike.md)<`T`\>\>

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

▸ **values**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], `Iterator`<`T`, `any`, `undefined`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], `Iterator`<`T`, `any`, `undefined`\>\>
