[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PureRunnableLike

# Interface: PureRunnableLike\<T\>

[concurrent](../modules/concurrent.md).PureRunnableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`RunnableLike`](concurrent.RunnableLike.md)\<`T`\>

- [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)\<`T`\>

  ↳ **`PureRunnableLike`**

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.PureRunnableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isPure]](concurrent.PureRunnableLike.md#[observablelike_ispure])
- [[ObservableLike\_isRunnable]](concurrent.PureRunnableLike.md#[observablelike_isrunnable])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[PureDeferredObservableLike](concurrent.PureDeferredObservableLike.md).[[ObservableLike_isDeferred]](concurrent.PureDeferredObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: ``true``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[PureDeferredObservableLike](concurrent.PureDeferredObservableLike.md).[[ObservableLike_isPure]](concurrent.PureDeferredObservableLike.md#[observablelike_ispure])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``true``

#### Overrides

[RunnableLike](concurrent.RunnableLike.md).[[ObservableLike_isRunnable]](concurrent.RunnableLike.md#[observablelike_isrunnable])
