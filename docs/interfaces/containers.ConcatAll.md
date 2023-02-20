[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ConcatAll

# Interface: ConcatAll<C, O\>

[containers](../modules/containers.md).ConcatAll

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ConcatAll`**

## Table of contents

### Operator Properties

- [concatAll](containers.ConcatAll.md#concatall)

### Other Properties

- [ContainerLike\_type](containers.ConcatAll.md#containerlike_type)

## Operator Properties

### concatAll

• **concatAll**: <T\>(`options?`: `O`) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

Converts a higher-order ContainerLike into a first-order
ContainerLike by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

___

## Other Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)
