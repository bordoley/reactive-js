[Reactive-JS](../README.md) / [container](../modules/container.md) / ConcatAll

# Interface: ConcatAll<C, O\>

[container](../modules/container.md).ConcatAll

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |
| `O` | `Record`<`string`, `never`\> |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ConcatAll`**

## Table of contents

### Properties

- [TContainerOf](container.ConcatAll.md#tcontainerof)

### Methods

- [concatAll](container.ConcatAll.md#concatall)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`O`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, `T`\>
