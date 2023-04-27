[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / Keep

# Interface: Keep<C\>

[keyed-containers](../modules/keyed_containers.md).Keep

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |

## Table of contents

### Operator Methods

- [keep](keyed_containers.Keep.md#keep)

## Operator Methods

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
