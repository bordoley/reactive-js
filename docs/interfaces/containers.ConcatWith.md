[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ConcatWith

# Interface: ConcatWith<C\>

[containers](../modules/containers.md).ConcatWith

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ConcatWith`**

## Table of contents

### Operator Properties

- [concatWith](containers.ConcatWith.md#concatwith)

## Operator Properties

### concatWith

• **concatWith**: <T\>(`snd`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>[]) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>[] |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
