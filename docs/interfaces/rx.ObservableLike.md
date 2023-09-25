[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx](../modules/rx.md).ObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`ObservableLike`**

  ↳ [`PureObservableLike`](rx.PureObservableLike.md)

  ↳ [`DeferredObservableLike`](rx.DeferredObservableLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](rx.ObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isPure]](rx.ObservableLike.md#[observablelike_ispure])
- [[ObservableLike\_isRunnable]](rx.ObservableLike.md#[observablelike_isrunnable])

### Methods

- [[ObservableLike\_observe]](rx.ObservableLike.md#[observablelike_observe])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: `boolean`

Indicates if the `ObservableLike` is deferred, ie. cold.

___

### [ObservableLike\_isPure]

• `Readonly` **[ObservableLike\_isPure]**: `boolean`

Indicates if subscribing to the `ObservableLike` is free of side-effects

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: `boolean`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

## Methods

### [ObservableLike\_observe]

▸ **[ObservableLike_observe]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`ObserverLike`](rx.ObserverLike.md)<`T`\> | The observer. |

#### Returns

`void`
