[Reactive-JS](../README.md) / [types](../modules/types.md) / DeferredObservableLike

# Interface: DeferredObservableLike<T\>

[types](../modules/types.md).DeferredObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`T`\>

- [`ObservableWithSideEffectsLike`](types.ObservableWithSideEffectsLike.md)<`T`\>

  ↳ **`DeferredObservableLike`**

  ↳↳ [`RunnableLike`](types.RunnableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](types.DeferredObservableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isPure]](types.DeferredObservableLike.md#[___observablelike_ispure])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[DeferredObservableBaseLike](types.DeferredObservableBaseLike.md).[[___ObservableLike_isDeferred]](types.DeferredObservableBaseLike.md#[___observablelike_isdeferred])

___

### [\_\_\_ObservableLike\_isPure]

• `Readonly` **[\_\_\_ObservableLike\_isPure]**: ``false``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[ObservableWithSideEffectsLike](types.ObservableWithSideEffectsLike.md).[[___ObservableLike_isPure]](types.ObservableWithSideEffectsLike.md#[___observablelike_ispure])
