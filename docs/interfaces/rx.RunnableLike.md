[Reactive-JS](../README.md) / [rx](../modules/rx.md) / RunnableLike

# Interface: RunnableLike<T\>

[rx](../modules/rx.md).RunnableLike

An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

  ↳ **`RunnableLike`**

  ↳↳ [`EnumerableLike`](rx.EnumerableLike.md)

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_type]](rx.RunnableLike.md#[___containerlike_type])
- [[\_\_\_ObservableLike\_isRunnable]](rx.RunnableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`RunnableLike`](rx.RunnableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[___ContainerLike_type]](rx.ObservableLike.md#[___containerlike_type])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``true``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[___ObservableLike_isRunnable]](rx.ObservableLike.md#[___observablelike_isrunnable])
