[Reactive-JS](../README.md) / [core](../modules/core.md) / PublisherLike

# Interface: PublisherLike<T\>

[core](../modules/core.md).PublisherLike

An `EventListener` that can be used to publish notifications to one or more observers.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ErrorSafeEventListenerLike`](core.ErrorSafeEventListenerLike.md)<`T`\>

- [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\>

  ↳ **`PublisherLike`**

## Table of contents

### Properties

- [[\_\_\_PublisherLike\_observerCount]](core.PublisherLike.md#[___publisherlike_observercount])

## Properties

### [\_\_\_PublisherLike\_observerCount]

• `Readonly` **[\_\_\_PublisherLike\_observerCount]**: `number`

The number of observers currently observing the `Publisher`.
