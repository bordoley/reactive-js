[Reactive-JS](../README.md) / [types](../modules/types.md) / DeferredObservableBaseLike

# Interface: DeferredObservableBaseLike<T\>

[types](../modules/types.md).DeferredObservableBaseLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableBaseLike`](types.ObservableBaseLike.md)<`T`\>

  ↳ **`DeferredObservableBaseLike`**

  ↳↳ [`DeferredObservableLike`](types.DeferredObservableLike.md)

  ↳↳ [`RunnableBaseLike`](types.RunnableBaseLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](types.DeferredObservableBaseLike.md#[___observablelike_isdeferred])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableBaseLike](types.ObservableBaseLike.md).[[___ObservableLike_isDeferred]](types.ObservableBaseLike.md#[___observablelike_isdeferred])
