[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Pairwise

# Interface: Pairwise<C, O\>

[containers](../modules/containers.md).Pairwise

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Pairwise`**

## Table of contents

### Operator Methods

- [pairwise](containers.Pairwise.md#pairwise)

## Operator Methods

### pairwise

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>
