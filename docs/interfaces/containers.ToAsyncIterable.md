[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ToAsyncIterable

# Interface: ToAsyncIterable<C, O\>

[containers](../modules/containers.md).ToAsyncIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToAsyncIterable`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.ToAsyncIterable.md#containerlike_type)

### Converter Methods

- [toAsyncIterable](containers.ToAsyncIterable.md#toasynciterable)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Converter Methods

### toAsyncIterable

▸ **toAsyncIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`AsyncIterableLike`](containers.AsyncIterableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`AsyncIterableLike`](containers.AsyncIterableLike.md)<`T`\>\>
