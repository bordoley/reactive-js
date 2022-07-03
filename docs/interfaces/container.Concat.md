[Reactive-JS](../README.md) / [container](../modules/container.md) / Concat

# Interface: Concat<C\>

[container](../modules/container.md).Concat

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Concat`**

## Table of contents

### Properties

- [TContainerOf](container.Concat.md#tcontainerof)

### Methods

- [concat](container.Concat.md#concat)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\> |
| `snd` | [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>[] |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
