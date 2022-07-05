[Reactive-JS](../README.md) / [interactive](../modules/interactive.md) / CreateInteractiveContainer

# Interface: CreateInteractiveContainer<C\>

[interactive](../modules/interactive.md).CreateInteractiveContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`InteractiveContainerLike`](interactive.InteractiveContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`CreateInteractiveContainer`**

## Table of contents

### Properties

- [TContainerOf](interactive.CreateInteractiveContainer.md#tcontainerof)

### Methods

- [create](interactive.CreateInteractiveContainer.md#create)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### create

▸ **create**<`T`\>(`source`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | (`ctx`: `C`[``"TCtx"``]) => [`LiftableStateOf`](../modules/liftable.md#liftablestateof)<`C`, `T`\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
