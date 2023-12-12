[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[concurrent](../modules/concurrent.md).MulticastObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>

  ↳ **`MulticastObservableLike`**

  ↳↳ [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.MulticastObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isRunnable]](concurrent.MulticastObservableLike.md#[observablelike_isrunnable])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``false``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[PureObservableLike](concurrent.PureObservableLike.md).[[ObservableLike_isDeferred]](concurrent.PureObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[PureObservableLike](concurrent.PureObservableLike.md).[[ObservableLike_isRunnable]](concurrent.PureObservableLike.md#[observablelike_isrunnable])
