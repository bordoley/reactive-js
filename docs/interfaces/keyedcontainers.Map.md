[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / Map

# Interface: Map<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).Map

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Map`**

## Table of contents

### Operator Methods

- [map](keyedcontainers.Map.md#map)

## Operator Methods

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`mapper`, `options?`): [`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `O` | - |

#### Returns

[`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>
