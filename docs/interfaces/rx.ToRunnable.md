[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ToRunnable

# Interface: ToRunnable<C, O\>

[rx](../modules/rx.md).ToRunnable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToRunnable`**

## Table of contents

### Converter Methods

- [toRunnable](rx.ToRunnable.md#torunnable)

## Converter Methods

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](rx.RunnableLike.md)<`T`\>\>
