[Reactive-JS](../README.md) / [container](../modules/container.md) / SomeSatisfy

# Interface: SomeSatisfy<C\>

[container](../modules/container.md).SomeSatisfy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`SomeSatisfy`**

## Table of contents

### Properties

- [TContainerOf](container.SomeSatisfy.md#tcontainerof)

### Methods

- [someSatisfy](container.SomeSatisfy.md#somesatisfy)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `boolean`\>

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
