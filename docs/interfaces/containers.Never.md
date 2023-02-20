[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Never

# Interface: Never<C, O\>

[containers](../modules/containers.md).Never

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](containers.StatefulContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Never`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.Never.md#containerlike_type)

### Constructor Methods

- [never](containers.Never.md#never)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Constructor Methods

### never

▸ **never**<`T`\>(`options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

Returns a StatefulContainerLike instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
