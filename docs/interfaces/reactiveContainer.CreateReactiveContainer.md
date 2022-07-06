[Reactive-JS](../README.md) / [reactiveContainer](../modules/reactiveContainer.md) / CreateReactiveContainer

# Interface: CreateReactiveContainer<C\>

[reactiveContainer](../modules/reactiveContainer.md).CreateReactiveContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](reactiveContainer.ReactiveContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`CreateReactiveContainer`**

## Table of contents

### Properties

- [TContainerOf](reactiveContainer.CreateReactiveContainer.md#tcontainerof)

### Methods

- [create](reactiveContainer.CreateReactiveContainer.md#create)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### create

▸ **create**<`T`\>(`onSink`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSink` | (`sink`: [`LiftableContainerStateOf`](../modules/liftable.md#liftablecontainerstateof)<`C`, `T`\>) => `void` |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
