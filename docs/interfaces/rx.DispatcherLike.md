[Reactive-JS](../README.md) / [rx](../modules/rx.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[rx](../modules/rx.md).DispatcherLike

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueableLike`](utils.QueueableLike.md)<`T`\>

- [`EventSourceLike`](rx.EventSourceLike.md)<[`DispatcherLikeEventMap`](rx.DispatcherLikeEventMap.md)[keyof [`DispatcherLikeEventMap`](rx.DispatcherLikeEventMap.md)]\>

  ↳ **`DispatcherLike`**

  ↳↳ [`ObserverLike`](concurrent.ObserverLike.md)

  ↳↳ [`StreamLike`](concurrent.StreamLike.md)

## Table of contents

### Methods

- [[DispatcherLike\_complete]](rx.DispatcherLike.md#[dispatcherlike_complete])

## Methods

### [DispatcherLike\_complete]

▸ **[DispatcherLike_complete]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
