[Reactive-JS](../README.md) / [containers](../modules/containers.md) / FromAsyncIterable

# Interface: FromAsyncIterable<C, O\>

[containers](../modules/containers.md).FromAsyncIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromAsyncIterable`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.FromAsyncIterable.md#containerlike_type)

### Methods

- [fromAsyncIterable](containers.FromAsyncIterable.md#fromasynciterable)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
