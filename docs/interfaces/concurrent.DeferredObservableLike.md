[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / DeferredObservableLike

# Interface: DeferredObservableLike\<T\>

[concurrent](../modules/concurrent.md).DeferredObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](concurrent.ObservableLike.md)\<`T`\>

  ↳ **`DeferredObservableLike`**

  ↳↳ [`RunnableLike`](concurrent.RunnableLike.md)

  ↳↳ [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)

  ↳↳ [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.DeferredObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isMulticasted]](concurrent.DeferredObservableLike.md#[observablelike_ismulticasted])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isDeferred]](concurrent.ObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isMulticasted]

• `Readonly` **[ObservableLike\_isMulticasted]**: ``false``

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isMulticasted]](concurrent.ObservableLike.md#[observablelike_ismulticasted])
