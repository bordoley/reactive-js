[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / ConcreteAssociativeKeyedContainerTypeClass

# Interface: ConcreteAssociativeKeyedContainerTypeClass<C, TKeyBase\>

[type-classes](../modules/type_classes.md).ConcreteAssociativeKeyedContainerTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md) |
| `TKeyBase` | extends [`KeyOf`](../modules/types.md#keyof)<`C`\> = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

## Hierarchy

- [`ConcreteKeyedContainerTypeClass`](type_classes.ConcreteKeyedContainerTypeClass.md)<`C`, `TKeyBase`\>

- [`AssociativeKeyedContainerTypeClass`](type_classes.AssociativeKeyedContainerTypeClass.md)<`C`, `TKeyBase`\>

  ↳ **`ConcreteAssociativeKeyedContainerTypeClass`**

  ↳↳ [`ReadonlyMapModule`](ReadonlyMap.ReadonlyMapModule.md)

  ↳↳ [`ReadonlyObjectMapModule`](ReadonlyObjectMap.ReadonlyObjectMapModule.md)

## Table of contents

### Constructor Methods

- [empty](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#empty)
- [fromEntries](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#fromentries)

### Operator Methods

- [forEach](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#foreach)
- [forEachWithKey](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#foreachwithkey)
- [keep](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keep)
- [keepType](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keeptype)
- [keepWithKey](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keepwithkey)
- [map](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#map)
- [mapWithKey](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#mapwithkey)

### Other Methods

- [fromReadonlyMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#fromreadonlymap)
- [fromReadonlyObjectMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#fromreadonlyobjectmap)
- [toDictionary](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#todictionary)
- [toReadonlyMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#toreadonlymap)
- [toReadonlyObjectMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#toreadonlyobjectmap)

### Transform Methods

- [entries](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#entries)
- [keySet](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keyset)
- [keys](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keys)
- [reduce](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#reduce)
- [reduceWithKey](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#reducewithkey)
- [values](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = `NonNullable`<`C`[typeof `__KeyedContainer_TKey`]\> |

#### Returns

[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

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
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[forEach](type_classes.AssociativeKeyedContainerTypeClass.md#foreach)

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

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[forEachWithKey](type_classes.AssociativeKeyedContainerTypeClass.md#foreachwithkey)

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

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[keep](type_classes.ConcreteKeyedContainerTypeClass.md#keep)

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

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[keepType](type_classes.ConcreteKeyedContainerTypeClass.md#keeptype)

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

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[keepWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#keepwithkey)

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

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[map](type_classes.ConcreteKeyedContainerTypeClass.md#map)

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

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[mapWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#mapwithkey)

___

## Other Methods

### fromReadonlyMap

▸ **fromReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[fromReadonlyMap](type_classes.AssociativeKeyedContainerTypeClass.md#fromreadonlymap)

___

### fromReadonlyObjectMap

▸ **fromReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`ReadonlyObjectMapContainer`](types.ReadonlyObjectMapContainer.md)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`ReadonlyObjectMapContainer`](types.ReadonlyObjectMapContainer.md)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\> : `never`

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[fromReadonlyObjectMap](type_classes.AssociativeKeyedContainerTypeClass.md#fromreadonlyobjectmap)

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[toDictionary](type_classes.AssociativeKeyedContainerTypeClass.md#todictionary)

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### toReadonlyObjectMap

▸ **toReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`ReadonlyObjectMapContainer`](types.ReadonlyObjectMapContainer.md)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`ReadonlyObjectMapContainer`](types.ReadonlyObjectMapContainer.md)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

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

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[entries](type_classes.AssociativeKeyedContainerTypeClass.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keySet](type_classes.AssociativeKeyedContainerTypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keys](type_classes.AssociativeKeyedContainerTypeClass.md#keys)

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

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[reduce](type_classes.AssociativeKeyedContainerTypeClass.md#reduce)

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

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[reduceWithKey](type_classes.AssociativeKeyedContainerTypeClass.md#reducewithkey)

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

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[values](type_classes.AssociativeKeyedContainerTypeClass.md#values)
