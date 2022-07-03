[Reactive-JS](../README.md) / [source](../modules/source.md) / CreateSource

# Interface: CreateSource<C\>

[source](../modules/source.md).CreateSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](source.SourceLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`CreateSource`**

## Table of contents

### Properties

- [TContainerOf](source.CreateSource.md#tcontainerof)

### Methods

- [create](source.CreateSource.md#create)

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
