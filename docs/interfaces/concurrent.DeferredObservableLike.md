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

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.DeferredObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isPure]](concurrent.DeferredObservableLike.md#[observablelike_ispure])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isDeferred]](concurrent.ObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: ``false``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isPure]](concurrent.ObservableLike.md#[observablelike_ispure])
