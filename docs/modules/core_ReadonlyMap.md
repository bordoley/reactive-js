[Reactive-JS](../README.md) / core/ReadonlyMap

# Module: core/ReadonlyMap

## Table of contents

### Constructor Functions

- [empty](core_ReadonlyMap.md#empty)

### Operator Functions

- [map](core_ReadonlyMap.md#map)
- [mapWithKey](core_ReadonlyMap.md#mapwithkey)

### Transform Functions

- [entries](core_ReadonlyMap.md#entries)
- [keys](core_ReadonlyMap.md#keys)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): `ReadonlyMap`<`TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

`ReadonlyMap`<`TKey`, `T`\>

___

## Operator Functions

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyMapContainer`](../interfaces/core.ReadonlyMapContainer.md), `TKey`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyMapContainer`](../interfaces/core.ReadonlyMapContainer.md), `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyMapContainer`](../interfaces/core.ReadonlyMapContainer.md), `TKey`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyMapContainer`](../interfaces/core.ReadonlyMapContainer.md), `TKey`, `TA`, `TB`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`TKey`\>\>
