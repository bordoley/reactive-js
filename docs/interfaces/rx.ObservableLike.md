[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx](../modules/rx.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveContainerLike`](rx.ReactiveContainerLike.md)<[`ObserverLike`](rx.ObserverLike.md)<`T`\>\>

  ↳ **`ObservableLike`**

  ↳↳ [`RunnableObservableLike`](rx.RunnableObservableLike.md)

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

## Table of contents

### Properties

- [[ContainerLike\_type]](rx.ObservableLike.md#[containerlike_type])
- [[ObservableLike\_isEnumerable]](rx.ObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.ObservableLike.md#[observablelike_isrunnable])
- [[StatefulContainerLike\_state]](rx.ObservableLike.md#[statefulcontainerlike_state])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Overrides

ReactiveContainerLike.\_\_@ContainerLike\_type@23116

___

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: `boolean`

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: `boolean`

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`ObserverLike`](rx.ObserverLike.md)<`unknown`\>

#### Overrides

ReactiveContainerLike.\_\_@StatefulContainerLike\_state@23140
