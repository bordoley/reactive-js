[Reactive-JS](../README.md) / [collections](../modules/collections.md) / CollectionModule

# Interface: CollectionModule<C\>

[collections](../modules/collections.md).CollectionModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](collections.Container.md) |

## Hierarchy

- **`CollectionModule`**

  ↳ [`IndexedCollectionModule`](collections.IndexedCollectionModule.md)

## Table of contents

### Constructor Methods

- [empty](collections.CollectionModule.md#empty)

### Operator Methods

- [keep](collections.CollectionModule.md#keep)
- [keepWithKey](collections.CollectionModule.md#keepwithkey)
- [map](collections.CollectionModule.md#map)
- [mapWithKey](collections.CollectionModule.md#mapwithkey)

### Transform Methods

- [entries](collections.CollectionModule.md#entries)
- [keySet](collections.CollectionModule.md#keyset)
- [keys](collections.CollectionModule.md#keys)
- [reduce](collections.CollectionModule.md#reduce)
- [reduceWithKey](collections.CollectionModule.md#reducewithkey)
- [toDictionary](collections.CollectionModule.md#todictionary)
- [toReadonlyMap](collections.CollectionModule.md#toreadonlymap)
- [values](collections.CollectionModule.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>

___

## Operator Methods

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](../modules/collections.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/collections.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](../modules/collections.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`ContainerOperator`](../modules/collections.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](../modules/collections.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

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
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](../modules/collections.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](../modules/collections.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

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
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](../modules/collections.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `Iterator`<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>, `any`, `undefined`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `Iterator`<[`Tuple2`](../modules/functions.md#tuple2)<`TKey`, `T`\>, `any`, `undefined`\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `unknown`, `TKey`\>, `Iterator`<`TKey`, `any`, `undefined`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `unknown`, `TKey`\>, `Iterator`<`TKey`, `any`, `undefined`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `Iterator`<`T`, `any`, `undefined`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/collections.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/collections.md#containerof)<`C`, `T`, `TKey`\>, `Iterator`<`T`, `any`, `undefined`\>\>
