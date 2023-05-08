[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / Map

# Interface: Map<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).Map

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Operator Methods

- [map](core.KeyedContainer.Map.md#map)

## Operator Methods

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `TA`, `TB`\>
