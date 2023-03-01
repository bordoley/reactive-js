[Reactive-JS](../README.md) / [ix](../modules/ix.md) / ToRunnableAsyncEnumerable

# Interface: ToRunnableAsyncEnumerable<C, O\>

[ix](../modules/ix.md).ToRunnableAsyncEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToRunnableAsyncEnumerable`**

## Table of contents

### Converter Methods

- [toRunnableAsyncEnumerable](ix.ToRunnableAsyncEnumerable.md#torunnableasyncenumerable)

## Converter Methods

### toRunnableAsyncEnumerable

▸ **toRunnableAsyncEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableAsyncEnumerableLike`](ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableAsyncEnumerableLike`](ix.RunnableAsyncEnumerableLike.md)<`T`\>\>
