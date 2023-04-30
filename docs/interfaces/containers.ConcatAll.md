[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ConcatAll

# Interface: ConcatAll<C\>

[containers](../modules/containers.md).ConcatAll

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Table of contents

### Operator Properties

- [concatAll](containers.ConcatAll.md#concatall)

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
