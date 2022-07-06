[Reactive-JS](../README.md) / [liftableContainer](../modules/liftableContainer.md) / ThrowIfEmpty

# Interface: ThrowIfEmpty<C\>

[liftableContainer](../modules/liftableContainer.md).ThrowIfEmpty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ThrowIfEmpty`**

## Table of contents

### Properties

- [TContainerOf](liftableContainer.ThrowIfEmpty.md#tcontainerof)

### Methods

- [throwIfEmpty](liftableContainer.ThrowIfEmpty.md#throwifempty)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>
