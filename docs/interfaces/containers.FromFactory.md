[Reactive-JS](../README.md) / [containers](../modules/containers.md) / FromFactory

# Interface: FromFactory<C, O\>

[containers](../modules/containers.md).FromFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Table of contents

### Constructor Methods

- [fromFactory](containers.FromFactory.md#fromfactory)

## Constructor Methods

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

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
