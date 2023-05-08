[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / KeepType

# Interface: KeepType<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).KeepType

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Operator Methods

- [keepType](core.KeyedContainer.KeepType.md#keeptype)

## Operator Methods

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `TA`, `TB`\>
