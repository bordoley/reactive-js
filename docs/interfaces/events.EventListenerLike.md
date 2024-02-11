[Reactive-JS](../README.md) / [events](../modules/events.md) / EventListenerLike

# Interface: EventListenerLike\<T\>

[events](../modules/events.md).EventListenerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`EventListenerLike`**

  ↳↳ [`ErrorSafeEventListenerLike`](events.ErrorSafeEventListenerLike.md)

## Table of contents

### Properties

- [[EventListenerLike\_isErrorSafe]](events.EventListenerLike.md#[eventlistenerlike_iserrorsafe])

### Methods

- [[EventListenerLike\_notify]](events.EventListenerLike.md#[eventlistenerlike_notify])

## Properties

### [EventListenerLike\_isErrorSafe]

• `Readonly` **[EventListenerLike\_isErrorSafe]**: `boolean`

## Methods

### [EventListenerLike\_notify]

▸ **[EventListenerLike_notify]**(`event`): `void`

Notifies the EventListener of the next notification produced by the source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

`void`
