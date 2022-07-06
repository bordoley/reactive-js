[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / ThrowIfEmpty

# Interface: ThrowIfEmpty<C\>

[liftable](../modules/liftable.md).ThrowIfEmpty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftable.LiftableContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ThrowIfEmpty`**

## Table of contents

### Properties

- [TContainerOf](liftable.ThrowIfEmpty.md#tcontainerof)

### Methods

- [throwIfEmpty](liftable.ThrowIfEmpty.md#throwifempty)

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
