[Reactive-JS](../README.md) / [container](../modules/container.md) / Generate

# Interface: Generate<C\>

[container](../modules/container.md).Generate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Generate`**

## Table of contents

### Properties

- [type](container.Generate.md#type)

### Methods

- [generate](container.Generate.md#generate)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
