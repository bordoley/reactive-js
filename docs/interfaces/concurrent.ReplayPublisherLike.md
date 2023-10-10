[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / ReplayPublisherLike

# Interface: ReplayPublisherLike<T\>

[concurrent](../modules/concurrent.md).ReplayPublisherLike

A stateful ObservableLike resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)<`T`\>

- [`ErrorSafeEventListenerLike`](events.ErrorSafeEventListenerLike.md)<`T`\>

  ↳ **`ReplayPublisherLike`**

## Table of contents

### Properties

- [[EventListenerLike\_isErrorSafe]](concurrent.ReplayPublisherLike.md#[eventlistenerlike_iserrorsafe])
- [[ReplayObservableLike\_buffer]](concurrent.ReplayPublisherLike.md#[replayobservablelike_buffer])
- [[ReplayPublisherLike\_observerCount]](concurrent.ReplayPublisherLike.md#[replaypublisherlike_observercount])

## Properties

### [EventListenerLike\_isErrorSafe]

• `Readonly` **[EventListenerLike\_isErrorSafe]**: ``true``

#### Inherited from

[ErrorSafeEventListenerLike](events.ErrorSafeEventListenerLike.md).[[EventListenerLike_isErrorSafe]](events.ErrorSafeEventListenerLike.md#[eventlistenerlike_iserrorsafe])

___

### [ReplayObservableLike\_buffer]

• `Readonly` **[ReplayObservableLike\_buffer]**: [`IndexedCollectionLike`](collections.IndexedCollectionLike.md)<`T`\>

#### Inherited from

[ReplayObservableLike](concurrent.ReplayObservableLike.md).[[ReplayObservableLike_buffer]](concurrent.ReplayObservableLike.md#[replayobservablelike_buffer])

___

### [ReplayPublisherLike\_observerCount]

• `Readonly` **[ReplayPublisherLike\_observerCount]**: `number`
