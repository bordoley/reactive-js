[Reactive-JS](../README.md) / [ix/InteractiveContainerLike](../modules/ix_InteractiveContainerLike.md) / CreateInteractiveContainer

# Interface: CreateInteractiveContainer<C\>

[ix/InteractiveContainerLike](../modules/ix_InteractiveContainerLike.md).CreateInteractiveContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`InteractiveContainerLike`](ix_InteractiveContainerLike.InteractiveContainerLike.md) |

## Hierarchy

- [`Container`](../modules/containers_ContainerLike.md#container)<`C`\>

  ↳ **`CreateInteractiveContainer`**

## Table of contents

### Properties

- [TContainerOf](ix_InteractiveContainerLike.CreateInteractiveContainer.md#tcontainerof)

### Methods

- [create](ix_InteractiveContainerLike.CreateInteractiveContainer.md#create)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

Container.TContainerOf

## Methods

### create

▸ **create**<`T`\>(`source`): [`ContainerOf`](../modules/containers_ContainerLike.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | (`ctx`: `C`[``"TCtx"``]) => [`StatefulContainerStateOf`](../modules/containers_StatefulContainerLike.md#statefulcontainerstateof)<`C`, `T`\> |

#### Returns

[`ContainerOf`](../modules/containers_ContainerLike.md#containerof)<`C`, `T`\>
