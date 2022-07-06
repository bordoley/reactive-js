[Reactive-JS](../README.md) / [liftableContainer](../modules/liftableContainer.md) / Defer

# Interface: Defer<C\>

[liftableContainer](../modules/liftableContainer.md).Defer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Defer`**

## Table of contents

### Properties

- [TContainerOf](liftableContainer.Defer.md#tcontainerof)

### Methods

- [defer](liftableContainer.Defer.md#defer)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### defer

▸ **defer**<`T`\>(`factory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
