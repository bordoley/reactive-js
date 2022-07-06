[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / Defer

# Interface: Defer<C\>

[liftable](../modules/liftable.md).Defer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftable.LiftableContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Defer`**

## Table of contents

### Properties

- [TContainerOf](liftable.Defer.md#tcontainerof)

### Methods

- [defer](liftable.Defer.md#defer)

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
