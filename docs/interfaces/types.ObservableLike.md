[Reactive-JS](../README.md) / [types](../modules/types.md) / ObservableLike

# Interface: ObservableLike<T\>

[types](../modules/types.md).ObservableLike

The source of notifications which can be consumed by an `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`ObservableLike`**

  ↳ [`PureObservableLike`](types.PureObservableLike.md)

  ↳ [`ObservableWithSideEffectsLike`](types.ObservableWithSideEffectsLike.md)

  ↳ [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](types.ObservableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isEnumerable]](types.ObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isPure]](types.ObservableLike.md#[___observablelike_ispure])
- [[\_\_\_ObservableLike\_isRunnable]](types.ObservableLike.md#[___observablelike_isrunnable])

### Methods

- [[\_\_\_ObservableLike\_observe]](types.ObservableLike.md#[___observablelike_observe])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: `boolean`

Indicates if the `ObservableLike` is deferred, ie. cold.

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: `boolean`

Indicates if the `ObservableLike` supports interactive enumeration.

___

### [\_\_\_ObservableLike\_isPure]

• `Readonly` **[\_\_\_ObservableLike\_isPure]**: `boolean`

Indicates if subscribing to the `ObservableLike` is free of side-effects

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
| `observer` | [`ObserverLike`](types.ObserverLike.md)<`T`\> | The observer. |

#### Returns

`void`
