[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / ToAsyncEnumerable

# Interface: ToAsyncEnumerable<C, O\>

[streaming](../modules/streaming.md).ToAsyncEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToAsyncEnumerable`**

## Table of contents

### Converter Methods

- [toAsyncEnumerable](streaming.ToAsyncEnumerable.md#toasyncenumerable)

## Converter Methods

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`AsyncEnumerableLike`](streaming.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`AsyncEnumerableLike`](streaming.AsyncEnumerableLike.md)<`T`\>\>
