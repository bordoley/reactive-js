[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[concurrent](../modules/concurrent.md).DispatcherLike

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueableLike`](utils.QueueableLike.md)<`T`\>

- [`EventSourceLike`](events.EventSourceLike.md)<[`DispatcherLikeEventMap`](concurrent.DispatcherLikeEventMap.md)[keyof [`DispatcherLikeEventMap`](concurrent.DispatcherLikeEventMap.md)]\>

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`DispatcherLike`**

  ↳↳ [`ObserverLike`](concurrent.ObserverLike.md)

  ↳↳ [`StreamLike`](concurrent.StreamLike.md)

## Table of contents

### Methods

- [[DispatcherLike\_complete]](concurrent.DispatcherLike.md#[dispatcherlike_complete])

## Methods

### [DispatcherLike\_complete]

▸ **[DispatcherLike_complete]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
