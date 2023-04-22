[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / KeepWithKey

# Interface: KeepWithKey<C, O\>

[keyed-containers](../modules/keyed_containers.md).KeepWithKey

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |
| `O` | `never` |

## Table of contents

### Operator Methods

- [keepWithKey](keyed_containers.KeepWithKey.md#keepwithkey)

## Operator Methods

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

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
| `options?` | `O` |

#### Returns

[`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
