[Reactive-JS](../README.md) / [container](../modules/container.md) / Pairwise

# Interface: Pairwise<C\>

[container](../modules/container.md).Pairwise

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Pairwise`**

## Table of contents

### Properties

- [TContainerOf](container.Pairwise.md#tcontainerof)

### Methods

- [pairwise](container.Pairwise.md#pairwise)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, readonly [[`Option`](../modules/option.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, readonly [[`Option`](../modules/option.md#option)<`T`\>, `T`]\>
