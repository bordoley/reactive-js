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

- [type](container.FromArray.md#type)

### Methods

- [fromArray](container.FromArray.md#fromarray)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

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
