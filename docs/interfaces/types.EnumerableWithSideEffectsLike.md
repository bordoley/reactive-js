[Reactive-JS](../README.md) / [types](../modules/types.md) / EnumerableWithSideEffectsLike

# Interface: EnumerableWithSideEffectsLike<T\>

[types](../modules/types.md).EnumerableWithSideEffectsLike

An `ObservableLike` that supports interactive enumeration.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`EnumerableBaseLike`](types.EnumerableBaseLike.md)<`T`\>

- [`RunnableWithSideEffectsLike`](types.RunnableWithSideEffectsLike.md)<`T`\>

  ↳ **`EnumerableWithSideEffectsLike`**

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isEnumerable]](types.EnumerableWithSideEffectsLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isPure]](types.EnumerableWithSideEffectsLike.md#[___observablelike_ispure])
- [[\_\_\_ObservableLike\_isRunnable]](types.EnumerableWithSideEffectsLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``true``

#### Overrides

[EnumerableBaseLike](types.EnumerableBaseLike.md).[[___ObservableLike_isEnumerable]](types.EnumerableBaseLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isPure]

• `Readonly` **[\_\_\_ObservableLike\_isPure]**: ``false``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[RunnableWithSideEffectsLike](types.RunnableWithSideEffectsLike.md).[[___ObservableLike_isPure]](types.RunnableWithSideEffectsLike.md#[___observablelike_ispure])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``true``

#### Overrides

[RunnableWithSideEffectsLike](types.RunnableWithSideEffectsLike.md).[[___ObservableLike_isRunnable]](types.RunnableWithSideEffectsLike.md#[___observablelike_isrunnable])
