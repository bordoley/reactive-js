[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / KeyedContainerTypeClass

# Interface: KeyedContainerTypeClass<C\>

[type-classes](../modules/type_classes.md).KeyedContainerTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md) |

## Hierarchy

- **`KeyedContainerTypeClass`**

  ↳ [`Signature`](Dictionary.Signature.md)

  ↳ [`Signature`](ReadonlyArray.Signature.md)

  ↳ [`Signature`](ReadonlyMap.Signature.md)

  ↳ [`Signature`](ReadonlyObjectMap.Signature.md)

## Table of contents

### Constructor Methods

- [empty](type_classes.KeyedContainerTypeClass.md#empty)
- [fromEntries](type_classes.KeyedContainerTypeClass.md#fromentries)
- [fromReadonlyArray](type_classes.KeyedContainerTypeClass.md#fromreadonlyarray)

### Operator Methods

- [forEach](type_classes.KeyedContainerTypeClass.md#foreach)
- [forEachWithKey](type_classes.KeyedContainerTypeClass.md#foreachwithkey)
- [identity](type_classes.KeyedContainerTypeClass.md#identity)
- [keep](type_classes.KeyedContainerTypeClass.md#keep)
- [keepType](type_classes.KeyedContainerTypeClass.md#keeptype)
- [keepWithKey](type_classes.KeyedContainerTypeClass.md#keepwithkey)
- [map](type_classes.KeyedContainerTypeClass.md#map)
- [mapWithKey](type_classes.KeyedContainerTypeClass.md#mapwithkey)

### Transform Methods

- [entries](type_classes.KeyedContainerTypeClass.md#entries)
- [keySet](type_classes.KeyedContainerTypeClass.md#keyset)
- [keys](type_classes.KeyedContainerTypeClass.md#keys)
- [reduce](type_classes.KeyedContainerTypeClass.md#reduce)
- [reduceWithKey](type_classes.KeyedContainerTypeClass.md#reducewithkey)
- [toReadonlyArray](type_classes.KeyedContainerTypeClass.md#toreadonlyarray)
- [values](type_classes.KeyedContainerTypeClass.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

___

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, readonly `T`[]\>

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>
