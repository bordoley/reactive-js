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

- [`PureObservableLike`](types.PureObservableLike.md)<`T`\>

  ↳ **`RunnableLike`**

  ↳↳ [`EnumerableLike`](types.EnumerableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](types.RunnableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isPure]](types.RunnableLike.md#[___observablelike_ispure])
- [[\_\_\_ObservableLike\_isRunnable]](types.RunnableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``true``

#### Overrides

RunnableBaseLike.\_\_@\_\_\_ObservableLike\_isDeferred@24477

___

### [\_\_\_ObservableLike\_isPure]

• `Readonly` **[\_\_\_ObservableLike\_isPure]**: ``true``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[PureObservableLike](types.PureObservableLike.md).[[___ObservableLike_isPure]](types.PureObservableLike.md#[___observablelike_ispure])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``true``

#### Overrides

[RunnableBaseLike](types.RunnableBaseLike.md).[[___ObservableLike_isRunnable]](types.RunnableBaseLike.md#[___observablelike_isrunnable])
