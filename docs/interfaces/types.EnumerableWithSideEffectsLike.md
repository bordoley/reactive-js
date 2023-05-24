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

- [`RunnableLike`](types.RunnableLike.md)<`T`\>

  ↳ **`EnumerableWithSideEffectsLike`**

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isEnumerable]](types.EnumerableWithSideEffectsLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isPure]](types.EnumerableWithSideEffectsLike.md#[___observablelike_ispure])

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

[RunnableLike](types.RunnableLike.md).[[___ObservableLike_isPure]](types.RunnableLike.md#[___observablelike_ispure])
