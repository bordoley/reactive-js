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

- [[ContainerLike\_type]](rx.RunnableLike.md#[containerlike_type])
- [[ObservableLike\_isRunnable]](rx.RunnableLike.md#[observablelike_isrunnable])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`RunnableLike`](rx.RunnableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[ContainerLike_type]](rx.ObservableLike.md#[containerlike_type])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``true``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[ObservableLike_isRunnable]](rx.ObservableLike.md#[observablelike_isrunnable])
