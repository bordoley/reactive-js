[Reactive-JS](../README.md) / [ReadonlyObjectMap](../modules/ReadonlyObjectMap.md) / Signature

# Interface: Signature

[ReadonlyObjectMap](../modules/ReadonlyObjectMap.md).Signature

## Hierarchy

- [`AssociativeKeyedContainerTypeClass`](type_classes.AssociativeKeyedContainerTypeClass.md)<[`Type`](ReadonlyObjectMap.Type.md)\>

  ↳ **`Signature`**

## Table of contents

### Constructor Methods

- [empty](ReadonlyObjectMap.Signature.md#empty)
- [fromEntries](ReadonlyObjectMap.Signature.md#fromentries)

### Operator Methods

- [forEach](ReadonlyObjectMap.Signature.md#foreach)
- [forEachWithKey](ReadonlyObjectMap.Signature.md#foreachwithkey)
- [keep](ReadonlyObjectMap.Signature.md#keep)
- [keepType](ReadonlyObjectMap.Signature.md#keeptype)
- [keepWithKey](ReadonlyObjectMap.Signature.md#keepwithkey)
- [map](ReadonlyObjectMap.Signature.md#map)
- [mapWithKey](ReadonlyObjectMap.Signature.md#mapwithkey)

### Transform Methods

- [entries](ReadonlyObjectMap.Signature.md#entries)
- [keySet](ReadonlyObjectMap.Signature.md#keyset)
- [keys](ReadonlyObjectMap.Signature.md#keys)
- [reduce](ReadonlyObjectMap.Signature.md#reduce)
- [reduceWithKey](ReadonlyObjectMap.Signature.md#reducewithkey)
- [values](ReadonlyObjectMap.Signature.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Returns

[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[empty](type_classes.AssociativeKeyedContainerTypeClass.md#empty)

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[fromEntries](type_classes.AssociativeKeyedContainerTypeClass.md#fromentries)

___

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[forEach](type_classes.AssociativeKeyedContainerTypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[forEachWithKey](type_classes.AssociativeKeyedContainerTypeClass.md#foreachwithkey)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keep](type_classes.AssociativeKeyedContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keepType](type_classes.AssociativeKeyedContainerTypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keepWithKey](type_classes.AssociativeKeyedContainerTypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[map](type_classes.AssociativeKeyedContainerTypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[mapWithKey](type_classes.AssociativeKeyedContainerTypeClass.md#mapwithkey)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[entries](type_classes.AssociativeKeyedContainerTypeClass.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keySet](type_classes.AssociativeKeyedContainerTypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keys](type_classes.AssociativeKeyedContainerTypeClass.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[reduce](type_classes.AssociativeKeyedContainerTypeClass.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> = [`KeyOf`](../modules/types.md#keyof)<[`Type`](ReadonlyObjectMap.Type.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[reduceWithKey](type_classes.AssociativeKeyedContainerTypeClass.md#reducewithkey)

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[values](type_classes.AssociativeKeyedContainerTypeClass.md#values)
