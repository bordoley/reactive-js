[Reactive-JS](../README.md) / [rx](../modules/rx.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[rx](../modules/rx.md).MulticastObservableLike

A stateful ObservableLike resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

- [`IndexedCollectionLike`](util.IndexedCollectionLike.md)<`T`\>

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`MulticastObservableLike`**

  ↳↳ [`PublisherLike`](rx.PublisherLike.md)

  ↳↳ [`StreamLike`](streaming.StreamLike.md)

## Table of contents

### Properties

- [[MulticastObservableLike\_observerCount]](rx.MulticastObservableLike.md#[multicastobservablelike_observercount])
- [[MulticastObservableLike\_replay]](rx.MulticastObservableLike.md#[multicastobservablelike_replay])
- [[ObservableLike\_isEnumerable]](rx.MulticastObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.MulticastObservableLike.md#[observablelike_isrunnable])

## Properties

### [MulticastObservableLike\_observerCount]

• `Readonly` **[MulticastObservableLike\_observerCount]**: `number`

The number of observers currently observing the `MulticastObservableLike`.

___

### [MulticastObservableLike\_replay]

• `Readonly` **[MulticastObservableLike\_replay]**: `number`

The number of events the 'MulticastObservableLike` replays when subscribed to

___

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
