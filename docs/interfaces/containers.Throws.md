[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Throws

# Interface: Throws<C, O\>

[containers](../modules/containers.md).Throws

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Throws`**

## Table of contents

### Constructor Methods

- [throws](containers.Throws.md#throws)

## Constructor Methods

### throws

▸ **throws**<`T`\>(`options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `raise?`: [`Factory`](../modules/functions.md#factory)<`unknown`\>  } |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
