[Reactive-JS](../README.md) / [core](../modules/core.md) / PauseableObservableLike

# Interface: PauseableObservableLike<T\>

[core](../modules/core.md).PauseableObservableLike

A `ObservableLike` that supports imperative flow control
via the pause and resume methods.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](core.ObservableLike.md)<`T`\>

- [`PauseableLike`](core.PauseableLike.md)

  ↳ **`PauseableObservableLike`**

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](core.PauseableObservableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isEnumerable]](core.PauseableObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](core.PauseableObservableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``false``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_isDeferred]](core.ObservableLike.md#[___observablelike_isdeferred])

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Overrides

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_isEnumerable]](core.ObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_isRunnable]](core.ObservableLike.md#[___observablelike_isrunnable])
