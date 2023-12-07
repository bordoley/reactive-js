[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PureObservableLike

# Interface: PureObservableLike<T\>

[concurrent](../modules/concurrent.md).PureObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

  ↳ **`PureObservableLike`**

  ↳↳ [`PureRunnableLike`](concurrent.PureRunnableLike.md)

  ↳↳ [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.PureObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isPure]](concurrent.PureObservableLike.md#[observablelike_ispure])
- [[ObservableLike\_isRunnable]](concurrent.PureObservableLike.md#[observablelike_isrunnable])

### Methods

- [[ObservableLike\_observe]](concurrent.PureObservableLike.md#[observablelike_observe])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: `boolean`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Inherited from

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isDeferred]](concurrent.ObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: ``true``

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isPure]](concurrent.ObservableLike.md#[observablelike_ispure])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: `boolean`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_isRunnable]](concurrent.ObservableLike.md#[observablelike_isrunnable])

## Methods

### [ObservableLike\_observe]

▸ **[ObservableLike_observe]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`ObserverLike`](concurrent.ObserverLike.md)<`T`\> | The observer. |

#### Returns

`void`

#### Inherited from

[ObservableLike](concurrent.ObservableLike.md).[[ObservableLike_observe]](concurrent.ObservableLike.md#[observablelike_observe])
