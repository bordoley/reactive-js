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

- [type](source.CreateSource.md#type)

### Methods

- [create](source.CreateSource.md#create)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

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
| `onSink` | (`sink`: [`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `T`\>) => `void` |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
