[Reactive-JS](../README.md) / [rx](../modules/rx.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[rx](../modules/rx.md).DispatcherLike

A `QueueableLike` type that consumes enqueued events on a scheduler continuation.
Events may be enqueud from any execution context.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueableLike`](util.QueueableLike.md)<`T`\>

  ↳ **`DispatcherLike`**

  ↳↳ [`ObserverLike`](rx.ObserverLike.md)

  ↳↳ [`StreamLike`](streaming.StreamLike.md)

## Table of contents

### Properties

- [[DispatcherLike\_scheduler]](rx.DispatcherLike.md#[dispatcherlike_scheduler])

### Methods

- [[DispatcherLike\_complete]](rx.DispatcherLike.md#[dispatcherlike_complete])

## Properties

### [DispatcherLike\_scheduler]

• `Readonly` **[DispatcherLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)

The scheduler that the dispatcher schedules it's event consumer on.

## Methods

### [DispatcherLike\_complete]

▸ **[DispatcherLike_complete]**(): `void`

Communicates to the dispatcher that no more events will be enqueued
on the dispatcher.

#### Returns

`void`
