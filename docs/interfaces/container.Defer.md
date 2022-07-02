[Reactive-JS](../README.md) / [container](../modules/container.md) / Defer

# Interface: Defer<C\>

[container](../modules/container.md).Defer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Defer`**

## Table of contents

### Properties

- [type](container.Defer.md#type)

### Methods

- [defer](container.Defer.md#defer)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### defer

▸ **defer**<`T`\>(`factory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
