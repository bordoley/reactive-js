[Reactive-JS](../README.md) / [core](../modules/core.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[core](../modules/core.md).DispatcherLike

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueableLike`](core.QueueableLike.md)<`T`\>

- [`EventSourceLike`](core.EventSourceLike.md)<[`DispatcherLikeEventMap`](core.DispatcherLikeEventMap.md)[keyof [`DispatcherLikeEventMap`](core.DispatcherLikeEventMap.md)]\>

  ↳ **`DispatcherLike`**

  ↳↳ [`ObserverLike`](core.ObserverLike.md)

  ↳↳ [`StreamLike`](core.StreamLike.md)

## Table of contents

### Methods

- [[\_\_\_DispatcherLike\_complete]](core.DispatcherLike.md#[___dispatcherlike_complete])

## Methods

### [\_\_\_DispatcherLike\_complete]

▸ **[___DispatcherLike_complete]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
