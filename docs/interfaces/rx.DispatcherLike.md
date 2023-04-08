[Reactive-JS](../README.md) / [rx](../modules/rx.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[rx](../modules/rx.md).DispatcherLike

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution context.

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

### Methods

- [[DispatcherLike\_complete]](rx.DispatcherLike.md#[dispatcherlike_complete])

## Methods

### [DispatcherLike\_complete]

▸ **[DispatcherLike_complete]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
