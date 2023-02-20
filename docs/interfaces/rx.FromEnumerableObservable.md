[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromEnumerableObservable

# Interface: FromEnumerableObservable<C, O\>

[rx](../modules/rx.md).FromEnumerableObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromEnumerableObservable`**

## Table of contents

### Constructor Properties

- [fromEnumerableObservable](rx.FromEnumerableObservable.md#fromenumerableobservable)

## Constructor Properties

### fromEnumerableObservable

• **fromEnumerableObservable**: <T\>(`options?`: `O`) => [`Function1`](../modules/functions.md#function1)<[`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type declaration

▸ <`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
