[Reactive-JS](../README.md) / [types](../modules/types.md) / ReplayObservableLike

# Interface: ReplayObservableLike<T\>

[types](../modules/types.md).ReplayObservableLike

A stateful ObservableLike resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

  ↳ **`ReplayObservableLike`**

  ↳↳ [`WindowLocationLike`](integrations_web.WindowLocationLike.md)

  ↳↳ [`PublisherLike`](types.PublisherLike.md)

  ↳↳ [`StreamLike`](types.StreamLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](types.ReplayObservableLike.md#[___observablelike_isdeferred])
- [[\_\_\_ObservableLike\_isEnumerable]](types.ReplayObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](types.ReplayObservableLike.md#[___observablelike_isrunnable])
- [[\_\_\_ReplayObservableLike\_buffer]](types.ReplayObservableLike.md#[___replayobservablelike_buffer])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``false``

#### Overrides

[MulticastObservableLike](types.MulticastObservableLike.md).[[___ObservableLike_isDeferred]](types.MulticastObservableLike.md#[___observablelike_isdeferred])

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

#### Overrides

[MulticastObservableLike](types.MulticastObservableLike.md).[[___ObservableLike_isEnumerable]](types.MulticastObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

#### Overrides

[MulticastObservableLike](types.MulticastObservableLike.md).[[___ObservableLike_isRunnable]](types.MulticastObservableLike.md#[___observablelike_isrunnable])

___

### [\_\_\_ReplayObservableLike\_buffer]

• `Readonly` **[\_\_\_ReplayObservableLike\_buffer]**: [`IndexedCollectionLike`](types.IndexedCollectionLike.md)<`T`\>
