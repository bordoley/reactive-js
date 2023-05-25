[Reactive-JS](../README.md) / [types](../modules/types.md) / PureObservableLike

# Interface: PureObservableLike<T\>

[types](../modules/types.md).PureObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableBaseLike`](types.ObservableBaseLike.md)<`T`\>

  ↳ **`PureObservableLike`**

  ↳↳ [`MulticastObservableLike`](types.MulticastObservableLike.md)

  ↳↳ [`RunnableLike`](types.RunnableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isPure]](types.PureObservableLike.md#[___observablelike_ispure])

## Properties

### [\_\_\_ObservableLike\_isPure]

• **[\_\_\_ObservableLike\_isPure]**: ``true``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[ObservableBaseLike](types.ObservableBaseLike.md).[[___ObservableLike_isPure]](types.ObservableBaseLike.md#[___observablelike_ispure])
