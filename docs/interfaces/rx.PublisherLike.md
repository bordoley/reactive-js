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

### Properties

- [[ContainerLike\_type]](rx.PublisherLike.md#[containerlike_type])
- [[ObservableLike\_isEnumerable]](rx.PublisherLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.PublisherLike.md#[observablelike_isrunnable])

### Methods

- [[PublisherLike\_publish]](rx.PublisherLike.md#[publisherlike_publish])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`PublisherLike`](rx.PublisherLike.md)<`unknown`\>

#### Overrides

[MulticastObservableLike](rx.MulticastObservableLike.md).[[ContainerLike_type]](rx.MulticastObservableLike.md#[containerlike_type])

___

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Overrides

[MulticastObservableLike](rx.MulticastObservableLike.md).[[ObservableLike_isEnumerable]](rx.MulticastObservableLike.md#[observablelike_isenumerable])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[MulticastObservableLike](rx.MulticastObservableLike.md).[[ObservableLike_isRunnable]](rx.MulticastObservableLike.md#[observablelike_isrunnable])

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
