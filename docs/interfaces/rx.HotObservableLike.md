[Reactive-JS](../README.md) / [rx](../modules/rx.md) / HotObservableLike

# Interface: HotObservableLike<T\>

[rx](../modules/rx.md).HotObservableLike

A stateful ObservableLike resource.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

- [`ReplayableLike`](util.ReplayableLike.md)<`T`\>

  ↳ **`HotObservableLike`**

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isEnumerable]](rx.HotObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.HotObservableLike.md#[observablelike_isrunnable])

## Properties

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[ObservableLike_isEnumerable]](rx.ObservableLike.md#[observablelike_isenumerable])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[ObservableLike_isRunnable]](rx.ObservableLike.md#[observablelike_isrunnable])
