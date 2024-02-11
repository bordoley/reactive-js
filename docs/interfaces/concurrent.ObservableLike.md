[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / ObservableLike

# Interface: ObservableLike\<T\>

[concurrent](../modules/concurrent.md).ObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`ObservableLike`**

  ↳ [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)

  ↳ [`PureObservableLike`](concurrent.PureObservableLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.ObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isMulticasted]](concurrent.ObservableLike.md#[observablelike_ismulticasted])
- [[ObservableLike\_isPure]](concurrent.ObservableLike.md#[observablelike_ispure])
- [[ObservableLike\_isRunnable]](concurrent.ObservableLike.md#[observablelike_isrunnable])

### Methods

- [[ObservableLike\_observe]](concurrent.ObservableLike.md#[observablelike_observe])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: `boolean`

Indicates if the `ObservableLike` is deferred, ie. cold.

___

### [ObservableLike\_isMulticasted]

• `Readonly` **[ObservableLike\_isMulticasted]**: `boolean`

Indicates if the `ObservableLike` is multicasted, ie. hot.

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
| `observer` | [`ObserverLike`](concurrent.ObserverLike.md)\<`T`\> | The observer. |

#### Returns

`void`
