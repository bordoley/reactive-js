[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FlowableObservableLike

# Interface: FlowableObservableLike<T\>

[rx](../modules/rx.md).FlowableObservableLike

A `MulticastObservableLike` that supports imperative flow control
via the pause and resume methods.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

- [`PauseableLike`](util.PauseableLike.md)

  ↳ **`FlowableObservableLike`**

## Table of contents

### Properties

- [[\_\_\_FlowableObservableLike\_isPaused]](rx.FlowableObservableLike.md#[___flowableobservablelike_ispaused])

## Properties

### [\_\_\_FlowableObservableLike\_isPaused]

• `Readonly` **[\_\_\_FlowableObservableLike\_isPaused]**: [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`boolean`\>

Reactive property indicating if the observable is paused or not.
