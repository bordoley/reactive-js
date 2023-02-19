[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ToRunnableObservable

# Interface: ToRunnableObservable<C, O\>

[rx](../modules/rx.md).ToRunnableObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToRunnableObservable`**

## Table of contents

### Properties

- [ContainerLike\_type](rx.ToRunnableObservable.md#containerlike_type)
- [toRunnableObservable](rx.ToRunnableObservable.md#torunnableobservable)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

___

### toRunnableObservable

• **toRunnableObservable**: <T\>(`options?`: `O`) => [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>
