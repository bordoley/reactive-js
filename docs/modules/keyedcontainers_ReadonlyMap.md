[Reactive-JS](../README.md) / keyedcontainers/ReadonlyMap

# Module: keyedcontainers/ReadonlyMap

## Table of contents

### Constructor Functions

- [empty](keyedcontainers_ReadonlyMap.md#empty)

### Operator Functions

- [map](keyedcontainers_ReadonlyMap.md#map)
- [mapWithKey](keyedcontainers_ReadonlyMap.md#mapwithkey)

### Transform Functions

- [entries](keyedcontainers_ReadonlyMap.md#entries)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(`options?`): `ReadonlyMap`<`TKey`, `T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

`ReadonlyMap`<`TKey`, `T`\>

___

## Operator Functions

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`mapper`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyMapLike`](../interfaces/keyedcontainers.ReadonlyMapLike.md)<`unknown`, `unknown`\>, `TKey`, `TA`, `TB`\>

Returns a ContainerOperator that applies the `mapper` function to each
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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyMapLike`](../interfaces/keyedcontainers.ReadonlyMapLike.md)<`unknown`, `unknown`\>, `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`mapper`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyMapLike`](../interfaces/keyedcontainers.ReadonlyMapLike.md)<`unknown`, `unknown`\>, `TKey`, `TA`, `TB`\>

Returns a ContainerOperator that applies the `mapper` function to each
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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyMapLike`](../interfaces/keyedcontainers.ReadonlyMapLike.md)<`unknown`, `unknown`\>, `TKey`, `TA`, `TB`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>
