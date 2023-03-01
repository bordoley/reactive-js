[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Never

# Interface: Never<C, O\>

[containers](../modules/containers.md).Never

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Never`**

## Table of contents

### Constructor Methods

- [never](containers.Never.md#never)

## Constructor Methods

### never

▸ **never**<`T`\>(`options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

Returns a ContainerLike instance that emits no items and never disposes its state.

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
