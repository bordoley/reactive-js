[Reactive-JS](../README.md) / [rx](../modules/rx.md) / PauseableObservableLike

# Interface: PauseableObservableLike<T\>

[rx](../modules/rx.md).PauseableObservableLike

A `ObservableLike` that supports imperative flow control
via the pause and resume methods.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

- [`PauseableLike`](util.PauseableLike.md)

  ↳ **`PauseableObservableLike`**

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isEnumerable]](rx.PauseableObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](rx.PauseableObservableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[___ObservableLike_isEnumerable]](rx.ObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[___ObservableLike_isRunnable]](rx.ObservableLike.md#[___observablelike_isrunnable])
