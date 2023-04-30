[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Merge

# Interface: Merge<C\>

[rx](../modules/rx.md).Merge

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Table of contents

### Constructor Methods

- [merge](rx.Merge.md#merge)

## Constructor Methods

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

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
