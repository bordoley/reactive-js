[Reactive-JS](../README.md) / [ReadonlyMap](../modules/ReadonlyMap.md) / ReadonlyMapModule

# Interface: ReadonlyMapModule<TType, TKey\>

[ReadonlyMap](../modules/ReadonlyMap.md).ReadonlyMapModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends [`Type`](../modules/ReadonlyMap.md#type) = [`Type`](../modules/ReadonlyMap.md#type) |
| `TKey` | extends [`TKeyBase`](../modules/ReadonlyMap.md#tkeybase) = [`TKeyBase`](../modules/ReadonlyMap.md#tkeybase) |

## Hierarchy

- [`ConcreteAssociativeKeyedContainerTypeClass`](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md)<`TType`, `TKey`\>

  ↳ **`ReadonlyMapModule`**

## Table of contents

### Constructor Methods

- [empty](ReadonlyMap.ReadonlyMapModule.md#empty)
- [fromEntries](ReadonlyMap.ReadonlyMapModule.md#fromentries)

### Operator Methods

- [forEach](ReadonlyMap.ReadonlyMapModule.md#foreach)
- [forEachWithKey](ReadonlyMap.ReadonlyMapModule.md#foreachwithkey)
- [keep](ReadonlyMap.ReadonlyMapModule.md#keep)
- [keepType](ReadonlyMap.ReadonlyMapModule.md#keeptype)
- [keepWithKey](ReadonlyMap.ReadonlyMapModule.md#keepwithkey)
- [map](ReadonlyMap.ReadonlyMapModule.md#map)
- [mapWithKey](ReadonlyMap.ReadonlyMapModule.md#mapwithkey)

### Other Methods

- [fromReadonlyMap](ReadonlyMap.ReadonlyMapModule.md#fromreadonlymap)
- [fromReadonlyObjectMap](ReadonlyMap.ReadonlyMapModule.md#fromreadonlyobjectmap)
- [toDictionary](ReadonlyMap.ReadonlyMapModule.md#todictionary)
- [toReadonlyMap](ReadonlyMap.ReadonlyMapModule.md#toreadonlymap)
- [toReadonlyObjectMap](ReadonlyMap.ReadonlyMapModule.md#toreadonlyobjectmap)

### Transform Methods

- [entries](ReadonlyMap.ReadonlyMapModule.md#entries)
- [keySet](ReadonlyMap.ReadonlyMapModule.md#keyset)
- [keys](ReadonlyMap.ReadonlyMapModule.md#keys)
- [reduce](ReadonlyMap.ReadonlyMapModule.md#reduce)
- [reduceWithKey](ReadonlyMap.ReadonlyMapModule.md#reducewithkey)
- [values](ReadonlyMap.ReadonlyMapModule.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = `NonNullable`<`TType`[typeof `__KeyedContainer_TKey`]\> |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[fromReadonlyMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#fromreadonlymap)

___

### fromReadonlyObjectMap

▸ **fromReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\> : `never`

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[fromReadonlyObjectMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#fromreadonlyobjectmap)

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[toDictionary](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#todictionary)

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[toReadonlyMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#toreadonlymap)

___

### toReadonlyObjectMap

▸ **toReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Inherited from

[ConcreteAssociativeKeyedContainerTypeClass](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md).[toReadonlyObjectMap](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#toreadonlyobjectmap)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
| `TKey` | extends `Object` |

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
