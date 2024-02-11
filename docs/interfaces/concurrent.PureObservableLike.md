[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PureObservableLike

# Interface: PureObservableLike\<T\>

[concurrent](../modules/concurrent.md).PureObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](concurrent.ObservableLike.md)\<`T`\>

  ↳ **`PureObservableLike`**

  ↳↳ [`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)

  ↳↳ [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isPure]](concurrent.PureObservableLike.md#[observablelike_ispure])

## Properties

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: ``true``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isPure]](concurrent.ObservableLike.md#[observablelike_ispure])
