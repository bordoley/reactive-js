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

- [type](container.EverySatisfy.md#type)

### Methods

- [everySatisfy](container.EverySatisfy.md#everysatisfy)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

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
