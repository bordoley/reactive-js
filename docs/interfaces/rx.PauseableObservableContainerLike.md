[Reactive-JS](../README.md) / [rx](../modules/rx.md) / PauseableObservableContainerLike

# Interface: PauseableObservableContainerLike<T\>

[rx](../modules/rx.md).PauseableObservableContainerLike

A `ObservableLike` that supports imperative flow control
via the pause and resume methods.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`PauseableObservableLike`](rx.PauseableObservableLike.md)<`T`\>

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`PauseableObservableContainerLike`**

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_T]](rx.PauseableObservableContainerLike.md#[___containerlike_t])
- [[\_\_\_ContainerLike\_type]](rx.PauseableObservableContainerLike.md#[___containerlike_type])
- [[\_\_\_ObservableLike\_isEnumerable]](rx.PauseableObservableContainerLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](rx.PauseableObservableContainerLike.md#[___observablelike_isrunnable])
- [[\_\_\_PauseableObservableLike\_isPaused]](rx.PauseableObservableContainerLike.md#[___pauseableobservablelike_ispaused])

## Properties

### [\_\_\_ContainerLike\_T]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_T]**: `unknown`

#### Inherited from

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_T]](containers.ContainerLike.md#[___containerlike_t])

___

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`PauseableObservableLike`](rx.PauseableObservableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_type]](containers.ContainerLike.md#[___containerlike_type])

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Inherited from

[PauseableObservableLike](rx.PauseableObservableLike.md).[[___ObservableLike_isEnumerable]](rx.PauseableObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[PauseableObservableLike](rx.PauseableObservableLike.md).[[___ObservableLike_isRunnable]](rx.PauseableObservableLike.md#[___observablelike_isrunnable])

___

### [\_\_\_PauseableObservableLike\_isPaused]

• `Readonly` **[\_\_\_PauseableObservableLike\_isPaused]**: [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`boolean`\>

Reactive property indicating if the observable is paused or not.

#### Inherited from

[PauseableObservableLike](rx.PauseableObservableLike.md).[[___PauseableObservableLike_isPaused]](rx.PauseableObservableLike.md#[___pauseableobservablelike_ispaused])
