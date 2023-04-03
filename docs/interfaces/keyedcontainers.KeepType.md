[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / KeepType

# Interface: KeepType<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).KeepType

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`KeepType`**

## Table of contents

### Operator Methods

- [keepType](keyedcontainers.KeepType.md#keeptype)

## Operator Methods

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |
| `options?` | `O` |

#### Returns

[`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>
