[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / RunnableLike

# Interface: RunnableLike<T\>

[concurrent](../modules/concurrent.md).RunnableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

  ↳ **`RunnableLike`**

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.RunnableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isPure]](concurrent.RunnableLike.md#[observablelike_ispure])
- [[ObservableLike\_isRunnable]](concurrent.RunnableLike.md#[observablelike_isrunnable])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isDeferred]](concurrent.ObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: ``true``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isPure]](concurrent.ObservableLike.md#[observablelike_ispure])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``true``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isRunnable]](concurrent.ObservableLike.md#[observablelike_isrunnable])
