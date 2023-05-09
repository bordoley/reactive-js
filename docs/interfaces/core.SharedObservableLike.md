[Reactive-JS](../README.md) / [core](../modules/core.md) / SharedObservableLike

# Interface: SharedObservableLike<T\>

[core](../modules/core.md).SharedObservableLike

The source of notifications which can be consumed by an `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](core.ObservableLike.md)<`T`\>

  ↳ **`SharedObservableLike`**

  ↳↳ [`MulticastObservableLike`](core.MulticastObservableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](core.SharedObservableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isEnumerable]](core.SharedObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](core.SharedObservableLike.md#[___observablelike_isrunnable])

### Methods

- [[\_\_\_ObservableLike\_observe]](core.SharedObservableLike.md#[___observablelike_observe])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``false``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_isDeferred]](core.ObservableLike.md#[___observablelike_isdeferred])

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Overrides

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_isEnumerable]](core.ObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_isRunnable]](core.ObservableLike.md#[___observablelike_isrunnable])

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

#### Inherited from

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_observe]](core.ObservableLike.md#[___observablelike_observe])
