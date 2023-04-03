[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / Empty

# Interface: Empty<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).Empty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Empty`**

## Table of contents

### Constructor Methods

- [empty](keyedcontainers.Empty.md#empty)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(`options?`): [`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>
