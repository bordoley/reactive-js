[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ToObservable

# Interface: ToObservable<C, O\>

[rx](../modules/rx.md).ToObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToObservable`**

## Table of contents

### Transform Properties

- [toObservable](rx.ToObservable.md#toobservable)

## Transform Properties

### toObservable

• **toObservable**: <T\>(`options?`: `O`) => [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>
