[Reactive-JS](../README.md) / [types](../modules/types.md) / RunnableLike

# Interface: RunnableLike<T\>

[types](../modules/types.md).RunnableLike

An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>

- [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

  ↳ **`RunnableLike`**

  ↳↳ [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isPure]](types.RunnableLike.md#[___observablelike_ispure])
- [[\_\_\_ObservableLike\_isRunnable]](types.RunnableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ObservableLike\_isPure]

• `Readonly` **[\_\_\_ObservableLike\_isPure]**: ``false``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[DeferredObservableLike](types.DeferredObservableLike.md).[[___ObservableLike_isPure]](types.DeferredObservableLike.md#[___observablelike_ispure])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``true``

#### Overrides

[RunnableBaseLike](types.RunnableBaseLike.md).[[___ObservableLike_isRunnable]](types.RunnableBaseLike.md#[___observablelike_isrunnable])
