[Reactive-JS](../README.md) / keyed-containers/ReadonlyObjectMap

# Module: keyed-containers/ReadonlyObjectMap

## Table of contents

### Constructor Functions

- [empty](keyed_containers_ReadonlyObjectMap.md#empty)

### Operator Functions

- [forEachWithKey](keyed_containers_ReadonlyObjectMap.md#foreachwithkey)
- [keep](keyed_containers_ReadonlyObjectMap.md#keep)
- [keepType](keyed_containers_ReadonlyObjectMap.md#keeptype)
- [keepWithKey](keyed_containers_ReadonlyObjectMap.md#keepwithkey)
- [map](keyed_containers_ReadonlyObjectMap.md#map)
- [mapWithKey](keyed_containers_ReadonlyObjectMap.md#mapwithkey)

### Transform Functions

- [entries](keyed_containers_ReadonlyObjectMap.md#entries)
- [keySet](keyed_containers_ReadonlyObjectMap.md#keyset)
- [keys](keyed_containers_ReadonlyObjectMap.md#keys)
- [reduce](keyed_containers_ReadonlyObjectMap.md#reduce)
- [reduceWithKey](keyed_containers_ReadonlyObjectMap.md#reducewithkey)
- [values](keyed_containers_ReadonlyObjectMap.md#values)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

___

## Operator Functions

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyObjectMapContainer`](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<{}, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<{}, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<{}, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<{}, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

___

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>
