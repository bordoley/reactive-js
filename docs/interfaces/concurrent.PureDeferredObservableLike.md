[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PureDeferredObservableLike

# Interface: PureDeferredObservableLike\<T\>

[concurrent](../modules/concurrent.md).PureDeferredObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<`T`\>

- [`PureObservableLike`](concurrent.PureObservableLike.md)\<`T`\>

  ↳ **`PureDeferredObservableLike`**

  ↳↳ [`PureRunnableLike`](concurrent.PureRunnableLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.PureDeferredObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isMulticasted]](concurrent.PureDeferredObservableLike.md#[observablelike_ismulticasted])
- [[ObservableLike\_isPure]](concurrent.PureDeferredObservableLike.md#[observablelike_ispure])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[DeferredObservableLike](concurrent.DeferredObservableLike.md).[[ObservableLike_isDeferred]](concurrent.DeferredObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isMulticasted]

• `Readonly` **[ObservableLike\_isMulticasted]**: ``false``

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Overrides

[DeferredObservableLike](concurrent.DeferredObservableLike.md).[[ObservableLike_isMulticasted]](concurrent.DeferredObservableLike.md#[observablelike_ismulticasted])

___

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: ``true``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[PureObservableLike](concurrent.PureObservableLike.md).[[ObservableLike_isPure]](concurrent.PureObservableLike.md#[observablelike_ispure])
