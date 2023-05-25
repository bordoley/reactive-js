[Reactive-JS](../README.md) / [types](../modules/types.md) / ObservableWithSideEffectsLike

# Interface: ObservableWithSideEffectsLike<T\>

[types](../modules/types.md).ObservableWithSideEffectsLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableBaseLike`](types.ObservableBaseLike.md)<`T`\>

  ↳ **`ObservableWithSideEffectsLike`**

  ↳↳ [`DeferredObservableLike`](types.DeferredObservableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isPure]](types.ObservableWithSideEffectsLike.md#[___observablelike_ispure])

## Properties

### [\_\_\_ObservableLike\_isPure]

• **[\_\_\_ObservableLike\_isPure]**: ``false``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[ObservableBaseLike](types.ObservableBaseLike.md).[[___ObservableLike_isPure]](types.ObservableBaseLike.md#[___observablelike_ispure])
