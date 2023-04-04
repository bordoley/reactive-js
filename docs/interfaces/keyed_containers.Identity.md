[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / Identity

# Interface: Identity<C\>

[keyed-containers](../modules/keyed_containers.md).Identity

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Identity`**

## Table of contents

### Operator Methods

- [identity](keyed_containers.Identity.md#identity)

## Operator Methods

### identity

▸ **identity**<`T`, `TKey`\>(): [`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Returns

[`KeyedContainerOperator`](../modules/keyed_containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
