[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / Empty

# Interface: Empty<C, O\>

[keyed-containers](../modules/keyed_containers.md).Empty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Empty`**

## Table of contents

### Constructor Methods

- [empty](keyed_containers.Empty.md#empty)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(`options?`): [`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>
