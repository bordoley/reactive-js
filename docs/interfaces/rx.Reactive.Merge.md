[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / Merge

# Interface: Merge<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).Merge

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Constructor Methods

- [merge](rx.Reactive.Merge.md#merge)

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
