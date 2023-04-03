[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / KeepWithKey

# Interface: KeepWithKey<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).KeepWithKey

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`KeepWithKey`**

## Table of contents

### Operator Methods

- [keepWithKey](keyedcontainers.KeepWithKey.md#keepwithkey)

## Operator Methods

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |
| `options?` | `O` |

#### Returns

[`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
