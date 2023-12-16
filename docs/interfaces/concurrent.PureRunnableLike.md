[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PureRunnableLike

# Interface: PureRunnableLike<T\>

[concurrent](../modules/concurrent.md).PureRunnableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>

- [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>

  ↳ **`PureRunnableLike`**

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.PureRunnableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isPure]](concurrent.PureRunnableLike.md#[observablelike_ispure])
- [[ObservableLike\_isRunnable]](concurrent.PureRunnableLike.md#[observablelike_isrunnable])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``true``

#### Overrides

RunnableLike.\_\_@ObservableLike\_isDeferred@24892

___

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: ``true``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[PureObservableLike](concurrent.PureObservableLike.md).[[ObservableLike_isPure]](concurrent.PureObservableLike.md#[observablelike_ispure])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``true``

#### Overrides

[RunnableLike](concurrent.RunnableLike.md).[[ObservableLike_isRunnable]](concurrent.RunnableLike.md#[observablelike_isrunnable])
