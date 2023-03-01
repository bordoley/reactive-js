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

### Converter Properties

- [toRunnable](rx.ToRunnable.md#torunnable)

## Converter Properties

### toRunnable

• **toRunnable**: <T\>(`options?`: `O`) => [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](rx.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](rx.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](rx.RunnableLike.md)<`T`\>\>
