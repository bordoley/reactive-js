[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx](../modules/rx.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveContainerLike`](rx.ReactiveContainerLike.md)<[`ObserverLike`](scheduling.ObserverLike.md)<`T`\>\>

  ↳ **`ObservableLike`**

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

  ↳↳ [`RunnableObservableLike`](rx.RunnableObservableLike.md)

## Table of contents

### Properties

- [[ContainerLike\_type]](rx.ObservableLike.md#[containerlike_type])
- [[ObservableLike\_isEnumerable]](rx.ObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.ObservableLike.md#[observablelike_isrunnable])
- [[StableContainerLike\_state]](rx.ObservableLike.md#[stablecontainerlike_state])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[[ContainerLike_type]](rx.ReactiveContainerLike.md#[containerlike_type])

___

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: `boolean`

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: `boolean`

___

### [StableContainerLike\_state]

• `Optional` `Readonly` **[StableContainerLike\_state]**: [`ObserverLike`](scheduling.ObserverLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[[StableContainerLike_state]](rx.ReactiveContainerLike.md#[stablecontainerlike_state])
