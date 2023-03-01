[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromRunnable

# Interface: FromRunnable<C, O\>

[rx](../modules/rx.md).FromRunnable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromRunnable`**

## Table of contents

### Constructor Properties

- [fromRunnable](rx.FromRunnable.md#fromrunnable)

## Constructor Properties

### fromRunnable

• **fromRunnable**: <T\>(`options?`: `O`) => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](rx.RunnableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type declaration

▸ <`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](rx.RunnableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](rx.RunnableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
