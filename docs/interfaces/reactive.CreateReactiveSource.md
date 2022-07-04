[Reactive-JS](../README.md) / [reactive](../modules/reactive.md) / CreateReactiveSource

# Interface: CreateReactiveSource<C\>

[reactive](../modules/reactive.md).CreateReactiveSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveSourceLike`](reactive.ReactiveSourceLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`CreateReactiveSource`**

## Table of contents

### Properties

- [TContainerOf](reactive.CreateReactiveSource.md#tcontainerof)

### Methods

- [create](reactive.CreateReactiveSource.md#create)

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
