[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / DispatcherLike

# Interface: DispatcherLike\<T\>

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Extends

- [`QueueableLike`](../../utils/interfaces/QueueableLike.md)\<`T`\>.[`EventSourceLike`](../../events/interfaces/EventSourceLike.md)\<*typeof* [`DispatcherLikeEvent_ready`](../variables/DispatcherLikeEvent_ready.md) \| *typeof* [`DispatcherLikeEvent_capacityExceeded`](../variables/DispatcherLikeEvent_capacityExceeded.md) \| *typeof* [`DispatcherLikeEvent_completed`](../variables/DispatcherLikeEvent_completed.md)\>.[`DisposableLike`](../../utils/interfaces/DisposableLike.md)

## Extended by

- [`ObserverLike`](ObserverLike.md)
- [`StreamLike`](StreamLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[DispatcherLike\_isCompleted\]

> `readonly` **\[DispatcherLike\_isCompleted\]**: `boolean`

## Methods

### \[DispatcherLike\_complete\]()

> **\[DispatcherLike\_complete\]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
