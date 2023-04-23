[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Never

# Interface: Never<C, O\>

[rx](../modules/rx.md).Never

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Table of contents

### Constructor Methods

- [never](rx.Never.md#never)

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
