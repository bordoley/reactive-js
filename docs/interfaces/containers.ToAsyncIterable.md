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

### Converter Methods

- [toAsyncIterable](containers.ToAsyncIterable.md#toasynciterable)

## Converter Methods

### toAsyncIterable

▸ **toAsyncIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`AsyncIterableLike`](containers.AsyncIterableLike.md)<`T`\>\>

Converts the ContainerLike to a `AsyncIterableLike`.

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
