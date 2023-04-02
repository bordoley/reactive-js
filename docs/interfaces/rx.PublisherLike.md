[Reactive-JS](../README.md) / [rx](../modules/rx.md) / PublisherLike

# Interface: PublisherLike<T\>

[rx](../modules/rx.md).PublisherLike

An `ObservableLike` that can be used to publish notifications to one or more observers.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`PublisherLike`**

## Table of contents

### Methods

- [[PublisherLike\_publish]](rx.PublisherLike.md#[publisherlike_publish])

## Methods

### [PublisherLike\_publish]

▸ **[PublisherLike_publish]**(`next`): `void`

Publishes a notification to any observers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | `T` | The notification to publish. |

#### Returns

`void`
