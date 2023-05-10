[Reactive-JS](../README.md) / ReadonlyMap

# Module: ReadonlyMap

## Table of contents

### Interfaces

- [Signature](../interfaces/ReadonlyMap.Signature.md)
- [Type](../interfaces/ReadonlyMap.Type.md)

### Type Aliases

- [TKey](ReadonlyMap.md#tkey)

### Constructor Functions

- [empty](ReadonlyMap.md#empty)

### Operator Functions

- [map](ReadonlyMap.md#map)
- [mapWithKey](ReadonlyMap.md#mapwithkey)

### Transform Functions

- [entries](ReadonlyMap.md#entries)
- [keys](ReadonlyMap.md#keys)

## Type Aliases

### TKey

Ƭ **TKey**: [`KeyOf`](types.md#keyof)<[`Type`](../interfaces/ReadonlyMap.Type.md)\>

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

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyMap.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyMap.Type.md), `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyMap.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyMap.Type.md), `TKey`, `TA`, `TB`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TKey`\>\>
