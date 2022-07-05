[Reactive-JS](../README.md) / [interactiveContainer](../modules/interactiveContainer.md) / CreateInteractiveContainer

# Interface: CreateInteractiveContainer<C\>

[interactiveContainer](../modules/interactiveContainer.md).CreateInteractiveContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`InteractiveContainerLike`](interactiveContainer.InteractiveContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`CreateInteractiveContainer`**

## Table of contents

### Properties

- [TContainerOf](interactiveContainer.CreateInteractiveContainer.md#tcontainerof)

### Methods

- [create](interactiveContainer.CreateInteractiveContainer.md#create)

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
