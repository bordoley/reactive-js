[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Compute

# Interface: Compute<C, O\>

[containers](../modules/containers.md).Compute

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Compute`**

## Table of contents

### Constructor Methods

- [compute](containers.Compute.md#compute)

## Constructor Methods

### compute

▸ **compute**<`T`\>(`factory`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `O` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
