[Reactive-JS](../README.md) / [ReadonlyObjectMap](../modules/ReadonlyObjectMap.md) / ReadonlyObjectMapModule

# Interface: ReadonlyObjectMapModule<TType, TKey\>

[ReadonlyObjectMap](../modules/ReadonlyObjectMap.md).ReadonlyObjectMapModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends [`Type`](../modules/ReadonlyObjectMap.md#type) = [`Type`](../modules/ReadonlyObjectMap.md#type) |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) = [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

## Hierarchy

- [`ConcreteAssociativeKeyedContainerTypeClass`](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md)<`TType`, `TKey`\>

  ↳ **`ReadonlyObjectMapModule`**

## Table of contents

### Constructor Methods

- [empty](ReadonlyObjectMap.ReadonlyObjectMapModule.md#empty)
- [fromEntries](ReadonlyObjectMap.ReadonlyObjectMapModule.md#fromentries)

### Operator Methods

- [forEach](ReadonlyObjectMap.ReadonlyObjectMapModule.md#foreach)
- [forEachWithKey](ReadonlyObjectMap.ReadonlyObjectMapModule.md#foreachwithkey)
- [keep](ReadonlyObjectMap.ReadonlyObjectMapModule.md#keep)
- [keepType](ReadonlyObjectMap.ReadonlyObjectMapModule.md#keeptype)
- [keepWithKey](ReadonlyObjectMap.ReadonlyObjectMapModule.md#keepwithkey)
- [map](ReadonlyObjectMap.ReadonlyObjectMapModule.md#map)
- [mapWithKey](ReadonlyObjectMap.ReadonlyObjectMapModule.md#mapwithkey)

### Other Methods

- [fromReadonlyMap](ReadonlyObjectMap.ReadonlyObjectMapModule.md#fromreadonlymap)
- [toDictionary](ReadonlyObjectMap.ReadonlyObjectMapModule.md#todictionary)

### Transform Methods

- [entries](ReadonlyObjectMap.ReadonlyObjectMapModule.md#entries)
- [keySet](ReadonlyObjectMap.ReadonlyObjectMapModule.md#keyset)
- [keys](ReadonlyObjectMap.ReadonlyObjectMapModule.md#keys)
- [reduce](ReadonlyObjectMap.ReadonlyObjectMapModule.md#reduce)
- [reduceWithKey](ReadonlyObjectMap.ReadonlyObjectMapModule.md#reducewithkey)
- [values](ReadonlyObjectMap.ReadonlyObjectMapModule.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` = `NonNullable`<`TType`[typeof `__KeyedContainer_TKey`]\> |

#### Returns

[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[empty](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#empty)

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[fromEntries](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#fromentries)

___

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[forEach](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[forEachWithKey](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#foreachwithkey)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[keep](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `TA`, `TB`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[keepType](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[keepWithKey](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `TA`, `TB`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[map](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `TA`, `TB`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[mapWithKey](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#mapwithkey)

___

## Other Methods

### fromReadonlyMap

▸ **fromReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[fromReadonlyMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#fromreadonlymap)

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[toDictionary](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#todictionary)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[entries](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[keySet](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[keys](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `TAcc`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[reduce](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `TAcc`\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[reduceWithKey](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#reducewithkey)

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[values](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#values)
