[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / Identity

# Interface: Identity<C\>

[keyedcontainers](../modules/keyedcontainers.md).Identity

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Identity`**

## Table of contents

### Operator Methods

- [identity](keyedcontainers.Identity.md#identity)

## Operator Methods

### identity

▸ **identity**<`T`, `TKey`\>(): [`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Returns

[`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
