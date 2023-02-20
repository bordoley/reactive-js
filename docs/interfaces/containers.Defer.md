[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Defer

# Interface: Defer<C, O\>

[containers](../modules/containers.md).Defer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Defer`**

## Table of contents

### Constructor Methods

- [defer](containers.Defer.md#defer)

## Constructor Methods

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\> |
| `options?` | `O` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
