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

- [type](container.Pairwise.md#type)

### Methods

- [pairwise](container.Pairwise.md#pairwise)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, [[`Option`](../modules/option.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, [[`Option`](../modules/option.md#option)<`T`\>, `T`]\>
