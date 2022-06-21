[Reactive-JS](../README.md) / [source](../modules/source.md) / Sink

# Interface: Sink<C\>

[source](../modules/source.md).Sink

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](source.SourceLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Sink`**

## Table of contents

### Properties

- [type](source.Sink.md#type)

### Methods

- [sink](source.Sink.md#sink)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### sink

▸ **sink**<`T`\>(`sink`): [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`SinkOf`](../modules/source.md#sinkof)<`C`, `T`\> |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>
