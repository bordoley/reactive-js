[Reactive-JS](../README.md) / ReadonlyObjectMap

# Module: ReadonlyObjectMap

## Table of contents

### Constructor Functions

- [empty](ReadonlyObjectMap.md#empty)

### Operator Functions

- [forEachWithKey](ReadonlyObjectMap.md#foreachwithkey)
- [keep](ReadonlyObjectMap.md#keep)
- [keepType](ReadonlyObjectMap.md#keeptype)
- [keepWithKey](ReadonlyObjectMap.md#keepwithkey)
- [map](ReadonlyObjectMap.md#map)
- [mapWithKey](ReadonlyObjectMap.md#mapwithkey)

### Transform Functions

- [entries](ReadonlyObjectMap.md#entries)
- [keySet](ReadonlyObjectMap.md#keyset)
- [keys](ReadonlyObjectMap.md#keys)
- [reduce](ReadonlyObjectMap.md#reduce)
- [reduceWithKey](ReadonlyObjectMap.md#reducewithkey)
- [values](ReadonlyObjectMap.md#values)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

___

## Operator Functions

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

Returns a KeyedContainers.Operator that applies the side effect function to each
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

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyObjectMapContainer`](../interfaces/containers.ReadonlyObjectMapContainer.md), `TKey`, `TA`, `TB`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

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

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<{}, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<{}, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

___

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>
