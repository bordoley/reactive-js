[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [KeyedContainer](../modules/containers.KeyedContainer.md) / Keep

# Interface: Keep<C\>

[containers](../modules/containers.md).[KeyedContainer](../modules/containers.KeyedContainer.md).Keep

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](containers.KeyedContainer-1.md) |

## Table of contents

### Operator Methods

- [keep](containers.KeyedContainer.Keep.md#keep)

## Operator Methods

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
