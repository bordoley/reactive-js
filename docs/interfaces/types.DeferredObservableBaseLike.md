[Reactive-JS](../README.md) / [types](../modules/types.md) / DeferredObservableBaseLike

# Interface: DeferredObservableBaseLike<T\>

[types](../modules/types.md).DeferredObservableBaseLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](types.ObservableLike.md)<`T`\>

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

[ObservableLike](types.ObservableLike.md).[[___ObservableLike_isDeferred]](types.ObservableLike.md#[___observablelike_isdeferred])
