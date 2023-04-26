[Reactive-JS](../README.md) / [rx](../modules/rx.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[rx](../modules/rx.md).MulticastObservableLike

A stateful ObservableLike resource.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

- [`ReplayableLike`](util.ReplayableLike.md)<`T`\>

  ↳ **`MulticastObservableLike`**

  ↳↳ [`PublisherLike`](rx.PublisherLike.md)

  ↳↳ [`PauseableObservableLike`](rx.PauseableObservableLike.md)

  ↳↳ [`InteractiveObservableLike`](rx.InteractiveObservableLike.md)

  ↳↳ [`StreamLike`](streaming.StreamLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isEnumerable]](rx.MulticastObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](rx.MulticastObservableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[___ObservableLike_isEnumerable]](rx.ObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[___ObservableLike_isRunnable]](rx.ObservableLike.md#[___observablelike_isrunnable])
