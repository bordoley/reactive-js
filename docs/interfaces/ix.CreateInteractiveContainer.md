[Reactive-JS](../README.md) / [ix](../modules/ix.md) / CreateInteractiveContainer

# Interface: CreateInteractiveContainer<C\>

[ix](../modules/ix.md).CreateInteractiveContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`InteractiveContainerLike`](ix.InteractiveContainerLike.md) |

## Hierarchy

- [`Container`](../modules/containers.md#container)<`C`\>

  ↳ **`CreateInteractiveContainer`**

## Table of contents

### Properties

- [TContainerOf](ix.CreateInteractiveContainer.md#tcontainerof)

### Methods

- [create](ix.CreateInteractiveContainer.md#create)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

Container.TContainerOf

## Methods

### create

▸ **create**<`T`\>(`source`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | (`ctx`: `C`[``"TCtx"``]) => [`StatefulContainerStateOf`](../modules/containers.md#statefulcontainerstateof)<`C`, `T`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
