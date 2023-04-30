[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / KeepWithKey

# Interface: KeepWithKey<C\>

[keyed-containers](../modules/keyed_containers.md).KeepWithKey

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](keyed_containers.KeyedContainer.md) |

## Table of contents

### Operator Methods

- [keepWithKey](keyed_containers.KeepWithKey.md#keepwithkey)

## Operator Methods

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

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
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
