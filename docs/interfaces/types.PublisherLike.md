[Reactive-JS](../README.md) / [types](../modules/types.md) / PublisherLike

# Interface: PublisherLike<T\>

[types](../modules/types.md).PublisherLike

An `EventListener` that can be used to publish notifications to one or more observers.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ErrorSafeEventListenerLike`](types.ErrorSafeEventListenerLike.md)<`T`\>

- [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

  ↳ **`PublisherLike`**

## Table of contents

### Properties

- [[\_\_\_PublisherLike\_observerCount]](types.PublisherLike.md#[___publisherlike_observercount])

## Properties

### [\_\_\_PublisherLike\_observerCount]

• `Readonly` **[\_\_\_PublisherLike\_observerCount]**: `number`

The number of observers currently observing the `Publisher`.
