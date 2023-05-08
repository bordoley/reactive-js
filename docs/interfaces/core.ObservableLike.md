[Reactive-JS](../README.md) / [core](../modules/core.md) / ObservableLike

# Interface: ObservableLike<T\>

[core](../modules/core.md).ObservableLike

The source of notifications which can be consumed by an `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`ObservableLike`**

  ↳ [`DeferredObservableLike`](core.DeferredObservableLike.md)

  ↳ [`MulticastObservableLike`](core.MulticastObservableLike.md)

  ↳ [`PauseableObservableLike`](core.PauseableObservableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](core.ObservableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isEnumerable]](core.ObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](core.ObservableLike.md#[___observablelike_isrunnable])

### Methods

- [[\_\_\_ObservableLike\_observe]](core.ObservableLike.md#[___observablelike_observe])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: `boolean`

Indicates if the `ObservableLike` is deferred, ie. cold.

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: `boolean`

Indicates if the `ObservableLike` supports interactive enumeration.

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: `boolean`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

## Methods

### [\_\_\_ObservableLike\_observe]

▸ **[___ObservableLike_observe]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`ObserverLike`](core.ObserverLike.md)<`T`\> | The observer. |

#### Returns

`void`
