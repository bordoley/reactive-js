[Reactive-JS](../README.md) / [ix](../modules/ix.md) / FromAsyncEnumerable

# Interface: FromAsyncEnumerable<C, O\>

[ix](../modules/ix.md).FromAsyncEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromAsyncEnumerable`**

## Table of contents

### Constructor Methods

- [fromAsyncEnumerable](ix.FromAsyncEnumerable.md#fromasyncenumerable)

## Constructor Methods

### fromAsyncEnumerable

▸ **fromAsyncEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
