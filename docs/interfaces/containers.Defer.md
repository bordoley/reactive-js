[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Defer

# Interface: Defer<C, O\>

[containers](../modules/containers.md).Defer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Defer`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.Defer.md#containerlike_type)

### Methods

- [defer](containers.Defer.md#defer)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\> |
| `options?` | `O` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
