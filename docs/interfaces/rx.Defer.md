[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Defer

# Interface: Defer<C, O\>

[rx](../modules/rx.md).Defer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Table of contents

### Constructor Methods

- [defer](rx.Defer.md#defer)

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
