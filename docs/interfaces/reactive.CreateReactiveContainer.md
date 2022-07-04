[Reactive-JS](../README.md) / [reactive](../modules/reactive.md) / CreateReactiveContainer

# Interface: CreateReactiveContainer<C\>

[reactive](../modules/reactive.md).CreateReactiveContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](reactive.ReactiveContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`CreateReactiveContainer`**

## Table of contents

### Properties

- [TContainerOf](reactive.CreateReactiveContainer.md#tcontainerof)

### Methods

- [create](reactive.CreateReactiveContainer.md#create)

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
| `onSink` | (`sink`: [`LiftableStateOf`](../modules/liftable.md#liftablestateof)<`C`, `T`\>) => `void` |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
