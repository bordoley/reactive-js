[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [Container](../modules/containers.Container.md) / ConcatAll

# Interface: ConcatAll<C\>

[containers](../modules/containers.md).[Container](../modules/containers.Container.md).ConcatAll

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Properties

- [concatAll](containers.Container.ConcatAll.md#concatall)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>
