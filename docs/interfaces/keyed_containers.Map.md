[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / Map

# Interface: Map<C\>

[keyed-containers](../modules/keyed_containers.md).Map

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |

## Table of contents

### Operator Methods

- [map](keyed_containers.Map.md#map)

## Operator Methods

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>
