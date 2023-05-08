[Reactive-JS](../README.md) / [core](../modules/core.md) / RunnableLike

# Interface: RunnableLike<T\>

[core](../modules/core.md).RunnableLike

An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](core.ObservableLike.md)<`T`\>

  ↳ **`RunnableLike`**

  ↳↳ [`EnumerableLike`](core.EnumerableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isRunnable]](core.RunnableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``true``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_isRunnable]](core.ObservableLike.md#[___observablelike_isrunnable])
