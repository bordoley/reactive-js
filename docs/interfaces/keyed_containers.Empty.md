[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / Empty

# Interface: Empty<C\>

[keyed-containers](../modules/keyed_containers.md).Empty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |

## Table of contents

### Constructor Methods

- [empty](keyed_containers.Empty.md#empty)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Returns

[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>
