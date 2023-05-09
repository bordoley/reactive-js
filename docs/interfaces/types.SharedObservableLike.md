[Reactive-JS](../README.md) / [types](../modules/types.md) / SharedObservableLike

# Interface: SharedObservableLike<T\>

[types](../modules/types.md).SharedObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](types.ObservableLike.md)<`T`\>

  ↳ **`SharedObservableLike`**

  ↳↳ [`MulticastObservableLike`](types.MulticastObservableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](types.SharedObservableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isEnumerable]](types.SharedObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](types.SharedObservableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``false``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](types.ObservableLike.md).[[___ObservableLike_isDeferred]](types.ObservableLike.md#[___observablelike_isdeferred])

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Overrides

[ObservableLike](types.ObservableLike.md).[[___ObservableLike_isEnumerable]](types.ObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](types.ObservableLike.md).[[___ObservableLike_isRunnable]](types.ObservableLike.md#[___observablelike_isrunnable])
