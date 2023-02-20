[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Empty

# Interface: Empty<C, O\>

[containers](../modules/containers.md).Empty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Empty`**

## Table of contents

### Constructor Methods

- [empty](containers.Empty.md#empty)

## Constructor Methods

### empty

▸ **empty**<`T`\>(`options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
