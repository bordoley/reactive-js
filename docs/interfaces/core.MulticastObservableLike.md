[Reactive-JS](../README.md) / [core](../modules/core.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[core](../modules/core.md).MulticastObservableLike

A stateful ObservableLike resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`SharedObservableLike`](core.SharedObservableLike.md)<`T`\>

  ↳ **`MulticastObservableLike`**

  ↳↳ [`PublisherLike`](core.PublisherLike.md)

  ↳↳ [`StreamLike`](core.StreamLike.md)

  ↳↳ [`WindowLocationLike`](integrations_web.WindowLocationLike.md)

## Table of contents

### Properties

- [[\_\_\_MulticastObservableLike\_buffer]](core.MulticastObservableLike.md#[___multicastobservablelike_buffer])
- [[\_\_\_ObservableLike\_isDeferred]](core.MulticastObservableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isEnumerable]](core.MulticastObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](core.MulticastObservableLike.md#[___observablelike_isrunnable])

## Properties

### [\_\_\_MulticastObservableLike\_buffer]

• `Readonly` **[\_\_\_MulticastObservableLike\_buffer]**: [`IndexedBufferCollectionLike`](core.IndexedBufferCollectionLike.md)<`T`\>

___

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``false``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[SharedObservableLike](core.SharedObservableLike.md).[[___ObservableLike_isDeferred]](core.SharedObservableLike.md#[___observablelike_isdeferred])

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Overrides

[SharedObservableLike](core.SharedObservableLike.md).[[___ObservableLike_isEnumerable]](core.SharedObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[SharedObservableLike](core.SharedObservableLike.md).[[___ObservableLike_isRunnable]](core.SharedObservableLike.md#[___observablelike_isrunnable])
