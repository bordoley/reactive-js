[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromRunnableObservable

# Interface: FromRunnableObservable<C, O\>

[rx](../modules/rx.md).FromRunnableObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromRunnableObservable`**

## Table of contents

### Constructor Properties

- [fromRunnableObservable](rx.FromRunnableObservable.md#fromrunnableobservable)

## Constructor Properties

### fromRunnableObservable

• **fromRunnableObservable**: <T\>(`options?`: `O`) => [`Function1`](../modules/functions.md#function1)<[`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type declaration

▸ <`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
