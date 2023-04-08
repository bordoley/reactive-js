[Reactive-JS](../README.md) / [util](../modules/util.md) / EventSourceLike

# Interface: EventSourceLike<T\>

[util](../modules/util.md).EventSourceLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReplayableLike`](util.ReplayableLike.md)<`T`\>

  ↳ **`EventSourceLike`**

  ↳↳ [`EventPublisherLike`](util.EventPublisherLike.md)

## Table of contents

### Properties

- [[EventSourceLike\_listenerCount]](util.EventSourceLike.md#[eventsourcelike_listenercount])

### Methods

- [[EventSourceLike\_addListener]](util.EventSourceLike.md#[eventsourcelike_addlistener])

## Properties

### [EventSourceLike\_listenerCount]

• `Readonly` **[EventSourceLike\_listenerCount]**: `number`

## Methods

### [EventSourceLike\_addListener]

▸ **[EventSourceLike_addListener]**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventListenerLike`](util.EventListenerLike.md)<`T`\> |

#### Returns

`void`
