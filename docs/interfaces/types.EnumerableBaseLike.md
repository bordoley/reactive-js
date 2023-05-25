[Reactive-JS](../README.md) / [types](../modules/types.md) / EnumerableBaseLike

# Interface: EnumerableBaseLike<T\>

[types](../modules/types.md).EnumerableBaseLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`RunnableBaseLike`](types.RunnableBaseLike.md)<`T`\>

  ↳ **`EnumerableBaseLike`**

  ↳↳ [`EnumerableWithSideEffectsLike`](types.EnumerableWithSideEffectsLike.md)

  ↳↳ [`EnumerableLike`](types.EnumerableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](types.EnumerableBaseLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isEnumerable]](types.EnumerableBaseLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](types.EnumerableBaseLike.md#[___observablelike_isrunnable])

### Methods

- [[\_\_\_EnumerableLike\_enumerate]](types.EnumerableBaseLike.md#[___enumerablelike_enumerate])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``true``

#### Overrides

RunnableBaseLike.\_\_@\_\_\_ObservableLike\_isDeferred@24318

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``true``

#### Overrides

RunnableBaseLike.\_\_@\_\_\_ObservableLike\_isEnumerable@24319

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``true``

#### Overrides

[RunnableBaseLike](types.RunnableBaseLike.md).[[___ObservableLike_isRunnable]](types.RunnableBaseLike.md#[___observablelike_isrunnable])

## Methods

### [\_\_\_EnumerableLike\_enumerate]

▸ **[___EnumerableLike_enumerate]**(): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>
