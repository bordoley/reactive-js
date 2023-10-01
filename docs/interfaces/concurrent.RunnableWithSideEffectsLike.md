[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / RunnableWithSideEffectsLike

# Interface: RunnableWithSideEffectsLike<T\>

[concurrent](../modules/concurrent.md).RunnableWithSideEffectsLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

  ↳ **`RunnableWithSideEffectsLike`**

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.RunnableWithSideEffectsLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isPure]](concurrent.RunnableWithSideEffectsLike.md#[observablelike_ispure])
- [[ObservableLike\_isRunnable]](concurrent.RunnableWithSideEffectsLike.md#[observablelike_isrunnable])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isDeferred]](concurrent.ObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: ``false``

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
