[Reactive-JS](../README.md) / [ix](../modules/ix.md) / ToAsyncEnumerable

# Interface: ToAsyncEnumerable<C, O\>

[ix](../modules/ix.md).ToAsyncEnumerable

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

- [toAsyncEnumerable](ix.ToAsyncEnumerable.md#toasyncenumerable)

## Converter Methods

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)<`T`\>\>
