[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Identity

# Interface: Identity<C\>

[containers](../modules/containers.md).Identity

Base type for Container type classes.

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Identity`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.Identity.md#containerlike_type)

### Operator Methods

- [identity](containers.Identity.md#identity)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Operator Methods

### identity

▸ **identity**<`T`\>(): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
