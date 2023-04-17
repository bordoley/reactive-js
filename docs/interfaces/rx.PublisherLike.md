[Reactive-JS](../README.md) / [rx](../modules/rx.md) / PublisherLike

# Interface: PublisherLike<T\>

[rx](../modules/rx.md).PublisherLike

An `EventListener` that can be used to publish notifications to one or more observers.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ErrorSafeEventListenerLike`](util.ErrorSafeEventListenerLike.md)<`T`\>

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`PublisherLike`**

## Table of contents

### Properties

- [[\_\_\_PublisherLike\_observerCount]](rx.PublisherLike.md#[___publisherlike_observercount])

## Properties

### [\_\_\_PublisherLike\_observerCount]

• `Readonly` **[\_\_\_PublisherLike\_observerCount]**: `number`

The number of observers currently observing the `Publisher`.
