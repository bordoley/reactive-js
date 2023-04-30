[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / KeepType

# Interface: KeepType<C\>

[keyed-containers](../modules/keyed_containers.md).KeepType

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](keyed_containers.KeyedContainer.md) |

## Table of contents

### Operator Methods

- [keepType](keyed_containers.KeepType.md#keeptype)

## Operator Methods

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>
