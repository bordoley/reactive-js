[Reactive-JS](../README.md) / [container](../modules/container.md) / EverySatisfy

# Interface: EverySatisfy<C\>

[container](../modules/container.md).EverySatisfy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`EverySatisfy`**

## Table of contents

### Properties

- [TContainerOf](container.EverySatisfy.md#tcontainerof)

### Methods

- [everySatisfy](container.EverySatisfy.md#everysatisfy)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `boolean`\>
