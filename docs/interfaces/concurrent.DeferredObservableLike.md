[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / DeferredObservableLike

# Interface: DeferredObservableLike<T\>

[concurrent](../modules/concurrent.md).DeferredObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

  ↳ **`DeferredObservableLike`**

  ↳↳ [`RunnableLike`](concurrent.RunnableLike.md)

  ↳↳ [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.DeferredObservableLike.md#[observablelike_isdeferred])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isDeferred]](concurrent.ObservableLike.md#[observablelike_isdeferred])
