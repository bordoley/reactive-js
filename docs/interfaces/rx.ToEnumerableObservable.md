[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ToEnumerableObservable

# Interface: ToEnumerableObservable<C, O\>

[rx](../modules/rx.md).ToEnumerableObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToEnumerableObservable`**

## Table of contents

### Converter Properties

- [toEnumerableObservable](rx.ToEnumerableObservable.md#toenumerableobservable)

## Converter Properties

### toEnumerableObservable

• **toEnumerableObservable**: <T\>(`options?`: `O`) => [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>
