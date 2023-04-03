[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / Keep

# Interface: Keep<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).Keep

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Keep`**

## Table of contents

### Operator Methods

- [keep](keyedcontainers.Keep.md#keep)

## Operator Methods

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

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
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `O` |

#### Returns

[`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
