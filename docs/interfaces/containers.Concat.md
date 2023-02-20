[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Concat

# Interface: Concat<C\>

[containers](../modules/containers.md).Concat

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Concat`**

## Table of contents

### Constructor Methods

- [concat](containers.Concat.md#concat)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

Returns a ContainerLike which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\> |
| `snd` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>[] |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
