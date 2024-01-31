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

- [`EventSourceLike`](events.EventSourceLike.md)<typeof [`DispatcherLikeEvent_ready`](../modules/concurrent.md#dispatcherlikeevent_ready) \| typeof [`DispatcherLikeEvent_capacityExceeded`](../modules/concurrent.md#dispatcherlikeevent_capacityexceeded) \| typeof [`DispatcherLikeEvent_completed`](../modules/concurrent.md#dispatcherlikeevent_completed)\>

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`DispatcherLike`**

  ↳↳ [`ObserverLike`](concurrent.ObserverLike.md)

  ↳↳ [`StreamLike`](concurrent.StreamLike.md)

## Table of contents

### Properties

- [[DispatcherLike\_isCompleted]](concurrent.DispatcherLike.md#[dispatcherlike_iscompleted])

### Methods

- [[DispatcherLike\_complete]](concurrent.DispatcherLike.md#[dispatcherlike_complete])

## Properties

### [DispatcherLike\_isCompleted]

• `Readonly` **[DispatcherLike\_isCompleted]**: `boolean`

## Methods

### [DispatcherLike\_complete]

▸ **[DispatcherLike_complete]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
