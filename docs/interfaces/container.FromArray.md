[Reactive-JS](../README.md) / [container](../modules/container.md) / FromArray

# Interface: FromArray<C, O\>

[container](../modules/container.md).FromArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |
| `O` | extends [`FromArrayOptions`](container.FromArrayOptions.md) = [`FromArrayOptions`](container.FromArrayOptions.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`FromArray`**

## Table of contents

### Properties

- [TContainerOf](container.FromArray.md#tcontainerof)

### Methods

- [fromArray](container.FromArray.md#fromarray)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`O`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>
