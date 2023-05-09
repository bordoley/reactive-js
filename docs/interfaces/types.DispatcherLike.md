[Reactive-JS](../README.md) / [types](../modules/types.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[types](../modules/types.md).DispatcherLike

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueableLike`](types.QueueableLike.md)<`T`\>

- [`EventSourceLike`](types.EventSourceLike.md)<[`DispatcherLikeEventMap`](types.DispatcherLikeEventMap.md)[keyof [`DispatcherLikeEventMap`](types.DispatcherLikeEventMap.md)]\>

  ↳ **`DispatcherLike`**

  ↳↳ [`ObserverLike`](types.ObserverLike.md)

  ↳↳ [`StreamLike`](types.StreamLike.md)

## Table of contents

### Methods

- [[\_\_\_DispatcherLike\_complete]](types.DispatcherLike.md#[___dispatcherlike_complete])

## Methods

### [\_\_\_DispatcherLike\_complete]

▸ **[___DispatcherLike_complete]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
