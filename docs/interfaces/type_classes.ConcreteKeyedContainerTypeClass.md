[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / ConcreteKeyedContainerTypeClass

# Interface: ConcreteKeyedContainerTypeClass<C, TKeyBase\>

[type-classes](../modules/type_classes.md).ConcreteKeyedContainerTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md) |
| `TKeyBase` | extends [`KeyOf`](../modules/types.md#keyof)<`C`\> = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

## Hierarchy

- [`KeyedContainerTypeClass`](type_classes.KeyedContainerTypeClass.md)<`C`, `TKeyBase`\>

  ↳ **`ConcreteKeyedContainerTypeClass`**

  ↳↳ [`ReadonlyArrayModule`](ReadonlyArray.ReadonlyArrayModule.md)

  ↳↳ [`ConcreteAssociativeKeyedContainerTypeClass`](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md)

## Table of contents

### Operator Methods

- [forEach](type_classes.ConcreteKeyedContainerTypeClass.md#foreach)
- [forEachWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#foreachwithkey)
- [keep](type_classes.ConcreteKeyedContainerTypeClass.md#keep)
- [keepType](type_classes.ConcreteKeyedContainerTypeClass.md#keeptype)
- [keepWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#keepwithkey)
- [map](type_classes.ConcreteKeyedContainerTypeClass.md#map)
- [mapWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#mapwithkey)

### Transform Methods

- [entries](type_classes.ConcreteKeyedContainerTypeClass.md#entries)
- [reduce](type_classes.ConcreteKeyedContainerTypeClass.md#reduce)
- [reduceWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#reducewithkey)
- [values](type_classes.ConcreteKeyedContainerTypeClass.md#values)

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[forEach](type_classes.KeyedContainerTypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[forEachWithKey](type_classes.KeyedContainerTypeClass.md#foreachwithkey)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[entries](type_classes.KeyedContainerTypeClass.md#entries)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[reduce](type_classes.KeyedContainerTypeClass.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[reduceWithKey](type_classes.KeyedContainerTypeClass.md#reducewithkey)

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[values](type_classes.KeyedContainerTypeClass.md#values)
